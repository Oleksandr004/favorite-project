import { Header } from '../ReuseComponent/Header/Header'
import { Footer } from '../ReuseComponent/Footer/Footer'
import { NewsGrid } from '../components/NewsGrid/NewsGrid'

export default function NewsPages() {
	return (
		<>
			<Header />
			<img className='news__bg' src='/news-bg-img.png' alt='' />
			<NewsGrid />
			<Footer />
		</>
	)
}
