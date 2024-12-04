"use client"

import React from "react";
import {
  ContactIcon,
  HomeIcon,
  ProductsIcon,
  WorkIcon,
} from "./icons/headerIcons";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div>
      <div style={styles.logoDiv}>
        <Image
          style={{ width: isMobile ? "20%" : "10%", height: "100%" }}
          src="/logo.jpeg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <div style={styles.headingsDiv}>
        <HomeIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <WorkIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <ProductsIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <ContactIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
      </div>
    </div>
  );
};

const styles = {
  logoDiv: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: "2%",
    opacity: 0.85,
  } as React.CSSProperties,
  headingsDiv: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "1%",
    paddingBottom: "1%",
    border: "1px solid black",
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20,
    background: "black",
    opacity: 0.85,
    WebkitBoxShadow: "2px 2px 2px #DFDFDF",
    MozBoxShadow: "2px 2px 2px #DFDFDF",
    boxShadow: "2px 2px 2px #DFDFDF",
  } as React.CSSProperties,
};

export default Header;
