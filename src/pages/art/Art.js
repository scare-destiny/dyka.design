import { NavbarNew, BackgroundImage, Footer } from '../../containers'

const Art = () => {
	return (
		<>
			<NavbarNew />
			<BackgroundImage
        image='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9cbd85114102059.6035079c0e199.jpg'
        backgroundPosition={'left center'}
				text='My Art Projects'
				buttonText='Browse'
			/>
			<Footer
				header={'Do you want to turn your project into reality?'}
				cta='So artyy'
			/>
		</>
	)
}

export default Art
