import { Header } from '../ReuseComponent/Header/Header'
import { Home } from '../components/Home/Home'
import { TokensPurchased } from '../components/TokensPurchased/TokensPurchased'
import { Economics } from '../components/Economics/Economics'
import { About } from '../components/About/About'
import { Contract } from '../components/Contract/Contract'
import { Roadmap } from '../components/Roadmap/Roadmap'
import { News } from '../components/News/News'
import { Partners } from '../components/Partners/Partners'
import { Footer } from '../ReuseComponent/Footer/Footer'
export default function HomePage() {
	return (
		<>
			<img className='header__bg' src='/start-background.png' alt='' />
			<Header />
			<Home />
			<TokensPurchased />
			<Economics />
			<About />
			<Contract />
			<Roadmap />
			<News />
			<Partners />
			<Footer />
		</>
	)
}
