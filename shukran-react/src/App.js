import {createContext,useState} from 'react';
import "./App.css";
import Home from "./Containers/Home/Home";
import "antd/dist/antd.css";
import {IntlProvider} from 'react-intl'
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
import {message} from './utils/lang/message';
import axios from'axios'

export const LanguageContext = createContext();


function App() {
  const [locale,setLocale] = useState(localStorage.getItem("locale") || "en"); //only ar and en
  function setOrientation(){
    document.querySelectorAll(".row,.nav,.banner-stripe").forEach(i => i.classList.toggle("rev")); //.rev on app.css
    document.querySelectorAll(".padding").forEach(i => i.classList.toggle("rev")); //.rev on app.css
  }

  axios.interceptors.request.use(req => {
    if(req.method==="get") req.params = {lang: locale}
    else req.data.lang = locale;
    console.log(req);
    return req;
  });

  return (
    <LanguageContext.Provider value={{locale,setLocale,setOrientation}}  >
    <IntlProvider locale={locale} messages={message[locale]}>
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
    </LanguageContext.Provider>
  );
}

export default App;
