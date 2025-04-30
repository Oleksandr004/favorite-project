import '../HomeBtn/HomeBtn.scss'

const HomeBtn = () => {
	return (
		<a href='/' className='home_btn'>
			<img className='home_arrow' src='/arrow.png' />
			<p className='home_link'>TO HOMEPAGE</p>
		</a>
	)
}

export default HomeBtn
