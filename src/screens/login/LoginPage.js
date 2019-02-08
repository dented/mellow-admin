import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'

import MellowLogo from 'statics/images/mellow-logo-full.png'

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username:'',
			password:''
		}
	}

	handleTextChange = (field, text) => {
		this.setState({
			[field]:text
		})
	}

	render() {
		return (
			<div className="login-container">
				<div className="login-logo">
					<img
						src={MellowLogo}
						alt=""
						height="100%"
						width="100%"
					/>
				</div>
				<form className="login-form">
					<input 
						type="text" 
						name="username"
						placeholder="Username"
						value={this.state.username}
						className="login-input"
						onChange={() => this.handleTextChange("username")}
					/>
					<input 
						type="password" 
						name="password" 
						placeholder="Password"
						value={this.state.username}
						className="login-input"
						onChange={() => this.handleTextChange("password")}
					/>
				</form>
				<Link to="/dashboard">
					<button 
						className="login-submit"
						onClick={() => console.log("hi")}
					>
						Login
					</button>
				</Link>
			</div>
		)
	}
}