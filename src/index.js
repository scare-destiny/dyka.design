import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App'
import { Residential, Commercial, Art, About, Contact } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ChakraProvider>
		<BrowserRouter>
			{/* <ScrollToTop/> */}
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='residential' element={<Residential />} />
				<Route path='commercial' element={<Commercial />} />
				<Route path='art' element={<Art />} />
				<Route path='contact' element={<Contact />} />
				<Route path='about' element={<About />} />
			</Routes>
		</BrowserRouter>
	</ChakraProvider>
)
