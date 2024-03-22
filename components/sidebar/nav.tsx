import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
interface NavItem {
  name: string;
  href?: string;
  icon?: React.ElementType;
  current: boolean;
  dropdownOpen?: boolean;
  asChild?: boolean;
  links?: NavItem[];
}
interface NavListProps {
  navigation: NavItem[];
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
interface NavHeaderProps {
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NavHeader: React.FC<NavHeaderProps> = ({ setSidebarOpen }) => {
  return (
    <div className="h-16 w-full ">
      <div className="flex h-16 w-full shrink-0 items-center">Logo</div>
      <button
        type="button"
        className=" p-2.5 absolute top-0 right-0"
        onClick={() => setSidebarOpen && setSidebarOpen(false)}
        hidden={!setSidebarOpen}
      >
        <span className="sr-only">Close sidebar</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className=" left-full  top-0 flex justify-center pt-5"></div>
    </div>
  );
};

export const NavList: React.FC<NavListProps> = ({
  navigation,
  setSidebarOpen,
}) => {
  return (
    <nav className="flex flex-1 flex-col py-2">
      <div role="list" className="h-full w-full">
        <ul role="list" className=" space-y-1">
          {navigation.map((item) =>
            item.links ? (
              <NavLinkGroup key={item.name} {...item} />
            ) : (
              <NavLink key={item.name} {...item} />
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export const NavLinkGroup: React.FC<NavItem> = ({
  name,
  icon: Icon,
  current,
  links,
}) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="w-full">
            <NavLink
              dropdownOpen={open}
              name={name}
              icon={Icon}
              current={current}
              links={links}
            />
          </Menu.Button>
          {open && (
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <ul role="list" className="ml-2 ">
                <Menu.Items static>
                  {links?.map((link, k) => (
                    <Menu.Item key={k + link.name}>
                      {({ active }) => <NavLink {...link} asChild={true} />}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </ul>
            </Transition>
          )}
        </>
      )}
    </Menu>
  );
};
export const NavLink: React.FC<NavItem> = ({
  name,
  href,
  icon: Icon,
  current,
  links,
  dropdownOpen,
  asChild,
}) => (
  <li className="w-full">
    <a
      href={href}
      className={`flex items-center w-full p-2 rounded-lg group ${
        current
          ? !asChild
            ? "bg-[var(--link-bg-active)]"
            : "bg-[var(--link-child-bg-active)]"
          : !asChild
          ? "bg-[var(--link-bg)] hover:bg-[var(--link-bg-hover)]"
          : "bg-[var(--link-child-bg)] hover:bg-[var(--link-child-bg-hover)]"
      }`}
      style={{
        color: current
          ? !asChild
            ? "var(--link-color-active)"
            : "var(--link-child-color-active)"
          : !asChild
          ? " var(--link-color)"
          : "var(--link-child-color)",
        fontSize: !asChild
          ? "var(--link-font-size)"
          : "var(--link-child-font-size)",
        fontWeight: !asChild
          ? "var(--link-font-weight)"
          : "var(--link-child-font-weight)",
      }}
    >
      {Icon && (
        <Icon
          className={`shrink-0 ${
            current
              ? links
                ? "bg-[var(--link-bg-active)]"
                : "bg-[var(--link-child-bg-active)]"
              : links
              ? "bg-[var(--link-child-bg)] hover:bg-[var(--link-child-bg-hover)]"
              : "bg-[var(--link-bg)] hover:bg-[var(--link-bg-hover)]"
          }`}
          aria-hidden="true"
          style={{
            width: "var(--link-icon-width)",
            height: "var(--link-icon-height)",
            color: "var(--link-icon-color)",
            backgroundColor: "var(--link-icon-bg)",
            borderRadius: "var(--link-icon-radius)",
            padding: "var(--link-icon-padding)",
          }}
        />
      )}
      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
        {name}
      </span>

      {links ? (
        dropdownOpen ? (
          <ChevronDownIcon className="h-3 w-3" />
        ) : (
          <ChevronRightIcon className="h-3 w-3" />
        )
      ) : (
        ""
      )}
    </a>
  </li>
);
