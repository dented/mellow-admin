import React from 'react'
import DashboardPage from '../components/DashboardPage.js'

export default class DashboardUsers extends React.Component {
	constructor(props){
		super(props)
		this.state={
			table_columns:[],
			all_data:[],
			filtered_data:[],
			visible_data:[],
			number_of_pages:0
		}
	}

	componentDidMount() {
		const table_columns=["Name", "Role", "Gender"]
		const all_data=[
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
		]
		const filtered_data = all_data
		const number_of_pages = Math.ceil(filtered_data.length / 10)
		const visible_data = filtered_data.slice(0,10)
		this.setState({
			table_columns:table_columns,
			all_data:all_data,
			filtered_data:filtered_data,
			visible_data:visible_data,
			number_of_pages:number_of_pages
		})
	}

	switchPage = (page) => {
		//10 rows
		const start = page * 10 - 10
		const end = page * 10 
		const visible_data = this.state.filtered_data.slice(start, end)
		console.log(this.state.filtered_data)
		this.setState({
			visible_data:visible_data
		})
	}

	render() {
		return(
			<DashboardPage
				title="Users"
				show_table={true}
				table_columns={this.state.table_columns}
				table_data={this.state.visible_data}
				number_of_pages={this.state.number_of_pages}
				filters={[
					(<div className="dashboard-table-filter-button">
						Show Parents
					</div>)
				]}
				switchPage={this.switchPage}
			/>
		)
	}
}