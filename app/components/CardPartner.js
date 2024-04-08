import React from "react";
import Image from "next/image";

export default function CardPartner() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/2 h-1/2">
      <Image className=" p-8 rounded-md w-full object-cover object-center" src="/images/mentor.png" width={150} height={150} />
      <div className="p-4">
        <p className="text-gray-900 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque
          elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
        </p>
      </div>
    </div>
  );
}
