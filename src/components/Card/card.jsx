import imgTeste from "../../../public/teste.png";

function Card() {
  return (
    <div className="w-full max-w-7xl mx-auto my-32 px-4">
      <div className="rounded-lg shadow-2xl bg-[#FFFFFF] max-w-[420px]">
        <img
          src={imgTeste}
          alt="teste"
          className="rounded-t-lg object-contain h-[280] w-full"
        />
        <div className="mt-6 ml-6">
          <span className="text-[#FF6F3C] text-base font-light">
            Apartamento
          </span>
          <h2 className="mt-2 text-2xl font-medium">Resid. Etrela do Norte</h2>
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
  );
}

export default Card;
