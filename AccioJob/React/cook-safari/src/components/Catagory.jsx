import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {
  GiNoodles,
  GiChopsticks,
  GiWineBottle,
  GiRoastChicken,
  GiFrenchFries,
} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Catagory() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
      <SLink to={"/cuisine/Indian"}>
        <GiRoastChicken />
        <h4>Indian</h4>
      </SLink>
      <SLink to={"/cuisine/French"}>
        <GiFrenchFries />
        <h4>French</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 7rem;
  width: 7rem;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  margin-right: 2rem;
  cursor: pointer;
  text-decoration: none;
  transform: scale(0.8);
  margin-bottom: 1rem;

  h4 {
    color: white;
    font-size: 1rem;
  }

  svg {
    color: white;
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  &.active {
    background: linear-gradient(to bottom, #c9c75f, #b1552a);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Catagory;
