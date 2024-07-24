import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          <Header />
            {children}
         <Footer />
        </div>
    );
};




