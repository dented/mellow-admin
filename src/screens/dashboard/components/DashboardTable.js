import React from 'react'
import './Dashboard.css'
import './DashboardTable.css'

const DashboardPagination = (props) => {
	let pages = []
	for (let i = 1; i < props.number_of_pages+1; i++) {
		pages.push(
			<button 
				className="dashboard-table-page-button"
				onClick={() => props.switchPage(i)}
			>
				{i}
			</button>
		)
	}
	return (
		<div className="dashboard-table-pagination">
			{pages}
		</div>
	)
}

export default class DashboardTable extends React.Component {
	constructor(props){
		super(props)
		this.state={
			table_columns:[],
			visible_data:[],
			all_data:[],
			number_of_pages:0
		}
	}

	render() {
		return (
			<div className="dashboard-body">
				<DashboardPagination 
					number_of_pages={this.props.number_of_pages}
					switchPage={this.props.switchPage}
				/>
				<div className="dashboard-table-filters">
					{
						this.props.filters.map((filter) => (
							filter
						))
					}
					
				</div>
				<table className="dashboard-table-content">
					<thead>
						<tr className="dashboard-table-header">
						{
							this.props.table_columns.map((column) => (
								<th>{column}</th>
							))
						}
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					{
						this.props.table_data.map((item) => {
							return (
								<tr className="dashboard-table-row">
								{
									this.props.table_columns.map((column) => (
										<td>{item[column.toLowerCase()]}</td>
									))
								}
									<td></td>
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