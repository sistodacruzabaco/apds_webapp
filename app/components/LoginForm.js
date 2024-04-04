import React from "react";

export default function LoginForm() {
  return (
    <div className="h-[100vh] pt-[10vh]">
    <form className="mt-8 w-full">
      <label htmlFor="email" className="block">
        E-mail
      </label>
      <input type="email" name="email" id="email" className="w-full p-2" />
      <label htmlFor="password" className="block mt-4">
        Senha
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="w-full p-2"
      />
    </form>
    </div>
  );
}
