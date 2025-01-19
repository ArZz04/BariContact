// BranchList.tsx
import React from "react";
import { Logo } from "../components/Logo";

const branches = [
  {
    id: 1,
    name: "La Cima",
    address:
      "Av. Juan Gil Preciado 1600-Local A6, La Cima, 45134 Zapopan, Jal.",
    numbers: { whatsapp: "3338008822", phones: ["3338346189", "3338340964"] },
    image: "/lacima.png",
  },
  {
    id: 2,
    name: "Parques de Tesistan",
    address:
      "Avenida San Mateo 1780-A, Parques de Tesistan, 45200, Zapopan, Jal",
    numbers: { whatsapp: "3326321348", phones: ["3320146310"] },
    image: "/parques.png",
  },
  {
    id: 3,
    name: "Valle Imperial",
    address:
      "Bv. Valle Imperial 260-local 14 y 15, Canteras residencial, 45200 Zapopan, Jal.",
    numbers: { whatsapp: "3314633124", phones: ["3314633124"] },
    image: "/valleImp.png",
  },
];

const BranchPage = () => {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto p-8">
      <div className="w-3/4 mx-auto">
        <Logo />
      </div>
      <div className="flex flex-col items-center text-white text-2xl">
        <div className="m-2">
          <p className="text-2xl text-center">Nuestras</p>
          <p
            className="font-bold text-4xl"
            style={{ transform: "translateY(-10px)" }}
          >
            Sucursales
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="w-64 h-48 bg-gray-300 rounded-xl"></div>
          <div className="w-64 h-48 bg-gray-300 rounded-xl"></div>
          <div className="w-64 h-48 bg-red-300 rounded-xl xl:col-span-2 xl:justify-center xl:mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
