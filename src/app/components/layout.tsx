// components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

// Define LayoutProps type
interface LayoutProps {
    children: ReactNode;
    showHeaderAndFooter?: boolean;
}

// Define Layout component with React.FC<LayoutProps>
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
