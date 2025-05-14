export default function Categories() {
  return (
    <div>
      <div className="bg-slate-800 flex items-center justify-center  py-5 text-white">
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-news text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Novità</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25 text-blue-400">
          <i className="icon-offers text-xl  border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Offerte</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-bestseller text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Bestseller</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-food text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Fresh</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-home text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Casa</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-book text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Libri</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-music text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Musica</span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col w-25">
          <i className="icon-headphones text-xl border rounded-full p-4 cursor-pointer hover:rotate-20 hover:bg-slate-600 transition"></i>
          <span className="text-sm">Clienti</span>
        </div>
      </div>
    </div>
  );
}
