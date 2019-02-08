import React from 'react'
import './Dashboard.css'
import './DashboardTable.css'

export default class DashboardTable extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="dashboard-body">
				<div className="dashboard-table-pagination">
					<button className="dashboard-table-page-button">1</button>
					<button className="dashboard-table-page-button">1</button>
					<button className="dashboard-table-page-button">1</button>
					<button className="dashboard-table-page-button">1</button>
					<button className="dashboard-table-page-button">Next</button>
				</div>
				<table className="dashboard-table-content">
					<thead>
						<tr className="dashboard-table-header">
						{
							this.props.table_headers.map((column) => (
								<th>{column}</th>
							))
						}
						</tr>
					</thead>
					<tbody>
					{
						this.props.table_items.map((item) => {
							return (
								<tr>
								{
									this.props.table_headers.map((column) => (
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