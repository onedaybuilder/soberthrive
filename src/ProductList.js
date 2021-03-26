import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const ProductList = () => {
    const [posts, setPosts] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setPosts(data);
        })

    }, []);
    return ( 
        <div className="products">
           <h2>Products</h2>

           <div className="product-list">
              {posts.map((post)=> (
                  <div key={post.id}>
                      <Link to={`/products/${post.id}`}>
                        <h3>{post.title}</h3>
                        <p>{post.price}</p>
                      </Link>
                  </div>
              ))}
           </div>
        </div>
     );
}
 
export default ProductList;