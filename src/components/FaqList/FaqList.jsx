import './FaqList.scss'
import { faqList } from '../../helper/faqList.js'
import QuastionSection from '../QuastionSection/QuastionSection.jsx'
const FaqList = () => {
	return (
		<section className='faq-list'>
			<div className='faq-list__container'>
				{faqList.map((element) => {
					return (
						<QuastionSection
							key={element.id}
							title={element.title}
							id={element.id}
							description={element.description}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default FaqList
