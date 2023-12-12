import React from "react";
// import Tilt from "react-tilt";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#000000] rounded-[20px] py-5 px-12 min-h-[270px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-14 h-14 object-contain" />

          <h3 className="text-[#f0f0f0] text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary max-w-3xl leading-[30px]"
      >
        My name is Yusuf Tomilola Falade. My close friends call me Tomilola. I
        am a skilled Front-End Developer with experience in Html, CSS,
        JavaScript, React, TailwindCSS & WordPress
        {/*, including Three.js
        (JavaScript 3D Library)*/}
        . A quick learner who loves networking and meeting new people, i am
        constantly looking for opportunities to showcase and sharpen my skills.
        <br />
        <br />I collaborate closely with clients & team members to create
        efficient, scalable and user-friendly solutions that solves real-world
        problems. Also, you can find me contributing to innovative web projects
        while learning from experienced professionals. Let's work together to
        bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
