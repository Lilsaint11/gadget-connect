// components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
    showHeaderAndFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, showHeaderAndFooter = true }) => {
    return (
        <div>
            {showHeaderAndFooter && <Header />}
            {children}
            {showHeaderAndFooter && <Footer />}
        </div>
    );
};

export default Layout;
