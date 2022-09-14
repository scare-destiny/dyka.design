import React from 'react'
import {
	Hero,
	About,
	Gallery,
	Testimonials,
	Footer,
	Navbar,
} from './containers'
import './App.css'

const App = () => {
	return (
		<div>
			<Navbar/>
			<Hero />
			<About />
			<Gallery />
			<Testimonials />
			<Footer />
		</div>
	)
}

export default App
