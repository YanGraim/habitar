import imgTeste from "../../../public/teste.png";
import Forms from "../../components/Forms";
import Header from "../../components/Header/header";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/bg.jpg')] min-h-screen lg:min-h-[70vh] bg-cover bg-center pb-16">
        <Header />
      </div>

      <div className="w-full max-w-7xl mx-auto bg-[#FFFFFF] rounded-lg shadow-2xl p-8 -mt-24">
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
        <Forms />
      </div>
      <div className="w-full max-w-7xl mx-auto my-32">
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
