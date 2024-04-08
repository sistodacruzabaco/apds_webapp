import React from "react";
import Image from "next/image";

export default function Card() {
  const date = new Date();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/2 h-full">
      <Image className=" p-4 rounded-md w-full object-cover object-center" src="/images/chiure4.jpeg" width={320} height={320} />
      <div className="p-4">
        <h2 className="text-xl text-green-500 mb-2"><span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span></h2>
        <p className="text-gray-900 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque
          elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
        </p>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-white text-green-500 underline">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}
