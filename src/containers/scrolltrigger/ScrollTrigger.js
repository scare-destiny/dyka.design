import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './scrolltrigger.css'
import { Box, SimpleGrid } from '@chakra-ui/react'

const contents = [
	{
		title: 'Danielle Vail',
		image: 'https://picsum.photos/seed/photo1/1000',
	},
	{
		title: 'Agatha Holborn',
		image: 'https://picsum.photos/seed/photo2/1000',
	},
	{
		title: 'Leonora-Lettie Tomson',
		image: 'https://picsum.photos/seed/photo3/1000',
	},
	{
		title: 'Taryn Rihanna Leary',
		image: 'https://picsum.photos/seed/photo4/1000',
	},
	{
		title: 'Krystin Elphinstone',
		image: 'https://picsum.photos/seed/photo5/1000',
	},
	{
		title: 'Jazlyn Hilton',
		image: 'https://picsum.photos/seed/photo6/1000',
	},
	{
		title: 'Alisa-Jewell Woods',
		image: 'https://picsum.photos/seed/photo7/1000',
	},
	{
		title: 'Ariel-Rayna Steel',
		image: 'https://picsum.photos/seed/photo8/1000',
	},
	{
		title: 'Sidney-Patricia Carwardine',
		image: 'https://picsum.photos/seed/photo9/1000',
	},
	{
		title: 'Dee Pickles',
		image: 'https://picsum.photos/seed/photo10/1000',
	},
]

const Portfolio = () => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		let i = 0
		const polygonFrom = 'polygon(0% 100%, 100% 100%, 100% 200%, 0% 200%)'
		const polygonTo = 'polygon(0% -100%, 100% -100%, 100% 0%, 0% 0%)'
		// const polygonFrom = 'polygon(0% 100%, 100% 120%, 100% 220%, 0% 200%)'
		// const polygonTo = 'polygon(0% -120%, 100% -100%, 100% 0%, 0% -20%)'
		console.log(contents.length)
		for (i = 0; i < contents.length; i++) {
			gsap.fromTo(
				'.section:nth-child(' + (i + 1) + ') .title',
				{
					clipPath: polygonFrom,
				},
				{
					clipPath: polygonTo,
					ease: 'linear',
					scrollTrigger: {
						// markers: true,
						trigger: '.section:nth-child(' + (i + 1) + ')',
						start: 'top center+=300px',
						end: 'bottom-=300px top',
						scrub: true,
					},
				}
			)

			gsap.fromTo(
				'.section:nth-child(' + (i + 1) + ') .graphic',
				{
					clipPath: polygonFrom,
					backgroundPositionY: '60px',
				},
				{
					clipPath: polygonTo,
					backgroundPositionY: '-60px',
					ease: 'linear',
					scrollTrigger: {
						// markers: true,
						trigger: '.section:nth-child(' + (i + 1) + ')',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					},
				}
			)
		}
	}, [])

	return (
		<div className='scrollTrigger-container'>
			<div className='app'>
				{contents.map((content, index) => (
					<section className='section'>
						<h1 className='title' key={index}>
							{content.title}
						</h1>
						<div
							className='graphic'
							style={{
								backgroundImage: `url(${content.image})`,
							}}
						></div>
					</section>
				))}
			</div>
		</div>
	)
}

export default Portfolio
