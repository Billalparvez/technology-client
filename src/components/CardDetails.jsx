import moment from "moment";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const CardDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()

    console.log(id)
    const handleAddCart = (data) => {
        const brandName = data?.brand
        const brandPhoto = data?.photo_url
        const purchasedBy = data?.email
        const brand = { brandName, brandPhoto, purchasedBy }
        console.log(brand)
        fetch('https://technology-server-gvfm149cn-billals-projects.vercel.app/brand', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(brand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success!',
                    text: 'Do Update successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-center text-3xl font-bold my-5">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div className="card card-compact  bg-base-100  ">
                <figure><img className="h-80 w-full rounded-xl" src={data.photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="px-4">
                        <h2 className="card-title text-2xl">Name: {data.name}!</h2>
                        <h2 className="font-bold text-lg">Brand: {data.brand}</h2>
                        <p className="text-4xl font-bold"> <span className="text-info">$ </span>{data.price}</p>
                        <p className="text-2xl">{data.rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddCart(data)} className="btn bg-sky-500 text-white">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;