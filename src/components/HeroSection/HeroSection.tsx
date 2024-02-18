import ClientComponent from "./ClientComponent";
import { heading1, seaction2 } from "./ServerComponent";

const HeroSection = () => {
  return <ClientComponent section2={seaction2} heading1={heading1} />;
};

export default HeroSection;
