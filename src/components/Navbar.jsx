export default function Navbar() {
  return (
    <div className="flex gap-20 justify-between items-center bg-slate-900 px-20 py-4 text-white Montserrat">
      <div className="w-1/4">
        <img
          className="h-9 cursor-pointer"
          src="https://pngimg.com/d/amazon_PNG11.png"
          alt=""
        />
      </div>
      <div className="w-1/4 bg-white rounded-3xl justify-center items-center px-3 flex">
        <img
          className="h-6 "
          src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
          alt=""
        />
        <input
          type="text"
          className=" text-slate-950 focus:outline-none  placeholder:text-slate-400 rounded-full px-4 py-2 grow"
          placeholder="Cosa cerchi?"
        />
      </div>
      <div className="w-1/4 flex items-center gap-6 justify-end">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-xs text-gray-400">Invia a Federico</h3>
            <h4 className="text-sm font-bold">Torino 10070</h4>
          </div>
          <div className="flex items-center justify-between gap-1">
            <img
              className="h-11 cursor-pointer aspect-square object-cover rounded-full "
              src="https://portfolio-federicobellezzas-projects.vercel.app/_next/image?url=%2Fprofilephoto.jpg&w=640&q=75"
              alt=""
            />
            <span className="text-xl">&#129171;</span>
          </div>
        </div>
        <div className="relative">
          <span className="text-sm absolute bg-orange-400 rounded-full w-5 h-5 flex items-center justify-center right-0 top-1">
            0
          </span>
          <img
            className="h-12 cursor-pointer"
            src="https://images.icon-icons.com/2785/PNG/512/shopping_cart_icon_177373.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
