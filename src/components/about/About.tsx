"use client"

import React from "react";
import HomeAboutSection from "./AboutPersonal";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const About: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div style={styles.mainContainerDiv}>
      <div style={styles.mainCardDiv}>
        <div
          style={{
            ...styles.imageAndTitleDiv,
            paddingLeft: isMobile ? "5%" : "20%",
            paddingRight: isMobile ? "5%" : "20%",
          }}
        >
          <div style={styles.imageAndTitleInnerDiv}>
            <div
              style={{
                display: "flex",
                justifyContent: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.profilePic}
                src={"/jamie-photo.jpg"}
                alt="james-potrait"
                width={40}
                height={40}
              />

              <div style={styles.headingTextDiv}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: isMobile ? 20 : 40,
                    textAlign: "center",
                  }}
                >
                  James Elder
                </h1>
                <h1
                  style={{
                    margin: 0,
                    fontSize: isMobile ? 13 : 26,
                    textAlign: "center",
                  }}
                >
                  Mobile Developer
                </h1>
              </div>
            </div>
            <HomeAboutSection />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainerDiv: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    marginTop: 10,
  } as React.CSSProperties,
  mainCardDiv: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    WebkitBoxShadow: "2px 2px 2px #DFDFDF",
    MozBoxShadow: "2px 2px 2px #DFDFDF",
    boxShadow: "2px 2px 2px #DFDFDF",
    background: "#e8e8e8",
    padding: 5,
  } as React.CSSProperties,
  imageAndTitleDiv: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    border: "0px solid lightgrey",
    marginBottom: 0,
    paddingTop: "3%",
    paddingBottom: "3%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  } as React.CSSProperties,
  imageAndTitleInnerDiv: {
    display: "flex",
    justifyContent: "row",
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 15,
    background: "white",
    width: "100%",
  } as React.CSSProperties,
  profilePic: {
    width: "38%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignSelf: "left",
    opacity: 0.95,
  } as React.CSSProperties,
  headingTextDiv: {
    width: "62%",
    padding: 30,
    justifyContent: "center",
    alignContent: "center",
  } as React.CSSProperties,
};

export default About;
