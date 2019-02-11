import React from 'react'
import './Dashboard.css'

import DashboardNav from './DashboardNav'

export default class DashboardPage extends React.Component {

	render() {
		return (
			<div className="dashboard-container">
					<DashboardNav pathname={this.props.pathname}/>
				<div className="dashboard-content">
					<div className="dashboard-page-title">
						<h2>{this.props.title}</h2>
					</div>
					<div className="dashboard-body">

						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}