import React, { useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import "./Posts.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import fetchPosts from "../../Redux/Posts/action";
import { connect } from "react-redux";

function Posts(props) {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setPosts(res.data))
    //   .catch((err) => console.log(err));
    // const fetchPosts = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     setPosts(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    props.fetchPosts();
  }, []);

  const displayPosts = (props) => {
    return props.posts.map((post) => (
      <Card
        className="post"
        border="primary"
        bg="dark"
        text="light"
        key={post.id}
      >
        <Card.Header>
          <small className="text-muted">User {post.userId}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="post-title">
            <Link className="router-link" to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary" className="post-buttons">
            Like
          </Button>
          <Button variant="primary" className="post-buttons">
            Comment
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Uploaded {Math.floor(Math.random() * 60)} mins ago
          </small>
        </Card.Footer>
      </Card>
    ));
  };

  return (
    <>
      <h1>Posts</h1>
      {!props.loading ? (
        !props.error ? (
          displayPosts(props)
        ) : (
          <h1>{props.error}</h1>
        )
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    error: state.posts.error,
    loading: state.posts.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
