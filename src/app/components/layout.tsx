import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showHeaderAndFooter = true }) => {
  return (
    <div>
      {showHeaderAndFooter && <Header />}
        {children}
      {showHeaderAndFooter && <Footer />}
    </div>
  );
};

export default Layout;