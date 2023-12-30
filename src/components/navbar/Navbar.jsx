import React, { useState } from "react";

//images
import Logo from "../../images/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "SERVICES", link: "services", offset: -30 },
    { name: "ABOUT US", link: "aboutus", offset: -30 },
    { name: "CONTACT US", link: "contactus", offset: -30 },
    { name: "CAREERS", link: "careers", offset: -30 },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full  z-[999] bg-primary md:p-2 p-1`}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <img src={Logo} alt="AT DIGITAL" />
        </div>
        <div className={` text-white md:block hidden px-7 py-2 font-medium `}>
          <ul className="flex items-center gap-1 py-2 text-sm">
            {menuLinks?.map((menu, i) => (
              <li key={i} className={`px-3`}>
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-textColor" : "text-white"
          } text-5xl md:hidden cursor-pointer `}
        >
          <ion-icon name="menu"></ion-icon>
        </div>

        <div
          className={`md:hidden text-textColor absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          } z-[998]`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
