import { Header } from '../ReuseComponent/Header/Header'
import FaqRow from '../components/FaqRow/FaqRow'
import { useState } from 'react'
import FaqList from '../components/FaqList/FaqList'
import { Footer } from '../ReuseComponent/Footer/Footer'
import Questions from '../components/Questions/Questions'

export default function FaqPage() {
	const [active, setActive] = useState('general')

	return (
		<>
			<Header />
			<img className='faq-bg-img' src='/faq-bg-img.png' alt='' />
			<FaqRow active={active} setActive={setActive} />
			<FaqList />
			<Questions />
			<Footer />
		</>
	)
}
