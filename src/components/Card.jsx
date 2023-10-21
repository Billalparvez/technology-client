import moment from "moment";
import { Link } from "react-router-dom";


const Card = ({ product }) => {
    const { _id, name, brand, price, rating, photo_url } = product
    console.log(product)
    return (

        <div>
           
            <div className="card card-compact hover:border-b-4  bg-base-100 shadow-xl ">
                <figure><img className="h-64 w-full rounded-xl" src={photo_url} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className="px-4">
                        <h2 className="card-title text-2xl">Name: {name}!</h2>
                        <h2 className="font-bold text-xl">Brand: {brand}</h2>
                        <p className="text-4xl font-bold"> <span className="text-info">$ </span>{price}</p>
                        <p className="text-2xl">{rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/cardDetails/${_id}`}>
                            <button className="btn bg-sky-500 hover:bg-sky-700 text-white font-bold ">Details</button>
                        </Link>
                        <Link to={`/editProduct/${_id}`}>
                            <button className="btn bg-sky-500  hover:bg-sky-700 text-white font-bold">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;