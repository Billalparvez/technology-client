import { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedBrand = useLoaderData()
    const [brands, setBrands] = useState(loadedBrand)
    console.log(loadedBrand)
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            fetch(`https://technology-server-seven.vercel.app/brand/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        // remove brand
                        const remaining = brands.filter(brand => brand._id !== id)
                        setBrands(remaining)
                    }
                })

        })
    }
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {
                brands.map((b) => <div key={b._id} >
                    <div className="card card-compact  bg-base-100 shadow-xl ">
                        <figure><img className="h-64 w-full rounded-xl" src={b.brandPhoto} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <div className="px-4">
                                <h2 className="card-title text-2xl">{b.brandName}!</h2>

                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(b._id)} className="btn btn-primary">Delete</button>

                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;