import React, { useContext, useEffect } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import './App.css';
import {IonReactRouter} from '@ionic/react-router';
import {person, home, search, chatbox} from 'ionicons/icons';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Search from './pages/Search';
import Conversation from './pages/Conversation';
import ConversationDetail from './pages/ConversationDetail';
import Auth from './classes/Auth';
import SignInForm from "./pages/SignInForm";
import PrivateRoute from "./components/PrivateRoute";
import AdForm from "./pages/AdForm";
import AdDetail from "./components/AdDetail";


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';


const App: React.FC = () => {
    
    useEffect(() => {
        const storedData = localStorage.getItem("user");
    });
    return (
        <IonApp>
            <Auth>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Switch>
                                <Route exact path="/profile" component={Profile}/>
                                <Route exact path="/accueil" component={Home}/>
                                <Route exact path="/recherche" component={Search}/>
                                <Route path="/recherche/:id" component={AdDetail}/>
                                <PrivateRoute exact path="/messagerie/conversation" component={ConversationDetail}/>
                                <PrivateRoute path="/messagerie" component={Conversation}/>
                                <Route exact path="/inscription" component={SignInForm}/>
                                <Route exact path="/profile/annonce" component={AdForm}/>
                                <Route exact path="/" render={() => <Redirect to="/accueil"/>}/>
                            </Switch>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom" color="primary">
                            <IonTabButton tab="tab1" href="/profile" className="ion-tab">
                                <IonIcon icon={person} className={"ionTab"}/>
                                <IonLabel>Mon compte</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab2" href="/accueil" className="ion-tab">
                                <IonIcon icon={home}/>
                                <IonLabel>Accueil</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab3" href="/recherche" className="ion-tab">
                                <IonIcon icon={search}/>
                                <IonLabel>Rechercher</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab4" href="/messagerie" className={"ion-tab"}>
                                <IonIcon icon={chatbox}/>
                                <IonLabel>Messagerie</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </Auth>
        </IonApp>
    );
}

export default App;
