import React from 'react'
import DashboardPage from '../components/DashboardPage'
// import DashboardTableFilters from '../components/DashboardTableFilters'
import DashboardTable, { DashboardTableFilters, DashboardTablePagination } from '../components/DashboardTable'

import Select from 'react-select'

const options = [
  { value: 'all', label: 'All' },
  { value: 'parent', label: 'Parent' },
  { value: 'child', label: 'Child' }
]

const selectStyles = {
	option: (provided, state) => ({
		...provided,
		// borderBottom: '1px dotted pink',
		// color: state.isSelected ? 'red' : 'blue',
		// padding: 20,
	}),
	control: (provided) => ({
	// none of react-select's styles are passed to <Control />
	// width: 200,
		...provided,
		width:150,
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...provided, opacity, transition };
	}
}

const RoleFilter = (props) => (
	<div className="dashboard-table-filter-container">
		<p className="dashboard-table-filter-label">Role:</p>
		<Select 
			options={options} 
			styles={selectStyles}
			defaultValue={options[0]}
			onChange={props.handleChange}
		/>
	</div>
)

const RoleFilter2 = (props) => (
	<div className="dashboard-table-filter-container">
		<p className="dashboard-table-filter-label">Role:</p>
		<select onChange={props.handleChange}>
			<option>All</option>
			<option>Parent</option>
		</select>
	</div>
)

export default class DashboardUsers extends React.Component {
	constructor(props){
		super(props)
		this.state={
			table_columns:[],
			all_data:[],
			filtered_data:[],
			visible_data:[],
			number_of_pages:0,
			table_actions:[
				{label:"View", action:this.handleAction},
				{label:"Edit", action:this.handleAction}
			],
			current_page:1
		}
	}

	handleAction = (item) => {
		console.log(item)
		console.log(this.props.history.push('/users/' + item.id))
	}

	componentDidMount() {
		const table_columns=["Name", "Role", "Gender"]
		const all_data=[
			{
				id:0,
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				id:1,
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				id:2,
				name:"Johnsonson",
				role:"Child",
				gender:"M"
			},
			{
				id:3,
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
		if(page === "prev" || page === "next"){
			return
		}
		//10 rows
		const start = page * 10 - 10
		const end = page * 10 
		const visible_data = this.state.filtered_data.slice(start, end)
		console.log(this.state.filtered_data)
		this.setState({
			visible_data:visible_data,
			current_page:page
		})
	};

	showRoleOptions = () => {
		this.setState({
			show_role_options: true
		})
	}

	filterRole = (role) => {
		let filtered_data = this.state.all_data
		if(role != 'All'){
			filtered_data = this.state.all_data.filter((item) => {
				if(item.role === role) return true
			})
		}
		const visible_data = filtered_data.slice(0,10)
		const number_of_pages = Math.ceil(filtered_data.length / 10)
		this.setState({
			filtered_data:filtered_data,
			visible_data:visible_data,
			number_of_pages:number_of_pages
		})
	}

	handleRoleChange = (value) => {
		console.log(value)
		this.filterRole(value.label)
	}

	render() {
		console.log(this.props.location)
		return(
			<DashboardPage
				title="Users"
				pathname={this.props.location.pathname}
			>
				<DashboardTableFilters>
					<RoleFilter 
						filterRole={this.filterRole}
						showRoleOptions={this.showRoleOptions} 
						show_role_options={this.state.show_role_options}
						handleChange={this.handleRoleChange}
					/>
				</DashboardTableFilters>
				<DashboardTablePagination 
					number_of_pages={this.state.number_of_pages}
					switchPage={this.switchPage}
					current_page={this.state.current_page}
				/>
				<DashboardTable
					table_columns={this.state.table_columns}
					table_data={this.state.visible_data}
					table_actions={this.state.table_actions}
				/>
				<DashboardTablePagination 
					number_of_pages={this.state.number_of_pages}
					switchPage={this.switchPage}
					current_page={this.state.current_page}
				/>
			</DashboardPage>
		)
	}
}