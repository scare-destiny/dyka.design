import { NavbarNew, BackgroundImage, Footer } from "../../containers"

const Commercial = () => {
	return (
    <>
      <NavbarNew />
      <BackgroundImage
        image='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fe491e95358347.5e95c4ce83fb7.jpg'
        text="My Commercial Projects"
				buttonText='Browse'
				backgroundPosition={'center center'}
			/>
      <Footer
        header={"Do you want to turn your project into reality?"}
        cta="So wow"
      />
    </>
  );
};

export default Commercial