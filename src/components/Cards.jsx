import { useLoaderData } from "react-router";
import { useState } from "react";
import Card from "../components/Card"
const Cards = () => {
    const data = useLoaderData()
    const [products, setProduct] = useState(data)
    // console.log(products)
    return (
        <div className="max-w-7xl mx-auto">
            {/* slider-start */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/DzpYt9wF/elegant-smartphone-composition.jpg" className="w-full h-[550px] rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/sxsfbG2t/google-plus-icon-line-connection-circuit-board.jpg" className="w-full h-[550px] rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/sxsfbG2t/google-plus-icon-line-connection-circuit-board.jpg" className="w-full h-[550px] rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/DzpYt9wF/elegant-smartphone-composition.jpg" className="w-full h-[550px] rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* slider-end */}

            {/* start-card */}
            <div className="text-center mt-20">
                <h1 className="font-bold text-3xl mb-3">Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur unde repellat sunt illum ea, optio corporis et saepe tempore ex!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
                {
                    products.map((product,idx) =>
                        <Card key={idx}
                            product={product}
                        ></Card>)
                }
            </div>
            {/* end-card */}
        </div>
    );
};

export default Cards;