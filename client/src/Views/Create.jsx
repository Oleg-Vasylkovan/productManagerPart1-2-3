import {useState,useEffect} from 'react';
import {navigate,Link} from "@reach/router";
import Axios from 'axios';
import ProductForm from '../Components/ProductForm.js';

const Create = props => {
    const [products,setProducts] = useState([])
    const[form,setForm] = useState({
        title:"",
        price:0,
        description:""
    })

    const handleChange = e => {
        setForm ({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/products/create',form)
            .then(res => {
                if(res.data.results){
                    navigate("/");
                }
                else{
                    console.log(res.data)
                }
            })
    }
    useEffect (() => {
        Axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data.results))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
        <ProductForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <br/>
        
        <div>
            <div><h1 className="text-center">All Products:</h1></div>
            <div>
                {
                    products.map((w,i) => <Link key={i} to = {`/api/product/show/${w._id}`} >{w.title}</Link>
                    )
                }
            </div>
        </div>
        </div>    
    )
}    

export default Create;