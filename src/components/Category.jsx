import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";




const Category = () => {
    const [category, setCategory] = useState([])
    // cate
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className=" my-10 max-w-7xl mx-auto">
            <div className="text-center mb-7 space-y-3">
                <h1 className="font-bold text-3xl">Our Some Brands!!</h1>
                <p>Dmet consectetur adipisicing elit. Nemo dolores aliquam odit modi nulla hic ear qui tenetur <br /> Nemo dolores aliquam odit modi nulla hic ear qui tenetur quas dolores aliquam  quas dolores aliquam odit modi nulla hic earum eos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    category.map(cate => <Link key={cate.id} to={`/cards/${cate.brandName}`}>
                        <div
                            className="card card-compact 
                      bg-base-100 shadow-xl hover:border-b-2 border-sky-400" >
                            <figure><img className="h-64 rounded w-full" src={cate.brandImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-4 border-info "><span className="ml-5">{cate.brandName}</span></h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>

    );
};

export default Category;