import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
const ProductDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
               setPost(data);
            })
    })


    return ( 
        <div className="product-details">
            <h1>Product details </h1>

            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <img src={post.image} alt=""/>
        </div>
     );
}
 
export default ProductDetails;