import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(50% - 1rem);
  padding: 2rem;
  gap: 1rem;

  border: 1px solid ${(props) => props.theme["post"]};
  border-radius: 10px;

  text-decoration: none;
  color: ${(props) => props.theme["text"]};
  background: ${(props) => props.theme["post"]};

  svg {
    margin-right: 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    display: -webkit-box;

    margin-bottom: 1rem;
    overflow: hidden;

    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    transition: box-shadow 0.5s;

    box-shadow: 0 0 5px ${(props) => props.theme["blue"]};
    border-color: ${(props) => props.theme["label"]};
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  gap: 1rem;

  h3 {
    flex: 1;
  }

  div {
    display: flex;

    span {
      display: inline-block;
      ::first-letter {
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: baseline;

    &.home {
      flex-direction: row;
      align-items: center;
    }
  }
`;
// transform: translateY(50%);

export const Content = styled.div`
  span {
    display: flex;
  }
`;
