import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative z-0 flex flex-col px-20 py-20 w-5/6 bg-opacity-70 h-full bg-black items-center">
      <h1
            className={`${lato.className} text-4xl font-bold text-white text-center my-10`}
          >Experiments</h1>
          <div className="flex flex-wrap gap-10 w-full bg-black p-10">
            <div className="rounded-xl size-20 bg-white">
                
            </div>
            <div className="rounded-xl size-20 bg-white">

            </div>
            <div className="rounded-xl size-20 bg-white">

            </div>
            <div className="rounded-xl size-20 bg-white">

            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Page;