import React from 'react'
import './DashboardUserDetails.css'

import DashboardPage from '../components/DashboardPage'
import DashboardTable from '../components/DashboardTable'

const users = [
	{
		name:"Johnsonson",
		role:"Child",
		gender:"Male"
	},
	{
		name:"Johnsonson",
		role:"Child",
		gender:"Male"
	},
	{
		name:"Johnsonson",
		role:"Child",
		gender:"Male"
	},
	{
		name:"Johnsonson",
		role:"Child",
		gender:"Male"
	}
]

export default class DashboardUserDetails extends React.Component {
	constructor(props){
		super(props)
		this.state={
			user:null
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id
		if(id) {
			const user = users[id]
			this.setState({
				user:user
			})
		}
	}

	render() {
		console.log(this.props)
		return (
			<DashboardPage
				title="User Details"
				pathname={'/users'}
			>
			{
				this.state.user != null
				? (
					<div>
						<div className="userDetails">
							<h3>Details</h3>
							<table className="dashboard-details-table">
								<tbody>
									<tr>
										<td className="dashboard-details-key">Name</td>
										<td>{this.state.user.name}</td>
									</tr>
									<tr>
										<td className="dashboard-details-key">Role</td>
										<td>{this.state.user.role}</td>
									</tr>
									<tr>
										<td className="dashboard-details-key">Gender</td>
										<td>{this.state.user.gender}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="userRelationshipsHeader">
							<h3>Relationships</h3>
						</div>
						<DashboardTable
							table_columns={[
								"Name","Relation"
							]}
						/>
					</div>
				)
				: null
			}
			</DashboardPage>
		)
	}
}