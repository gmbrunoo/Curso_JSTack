import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "../Buttom";
import { ThemeContext } from "../../context/ThemeContext";

import { Title } from '../Title'

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JSTacks's Blog`,
};

export default Header;
