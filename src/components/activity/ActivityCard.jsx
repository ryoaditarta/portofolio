import Image from "next/image"; // Import the Image component from next/image
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const ActivityCard = ({ judul, linkfoto, isi, tanggal, style }) => {
    const escapeText = (text) => {
        // Escape any unescaped characters
        return text.replace(/'/g, "&apos;"); // Escaping the apostrophe
    };

    return (
        <div
            className={`flex flex-col gap-5 text-white bg-black p-10 rounded-2xl w-[300px] h-[450px] items-center fade-in`} 
            style={style} // Apply the style prop here, for custom animations or inline styles
        >
            <Image 
                src={escapeText(linkfoto)} 
                alt="linkfoto" 
                className="h-[200px] w-[200px] rounded-2xl" 
                width={200} 
                height={200} 
            />
            <div className="flex flex-col gap-2 flex-grow justify-between">
                <h1 className={`${lato.className} text-3xl font-bold text-start text-ellipsis`}>
                    {escapeText(judul)} {/* Escape text content */}
                </h1>
                <p className={`${lato.className} text-base text-start text-ellipsis`}>
                    {escapeText(isi)} {/* Escape text content */}
                </p>
                <p className={`${lato.className} text-sm text-gray-400 text-end mt-2`}>
                    {escapeText(tanggal)} {/* Escape text content */}
                </p>
            </div>
        </div>
    );
};

export default ActivityCard;
