import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Buttom";
import { ThemeContext } from "./ThemeContext";

import styles from "./Header.scss";

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
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
