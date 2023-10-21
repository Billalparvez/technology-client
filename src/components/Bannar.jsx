

const Bannar = () => {
    return (
        <div>
            <div className="hero h-[650px] w-full" style={{ backgroundImage: 'url(https://i.postimg.cc/NMTpCQjr/istockphoto-1424873096-1024x1024.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Well Come to <span className="text-sky-500"> My Technology</span> <br />Web side!!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="">
                            <input type="search" name="" placeholder="Search Your Brand" id="" className="mb-3 md:mb-0 lg:mb-0 p-3 rounded-full" />
                            <button className="btn bg-sky-500 ml-3 text-white border-none hover:bg-sky-700 rounded-full">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;