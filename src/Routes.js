import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import LoginPage from 'screens/login/LoginPage'
import DashboardHome from 'screens/dashboard/DashboardHome'
import DashboardUsers from 'screens/dashboard/users/DashboardUsers'

 const AppRoutes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={LoginPage}/>
			<Route path="/dashboard" component={DashboardHome}/>
			<Route path="/users" component={DashboardUsers}/>
		</Switch>
	</Router>
)

 export default AppRoutes