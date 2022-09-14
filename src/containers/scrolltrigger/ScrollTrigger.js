import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './scrolltrigger.css'
import commercial1 from "../../assets/commercial-1.webp"
import commercial2 from "../../assets/commercial-2.webp"
import commercial3 from "../../assets/commercial-3.webp"
import commercial4 from "../../assets/commercial-4.webp"
import commercial5 from "../../assets/commercial-5.webp"
import commercial6 from "../../assets/commercial-6.webp"
import commercial7 from "../../assets/commercial-7.webp"
import commercial8 from "../../assets/commercial-8.webp"
import commercial9 from "../../assets/commercial-9.webp"
import commercial10 from "../../assets/commercial-10.webp"

const contents = [
	{
		title: 'Проєкт намбер 1',
		image:
			commercial1,
	},
	{
		title: 'Проєкт намбер 1',
		image:
			commercial2
	},
	{
		title: 'Проєкт намбер 1',
		image:
			commercial3
	},
	{
		title: 'Проєкт намбер 1',
		image:
			commercial4
	},
	{
		title: 'Проєкт намбер 2',
		image:
			commercial5
	},
	{
		title: 'Проєкт намбер 2',
		image:
			commercial6
	},
	{
		title: 'Проєкт намбер 3',
		image:
			commercial7
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial8
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial9
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial10
	},
]

// TODO SERVER DIFFERENT IMAGES FOR mobile
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
