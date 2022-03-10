import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DesignNavbar from "./Component/DesignNavbar/DesignNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Component/Posts/Posts";
import LoginPage from "./Component/LoginPage/LoginPage";
import SinglePost from "./Component/SinglePost/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <DesignNavbar />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:id" element={<SinglePost />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
