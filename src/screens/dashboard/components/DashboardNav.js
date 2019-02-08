import React from 'react'
import {Link} from 'react-router-dom'
import './Dashboard.css'

import HomeIcon from "statics/nav-icons/home.png"
import UsersIcon from "statics/nav-icons/users.png"

const NavButton = (props) => (
	<Link
		to={props.link_dest}
		style={{textDecoration:"none"}}
	>
		<div className="dashboard-nav-button">
			<img
				src={props.link_icon_source}
				alt={props.link_title}
			/>
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
					link_icon_source={HomeIcon}
				/>
				<NavButton 
					link_title="Users"
					link_dest="/users"
					link_icon_source={UsersIcon}
				/>
			</div>	
		)
	}
}