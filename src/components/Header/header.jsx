import logo from "../../../public/logoHeader.svg";

function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between pt-8 md:p-4">
      <div className="w-full flex items-center justify-center lg:justify-start">
        <img src={logo} alt="logo do projeto" />
      </div>
      <div className="w-full hidden lg:block">
        <ul className="flex justify-end space-x-8 text-[#FF6F3C] underline text-2xl cursor-pointer">
          <li>Sobre nós</li>
          <li>Redes sociais</li>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
