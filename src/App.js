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

// У Скрол вселяється демон після візиту commercial (через ту галерею зі скролом)
const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Gallery />
			<Testimonials />
			<Footer />
		</div>
	)
}

export default App
