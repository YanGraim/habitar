function Forms() {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
}

export default Forms;
