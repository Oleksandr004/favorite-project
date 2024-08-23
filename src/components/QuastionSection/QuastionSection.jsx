import '../QuastionSection/QuastionSection.scss'

const QuastionSection = ({ title, description, id }) => {
	const elementId = 'quastion-section__element' + id
	const elementActiveClass = elementId + '-active'

	function quastionChange() {
		if (
			document.getElementById(elementId).classList.contains(elementActiveClass)
		) {
			document.getElementById(elementId).classList.remove(elementActiveClass)
			document.getElementById(elementId).classList.remove('active')
		} else {
			document.getElementById(elementId).classList.add(elementActiveClass)
			document.getElementById(elementId).classList.add('active')
		}
	}

	return (
		<section className='quastion-section'>
			<div className='quastion-section__container'>
				<div
					className='quastion-section__element'
					id={elementId}
					onClick={quastionChange}
				>
					<p
						className='quastion-section__title'
						dangerouslySetInnerHTML={{ __html: title }}
					></p>
					<svg
						className='toggle_close-btn'
						width='15'
						height='25'
						viewBox='0 0 15 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.6257 12.5001C14.6257 12.9481 14.4546 13.3961 14.1132 13.7377L3.36365 24.4871C2.67985 25.171 1.57117 25.171 0.887646 24.4871C0.204118 23.8036 0.204118 22.6952 0.887646 22.0113L10.3994 12.5001L0.887977 2.98877C0.204449 2.30497 0.204449 1.19663 0.887977 0.513157C1.5715 -0.170979 2.68018 -0.170979 3.36398 0.513157L14.1135 11.2624C14.455 11.6042 14.6257 12.0522 14.6257 12.5001Z'
							fill='white'
						/>
					</svg>
					<span
						className='quastion-section__description'
						dangerouslySetInnerHTML={{ __html: description }}
					></span>
				</div>
			</div>
		</section>
	)
}

export default QuastionSection
