import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { socialss } from "../constants";

const Smedia = ({ icon, url, index }) => (
  <span className="bg-[#8f8f8f] h-9 w-9 flex justify-center items-center rounded-full">
    <a href={url} target="_blank">
      <img
        src={icon}
        alt={`social-icon-${index}`}
        loading="lazy"
        className="w-5 h-5 object-contain"
      />
    </a>
  </span>
);

const Socials = () => {
  return (
    <section className="text-[#f0f0f0] h-10 w-full p-10 mt-5 flex flex-col gap-3 justify-center items-center">
      <div className=" flex gap-4 justify-center items-center">
        {socialss.map((social, index) => (
          <Smedia {...social} key={`social-icon-${index}`} index={index} />
        ))}
      </div>

      <p className="tracking-wider font-medium text-center">
        Made with ❤ by TOMILOLA
      </p>
    </section>
  );
};

export default SectionWrapper(Socials);
