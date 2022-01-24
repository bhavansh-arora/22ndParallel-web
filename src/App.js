import React, { Component,useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Designers = React.lazy(() => import('./views/Designers/Designers'))
function App() {
  
  var logged = localStorage.getItem('login') === 'true';
  var screen = localStorage.getItem('screen')
  if(logged){
    if(screen=="superadmin"){
      return (
        <HashRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>            
      );
      }
      else if(screen=="designer") {
    return(
      <HashRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route path="/" name="Designers" render={props => <Designers {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>  
        
    )
      }
      }
  else{
    return(
      <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
        <Route exact path="/" name="Login Page" render={props => <Login {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter> 
      )
      }
    

}
export default App;
