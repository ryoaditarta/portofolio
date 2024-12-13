import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ['Latin'],
    weight: ['400', '700'],
});

const ActivityCard = ({ judul, linkfoto, isi, tanggal, style }) => {
    return (
        <div
            className={`flex flex-col gap-5 text-white bg-black p-10 rounded-2xl w-[300px] h-[450px] items-center fade-in`} 
            style={style} // Apply the style prop here, this is for custom animations or inline styles
        >
            <img src={linkfoto} className="h-[200px] w-[200px] rounded-2xl" alt="linkfoto" />
            <div className="flex flex-col gap-2 flex-grow justify-between">
                <h1 className={`${lato.className} text-3xl font-bold text-start text-ellipsis`}>{judul}</h1>
                {/* Limit the width of the content and apply wrapping */}
                <p className={`${lato.className} text-base text-start text-ellipsis`}>{isi}</p>
                {/* The date will be pushed to the bottom */}
                <p className={`${lato.className} text-sm text-gray-400 text-end mt-2`}>{tanggal}</p>
            </div>
        </div>
    );
};

export default ActivityCard;
