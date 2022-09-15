import React from 'react'
import {
	BackgroundImage,
	About,
	Gallery,
	Testimonials,
	Footer,
	Navbar,
} from './containers'
import './App.css'
import image from './assets/heroimage.webp'

// У Скрол вселяється демон після візиту commercial (через ту галерею зі скролом)
const App = () => {
	return (
		<div>
			<Navbar />
			<BackgroundImage image={image} backgroundPosition={'center center'} />
			<About />
			<Gallery />
			<Testimonials />
			<Footer />
		</div>
	)
}

export default App
