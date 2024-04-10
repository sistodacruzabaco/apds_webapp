"use cliente";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function () {
  const [isClicked] = useState(false);
  return (
    <div className="container w-full flex py-6 justify-between items-center">
      <div className="h-auto ml-24">
        <Image src="/images/logo.png" width={150} height={150} />
      </div>
      <nav className="grid grid-cols-2">
        <ul
          className="list-none font-medium sm:flex hidden justify-end mr-24
          p-4 md:p-0 mt-4 border-0 bg-gray-50 md:flex-row md:space-x-8 
          rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          {items.map((item, i) => {
            return (
              <li className="cursor-pointer hover:text-green-800 active:text-green-800 active:underline-offset-1">
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4 mx-14">
          <p className="flex items-center">
            {/* <span className="flex mr-1 bg-zinc-900 text-green-800 w-8 h-8 items-center justify-between">
          </span> */}
            <Link
              href="/users"
              className="hover:text-green-800 text-white flex bg-green-800 rounded-full w-14 h-14 items-center p-1 transition-all hover:translate-y-[2px]"
            >
              Admin
            </Link>
          </p>
          {/* <button className="flex items-center  hover:text-green-800 transition-all hover:translate-y-[2px] gap-1">
          <FontAwesomeIcon icon={faRightFromBracket} className="w-5"/>
          <span>Sair</span>
        </button> */}
        </div>
      </nav>
    </div>
  );
}

const items = [
  {
    name: "Inicio",
    icon: "",
    href: "#",
  },
  {
    name: "Actividades",
    icon: "",
    href: "activitys",
  },
  {
    name: "Projectos",
    icon: "",
    href: "projets",
  },
  {
    name: "Parceiros",
    icon: "",
    href: "partners",
  },
  {
    name: "Sobre",
    icon: "",
    href: "about",
  },
];
