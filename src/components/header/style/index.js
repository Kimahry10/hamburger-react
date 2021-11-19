import styled from "styled-components";
import { animationSpeed, borderColor, shadowColor } from "../../../constants";

const Hamburger = styled.div`

  .menu-btn {
    position: relative;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: all ${animationSpeed} ease-in-out;
    /* border: 3px solid ${borderColor}; */

    display: flex;
    align-items: center;
    justify-content: center;
  }

.menu-btn__burger {
  width: 2rem;
  height: 5px;
  background-color: ${borderColor};
  border-radius: 5px;
  transition: all ${animationSpeed} ease-in-out;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 2rem;
  height: 5px;
  background-color: ${borderColor};
  border-radius: 5px;
  transition: all ${animationSpeed} ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-0.7rem);
}

.menu-btn__burger::after {
  transform: translateY(0.7rem);
}

/* animation */

.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
}

.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  background-color: white;
}

.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  background-color: white;
}

`;

// HEADER

const HeaderStyle = styled.header`
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .showMenu {
    right: 0;
    transition: .2s;
  }

  nav {
    background: #101820;
    position: fixed;
    width: 100%;
    top: 0;
    right: -100%;
    height: 100vh;
    transition: .2s;

    ul {
      list-style: none;
      width: 100%;
      padding: 0 1rem;

      li {
        background: #FEE715;
        margin: 1rem 0;
        text-align: center;
        width: 100%;
        border-radius: 3px;

        :nth-child(1) {
          background: transparent;
          display: flex;
          justify-content: right;
          padding-right: 1rem;
        }

        a {
          color: #101820;
          font-size: 1.25rem;
          padding: 1rem;
          width: 100%;
          display: inline-block;
          text-decoration: none;
        }
      }
    }
  }
`;
export { HeaderStyle, Hamburger };