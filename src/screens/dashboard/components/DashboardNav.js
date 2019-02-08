import React from 'react'
import {Link} from 'react-router-dom'
import './Dashboard.css'

const NavButton = (props) => (
	<Link
		to={props.link_dest}
		style={{textDecoration:"none"}}
	>
		<div className="dashboard-nav-button">
			{props.link_title}
		</div>
	</Link>
)

export default class DashboardNav extends React.Component {
	render() {
		return (
			<div className="dashboard-nav">
				<NavButton 
					link_title="Home"
					link_dest="/dashboard"
				/>
				<NavButton 
					link_title="Users"
					link_dest="/users"
				/>
			</div>	
		)
	}
}