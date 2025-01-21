// import imgTeste from "../../../public/teste.png";
import api from "../../services/api";
import { useState, useEffect } from "react";

function Card() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      const response = await api.get("imovel");

      setInfo(response.data);
    }

    loadInfos();
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto my-32 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {info.map((info) => {
        return (
          <div
            className="rounded-lg shadow-2xl bg-[#FFFFFF] max-w-[420px]"
            key={info.id}
          >
            <img
              src={info.imagem}
              alt="teste"
              className="rounded-t-lg object-contain h-[280] w-full"
            />
            <div className="mt-6 ml-6">
              <span className="text-[#FF6F3C] text-base font-light">
                {info.tipo}
              </span>
              <h2 className="mt-2 text-2xl font-medium">{info.titulo}</h2>
              <div className="flex flex-col mt-2 text-base font-light">
                <span>{info.endereco}</span>
              </div>
            </div>
            <div className="flex items-center justify-center py-6 space-x-6">
              <span>{info.area}</span>
              <span>{info.quartos}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
