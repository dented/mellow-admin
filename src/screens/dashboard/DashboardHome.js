import React from 'react'
import './components/Dashboard.css'

import DashboardPage from './components/DashboardPage'

export default class DashboardHome extends React.Component {
	render() {
		return (
			<DashboardPage
				title="Home"
				pathname={this.props.location.pathname}
			/>
		)
	}
}