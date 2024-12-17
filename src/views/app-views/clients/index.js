import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy } from 'react';

const Clients = ({ match }) => {
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/clients-list`} />
			<Route path={`${match.url}/client-edit`} component={lazy(() => import(`./client-edit`))} />
			<Route path={`${match.url}/clients-list`} component={lazy(() => import(`./clients-list`))} />
		</Switch>
	)
}

export default Clients