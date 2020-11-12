import {useState,useEffect} from 'react';
import Axios from 'axios';

const Main = props => {

    const [products, setProducts] = useState([]);
    const [destroy,setDestroy] = useState(false);

    useEffect (() => {
        Axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data.results))
        .catch(err => console.log(err))
    },[destroy])

    const deleteProduct = (id,title) => {
        Axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res =>{
                setDestroy(!destroy);
                if(res.data.results){
                    console.log(`${title} beem deleted!`)
                }
            })
            .catch(err => console.log(err))
    }


    return(
        <div className="d-flex flex-col">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((w,i) => <tr key={i}>
                                                    <td>{w.title}</td>
                                                    <td>{w.price}</td>
                                                    <td>{w.description}</td>
                                                    <td><button onClick={()=>deleteProduct(w._id,w.title)} className="btn btn-danger">Delete</button></td>
                                                </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Main;