import Axios from "axios";
import { useState,useEffect } from "react";
import ProductForm from '../Components/ProductForm.js';
import {navigate} from '@reach/router';

const Edit = props => {

    const[productForm,setProductForm] = useState ({
        title:"",
        price:0,
        description:""
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProductForm(res.data.results))
            .catch(err => console.log(err))
    },[props])
    
    const handleChange = e => {
        setProductForm ({
            ...productForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/product/update/${props.id}`,productForm)
            .then(res => {
                if(res.data.results){
                    navigate("/");
                }
                else{
                    console.log(res.data)
                }
            })
    }

    return (
        <div>
            <h2 className="text-center">Edit Product:</h2>
            <ProductForm 
                form={productForm}
                handleChange={handleChange}
                submitValue="Edit"
                handleSubmit={handleUpdate}
            />
        </div>
    );
}
export default Edit;