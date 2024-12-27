import logo from "./../assets/images/logo.png";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="fixed w-full h-[40px] flex justify-between  items-center container-max py-[50px]">
      <nav className="flex flex-row lg:gap-[96px] max-lg:gap-[46px] items-center">
        <a href="/">
          <img src={logo} width={184} height={40} alt="logo" />
        </a>

        <ul className="max-md:hidden flex flex-row gap-[36px] ">
          {navLinks.map((navlink) => (
            <li key={navlink.label}>
              <a
                className="text-[16px] text-textSecondaryColor hover:text-primaryColor transition-colors"
                href={navlink.href}
              >
                {navlink.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <button className="px-[53px] py-[10.5px] text-[16px] text-textSecondaryColor hover:text-primaryColor transition-colors">
          sign in
        </button>
        <button className="px-[53px] py-[10.5px] max-lg:hidden border-2 border-[#465B95] rounded-full text-[16px] text-textSecondaryColor hover:text-primaryColor hover:border-primaryColor transition-colors">
          sign up
        </button>
      </div>
    </header>
  );
};

export default Nav;
