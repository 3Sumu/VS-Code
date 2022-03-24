import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import "../Posts/Posts.css";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../Redux/Post/action";

function SinglePost() {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  const { id } = useParams();

  useEffect(() => {
    // const fetchPost = async () => {
    //   try {
    //     const res = await axios.get(
    //       `https://jsonplaceholder.typicode.com/posts/${id}`
    //     );
    //     setPost(res.data);
    //   } catch (err) {
    //     setPost({});
    //     console.log(err);
    //   }
    // };
    dispatch(fetchPost(id));
  }, [id, dispatch]);

  return (
    <>
      {!loading ? (
        !error ? (
          Object.keys(post).length ? (
            <>
              <h1>Post No. {post.id}</h1>
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
                  <Card.Title>{post.title}</Card.Title>
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
            </>
          ) : (
            <h1>No Post Available</h1>
          )
        ) : (
          <h1>{error}</h1>
        )
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

export default SinglePost;
