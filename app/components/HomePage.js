import React from "react";
import Image from "next/image";

export default function home() {
  return (
    <div className="flex flex-auto">
      <div className="float float-left ml-80 font-serif">
        <p className="text-green-700">Desenvolvimento & sustentabilidade</p>
        <p className="text-3xl">
          <span className="font-bold">
          Faça a diferença em Cabo Delgado: Junte-se a nós para promover a{" "}
          </span>
          <span className="text-green-700">Sustentabilidade</span>
        </p>
        <p>No sector agrário e saúde</p>
        <p>
          <a
            href="#"
            className="justify-auto max-w-24 border rounded bg-green-800 p-1 text-white"
          >
            Doar
          </a>
        </p>
      </div>
      <div className=" float float-right block rounded-full mr-80">
        <Image src="/images/chiure2.jpeg" width={320} height={320} />
      </div>
    </div>
  );
}
