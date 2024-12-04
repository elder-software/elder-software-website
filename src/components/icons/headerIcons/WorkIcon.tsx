import React from "react";
import { MdWork } from "react-icons/md";
import { HeaderIconProps } from "./styles";
import "./index.css";
import Link from "next/link";

const WorkIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link href="/work">
    <div className="iconBackground">
      <MdWork
        className="icon"
        style={{
          height: size || 80,
          width: size || 80,
        }}
      />
      <h5 className="iconText" style={{ fontSize: textSize }}>
        Work
      </h5>
    </div>
  </Link>
);

export { WorkIcon };
