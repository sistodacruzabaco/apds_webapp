"use client"
import React from "react";
import { fetchAll, create } from "./../../services/projects"
import { useEffect, useState } from "react";
import TableRow from "@/app/components/TableRow";
import PageHeader from "@/app/components/PageHeader";
export default function page() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchProjectsData = async () => {
      const projectsData = await fetchAll();
      setProjects(projectsData);
      setIsLoading(false)
    };

    fetchProjectsData();
  }, []);
  return (
    <>
    <PageHeader title="Lista de Projectos">A lista de projecto da Associação</PageHeader>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light mx-14">
              <thead className="border-b bg-green-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    #
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Nome
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Local
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Valor disponivel
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Moeda
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Estado do projecto
                  </th>
                  <th scope="col" className=" px-6 py-4">
                  Acção
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, i)=>{
                  return <TableRow project={project} i={i+1}/>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
