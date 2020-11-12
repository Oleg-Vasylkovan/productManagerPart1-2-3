import { useState,useEffect } from "react";
import Axios from 'axios';
import {Link} from '@reach/router';

const Show = props => {
const [product,setProducts] = useState(null);

useEffect(() => {
    Axios.get(`http://localhost:8000/api/product/show/${props.id}`)
        .then(res => setProducts(res.data.results))
        .catch(err => console.log(err))
},[props])


    return(
        <div>
        {
            product ? <> 
            <p className="text-center"> Name:{product.title}  {product.price}  {product.description}</p></>: <p>we getting nothing</p>
        }
            <Link to={`/edit/${props.id}`}>Edit</Link>
        </div>
        
    )
}

export default Show;