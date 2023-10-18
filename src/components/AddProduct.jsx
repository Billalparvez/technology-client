

const AddProduct = () => {
    return (
            <div>
                <h1>Add Product</h1>
                <form >
                    <label>Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        // onChange={(e) => this.setState({ productImage: e.target.files[0] })}
                        required
                    />
                    <br />

                    <label>Name:</label>
                    <input
                        type="text"
                        // value={this.state.productName}
                        // onChange={(e) => this.setState({ productName: e.target.value })}
                        required
                    />
                    <br />

                    <label>Brand Name:</label>
                    <input
                        type="text"
                        // value={this.state.brandName}
                        // onChange={(e) => this.setState({ brandName: e.target.value })}
                        required
                    />
                    <br />

                    <label>Type:</label>
                    <select
                        // value={this.state.productType}
                        // onChange={(e) => this.setState({ productType: e.target.value })}
                        required
                    >
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                        <option value="headphone">Headphone</option>
                    </select>
                    <br />

                    <label>Price:</label>
                    <input
                        type="number"
                        // value={this.state.productPrice}
                        // onChange={(e) => this.setState({ productPrice: e.target.value })}
                        required
                    />
                    <br />

                    <label>Short Description:</label>
                    <textarea
                        // value={this.state.shortDescription}
                        // onChange={(e) => this.setState({ shortDescription: e.target.value })}
                        required
                    />
                    <br />

                    <label>Rating:</label>
                    <input
                        type="number"
                        // value={this.state.productRating}
                        // onChange={(e) => this.setState({ productRating: e.target.value })}
                        min="1"
                        max="5"
                        required
                    />
                    <br />

                    <button type="submit">Add Product</button>
                </form>
                
            </div>
    );
};

export default AddProduct;