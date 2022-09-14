import { NavbarNew, Features, Footer } from "../../containers";

const About = () => {
  return (
    <>
      <NavbarNew />
      <Features/>
      <Footer
        header={"Do you want to turn your project into reality?"}
        cta="So wow"
      />
    </>
  );
};

export default About;
