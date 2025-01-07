import logo from "../../../public/logo.png";
import habitar from "../../../public/Habitar.png";

function Header() {
  return (
    <div className="h-[691px] bg-[url('/bg.jpg')] bg-cover bg-center">
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center justify-center mt-8">
          <div className="flex items-center justify-center bg-[#FFC8B5] rounded-full size-20">
            <img src={logo} alt="logo do projeto" />
          </div>
          <div className="ml-4">
            <img src={habitar} alt="Habitar" />
            <span className="text-[#56C7E1] text-xs">
              A corretora de imóveis que conecta você ao seu novo lar
            </span>
          </div>
        </div>
        <div>
          <ul className="flex space-x-8 text-[#FF6F3C] underline text-2xl cursor-pointer">
            <li>Sobre nós</li>
            <li>Redes sociais</li>
            <li>Contato</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
