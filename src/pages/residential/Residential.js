import { Navbar, BackgroundImage, Footer } from "../../containers"

const Residenital = () => {
	return (
    <>
      <Navbar />
      <BackgroundImage
        image='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/648e31116398401.6061801950831.jpg'
        text="My Residential Projects"
				buttonText='Browse'
				backgroundPosition={'center center'}
			/>
      <Footer
        header={"Do you want to turn your project into reality?"}
        cta="So residential"
      />
    </>
  );
};

export default Residenital