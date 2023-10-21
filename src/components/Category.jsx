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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-10 max-w-7xl mx-auto">
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

    );
};

export default Category;