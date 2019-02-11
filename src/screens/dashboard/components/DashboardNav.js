import React from 'react'
import {Link} from 'react-router-dom'
import './DashboardNav.css'

import HomeIcon from "statics/nav-icons/home.png"
import HomeActiveIcon from "statics/nav-icons/home-active.png"
// import UsersIcon from "statics/nav-icons/users2.svg"
import { UsersIcon } from "statics/nav-icons/NavIcons.js"

const NavHome = (props) => (
	<Link
		to={"/dashboard"}
		style={{textDecoration:"none"}}
	>
		<div className="dashboard-nav-home dashboard-nav-button">
		{
			props.active
			? <img
				src={HomeActiveIcon}
				alt="Home"
			/>
			: <img
				src={HomeIcon}
				alt="Home"
			/>
		}
		</div>
	</Link>
)

const NavButton = (props) => (
	<Link
		to={props.link_dest}
		style={{textDecoration:"none"}}
	>
		{
			props.pathname === props.link_dest //active
			? (
				<div className="dashboard-nav-button dashboard-nav-active">
					{props.link_icon}
				</div>
			)
			: (
				<div className="dashboard-nav-button">
					{props.link_icon}
				</div>
			)
		}
	</Link>
)


export default class DashboardNav extends React.Component {
	render() {
		return (
			<div className="dashboard-nav">
				<NavHome active={this.props.pathname === '/dashboard'}/>
				<NavButton 
					link_title="Users"
					link_dest="/users"
					link_icon={<UsersIcon/>}
					pathname={this.props.pathname}
				/>
			</div>	
		)
	}
}