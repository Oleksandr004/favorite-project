import HomeBtn from '../../ReuseComponent/HomeBtn/HomeBtn'
import '../SignUpForm/SignUpForm.scss'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
export function SignUpForm() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
		setError,
		watch,
	} = useForm({ mode: 'onChange' })

	const password = watch('userPass')

	const onSubmit = (data) => {
		alert(JSON.stringify(data))
		if (data.userCode !== code) {
			setError('userCode', {
				type: 'manual',
				message: 'invalid code',
			})
			return
		}
		alert('Sign up successfully')
		reset()
	}

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
	return (
		<>
			<div className='signup_container'>
				<HomeBtn />
				<div className='signup-form__container'>
					<h4 className='signup-form__title'>SIGN UP</h4>

					<form onSubmit={handleSubmit(onSubmit)}>
						<label>
							Login:
							<input
								{...register('UserLogin', {
									required: 'Required field',
								})}
							/>
							<div>
								{errors?.UserLogin && (
									<p style={{ color: 'red', position: 'absolute' }}>
										{errors?.UserLogin?.message || 'error'}
									</p>
								)}
							</div>
						</label>
						<label>
							Email:
							<input
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
									<p style={{ color: 'red', position: 'absolute' }}>
										{errors?.userEmail?.message || 'error'}
									</p>
								)}
							</div>
						</label>
						<label>
							Password:
							<input
								type='password'
								{...register('userPass', {
									required: 'Required field',
									minLength: {
										value: 8,
										message: 'Minimum 8 characters',
									},
								})}
							/>
							<div>
								{errors?.userPass && (
									<p style={{ color: 'red', position: 'absolute' }}>
										{errors?.userPass?.message || 'error'}
									</p>
								)}
							</div>
						</label>
						<label>
							Retype Password:
							<input
								type='password'
								{...register('userPassRetype', {
									required: 'Required field',
									validate: (value) =>
										value === password || 'Passwords do not match',
								})}
							/>
							<div>
								{errors?.userPassRetype && (
									<p style={{ color: 'red', position: 'absolute' }}>
										{errors?.userPassRetype?.message}
									</p>
								)}
							</div>
						</label>
						<label className='signup-form__code-text '>
							Enter Code<span>*</span> :
							<input
								{...register('userCode', { required: 'Required field' })}
							/>
							<div className='code-text'>{code}</div>
							<div>
								{errors.userCode && (
									<p style={{ color: 'red', position: 'absolute' }}>
										{errors?.userCode?.message}
									</p>
								)}
							</div>
						</label>
						<div className='signup-form__agrees'>
							<input
								type='radio'
								value={true}
								{...register('terms', {
									required: 'You must agree to continue',
								})}
							/>
							<a href='#!'>I agree with Terms and conditions</a>
							{errors.terms && (
								<p
									style={{
										color: 'red',
										position: 'absolute',
										marginTop: '40px',
									}}
								>
									{errors.terms.message}
								</p>
							)}
						</div>
						<button className='signup-form__btn' type='submit'>
							SIGN UP
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
