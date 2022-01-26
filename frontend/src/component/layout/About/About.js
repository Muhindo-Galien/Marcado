import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import TwitterIcon  from "@material-ui/icons/Twitter";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/galienplume/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://i.ibb.co/p17bsGC/DSC-3662.jpg"
              alt="Galien"
            />
            <Typography>Muhindo Galien</Typography>
            <Button onClick={visitInstagram} color="primary">
            <Typography> Visit Instagram </Typography>
            </Button>
            <span>
              This is a sample wesbite made by <strong>Muhindo Galien</strong>. Only with the
              purpose to teach MERN Stack to improve my skills
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            <a
              href="https://www.linkedin.com/in/muhindo-galien-292902213/"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://twitter.com/GalienMuhindo" target="blank">
              <TwitterIcon  className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;