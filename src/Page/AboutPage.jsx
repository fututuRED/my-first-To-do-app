import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons from react-icons

function AboutPage() {
  const avatarUrl =
    "https://cdn.vox-cdn.com/thumbor/pRci-DNLZez5I-eoQuY5u6_oJwo=/78x0:1322x933/1520x1013/filters:focal(78x0:1322x933):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55912251/1_tQM0hcRiO1ZWEAj_if-Tzw.0.jpeg";

  return (
    <div style={styles.container}>
      <h2>About Me</h2>
      <img src={avatarUrl} alt="Avatar" style={styles.avatar} />

      <p>
        Hello! I am Reda, a passionate developer. You can connect with me on the
        following platforms:
      </p>

      <div style={styles.socialLinks}>
        <a
          href="www.linkedin.com/in/reda-d-76b0942b9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} style={styles.icon} />
        </a>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} style={styles.icon} />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover", // Ensure the avatar is properly cropped
    margin: "20px 0",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  icon: {
    color: "#333",
    transition: "color 0.3s",
  },
};

export default AboutPage;
