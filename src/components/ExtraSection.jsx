

const ExtraSection = () => {
    return (
        <div className="max-w-7xl mx-auto md:my-32 ">
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-20 items-center">
                <div className="flex">
                    <img className="rounded-lg relative " src="https://i.postimg.cc/DfBBvMkb/istockphoto-1449822239-1024x1024.jpg" alt="" />
                    {/* <img className=" w-64 h-64 absolute left-80" src="https://i.postimg.cc/qBy3Jmtx/istockphoto-1464277904-1024x1024.jpg" alt="" /> */}
                </div>
                <div >
                    <h1 className="text-5xl mb-3">It is a long established fact that  a reader will be distracted </h1>
                    <p className="text-2xl">as opposed to using ,
                        making it look like readable English.
                        Many desktop publishing packages and web page
                        editors now use Lorem Ipsum as their default model
                        text, and a search for
                        many web sites still in their infancy.
                        Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose.</p>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;