import './voyageslider.css'

const VoyageSlider = () => {
	return (
		<>
			<div className='voyage-slider-container'>
				<div className='app'>
					<div className='cardList'>
						<button className='cardList__btn btn btn--left'>
							<div className='icon'>
								<svg>{/* <use xlink:href='#arrow-left'></use> */}</svg>
							</div>
						</button>

						<div className='cards__wrapper'>
							<div className='card current--card'>
								<div className='card__image'>
									<img
										src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1c2f3d132341893.61a72e81939c4.jpg'
										alt=''
									/>
								</div>
							</div>

							<div className='card next--card'>
								<div className='card__image'>
									<img
										src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4d60e1130411749.617fe05f7fd1c.jpg'
										alt=''
									/>
								</div>
							</div>

							<div className='card previous--card'>
								<div className='card__image'>
									<img
										src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a5c262139028605.622891eb10d43.jpg'
										alt=''
									/>
								</div>
							</div>
						</div>

						<button className='cardList__btn btn btn--right'>
							<div className='icon'>
								<svg>{/* <use xlink:href='#arrow-right'></use> */}</svg>
							</div>
						</button>
					</div>

					<div className='infoList'>
						<div className='info__wrapper'>
							<div className='info current--info'>
								<h1 className='text name'>Заєбатий Дизайн</h1>
								<h4 className='text location'>Краса кличе</h4>
								<p className='text description'>by Cherepashka</p>
							</div>

							<div className='info next--info'>
								<h1 className='text name'>Заєбатий дизайн #2</h1>
								<h4 className='text location'>Пригоди близько</h4>
								<p className='text description'>by Cherepashka</p>
							</div>

							<div className='info previous--info'>
								<h1 className='text name'>Заєбатий дизайн #3</h1>
								<h4 className='text location'>Хай мрії збуваються</h4>
								<p className='text description'>by Cherepashka</p>
							</div>
						</div>
					</div>

					{/* <div className='app__bg'>
						<div className='app__bg__image current--image'>
							<img
								src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1c2f3d132341893.61a72e81939c4.jpg'
								alt=''
							/>
						</div>
						<div className='app__bg__image next--image'>
							<img
								src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4d60e1130411749.617fe05f7fd1c.jpg'
								alt=''
							/>
						</div>
						<div className='app__bg__image previous--image'>
							<img
								src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a5c262139028605.622891eb10d43.jpg'
								alt=''
							/>
						</div>
					</div> */}
				</div>

				<svg
					className='icons'
					style={{ display: 'none'}}
				>
					<symbol
						id='arrow-left'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
					>
						<polyline
							points='328 112 184 256 328 400'
							style={{
								fill: 'none', stroke: ' #fff',
								// stroke- linecap:'round', stroke-linejoin:'round',
								// stroke- width:'48px'
								}}
						/>
					</symbol>
					<symbol
						id='arrow-right'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
					>
						<polyline
							points='184 112 328 256 184 400'
							style={{
								fill: 'none', stroke: '#fff',
								// stroke- linecap: 'round', 
						// stroke-linejoin:' round',
						// stroke-width:'48px'
							}}
						/>
					</symbol>
				</svg>
			</div>
		</>
	)
}

export default VoyageSlider
