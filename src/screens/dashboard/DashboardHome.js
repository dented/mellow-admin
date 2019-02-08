import React from 'react'
import './components/Dashboard.css'

import DashboardTable from './components/DashboardTable'
import DashboardPage from './components/DashboardPage'

export default class DashboardHome extends React.Component {
	render() {
		return (
			<DashboardPage
				title="Home"
			/>
		)
	}
}