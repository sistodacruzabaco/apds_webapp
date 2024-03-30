import React from "react";
import Image from "next/image";

export default function () {
  return (
    <div className="w-full flex py-6 justify-between items-center">
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
                {item.name}
              </li>
            );
          })}
        </ul>
        <a href="#" className="md:flex justify-center mx-44 border rounded bg-green-800 p-1 text-white">
          Entrar
        </a>
      </nav>
    </div>
  );
}

const items = [
  {
    name: "Inicio",
    icon: "",
  },
  {
    name: "Actividades",
    icon: "",
  },
  {
    name: "Projectos",
    icon: "",
  },
  {
    name: "Parceiros",
    icon: "",
  },
  {
    name: "Sobre",
    icon: "",
  },
];
