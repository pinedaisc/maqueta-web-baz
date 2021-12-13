import React from 'react';
import { useForm } from 'hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import bazLogo from 'assets/images/baz_logo.png'
import { User, Password } from 'assets/icons/icons'
import { startLogin } from 'actions/auth';
import { NavLink } from 'react-router-dom';

export const LoginScreen = () => {

	const [formValues, handleInputChange] = useForm({
		user: '',
		password: ''
	});

	const { error, message } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const { user, password } = formValues;

	const handleSubmit = (event) => {
		
		event.preventDefault()

		if (!Boolean(user) || !Boolean(password)) {
			return;
		}

		dispatch(startLogin(user, password));

	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="m-0 mx-md-0 mx-lg-0 mx-3 vh-100 d-flex justify-content-center align-items-center">
				<div className="card card-login w-100 p-4">
					<div className="d-flex justify-content-center align-items-center">
						<img src={bazLogo} alt="Logo Super App" className="logobaz mt-4 mb-4" />
						<h1 className="ms-3">baz</h1>
					</div>
					<div className="mt-5 mx-3 mb-3">
						<div className="d-flex align-items-center mb-2">
							<div className="icon"><User /></div>
							<h5 className="ms-2">Usuario</h5>
						</div>
						<input
							type="text"
							name="user"
							value={user}
							className="input mb-3"
							onChange={handleInputChange}
							required
						/>

						<div className="d-flex align-items-center mt-4">
							<div className="icon"><Password /></div>
							<h5 className="ms-2">Contraseña</h5>
						</div>
						<input
							type="password"
							name="password"
							value={password}
							className="input"
							onChange={handleInputChange}
							required
						/>
					</div>
					{!!error && <div style={{color:'red'}}>{message}</div>}
					<NavLink to ="/movies" >
					<button className="btn btn-baz-green mt-5 mb-4 font-weight-bold" type="submit">
						Continuar
					</button>
					</NavLink>
				</div>
			</div>
		</form>
	)
}