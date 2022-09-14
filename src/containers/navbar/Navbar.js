import React from 'react'
import './navbar.css'
import { BiHeart } from 'react-icons/bi'

import {
	Box,
	Flex,
	Button,
	Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Text,
	Avatar,
} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const MenuLinks = () => {
	return (
		<>
			<MenuItem>
				<Link as={ReachLink} to='/'>
					Home
				</Link>
			</MenuItem>
			<MenuItem>
				<Link as={ReachLink} to='/residential'>
					Residential
				</Link>
			</MenuItem>
			<MenuItem>
				<Link as={ReachLink} to='/commercial'>
					Commercial
				</Link>
			</MenuItem>
			<MenuItem>
				<Link as={ReachLink} to='/art'>
					Art
				</Link>
			</MenuItem>
			<MenuItem>
				<Link as={ReachLink} to='/about'>
					About
				</Link>
			</MenuItem>
			<MenuItem>
				<Link as={ReachLink} to='/contact'>
					Contact
				</Link>
			</MenuItem>
		</>
	)
}
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<Box bg={useColorModeValue('white.100', 'white.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box>
						<Text fontSize='sm'>Dyka Design</Text>
					</Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu isLazy>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<Avatar
										size={'sm'}
										src={'https://avatars.dicebear.com/api/male/username.svg'}
									/>
								</MenuButton>
								<MenuList alignItems={'center'}>
									<MenuLinks />
									<MenuDivider />
									<Center>
										<BiHeart size={20} />
									</Center>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}

export default Navbar
export { MenuLinks }
