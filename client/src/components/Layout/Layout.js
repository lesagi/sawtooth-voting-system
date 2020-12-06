import React from "react";
import LayoutStyles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.container}>
      <Header className={LayoutStyles.header} />
      <div className={LayoutStyles.content}>{children}</div>
      <Footer className={LayoutStyles.footer} />
    </div>
  );
};
export default Layout;
