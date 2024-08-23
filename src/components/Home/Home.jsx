import '../Home/Home.scss'
import { Link } from 'react-router-dom'

export function Home() {
	return (
		<section className='home'>
			<div className='home__container'>
				<h1 className='home__title'>
					FC BAYERN <br /> FAN TOKEN
				</h1>
				<p className='home__subtitle'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br />
					enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris
					nisi ut aliquip ex ea commodo consequat.
				</p>
				<div className='home__btns'>
					<Link to='/login' className='home__btn btn-by'>
						BY TOKEN
					</Link>
					<Link to='/signup' className='home__btn btn-register'>
						REGISTER
					</Link>
				</div>
			</div>
		</section>
	)
}
