"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Card from "../components/Card";
import { fetchAll } from "../services/feeds";
import CardPartner from "../components/CardPartner";

export default function Home() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeedsData = async () => {
      const feedsData = await fetchAll();
      setFeeds(feedssData);
      setIsLoading(false)
    };

    fetchFeedsData();
  }, []);

  return (
    <div className="justify-between space-y-32 max-w-max">
      <section className="flex flex-auto">
        <div className="float float-left ml-80 font-serif">
          <p className="text-green-700">Desenvolvimento & sustentabilidade</p>
          <p className="text-3xl">
            <span className="font-bold">
              Faça a diferença em Cabo Delgado: Junte-se a nós para promover a{" "}
            </span>
            <span className="text-green-700">Sustentabilidade</span>
          </p>
          <p>No sector agrário e na saúde</p>
          <p className="flex flex-auto">
            <a
              href="#"
              className="justify-auto max-w-24 border rounded bg-green-800 py-4 px-8 mt-5 text-white"
            >
              Doar
            </a>
          </p>
        </div>
        <div className=" float rounded-full mr-80 w-3/4">
          <Image
            className="max-w-full max-h-full"
            src="/images/chiure2.jpeg"
            width={320}
            height={320}
            alt="activity"
          />
        </div>
      </section>
      <section className="flex flex-auto space-x-20">
        <div className="font-bold py-32 text-3xl ml-96 float float-left font-serif items-center">
          <p>
            Actividades na
            <span className="text-green-700"> APDS</span>
          </p>
        </div>
        <div className="w-3/4 h-3/4">
          <Card />
        </div>
      </section>
      {/* <section className="flex flex-auto space-x-20">
        <div className=" ml-80 w-3/4 h-3/4">
          <Card />
        </div>
        <div className="font-bold py-32 text-3xl font-serif items-center">
          <p>
            Projectos na 
            <span className="text-green-700"> APDS</span>
          </p>
        </div>
      </section> */}
      {/* <section className="container mx-auto ml-80 w-3/4 h-3/4 space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardPartner/>
          <CardPartner/>
          <CardPartner/>
          <CardPartner/>
        </div>
      </section> */}
    </div>
  );
}
