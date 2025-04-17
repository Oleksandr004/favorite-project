import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

export function Header() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const htmlRef = useRef(document.documentElement)

	useEffect(() => {
		if (isBurgerOpen) {
			htmlRef.current.classList.add('unscroll')
		} else {
			htmlRef.current.classList.remove('unscroll')
		}
	}, [isBurgerOpen])

	const toggleBurger = () => {
		setIsBurgerOpen((prev) => !prev)
	}

	const navLinks = [
		{ to: '/', label: 'HOME' },
		{ to: '/about', label: 'ABOUT THE CLUB' },
		{ to: '/faq', label: 'FAQ' },
		{ to: '/news', label: 'NEWS' },
		{ to: '/rules', label: 'RULES' },
		{ to: '/contact', label: 'CONTACTS' },
	]

	return (
		<header
			id='header'
			className={`header ${isBurgerOpen ? 'header-active' : ''}`}
		>
			<div className='header__container'>
				<div className='header__row'>
					<img src='/logo.png' alt='Logo' className='header__row-logo' />

					<nav className='header__nav'>
						<ul
							className='header__nav-list'
							onClick={() => window.scrollTo(0, 0)}
						>
							{navLinks.map((link) => (
								<li key={link.to} className='header__nav-element'>
									<NavLink to={link.to} className='header__nav-link'>
										{link.label}
									</NavLink>
								</li>
							))}
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
						className={`header__burger-menu ${
							isBurgerOpen ? 'header__burger-menu-active' : ''
						}`}
						onClick={toggleBurger}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
}
