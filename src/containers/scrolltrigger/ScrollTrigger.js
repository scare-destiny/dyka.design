import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './scrolltrigger.css'
import { Box, SimpleGrid } from '@chakra-ui/react'

const contents = [
	{
		title: 'Проєкт намбер 1',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4d60e1130411749.617fe05f7fd1c.jpg',
	},
	{
		title: 'Проєкт намбер 1',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/288d1a130411749.617fe05f7f2ce.jpg',
	},
	{
		title: 'Проєкт намбер 1',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a60563130411749.617fe05f81f08.jpg',
	},
	{
		title: 'Проєкт намбер 1',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/262f21130411749.617fe05eef70d.jpg',
	},
	{
		title: 'Проєкт намбер 2',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/80c2f1109431553.5fd37635e2cb8.jpg',
	},
	{
		title: 'Проєкт намбер 2',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2d82fc109431553.5fd37635e32a2.jpg',
	},
	{
		title: 'Проєкт намбер 3',
		image:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e7dbdb95358347.5e95c4ce877b4.jpg',
	},
	{
		title: 'Проєкт намбер 3',
		image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d85b695358347.5e95c4ce85612.jpg',
	},
	{
		title: 'Проєкт намбер 3',
		image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/99fa9895358347.5e95c4ce84fb2.jpg',
	},
	{
		title: 'Проєкт намбер 3',
		image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/be0a0a95358347.5e95c4ce86787.jpg',
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
