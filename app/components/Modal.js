import React from "react";
import Link from "next/link";

export default function Modal({ isOpen, title, closeModal, href, children }) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex space-x-96">
            <p className="justify-start font-serif font-bold ml-4">{title}</p>
            <div className=" justify-end mr-0">
              <button
                className=" text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"
                  />
                </svg>
                <Link href={href} />
              </button>
            </div>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
