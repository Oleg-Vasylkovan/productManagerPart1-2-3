import React from 'react';


const ProductForm = props => {
    const{form,handleSubmit,handleChange} = props;
    



    return(
        <div>
        <form onSubmit={handleSubmit} className="col-5 mx-auto">
            <div className="form-group">
                <label>Title:</label>
                <input type="text" name="title" className="form-control" onChange={handleChange} value={form.title}/>
            </div>
            <div className="form-group">
                <label>Price:</label>
                <input type="number" name="price" className="form-control" onChange={handleChange} value={form.price}/>
            </div>
            <div className="form-group">
                <label>Description:</label>
                <input type="text" name="description" className="form-control" onChange={handleChange} value={form.description}/>
            </div>
            <input type="submit" value="Create" className="btn btn-primary"/>  <br/>
        </form>
        </div>
    )
}

export default ProductForm;