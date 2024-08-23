import { Header } from '../ReuseComponent/Header/Header'
import { Footer } from '../ReuseComponent/Footer/Footer'
import { ContactsInfo } from '../components/ContactsInfo/ContactsInfo'

export default function ContactPage() {
	return (
		<>
			<Header />
			<img src='/contacrts-bg-img.png' className='contacrts-bg-img' alt='' />
			<ContactsInfo />
			<Footer />
		</>
	)
}
