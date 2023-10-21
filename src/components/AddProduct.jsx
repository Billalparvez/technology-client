
import Swal from 'sweetalert2'
const AddProduct = () => {


    const handleAddCoffee = event => {
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
        fetch("https://technology-server-seven.vercel.app/technology", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className='font-bold my-4'>Add Product</h1>
            <form onSubmit={handleAddCoffee} className="space-y-3">
                {/* first-row */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">Name</span>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">Brand Name</span>
                            <select className="select select-bordered " name="brand">
                                <option disabled selected>Brand category</option>
                                <option>Apply</option>
                                <option>Oppo</option>
                                <option>Sony</option>
                                <option>Xiaomi</option>
                                <option>Oneplus</option>
                                <option>Google</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* second-row  */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">Price</span>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        {/* <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">category Name</span>
                            <select className="select select-bordered " name="category">
                                <option disabled selected>Pick category</option>
                                <option>Apply</option>
                                <option>Oppo</option>
                                <option>Sony</option>
                                <option>Samsunge</option>
                                <option>Oneplus</option>
                            </select>
                        </label> */}
                        <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">Category</span>
                            <input type="text" placeholder="category" name="category" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* thrred row */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">Short description</span>
                            <input type="text" name="description" placeholder="Short description" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-pink-400 text-white font-bold">Rating</span>
                            <input type="Rating" placeholder="Rating" name="rating" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="input-group input-group-vertical">
                        <span className="bg-pink-400 text-white font-bold">Photo Url</span>
                        <input type="text" placeholder="Photo_url" name="photo_url" className="input input-bordered" />
                    </label>
                </div>
                <input type="submit" value="Add Product" className=" bg-gradient-to-r btn w-full text-white to-pink-500 from-indigo-500  " />

            </form>
        </div>
    );
};

export default AddProduct;