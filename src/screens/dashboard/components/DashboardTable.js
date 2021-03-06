import React from 'react'
import './Dashboard.css'
import './DashboardTable.css'

export const DashboardTableFilters = (props) => {
		return (
			<div className="dashboard-table-filters">
				<div className="dashboard-table-filter-row">
					{
						props.children 
					}
				</div>
			</div>
		)
}

export const DashboardTablePagination = (props) => {
	let pages = []
	for (let i = 1; i < props.number_of_pages+1; i++) {
		if(props.current_page === i){
			pages.push(
				<div 
					className="dashboard-table-page-button dashboard-table-page-button-active"
					onClick={() => props.switchPage(i)}
				>
					{i}
				</div>
			)
		} else {
			pages.push(
				<div 
					className="dashboard-table-page-button"
					onClick={() => props.switchPage(i)}
				>
					{i}
				</div>
			)
		}
	}
	return (
		<div className="dashboard-table-pagination">
			<div 
				className="dashboard-table-page-button"
				onClick={() => props.switchPage("prev")}
			>
				Prev
			</div>
			{pages}
			<div 
				className="dashboard-table-page-button"
				onClick={() => props.switchPage("next")}
			>
				Next
			</div>
		</div>
	)
}

class DashboardTableAction extends React.Component {
	constructor(props){
		super(props)
		this.state={
			show_more_actions_item:null
		}
	}

	showMoreActions = (item) => {
		if (this.state.show_more_actions_item === item) item = null
		this.setState({
			show_more_actions_item:item
		})
		document.addEventListener('mousedown',this.handleClickOutside)
	}

	handleClickOutside = (event) => {
		if (!this.node.contains(event.target)){
			console.log("clicked")
			this.setState({
				show_more_actions_item:null
			})
			document.removeEventListener('mousedown',this.handleClickOutside)
		}
	}

	handleClickButton = (event) => {
		event.preventDefault()
		console.log("clicked button")
	}

	render() {
		let hidden_list = []
		if(this.props.table_actions && this.props.table_actions.length > 1){
			const hidden_actions = this.props.table_actions.slice(1)
			hidden_actions.map((action) => {
				const hidden_div = (
					<div 
						className="dashboard-table-action-button dashboard-table-action-hidden"
						onClick={() => action.action(this.props.item)}
					>
						{action.label}
					</div>
				)
				hidden_list.push(hidden_div)
				return null
			})
		}
		return (
			<div className="dashboard-table-action" ref={node => this.node = node}>
				<div className="dashboard-table-action-select">
					{
						this.props.table_actions && this.props.table_actions.length > 0
						? (
							<div 
								className="dashboard-table-action-button"
								onClick={() => this.props.table_actions[0].action(this.props.item)}
							>
								{this.props.table_actions[0].label}
							</div>
						)
						: null
					}
					{
						this.state.show_more_actions_item && this.state.show_more_actions_item === this.props.item
						? hidden_list
						: null
					}
				</div>
				<div 
					className="dashboard-table-action-arrow" 
					onClick={() => this.showMoreActions(this.props.item)}
				>
					&#9660;
				</div>
			</div>
		)
	}
}

export default class DashboardTable extends React.Component {
	constructor(props){
		super(props)
		this.state={
			table_columns:[],
			visible_data:[],
			all_data:[],
			number_of_pages:0,
			show_filters:true,
			show_more_actions_item:null
		}
	}

	showMoreActions = (item) => {
		if (this.state.show_more_actions_item === item) item = null
		this.setState({
			show_more_actions_item:item
		})
	}

	render() {
		return (
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
						this.props.table_data && this.props.table_data.length > 0
						? 
							this.props.table_data.map((item) => {
								return (
									<tr className="dashboard-table-row">
									{
										this.props.table_columns.map((column) => (
											<td>{item[column.toLowerCase()]}</td>
										))
									}
										<td>
											<DashboardTableAction
												item={item}
												table_actions={this.props.table_actions}
											/>
										</td>
									</tr>
								)
							})
						: (
							<tr className="dashboard-table-row">
								<td colSpan={this.props.table_columns.length + 1} style={{textAlign:'center'}}>
								No Data
								</td>
							</tr>
						)
					}
					</tbody>
				</table>

		)
	}
}