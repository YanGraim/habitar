import logo from "../../../public/logoTeste.svg";
import cognati from "../../../public/cognati.png";

function Footer() {
  return (
    <footer className="bg-[#FF6F3C]">
      <div className="w-full max-w-7xl mx-auto pt-16 flex justify-between">
        <div>
          <img src={logo} alt="logo habitar" />

          <h3 className="mt-10 text-[#56C7E1] font-semibold text-2xl">
            Habitar Corretora Ltda.
          </h3>
          <div className="flex flex-col text-[#FFFFFF]">
            <span>Av. teste algum, 9191</span>
            <span>Bairro, Cidade-UF</span>
            <span>
              (ddd) xxxxx-xxxx <strong>email@teste.com.br</strong>
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-[#56C7E1] text-2xl font-bold">Mapa do site</h3>
          <ul className="text-[#FFFFFF] underline mt-4">
            <li className="mb-2">Sobre nós</li>
            <li className="mb-2">Politica de privacidade</li>
            <li className="mb-2">Contato</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#56C7E1] text-2xl font-bold">Redes sociais</h3>
          <ul className="text-[#FFFFFF] underline mt-4">
            <li className="mb-2">Instagram</li>
            <li className="mb-2">Facebook</li>
            <li className="mb-2">Linkedin</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24">
        <h3 className="text-[#FFFFFF] mb-4">Desenvolvido por</h3>
        <img src={cognati} alt="" className="mb-16" />
      </div>
    </footer>
  );
}

export default Footer;
