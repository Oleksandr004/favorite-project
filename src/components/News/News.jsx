import '../News/News.scss'
import { Link } from 'react-router-dom'

export function News() {
	return (
		<section className='news'>
			<div className='news__container'>
				<h2 className='news__title'>Latest News</h2>
				<div className='news__row'>
					<div className='news__row-element'>
						<img src='/news-img.png' alt='' />
						<h3 className='news__row-title'>
							Tokens Lorem ipsum dolor sit <br /> amet
						</h3>
						<p className='news__row-subtitle'>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br />
							elit, sed do eiusmod tempor incididunt ut labore et <br />
							dolore magna aliqua. Ut enim ad minim veniam
						</p>
					</div>
					<div className='news__row-element margin-left'>
						<img src='/news-img.png' alt='' />
						<h3 className='news__row-title'>
							Tokens Lorem ipsum dolor sit <br /> amet
						</h3>
						<p className='news__row-subtitle'>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
							sed do eiusmod tempor incididunt ut labore et <br /> dolore magna
							aliqua. Ut enim ad minim veniam
						</p>
					</div>
					<div className='news__row-element'>
						<img src='/news-img.png' alt='' />
						<h3 className='news__row-title'>
							Tokens Lorem ipsum dolor sit <br /> amet
						</h3>
						<p className='news__row-subtitle'>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
							sed do eiusmod tempor incididunt ut labore et <br />
							dolore magna aliqua. Ut enim ad minim veniam
						</p>
					</div>
				</div>
				<div className='news-btn'>
					<Link to='/news' href='#!'>
						VIEW ALL NEWS
					</Link>
				</div>
			</div>
		</section>
	)
}
