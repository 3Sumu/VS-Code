import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searchItem/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 1rem auto;
  position: relative;
  width: 100%;

  input {
    background: linear-gradient(35deg, #393939, #414141);
    border: none;
    margin: 0 15%;
    color: white;
    font-size: 2rem;
    padding: 1rem 4rem;
    border-radius: 2rem;
    outline: none;
    width: 70%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 18%;
    color: white;
    font-size: 2rem;
    transform: translate(-100%, -50%);
  }
`;

export default Search;
