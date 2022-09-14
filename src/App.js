import React from 'react'
import { Box } from '@chakra-ui/react'
import { Hero, About, Gallery, Footer, NavbarNew } from './containers'
import './App.css'

const App = () => {
	// TODO ADD DARK MODE
	return (
		<div>
			<NavbarNew />
			<Hero />
			<About />
			<Gallery />
			<Box p={4}>
			</Box>
			<Footer
				heading={'Do you want to turn your project into reality?'}
				cta='Contact me'
			/>
		</div>
	)
}

export default App
