import React from 'react'
import {
	Hero,
	About,
	Gallery,
	Testimonials,
	Footer,
	NavbarNew,
} from './containers'
import './App.css'

const App = () => {
	// TODO ADD DARK MODE
	return (
		<div>
			<NavbarNew />
			<Hero />
			<About />
			<Gallery />
			<Testimonials />
			<Footer
				heading={'Do you want to turn your project into reality?'}
				cta='Contact me'
			/>
		</div>
	)
}

export default App
