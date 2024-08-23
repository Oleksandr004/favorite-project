import '../WhyToken/WhyToken.scss'
import { Link } from 'react-router-dom'

export function WhyToken() {
	return (
		<section className='why-token'>
			<h3 className='why-token__title'>Why Bayern Fc Token?</h3>
			<div className='why-token_grid'>
				<div className='why-token__grid-element'>
					<img
						className='why-token__grid-img'
						src='/grid/Opportunity.png'
						alt=''
					/>
					<h5 className='why-token__grid-title'>
						Opportunity to influence the Team
					</h5>
					<p className='why-token__grid-description'>
						There is nothing more interesting than <br />
						supporting your club to victory and nothing <br />
						more unifying than the beautiful game of <br />
						football. This is an opportunity for fans to their <br />
						passion for this club one step further, Chelsea is <br />
						putting the fan at the heart of the club, through <br />
						the power to influence decision-making! With <br />
						Chelsea fan token, the club will seek your <br />
						opinion, and they’ll listen to your voice. This is <br />
						the opportunity for you to be heard and make a <br />
						difference as a fan.
					</p>
				</div>
				<div className='why-token__grid-element'>
					<img src='/grid/Rewards.png' alt='' className='why-token__grid-img' />
					<h5 className='why-token__grid-title'>Fantastic rewards</h5>
					<p className='why-token__grid-description'>
						Fans token holders have access to a host of <br />
						incredible opportunities to win exclusive VIP <br />
						rewards, games and access to a community of <br />
						super fans. These perks allow fans to feel more <br />
						involved in the club they already support, and <br />
						they add an extra level of pride and value as the <br />
						fan token will likely increase in value as the club <br />
						grows over time.
					</p>
				</div>
				<div className='why-token__grid-element'>
					<img
						src='/grid/Regulation.png'
						alt=''
						className='why-token__grid-img'
					/>
					<h5 className='why-token__grid-title'>Regulation</h5>
					<p className='why-token__grid-description'>
						Operation within strict, self-imposed <br />
						parameters to ensure we offer the highest <br />
						levels of consumer protection.
					</p>
				</div>
				<div className='why-token__grid-element'>
					<img src='/grid/Fan.png' alt='' className='why-token__grid-img' />
					<h5 className='why-token__grid-title'>Be a unique Fan</h5>
					<p className='why-token__grid-description'>
						With the innovation of Chelsea fan token, <br />
						Chelsea fans have the ability to move from <br />
						being spectators to heroes of the club by being <br />
						a partaker of every economic and <br />
						developmental plans of the team.
					</p>
				</div>
				<div className='why-token__grid-element'>
					<img src='/grid/Price.png' alt='' className='why-token__grid-img' />
					<h5 className='why-token__grid-title'>Price autonomy for fans</h5>
					<p className='why-token__grid-description'>
						The cost of fan tokens is determined by how <br />
						engaged supporters are with the club activities <br />
						through surveys and sales events. <br />
						Cryptocurrency values, on the other hand, are <br />
						determined by the real-world problems that the <br />
						underlying blockchain is solving as well as <br />
						investor interest in the technology.
					</p>
				</div>
				<div className='why-token__grid-element'>
					<img
						src='/grid/Community.png'
						alt=''
						className='why-token__grid-img'
					/>
					<h5 className='why-token__grid-title'>Building Strong community</h5>
					<p className='why-token__grid-description'>
						Certain intrapersonal experiences, such as <br />
						attending a team lunch with your favorite <br />
						personalities, cannot be purchased with <br />
						money.A holder of a Chelsea fan token can <br />
						receive this. Having a Chelsea fan token is <br />
						similar to having a platinum membership card <br />
						that grants you access to unique incentives and <br />
						VIP events.This is not restricted to a single <br />
						season.
					</p>
				</div>
			</div>
			<div className='why-token__lines'>
				<img
					className='why-token__lines-element lines-first'
					src='/footer__first-line.png'
					alt=''
				/>
				<img
					className='why-token__lines-element lines-second'
					src='/footer__second-line.png'
					alt=''
				/>
				<img
					className='why-token__lines-element lines-third'
					src='/footer__third-line.png'
					alt=''
				/>
			</div>
			<div className='why-token__btn'>
				<Link to='/signup'>REGISTER NOW</Link>
			</div>
		</section>
	)
}
