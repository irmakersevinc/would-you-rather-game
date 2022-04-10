import React from "react";
import { Nav,NavItem,NavLink } from "reactstrap";
import Home from './Home'
const Navs = () => {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink href="/" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/newQuestion">New Question</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/leaderBorad">Leader Board</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    );
}

export default Navs;
