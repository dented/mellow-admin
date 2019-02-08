import React from 'react'
import DashboardPage from '../components/DashboardPage.js'

export default class DashboardUsers extends React.Component {
	render() {
		return(
			<DashboardPage
				title="Users"
				show_table={true}
				table_columns={["Name", "Role", "Gender"]}
				table_data={
					[
						{
							name:"Johnsonson",
							role:"Child",
							gender:"M"
						},
					]
				}
			/>
		)
	}
}