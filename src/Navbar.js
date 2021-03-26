import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Navbar = () => {
    const Navbar = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0;
    `;

    const Ul = styled.ul`
        display: flex;
    `;

    const Li = styled.li`
        list-style: none;
        margin: 0 10px;
    `;
    const H1 = styled.h1`
        color: black;
        text-decoration: none;
    `;
    return ( 
        <Navbar>
            <Ul>
                <Li>New</Li>
                <Li>Shop</Li>
                <Li>Women</Li>
                <Li>Man</Li>
            </Ul>
            <Link to="/"><H1>URBAN OUTFITTERS</H1></Link>
            <Ul>
                <Li>Search</Li>
                <Li>England</Li>
                <Li>Sign in</Li>
                <Li>Bags</Li>
            </Ul>
            
        </Navbar>
     );
}
 
export default Navbar;