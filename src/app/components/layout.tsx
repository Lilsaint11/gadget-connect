import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
    children: ReactNode;
    showHeaderAndFooter?: boolean; 
};

const Layout = ({ children, showHeaderAndFooter = true }: LayoutProps) => {
    return (
        <div>
            {showHeaderAndFooter && <Header />}
            {children}
            {showHeaderAndFooter && <Footer />}
        </div>
    );
};

export default Layout;
