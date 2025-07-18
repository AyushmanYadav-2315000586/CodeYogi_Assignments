import axios from "axios";

export function getProductList(){
    return axios.get("https://dummyjson.com/products").then(function(response){
        return response.data.products
    });
    
}

export function getProductData(id){
    return axios.get("https://dummyjson.com/products/"+id).then(function(response){
        return response.data;
    });
}