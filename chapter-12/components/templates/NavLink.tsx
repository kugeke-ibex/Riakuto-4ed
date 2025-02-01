import React from "react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

const Navigation: FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
        >
          このサイトについて
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }
        >
          FAQ
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

