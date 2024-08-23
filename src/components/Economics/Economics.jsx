import '../Economics/Economics.scss'

export function Economics() {
	return (
		<section className='economics'>
			<div className='economics__container'>
				<h3 className='economics-title'>Economics</h3>
				<div className='economics-row'>
					<div className='economics__diagrama'>
						<img src='/diagrama.png' alt='' />
					</div>
					<div className='economics__text'>
						<h3 className='economics__text-title'>
							Lorem ipsum dolor sit amet, <br />
							consectetur adipiscing elit
						</h3>
						<p className='economics__text-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea
							<br /> commodo consequat. Duis aute irure dolor in reprehenderit
							in voluptate <br />
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat <br />
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est <br /> laborum. <br className='line-break' />
							<br className='line-break' />
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in <br /> culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
