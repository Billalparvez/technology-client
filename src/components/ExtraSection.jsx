
import { AiOutlineCheck } from 'react-icons/ai';
import Marquee from "react-fast-marquee";
const ExtraSection = () => {
    return (
        <div className="max-w-7xl mx-auto md:my-32 ">
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-20 items-center">
                <div className="flex">
                    <img className="rounded-lg w-full " src="https://i.postimg.cc/bN67Q1Y5/6.jpg" alt="" />
                    {/* <img className=" w-64 h-64 absolute left-80" src="https://i.postimg.cc/qBy3Jmtx/istockphoto-1464277904-1024x1024.jpg" alt="" /> */}
                </div>
                <div >
                    <h1 className=" text-xl md:text-2xl lg:text-5xl mb-3">WHAT IS ROBOTIC PROCESS AUTOMATION WE ARE LEADER IN MARKET? </h1>
                    <p className="text-2xl">as opposed to using ,
                        making it look like readable English.
                        sometimes by accident, sometimes on purpose.</p>

                    <div className="grid grid-cols-1 text-lg font-bold md:grid-cols-2 lg:gap-20  md:my-10">
                        <div className="md:space-y-3">
                            <p className='flex items-center '><span className='bg-sky-400 p-1 text-white font-bold mr-2 text-lg rounded-full'><AiOutlineCheck></AiOutlineCheck></span> Customers Flexibility</p>
                            <p className='flex items-center '><span className='bg-sky-400 p-1 text-white font-bold mr-2 text-lg rounded-full'><AiOutlineCheck></AiOutlineCheck></span> Diligent Robotics</p>
                            <p className='flex items-center '><span className='bg-sky-400 p-1 text-white font-bold mr-2 text-lg rounded-full'><AiOutlineCheck></AiOutlineCheck></span> Piaggio Fast Forward</p>
                        </div>
                        <div className="space-y-3">
                            <p className='flex items-center '><span className='bg-sky-400 p-1 text-white font-bold mr-2 text-lg rounded-full'><AiOutlineCheck></AiOutlineCheck></span>commity</p>
                            <p className='flex items-center '><span className='bg-sky-400 p-1 text-white font-bold mr-2 text-lg rounded-full'><AiOutlineCheck></AiOutlineCheck></span> Resources</p>
                            <p className='flex items-center '><span className='bg-sky-400 p-1 text-white font-bold mr-2 text-lg rounded-full'><AiOutlineCheck></AiOutlineCheck></span> Platform</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <p className='font-bold text-info mb-3'>Services</p>
                <div className="flex justify-between items-center">
                    <h1 className='text-3xl'>EXPLORE THE MOST POPULAR SERVICES</h1>
                    <button className='btn px-9 bg-sky-500 text-white font-bold hover:bg-sky-700'>All Service</button>
                </div>
                <Marquee pauseOnHover>
                    <div className='flex gap-10  mt-10'>
                        <div className="card w-96 md:h-[500px]  bg-base-100 shadow-xl">
                            <figure><img className='' src="https://i.postimg.cc/C1MNj4JV/3-4-1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-2 border-info">
                                    <span className='ml-4'> Best in Class Support!</span>
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className=' '>If a dog chews shoes whose shoes  a dog chews shoes whose shoes If a dog chews shoes whose shoes do If a dog chews shoes whose shoes does does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 md:h-[500px]  bg-base-100 shadow-xl">
                            <figure><img className='' src="https://i.postimg.cc/L6DbwnYD/1-6-1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-2 border-info">
                                    <span className='ml-4'> Best in Class Support!</span>
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes  a dog chews shoes whose shoes If a dog chews shoes whose shoes do If a dog chews shoes whose shoes does does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 md:h-[500px]  bg-base-100 shadow-xl">
                            <figure><img className='' src="https://i.postimg.cc/Rh9gbBv2/2-5-1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-2 border-info">
                                    <span className='ml-4'> Best in Class Support!</span>
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes  a dog chews shoes whose shoes If a dog chews shoes whose shoes do If a dog chews shoes whose shoes does does he choose?</p>
                            </div>
                        </div>

                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default ExtraSection;