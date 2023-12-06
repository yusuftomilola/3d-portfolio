import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-primary
         p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-[#f0f0f0] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-[#202020] py-4 px-6 placeholder:text-secondary text-[#f0f0f0]
              rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label htmlFor="email" className="flex flex-col">
            <span className="text-[#f0f0f0] mb-4 font-medium">Your Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="py-4 px-6 bg-[#202020] text-[#f0f0f0]
              rounded-lg placeholder:text-secondary outlined-none border-none font-medium"
            />
          </label>

          <label htmlFor="message" className="flex flex-col">
            <span className="mb-4 font-medium text-[#f0f0f0]">
              Your Message
            </span>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="8"
              value={form.message}
              onChange={handleChange}
              placeholder="I am all ears..."
              className="bg-[#202020] text-[#f0f0f0] placeholder:text-secondary rounded-lg py-4 px-6 font-medium outline-none border-none"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-[#202020] text-[#f0f0f0] py-3 px-8 outline-none border-none font-bold shadow-md shadow-primary rounded-xl w-fit m-auto"
          >
            {loading ? "Submitting...." : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", "0.2", "1")}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
