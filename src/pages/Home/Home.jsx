import Forms from "../../components/Forms";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/bg.jpg')] min-h-screen lg:min-h-[70vh] bg-cover bg-center pb-16">
        <Header />
      </div>

      <div className="w-full max-w-7xl bg-[#FFFFFF] rounded-lg shadow-2xl p-8 -mt-24 md:mx-auto">
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-3xl text-[#FF6F3C] font-semibold">
            Busque seu novo lar
          </h2>
          <ul className="flex space-x-4 p-4">
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
      <Card />
    </div>
  );
}

export default Home;
