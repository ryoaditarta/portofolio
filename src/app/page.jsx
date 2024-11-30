import ParticlesComponent from "./particles";

const Page = () => {
    return (
        <div className="h-screen w-screen relative">
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="p-4 text-center">
                    <h1 className="text-3xl text-white">Hi! My name is Ryo</h1>
                    <h4 className="text-xl text-gray-200">"From zero to superhero."</h4>
                </div>
            </div>
        </div>
    );
}

export default Page;
