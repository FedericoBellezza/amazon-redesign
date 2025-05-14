import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div>
      <Categories />
      <div className="container mx-auto bg-lime-300 h-screen text-slate-800">
        <div className="flex justify-center items-center py-20 ">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-extrabold ">
              Miglior sorpresa <br />
              non c'è
            </h2>
            <img
              className="w-40"
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt=""
            />
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
