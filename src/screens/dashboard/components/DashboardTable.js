import React from 'react'
import './Dashboard.css'
import './DashboardTable.css'

export default class DashboardTable extends React.Component {
	constructor(props){
		super(props)
		this.state={
			table_columns:[],
			table_data:[]
		}
	}

	componentDidMount() {
		const table_columns = this.props.table_columns || []
		//show 10 rows
		let table_data = this.props.table_data || []
		if(table_data.length > 0){
			table_data = table_data.slice(0,10)
		}
		const number_of_pages = Math.ceil(table_data.length / 10)
		this.setState({
			table_columns:table_columns,
			table_data:table_data,
			number_of_pages:number_of_pages
		})
	}

	render() {
		return (
			<div className="dashboard-body">
				<div className="dashboard-table-filters">
					<p>Filters</p>

				</div>
				<div className="dashboard-table-pagination">
					<button className="dashboard-table-page-button">{this.state.number_of_pages}</button>
					<button className="dashboard-table-page-button">Next</button>
				</div>
				<table className="dashboard-table-content">
					<thead>
						<tr className="dashboard-table-header">
						{
							this.state.table_columns.map((column) => (
								<th>{column}</th>
							))
						}
						</tr>
					</thead>
					<tbody>
					{
						this.state.table_data.map((item) => {
							return (
								<tr className="dashboard-table-row">
								{
									this.state.table_columns.map((column) => (
										<td>{item[column.toLowerCase()]}</td>
									))
								}
								</tr>
							)
						})
					}
					</tbody>
				</table>
			</div>
		)
	}
}