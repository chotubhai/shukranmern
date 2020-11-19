import "./App.css";
import Home from "./Containers/Home/Home";
import "antd/dist/antd.css";
import {IntlProvider, FormattedMessage} from 'react-intl'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Containers/SignIn/SignIn";
import {Navbar} from "./Components/Navbar/Navbar";
import SignInNoProfile from "./Containers/SignIn/SignInNoProfile";
import SignInProfile from "./Containers/SignIn/SignInProfile";
import Footer from "./Components/Footer/Footer";
import {AdminPortal} from './Containers/Admin/AdminPortal';
import {UpdateOffer} from './Components/AdminComponent/updateOffer';
import {UpdateEvent} from './Components/AdminComponent/updateEvent';
import {Offers} from './Containers/Offers/offer';
import {Events} from './Containers/Events/Events';
import {OfferView} from './Containers/offerview/OfferView';
import {EventView} from './Containers/eventview/EventView';
import AdminSignIn from './Components/admin_signup/SignIn';
import {ProtectedRoute} from './Components/protectedRoute/ProtectedRoute';

function App() {
  return (
    <IntlProvider locale="en" >
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/adminSignin" component={AdminSignIn}/>
          <Route exact path="/signin-no-profile" component={SignInNoProfile} />
          <Route exact path="/signin-profile" component={SignInProfile} />
          <ProtectedRoute exact path="/admin" component={AdminPortal}/>
          <Route exact path="/offers" component={Offers}/>
          <Route exact path="/events" component={Events}/>
          <Route path="/offerview" component={OfferView}/>
          <Route path="/eventview" component={EventView}/>
          <Route path="/admin/updateOffer" component={UpdateOffer}/>
          <Route path="/admin/updateEvent" component={UpdateEvent}/>
        </Switch>
        <Footer />
      </Router>
    </div>
    </IntlProvider>
  );
}

export default App;
