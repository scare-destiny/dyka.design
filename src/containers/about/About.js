import React from 'react'
import {
	Box,
	chakra,
	Flex,
} from '@chakra-ui/react'
import './about.css'

const About = () => {
	return (
		<Flex
			textAlign={'center'}
			pt={10}
			pb={10}
			justifyContent={'center'}
			direction={'column'}
			width={'full'}
		>
			<div className='about-heading-wrapper'>
				<div className='about-heading-container'>
					<h1>
						WELCOME 
						TO
				 DYKA DESIGN
					</h1>
				</div>
			</div>
			<Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
				<chakra.p
					fontFamily={'Inter'}
					fontWeight={'medium'}
					fontSize={'1rem'}
					p={5}
				>
					<span className='about-span'>
						{' '}
						Hi, my name is Anastasiia, and welcome to my website!{' '}
					</span>{' '}
					My passion for design and understanding clients' needs is what I have lived
					and breathed the last decade. For me, talent results from discipline, so I
					push myself every day to improve.
				</chakra.p>
				<chakra.p
					fontFamily={'Inter'}
					fontWeight={'medium'}
					fontSize={'1rem'}
					p={5}
				>
					My career started at a design bureau while I studied at Berlin
					International University. Over the years, I've successfully finished dozens
					of projects and received positive feedback.
				</chakra.p>
				<chakra.p
					fontFamily={'Inter'}
					fontWeight={'medium'}
					fontSize={'1rem'}
					p={5}
				>
					Every interior should tell your authentic story. It should express where
					you've been, where you are, and where you're going. I take pride in helping
					my clients live life more beautifully and turn their ideas into reality.
				</chakra.p>
			</Box>
		</Flex>
		// </div>
	)
}

export default About
