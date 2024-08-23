import './Footer.scss'
import { Link } from 'react-router-dom'

export function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__logo'>
					<img src='/logo.png' alt='' />
				</div>
				<div className='footer__lines-bg'>
					<img className='line-first' src='/footer__first-line.png' alt='' />
					<img className='line-second' src='/footer__second-line.png' alt='' />
					<img className='line-third' src='/footer__third-line.png' alt='' />
				</div>
				<nav className='footer__nav'>
					<div className='footer__nav-container'>
						<ul className='footer__nav-list'>
							<li className='footer__nav-element'>
								<Link to='/' className='footer__nav-link'>
									HOME
								</Link>
							</li>
							<li className='footer__nav-element'>
								<Link to='/about' className='footer__nav-link'>
									ABOUT THE CLUB
								</Link>
							</li>
							<li className='footer__nav-element'>
								<Link to='/faq' className='footer__nav-link'>
									FAQ
								</Link>
							</li>
							<li className='footer__nav-element'>
								<Link to='/news' className='footer__nav-link'>
									NEWS
								</Link>
							</li>
							<li className='footer__nav-element'>
								<Link to='/rules' className='footer__nav-link'>
									RULES
								</Link>
							</li>
							<li className='footer__nav-element'>
								<Link to='/contact' className='footer__nav-link'>
									CONTACTS
								</Link>
							</li>
						</ul>
						<div className='footer__social-row'>
							<div className='social-row__container'>
								<img
									src='/footer-instagram.png'
									alt=''
									className='social-row-icon'
								/>
								<img
									src='/footer-youtube.png'
									alt=''
									className='social-row-icon'
								/>
								<img
									src='/footer-facebook.png'
									alt=''
									className='social-row-icon'
								/>
								<img
									src='/footer-twiter.png'
									alt=''
									className='social-row-icon'
								/>
							</div>
						</div>
					</div>
				</nav>
				<p className='footer__copyright'>Copyright © Заболотній олександр</p>
				<p className='footer__title'>FC BAYERN FAN TOKEN</p>
			</div>
		</footer>
	)
}
