import { useEffect } from "react";
import { useState } from "react";



const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('/public/category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h1>{category.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-10 max-w-7xl mx-auto">
                {
                    category.map(cate => <div key={cate.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-64" src={cate.brandImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title border-l-4 border-info "><span className="ml-5">{cate.brandName}</span></h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;