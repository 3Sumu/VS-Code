import { GiForkKnifeSpoon } from "react-icons/gi";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Catagory from "./components/Catagory";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiForkKnifeSpoon />
          <Logo to={"/"}>Cook Safari</Logo>
        </Nav>
        <Search />
        <Catagory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: overline;
  font-weight: 800;
  font-size: 3rem;
  font-family: "Lobster Two", cursive;
  color: black;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 5rem;
  }
`;

export default App;
