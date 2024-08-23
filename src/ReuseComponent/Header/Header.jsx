import { NavLink, Link } from 'react-router-dom'
import './Header.scss'
export function Header() {
	function changeBurgerState() {
		if (
			document
				.getElementById('burger-menu')
				.classList.contains('header__burger-menu-active')
		) {
			document
				.getElementById('burger-menu')
				.classList.remove('header__burger-menu-active')
			document.getElementById('header').classList.remove('header-active')
		} else {
			document
				.getElementById('burger-menu')
				.classList.add('header__burger-menu-active')
			document.getElementById('header').classList.add('header-active')
			document.querySelector('html').classList.add('unscroll')
		}
	}

	return (
		<>
			<header
				id='header'
				className='header'
				onClick={document.querySelector('html').classList.remove('unscroll')}
			>
				<div className='header__container'>
					<div className='header__row'>
						<img src='/logo.png' alt='' className='header__row-logo' />
						<nav className='header__nav'>
							<ul className='header__nav-list' onClick={window.scrollTo(0, 0)}>
								<li className='header__nav-element'>
									<NavLink to='/' className='header__nav-link'>
										HOME
									</NavLink>
								</li>
								<li className='header__nav-element'>
									<NavLink to='/about' className='header__nav-link'>
										ABOUT THE CLUB
									</NavLink>
								</li>
								<li className='header__nav-element'>
									<NavLink to='/faq' className='header__nav-link'>
										FAQ
									</NavLink>
								</li>
								<li className='header__nav-element'>
									<NavLink to='/news' className='header__nav-link'>
										NEWS
									</NavLink>
								</li>
								<li className='header__nav-element'>
									<NavLink to='/rules' className='header__nav-link'>
										RULES
									</NavLink>
								</li>
								<li className='header__nav-element'>
									<NavLink to='/contact' className='header__nav-link'>
										CONTACTS
									</NavLink>
								</li>
							</ul>
							<div className='header__nav-btns'>
								<Link className='header__nav-btn login' to='/login'>
									LOGIN
								</Link>
								<Link className='header__nav-btn sign' to='/signup'>
									SIGN UP
								</Link>
							</div>
						</nav>
						<div
							id='burger-menu'
							className='header__burger-menu'
							onClick={changeBurgerState}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
