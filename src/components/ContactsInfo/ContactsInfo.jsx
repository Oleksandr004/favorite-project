import { useForm } from 'react-hook-form'
import '../ContactsInfo/ContactsInfo.scss'
import { useState, useEffect } from 'react'

export function ContactsInfo() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		setError,
	} = useForm({
		mode: 'onChange',
	})

	const [code, setCode] = useState('')

	useEffect(() => {
		const generateRandomCode = () => {
			const characters =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
			let randomCode = ''
			for (let i = 0; i < 5; i++) {
				randomCode += characters.charAt(
					Math.floor(Math.random() * characters.length)
				)
			}
			return randomCode
		}
		setCode(generateRandomCode())
	}, [])
	const onSubmit = (data) => {
		if (data.userCode !== code) {
			setError('userCode', {
				type: 'manual',
				message: 'Incorrect code',
			})
			return
		}
		alert('Form submitted successfully!')
		reset()
	}

	return (
		<section className='contacts'>
			<div className='contacts__container'>
				<h3 className='contacts__title'>CONTACTS</h3>
				<div className='contacts__row'>
					<div className='contacts__information'>
						<p className='contacts__info-title'>Contact Information</p>
						<div className='contacts__info-support'>
							<div className='support__img'>
								<img src='/contacts/support-img.png' alt='' />
							</div>
							<div className='support__text'>
								<h5 className='contacts__info-support__title'>Support:</h5>
								<a className='support__mail mail' href='#!'>
									bayerntoken@support.com
								</a>
							</div>
						</div>
						<div className='contacts__info-issues'>
							<div className='issues__img'>
								<img src='/contacts/issues-img.png' alt='' />
							</div>
							<div className='issues__text'>
								<h5 className='contacts__info-issues__title'>
									General issues:
								</h5>
								<a href='#!' className='issues__mail mail'>
									bayerntoken@support.com
								</a>
							</div>
						</div>
						<div className='contacts__info-partnership'>
							<div className='partnership__img'>
								<img src='/contacts/partnership-img.png' alt='' />
							</div>
							<div className='partnership__text'>
								<h5 className='contacts__info-partnership__title'>
									Partnership questions:
								</h5>
								<a href='#!' className='partnership__mail mail'>
									bayerntoken@support.com
								</a>
							</div>
						</div>
					</div>
					<div className='contacts__form'>
						<div className='contacts__form-container'>
							<h5 className='form__title'>Drop Us a Line</h5>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='contacts-form__first-row'>
									<div>
										<label className='input__title-name input__title'>
											Your Name:
											<input
												className='input__name'
												{...register('userName', {
													required: 'Required field',
													minLength: {
														value: 4,
														message: 'Minimum 4 characters',
													},
												})}
											/>
											<div>
												{errors?.userName && (
													<p style={{ color: 'red' }}>
														{errors?.userName?.message || 'error'}
													</p>
												)}
											</div>
										</label>
									</div>
									<div>
										<label className='input__title-email input__title'>
											Your Email<span>*</span>:
											<input
												className='input__email'
												{...register('userEmail', {
													required: 'Required field',
													pattern: {
														value:
															/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
														message: 'Enter valid email',
													},
												})}
											/>
											<div>
												{errors?.userEmail && (
													<p style={{ color: 'red' }}>
														{errors?.userEmail?.message || 'error'}
													</p>
												)}
											</div>
										</label>
									</div>
								</div>
								<label className='input__title-message input__title'>
									Message<span>*</span>:
									<input
										className='input__message'
										{...register('userMessage', {
											required: 'Required field',
										})}
									/>
									<div>
										{errors?.userMessage && (
											<p style={{ color: 'red' }}>
												{errors?.userMessage?.message || 'error'}
											</p>
										)}
									</div>
								</label>
								<label className='input__title-code input__title'>
									Enter Code<span>*</span>:
									<input
										className='input__code'
										{...register('userCode', {
											required: 'Required field',
										})}
									/>
									<div className='input__code-text'>{code}</div>
									{errors?.userCode && (
										<p style={{ color: 'red' }}>{errors.userCode.message}</p>
									)}
								</label>
								<button className='form__send-btn' type='submit'>
									SEND MESSAGE
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
