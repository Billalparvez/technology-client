import { useLoaderData } from "react-router";
import Swal from "sweetalert2";


const EditProduct = () => {
    const data=useLoaderData()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo_url = form.photo_url.value;
        const AddProduct = { name, brand, price, category, description, rating, photo_url }
        console.log(AddProduct)
        fetch(`https://technology-server-13fzq322d-billals-projects.vercel.app/technology/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Do Update successfull',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold my-5">UpdatE Product Form</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                {/* first-row */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="font-bold">Name</span>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" defaultValue={data.name} />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="font-bold">Brand Name</span>
                            <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered" defaultValue={data.brand} />
                        </label>
                    </div>
                </div>
                {/* second-row  */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="font-bold">Price</span>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered" defaultValue={data.price} />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-cyan-600 text-white font-bold">category Name</span>
                            <select className="select select-bordered " name="category" defaultValue={data.category}>
                                <option disabled selected>Pick category</option>
                                <option>apply</option>
                                <option>oppo</option>
                                <option>samsunge</option>
                                <option>sony</option>
                                <option>oneples</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* thrred row */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="font-bold">Short description</span>
                            <input type="text" name="description" placeholder="Short description" className="input input-bordered" defaultValue={data.description} />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="font-bold">Rating</span>
                            <input type="Rating" placeholder="Rating" name="rating" className="input input-bordered" defaultValue={data.rating} />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="input-group input-group-vertical">
                        <span className="font-bold">Photo Url</span>
                        <input type="text" placeholder="Photo_url" name="photo_url" className="input input-bordered" defaultValue={data.photo_url} />
                    </label>
                </div>
                <input type="submit" value="Submit" className=" bg-gradient-to-r btn w-full text-white  from-indigo-500 via-purple-500 to-pink-500" />

            </form>
        </div>
    );
};

export default EditProduct;