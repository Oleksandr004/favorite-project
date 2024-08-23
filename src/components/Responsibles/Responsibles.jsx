import '../Responsibles/Responsibles.scss'
import { Link } from 'react-router-dom'

export function Responsibles() {
	return (
		<section className='responsibles'>
			<div className='responsibles__container'>
				<h4 className='responsibles__title'>
					Responsible Operation & Responsible Trading
				</h4>
				<div className='responsibles__row'>
					<div className='row__img'>
						<img src='/responsibles__row-img.png' alt='' />
					</div>
					<div className='row__text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud <br />
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure <br /> dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt <br /> mollit anim id est laborum.{' '}
						<br className='line-break' /> <br className='line-break' />
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint
						occaecat cupidatat non proident, sunt in culpa qui officia <br />
						deserunt mollit anim id est laborum. <br className='line-break' />{' '}
						<br className='line-break' />
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat <br />
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia <br /> deserunt mollit anim id est laborum.
					</div>
				</div>
				<div className='responsible__description'>
					<h5 className='description__title'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</h5>
					<p className='description__description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud <br />
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint
						occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum. <br className='line-break' />{' '}
						<br className='line-break' /> Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia <br />
						deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className=' responsible__row-img__container'>
					<div className='responsible__row-img'>
						<img
							src='/responsible-row-img/left-img.png'
							alt=''
							className='row__img-element'
						/>
						<img
							src='/responsible-row-img/center-img.png'
							alt=''
							className='row__img-element'
						/>
						<img
							src='/responsible-row-img/right-img.png'
							alt=''
							className='row__img-element'
						/>
					</div>
				</div>
				<div className='responsible-btn'>
					<Link to='/login'>BY TOKEN</Link>
				</div>
				<p className='responsible__last-text'>
					Lorem ipsum dolor sit amet, consectetur
					<br /> adipiscing elit, sed do eiusmod tempor incididunt <br />
					ut labore et dolore magna aliqua.
				</p>
			</div>
		</section>
	)
}
