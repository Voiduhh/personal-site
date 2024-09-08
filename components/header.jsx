import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobileNav";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Voiduhh" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jacobpikul/" },
];

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          {socials.map((social, index) => {
            return (
              <a target="_blank" key={index} href={social.path}>
                <Button size="icon">{social.icon}</Button>
              </a>
            );
          })}
        </div>
        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
