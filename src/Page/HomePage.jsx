import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function HomePage() {
  return (
    <>
      <div className="homepage">
        <h1>Welcome to the To-Do APp</h1>
        <p>A new way of DOing thINGs </p>
        <p>
          Tired of the same old
          <br />
          same old <br />
          same old <br />
          same old ...
          <br />
          TO DO LIST Try this <br />
          and you won't regret it!
          <br /> ✍ your little task <br />
          Tell us how urgent it is 💥
          <br />
          🔷 🔶 🥬 Pick one color <br />
          New days, New Wayz <br />
          😉
        </p>
      </div>
      <footer>
        <div className="about-container">
          <div className="social-links">
            <h4>About Me</h4>

            <img
              src="https://cdn.vox-cdn.com/thumbor/pRci-DNLZez5I-eoQuY5u6_oJwo=/78x0:1322x933/1520x1013/filters:focal(78x0:1322x933):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55912251/1_tQM0hcRiO1ZWEAj_if-Tzw.0.jpeg"
              alt="Avatar"
              className="avatar"
            />
            <p>
              Hello! Im Reda, a passionate developer. Feel free to have a look
              at those: the following platforms:
            </p>
            <a
              href="www.linkedin.com/in/reda-d-76b0942b9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/fututuRED"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
