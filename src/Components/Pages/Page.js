import React, {useState, useEffect} from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Reducers/cart";

export default function Page(){
    const [items, setItems] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("/mocks/products.json")
        .then((response) => response.json())
        .then((result) => {
            if(result && result.products)
            setItems(result.products)
        })
        .catch((e) => console.log(e))
        return () => {}
    }, [])

    function handleAddToCart(data){
        dispatch(addItem({...data,quantity: 1}))
    }

    return (<section>
    <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                <img className="image" src="./Images/Logo.png" alt="logo" style={{width: "100px"}}/>
                    <h1 className="display-4 fw-bolder">Welcome to Mobile World</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Come and Grab your favorite products!!</p>
                </div>
            </div>
        </header>
        <div className="container">
        <div className="row">
            {
                items && items.map((d,i) => (
                    <Card key={`items-number-${i}`} data={d} handleAdd={handleAddToCart}/>
                ))
            }
        </div>
        </div>
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; BADHRIRAJAN 2023</p></div>
        </footer>
    </section>
    );
}