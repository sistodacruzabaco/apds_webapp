import React from "react";

export default function PageHeader({ title, children: description }) {
  return (
    <header className="flex justify-between gap-2">
      <div className=" float-start mx-14">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-center">
        {/* <p className="flex">Pesquisar</p> */}
        <button className="bg-green-800 text-white justify-center mx-6 py-1 px-2" onClick={"projets/create"}>Adicionar utilizador</button>
      </div>
    </header>
  );
}
