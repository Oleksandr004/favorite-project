import '../LoginForm/LoginForrm.scss'
import { useForm } from 'react-hook-form'
import '../../ReuseComponent/HomeBtn/HomeBtn'
import { HomeBtn } from '../../ReuseComponent/HomeBtn/HomeBtn'
import { useState, useEffect } from 'react'

export function LoginForm() {
	const {
		register,
		reset,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const onSubmit = (data) => {
		if (getValues('UserCode') !== code) {
			alert('Invalid code')
		}
		alert(JSON.stringify(data))
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
			<div className='login-page__container'>
				<HomeBtn />
				<section className='login-form'>
					<div className='login-form__container'>
						<h4 className='login-form__title'>LOGIN</h4>
						<img
							className='login-form__bg'
							src='/logo-login-page-bg.png'
							alt=''
						/>
						<form onSubmit={handleSubmit(onSubmit)}>
							<label>
								Login:
								<input
									{...register('UserLogin', { required: 'Required field' })}
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
								Password:
								<input
									type='password'
									{...register('UserPassword', {
										required: 'Required field',
										minLength: {
											value: 8,
											message: 'Minimum 8 characters',
										},
									})}
								/>
								<div>
									{errors?.UserPassword && (
										<p style={{ color: 'red', position: 'absolute' }}>
											{errors?.UserPassword?.message || 'error'}
										</p>
									)}
								</div>
							</label>
							<label style={{ position: 'relative' }}>
								Enter Code<span>*</span>:
								<input
									{...register('UserCode', {
										required: 'Required field',
										minLength: {
											value: 5,
											message: 'Minimum 5 characters',
										},
										maxLength: {
											value: 5,
											message: 'Maximum 5 characters',
										},
									})}
								/>
								<div>
									{errors?.UserCode && (
										<p style={{ color: 'red', position: 'absolute' }}>
											{errors?.UserCode?.message || 'error'}
										</p>
									)}
								</div>
								<div className='code-text'>{code}</div>
							</label>

							<a href='#!' className='forgot-pass'>
								Forgot password?
							</a>
							<button className='login-form__btn' type='submit'>
								Login
							</button>
						</form>
					</div>
				</section>
			</div>
		</>
	)
}