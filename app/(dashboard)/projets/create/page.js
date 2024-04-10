"use client";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import InputText from "@/app/components/InputText";
import Button from "@/app/components/Button";
import { create } from "@/app/services/projects";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (project) => {
    await create(project);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        href="projects"
        title="Adicionar Projecto"
      >
        <div className="grid grid-cols-3 gap-3">
          <InputText label="Nome" type="text" placeholder="nome do projecto" />
          <InputText
            label="Fundo"
            type="text"
            placeholder="Fundo inicial do projecto"
          />
          <InputText
            label="Local"
            type="text"
            placeholder="Local de implementacao"
          />
          <InputText
            label="Conta"
            type="number"
            placeholder="Numero de conta"
          />
          <InputText label="Moeda" type="text" placeholder="Tipo de moeda" />
          <InputText
            label="Codigo"
            type="text"
            placeholder="Codigo do Projecto"
          />
        </div>
        <div className="container justify-between mx-auto px-4 py-8 space-x-2">
          <Button className="bg-white text-gray-700 hover:bg-red-400" onClick={closeModal}>Cancelar</Button>
          <Button className="bg-green-700" onClick={handleSubmit}>Submeter</Button>
        </div>
      </Modal>
    </div>
  );
}
