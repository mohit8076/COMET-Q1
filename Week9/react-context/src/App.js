import styled from "styled-components";
import { Routes, Link, Route } from "react-router-dom";

import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";

const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/"  element={<Products/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Wrapper>
    </ShopProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: white;
    background-color : #D49B54;
    padding : 10px;
    border-radius : 20%;

    :hover {
      color: white;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;



// http://medium.com/@mohsentaleb/redux-vs-context-api-usereducer-when-to-use-which-b625b436259