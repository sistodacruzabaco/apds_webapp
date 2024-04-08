import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TableRow({ project, i }) {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap  px-6 py-4">{i}</td>
      <td className="whitespace-nowrap  px-6 py-4">{project.project_name}</td>
      <td className="whitespace-nowrap  px-6 py-4">
        {project.local_implementation}
      </td>
      <td className="whitespace-nowrap  px-6 py-4">
        {project.balance_available}
      </td>
      <td className="whitespace-nowrap  px-6 py-4">{project.type_currency}</td>
      <td className="whitespace-nowrap  px-6 py-4">{project.project_status}</td>
      <td className="whitespace-nowrap  px-6 py-4">
      <FontAwesomeIcon icon={faEye} className="w-5 text-gray-700"/>
      <FontAwesomeIcon icon={faEdit} className="w-5 text-green-500"/>
      <FontAwesomeIcon icon={faTrash} className="w-5 text-red-500"/>
      </td>
    </tr>
  );
}
