import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Web Development",
          1000,
          "SEO",
          1000,
          "Mobile Applications",
          1000,
          "Digital Marketing",
          1000,
          "E-commerce Solutions",
          1000,
          "Management Systems",
          1000,
          "Cloud Services",
          1000,
          "AI and Machine Learning",
          1000,
          "Internet of Things(IoT)",
          1000,
          "Data Analysis",
          1000,
          "Agile Project Management",
          1000,
          "Dev Ops Services",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingAnimation;
