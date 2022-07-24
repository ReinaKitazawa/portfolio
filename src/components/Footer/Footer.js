import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span>Created by Reina Kitazawa</span>

        <a href="https://github.com/ReinaKitazawa">
          <GitHubIcon />
        </a>
        <a href="http://www.linkedin.com/in/reinakitazawa">
          <LinkedInIcon />
        </a>
        <a href="mailto:reeeina2415@gmail.com">
          <MailOutlineIcon />
        </a>
      </div>
    </>
  );
};

export default Footer;
