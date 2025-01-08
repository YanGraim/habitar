import imgTeste from "../../../public/teste.png";

function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto -mt-20">
      <div className="rounded-lg shadow-2xl p-8  bg-[#FFFFFF]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-[#FF6F3C] font-semibold">
            Busque seu novo lar
          </h2>
          <ul className="flex space-x-4">
            <li className="hover:underline hover:text-[#FF6F3C] cursor-pointer">
              Comprar
            </li>
            <li className="hover:underline hover:text-[#FF6F3C] cursor-pointer">
              Alugar
            </li>
          </ul>
        </div>
        <form className="grid gap-8 grid-cols-3 grid-rows-3 mt-12">
          <input
            type="text"
            placeholder="Tipo"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
          <input
            type="text"
            placeholder="Localização"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
          <input
            type="text"
            placeholder="Faixa de preço"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
          <input
            type="text"
            placeholder="Quartos"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
          <input
            type="text"
            placeholder="Banheiros"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
          <input
            type="text"
            placeholder="Garagem"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
          <input
            type="text"
            placeholder="Área útil"
            className="border-2 border-[#FF6F3C] rounded-lg px-2 py-3 max-w-96 placeholder:text-[#000000]"
          />
        </form>
      </div>
      <div className="my-32">
        <div className="rounded-lg shadow-2xl bg-[#FFFFFF] w-[420px]">
          <img
            src={imgTeste}
            alt="teste"
            className="rounded-t-lg object-contain h-[280] w-full"
          />
          <div className="mt-6 ml-6">
            <span className="text-[#FF6F3C] text-base font-light">
              Apartamento
            </span>
            <h2 className="mt-2 text-2xl font-medium">
              Resid. Etrela do Norte
            </h2>
            <div className="flex flex-col mt-2 text-base font-light">
              <span>Avend. Aleatoria bla bla, 221</span>
              <span>Centro, Belém</span>
            </div>
          </div>
          <div className="flex items-center justify-center py-6 space-x-6">
            <span>44m</span>
            <span>3</span>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
