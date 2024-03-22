interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
}
interface NavListProps {
  navigation: NavItem[];
}
export const NavHeader: React.FC<{}> = () => {
  return (
    <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
    
  );
};

export const NavList: React.FC<NavListProps> = ({ navigation }) => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export const NavLink: React.FC<NavItem> = ({
  name,
  href,
  icon: Icon,
  current,
}) => (
  <a
    href={href}
    className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
      current
        ? "bg-gray-50 text-indigo-600"
        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    }`}
  >
    <Icon
      className={`h-6 w-6 shrink-0 ${
        current
          ? "text-indigo-600"
          : "text-gray-400 group-hover:text-indigo-600"
      }`}
      aria-hidden="true"
    />
    {name}
  </a>
);
