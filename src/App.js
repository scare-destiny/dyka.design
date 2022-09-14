import React from 'react'
import {
	Hero,
	About,
	Gallery,
	Testimonials,
	Footer,
	Navbar
} from './containers'
import './App.css'

const App = () => {
	// TODO ADD DARK MODE
	return (
		<div>
			<Navbar/>
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
