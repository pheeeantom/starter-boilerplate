import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/main/clients`} component={lazy(() => import(`./clients`))} />
        <Route path={`${APP_PREFIX_PATH}/planner`} component={lazy(() => import(`./planner`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/main`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);