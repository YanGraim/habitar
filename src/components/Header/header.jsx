import logo from "../../../public/logoHeader.svg";

function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between pt-8 md:p-4">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo do projeto" />
      </div>
      <div>
        <ul className="hidden lg:flex space-x-8 text-[#FF6F3C] underline text-2xl cursor-pointer">
          <li>Sobre nós</li>
          <li>Redes sociais</li>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
