import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DesignNavbar from "./Component/DesignNavbar/DesignNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Component/Posts/Posts";
import LoginPage from "./Component/LoginPage/LoginPage";
import SinglePost from "./Component/SinglePost/SinglePost";
import Error404 from "./Component/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <DesignNavbar />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
