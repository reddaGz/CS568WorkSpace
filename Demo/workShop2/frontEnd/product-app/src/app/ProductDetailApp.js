import axios from 'axios';
import React from 'react';
import ProductDetail from '../components/ProductDetail';
class ProductDetailApp extends React.Component {
    state={
        productDetail:{}
    }
   async componentDidMount(){
        const response=await axios.get('/products/'+this.props.match.params.id,{headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }})
         const copy={...this.state}
         copy.productDetail=response.data
         this.setState(copy)
    }
    render() { 
        return <div>
            <ProductDetail
            name={this.state.productDetail.name}
            price={this.state.productDetail.price}
            rating={this.state.productDetail.rating}
            model={this.state.productDetail.model}
            manufacturer={this.state.productDetail.manufacturer}
            description={this.state.productDetail.description}
            >

            </ProductDetail>
        </div>;
    }
}
 
export default ProductDetailApp;