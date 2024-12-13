import { Lato } from "next/font/google";
import ActivityCard from "@/components/activity/ActivityCard";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const cardData = [
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 1",
    isi: "Sebuah project android untuk meningkatkan literasi di anak muda",
    tanggal: "20 Desember 2024"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 2",
    isi: "Sebuah project untuk mempelajari tentang teknologi terbaru di dunia IT",
    tanggal: "15 Januari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },
  {
    linkfoto: "/fotoryo.png",
    judul: "Project 3",
    isi: "Project penelitian tentang AI dan machine learning",
    tanggal: "1 Februari 2025"
  },

  // Add more items as needed
];

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative z-0 flex flex-col px-20 py-20 w-5/6 bg-opacity-70 h-full bg-black items-center">
        
        {/* Title: Recent Activities */}
        <h1 className={`${lato.className} text-4xl font-bold text-white text-center my-10`}>Recent Activities</h1>

        {/* Scrollable list of Activity Cards */}
        <div className="flex flex-wrap gap-5 text-center items-center overflow-auto max-h-[70vh]">
          {cardData.map((card, index) => (
            <ActivityCard
              key={index}
              linkfoto={card.linkfoto}
              judul={card.judul}
              isi={card.isi}
              tanggal={card.tanggal}
              // Apply animation delay for staggered effect
              style={{
                animation: `falling 0.5s ease-out forwards`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;