import React from 'react'
import './Dashboard.css'

import DashboardTable from './DashboardTable'

export default class DashboardHome extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title:'Dashboard'
		}
	}
	render() {
		return (
			<div className="dashboard-container">
				<div className="dashboard-nav">

				</div>
				<div className="dashbaord-content">
					<div className="dashboard-header">
						<div className="header-left">
							<h3>{this.state.title}</h3>
						</div>
						<div className="header-right">
						</div>
					</div>

					<DashboardTable 
						table_headers={["Name", "Type", "Gender"]}
						table_items={
							[
								{
									name:"Johnsonson",
									type:"Child",
									gender:"M"
								},
								{
									name:"Johnsonson",
									type:"Child",
									gender:"M"
								}
							]
						}
					/>
				</div>
			</div>
		)
	}
}