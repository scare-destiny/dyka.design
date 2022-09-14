import { NavbarNew, BackgroundImage, ScrollTrigger, Footer } from "../../containers"
import image from "../../assets/commercial.webp";

const Commercial = () => {
	return (
    <>
      <NavbarNew />
      <BackgroundImage
        image={image}
        text="My Commercial Projects"
				buttonText='Browse'
				backgroundPosition={'center center'}
      />
      <ScrollTrigger/>
      <Footer
        header={"Do you want to turn your project into reality?"}
        cta="So wow"
      />
    </>
  );
};

export default Commercial