import { Header } from '../ReuseComponent/Header/Header'
import { AboutInfo } from '../components/AboutInfo/AboutInfo'
import { WhyToken } from '../components/WhyToken/WhyToken'
import { Responsibles } from '../components/Responsibles/Responsibles'
import { Footer } from '../ReuseComponent/Footer/Footer'
export function AboutTheClubPage() {
	return (
		<>
			<Header />
			<img className='about-the-club__png' src='/about-page-img.png' alt='' />
			<AboutInfo />
			<WhyToken />
			<Responsibles />
			<Footer />
		</>
	)
}
