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

const NavHome = (props) => (
	<Link
		to={"/dashboard"}
		style={{textDecoration:"none"}}
	>
		<div className="dashboard-nav-home dashboard-nav-button">
			<img
				src={HomeIcon}
				alt="Home"
			/>
		</div>
	</Link>
)

export default class DashboardNav extends React.Component {
	render() {
		return (
			<div className="dashboard-nav">
				<NavHome/>
				<NavButton 
					link_title="Users"
					link_dest="/users"
					link_icon_source={UsersIcon}
				/>
			</div>	
		)
	}
}