import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import LoginPage from 'screens/login/LoginPage'
import DashboardHome from 'screens/dashboard/DashboardHome'
import DashboardUsers from 'screens/dashboard/users/DashboardUsers'
import DashboardUserDetails from 'screens/dashboard/users/DashboardUserDetails'

 const AppRoutes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={LoginPage}/>
			<Route path="/dashboard" component={DashboardHome}/>
			<Route path="/users" exact component={DashboardUsers}/>
			<Route path="/users/:id" component={DashboardUserDetails}/>
		</Switch>
	</Router>
)

 export default AppRoutes