import { Header } from '../ReuseComponent/Header/Header'
import { RulesList } from '../components/RulesList/RulesList'
import { Footer } from '../ReuseComponent/Footer/Footer'
export default function RulesPage() {
	return (
		<>
			<Header />
			<img src='/rules-bg-img.png' alt='' className='rules-bg' />
			<RulesList />
			<Footer />
		</>
	)
}
