import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import LoginPage from 'screens/login/LoginPage'
import DashboardHome from 'screens/dashboard/DashboardHome'

 const AppRoutes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={LoginPage}/>
			<Route path="/dashboard" component={DashboardHome}/>
		</Switch>
	</Router>
)

 export default AppRoutes