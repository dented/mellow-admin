import React from 'react'
import './Dashboard.css'

import DashboardNav from './DashboardNav'
import DashboardTable from './DashboardTable'

export default class DashboardPage extends React.Component {

	render() {
		return (
			<div className="dashboard-container">
				<DashboardNav/>
				<div className="dashbaord-content">
					<div className="dashboard-header">
						<div className="header-left">
							<h3>{this.props.title || 'Dashboard'}</h3>
						</div>
						<div className="header-right">
						</div>
					</div>
					{
						this.props.show_table
						? (
							<DashboardTable 
								table_columns={this.props.table_columns}
								table_data={this.props.table_data}
								number_of_pages={this.props.number_of_pages}
								filters={this.props.filters}
								switchPage={this.props.switchPage}
							/>
						)
						: null
					}
				</div>
			</div>
		)
	}
}