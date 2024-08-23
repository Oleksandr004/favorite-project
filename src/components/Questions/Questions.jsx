import '../Questions/Questions.scss'
import { Link } from 'react-router-dom'

const Questions = () => {
	return (
		<div className='faq-page__questions'>
			<h4 className='faq-page-questions__title'>
				Did Not Find an Answer <br /> to Your Question?
			</h4>
			<p className='faq-page-questions__description'>
				Write to us and we will answer you.
			</p>
			<Link to='/contact' className='faq-page__questions-btn'>
				ASK A QUESTION
			</Link>
		</div>
	)
}

export default Questions
