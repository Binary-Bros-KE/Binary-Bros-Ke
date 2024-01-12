import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Web Design",
          1000,
          "Web Development",
          1000,
          "SEO",
          1000,
          "Mobile Apps",
          1000,
          "Digital Marketing",
          1000,
          "WordPress",
          1000,
          "UI/UX Design",
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
