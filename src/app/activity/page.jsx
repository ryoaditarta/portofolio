'use client'

import { useState, useEffect } from "react";
import { Lato } from "next/font/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import ActivityCard from "@/components/activity/ActivityCard";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Page = () => {
  const jeniscard = ["Project", "Activity", "Organization"];
  const [id, setId] = useState(0);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  const handleBackClick = () => {
    setId((prevId) => (prevId - 1 + jeniscard.length) % jeniscard.length);
  };

  const handleNextClick = () => {
    setId((prevId) => (prevId + 1) % jeniscard.length);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative z-0 flex flex-col px-20 py-20 w-5/6 bg-opacity-70 h-full bg-black items-center">
        {/* Title: Dynamic Title based on id */}
        <div className="flex flex-row gap-5 items-center">
          <button
            onClick={handleBackClick}
            className="text-white p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
          >
            <FaArrowLeft size={24} /> {/* Back Icon */}
          </button>
          <h1
            className={`${lato.className} text-4xl font-bold text-white text-center my-10`}
          >
            {jeniscard[id]}
          </h1>
          <button
            onClick={handleNextClick}
            className="text-white p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
          >
            <FaArrowRight size={24} /> {/* Next Icon */}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-10 text-center items-center overflow-auto max-h-[50vh] sm:max-h-[60vh]">
        {projectData
            .filter((project) => project.jenis === jeniscard[id].toLowerCase())
            .map((project, index) => (
            <ActivityCard
                key={`${id}-${index}`} // Include 'id' in the key to force re-render
                linkfoto={project.linkfoto}
                judul={project.judul}
                isi={project.isi}
                tanggal={project.tanggal}
                style={{
                animation: `falling 1s ease-out forwards`,
                }}
            />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Page;
