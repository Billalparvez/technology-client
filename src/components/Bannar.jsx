

const Bannar = () => {
    return (
        <div>
            <div className="hero h-[650px] w-full" style={{ backgroundImage: 'url(https://i.postimg.cc/NMTpCQjr/istockphoto-1424873096-1024x1024.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div>
                            <input type="search" name="" id="" />
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;