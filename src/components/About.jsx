import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        My name is Yusuf Tomilola Falade. My close friends call me Tomilola. I
        am a skilled Front-End Developer with experience in CSS, JavaScript,
        React, TailwindCSS & WordPress, including Three.js (JavaScript 3D
        Library) & React.js packages like Axios & Framer Motion.
        <br />
        <br />
        I am a quick learner who loves networking, meeting new people and
        constantly looking for opportunities to showcase and sharpen my skills.
        I collaborate closely with clients & team members to create efficient,
        scalable and user-friendly solutions that solves real-world problems.
        <br />
        <br />
        Also, you can find me contributing to innovative web projects while
        learning from experienced professionals. Let's work together to bring
        your ideas to life!
      </motion.p>
    </>
  );
};

export default About;
