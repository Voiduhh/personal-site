"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "experience",
    path: "/experience",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-12 mb-14 text-center text-xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">Jacob</h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-right items-end gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathName &&
                    "text-accent  border-b-2 border-accent"
                  } capitalize text-xl font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
