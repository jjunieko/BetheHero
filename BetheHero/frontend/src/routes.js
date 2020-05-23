import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Logon from'./Pages/Logon';
import NewIncident from './Pages/Logon/Newincident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Logon} />
                <Route path= "/Register" component={Register} />
           
           
                <Route path="/Profile" component={Register} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );

}