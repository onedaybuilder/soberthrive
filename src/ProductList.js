import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled, { css } from 'styled-components';


const ProductList = () => {
    const Main = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-around;
    `;
    const New = styled.div`
    flex-basis: 30%;
    // border: 3px solid black;
    // margin: 0 30px;
    `;
    const Products = styled.div`
    flex-basis: 70%;
    margin: 0 10px;
    display: flex;
    flex-wrap: wrap;
    `;
    const Item = styled.div`
    width: 40%;
    margin: 40px;
    `;
    const Linking = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover h3{
        color: grey;
    }
    `;
    const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    `;
    const Button = styled.button`
    background: none;
    border: 0;
    border-bottom: 2px solid black;
    width: 30%;
    height: 30px;
    margin: 0 0 0 5px;
    `;

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
           <Main>
           <New>
               <form action="">
                   <label htmlFor="">Later</label>
                   <input type="checkbox" name="" id="" value="checkbox"/><br/>
                   <label htmlFor="">Later</label>
                   <input type="checkbox" name="" id="" value="checkbox"/><br/>
                   <label htmlFor="">Later</label>
                   <input type="checkbox" name="" id="" value="checkbox"/>
               </form>
           </New>
           <Products>
              {posts.map((post)=> (
                <Item key={post.id}>
                    <Linking to={`/products/${post.id}`}>
                    <img src={post.image} alt=""/>
                    <ItemDetails>
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.price}</p>
                        </div>
                        <Button>Add to bag</Button>
                    </ItemDetails>
                    </Linking>
                </Item>
              ))}
               </Products>
           </Main>
        </div>
     );
}
 
export default ProductList;