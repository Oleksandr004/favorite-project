import { Link } from 'react-router-dom'
import '../About/About.scss'

export function About() {
	return (
		<section className='about'>
			<div className='about__container'>
				<h3 className='about__title'>About us</h3>
				<div className='about__row'>
					<div className='about__row-text'>
						<p className='about__row-title'>
							The BAYERN Club,Creator of <br /> BAYERN Token.
						</p>
						<p className='about__row-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							<br />
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim <br /> ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute
							irure dolor in <br />
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla <br /> pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa <br /> qui officia deserunt mollit anim id
							est laborum. <br className='line-break' />{' '}
							<br className='line-break' />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							<br />
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim <br /> ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute
							irure dolor in <br />
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla <br /> pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa <br /> qui officia deserunt mollit anim id
							est laborum.
						</p>
					</div>
					<div className='about__row-img'>
						<img className='players' src='/football-players.png' alt='' />
						<img className='field' src='/football-field.png' alt='' />
					</div>
				</div>
				<div className='about-btn'>
					<Link to='/about'>READ MORE</Link>
				</div>
			</div>
		</section>
	)
}
