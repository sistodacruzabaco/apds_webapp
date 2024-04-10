import React from "react";

export default function PageHeader({ title, children: description }) {
  return (
    <header className="flex justify-between gap-2">
      <div className=" float-start mx-14">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      
    </header>
  );
}
