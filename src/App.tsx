import React from 'react';
import {Redirect, Route} from 'react-router-dom';
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
import User from './classes/User'
import LoginForm from "./pages/LoginForm";
import SignInForm from "./pages/SignInForm";
import PrivateRoute from "./components/PrivateRoute";



const App: React.FC = () => {

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        {/*<PrivateRoute path="/profile" component={Profile} exact={true}/>*/}
                        <Route path="/profile" component={Profile} exact={true}/>
                        <Route path="/accueil" component={Home} exact={true}/>
                        <Route path="/recherche" component={Search} exact={true}/>
                        {/*<PrivateRoute path="/messages" component={Message} exact={true}/>*/}
                        <Route path="/messages" component={ConversationDetail} exact={true}/>
                        <Route path="/messagerie" component={Conversation} exact={true}/>
                        <Route path="/connexion" component={LoginForm} exact={true}/>
                        <Route path="/inscription" component={SignInForm} exact={true}/>
                        <Route path="/" render={() => <Redirect to="/accueil"/>} exact={true}/>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" color="primary">
                        <IonTabButton tab="tab1" href="/profile" className={"ion-tab"}>
                            <IonIcon icon={person} className={"ionTab"}/>
                            <IonLabel>Mon compte</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab2" href="/accueil" className={"ion-tab"}>
                            <IonIcon icon={home}/>
                            <IonLabel>Accueil</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab3" href="/recherche" className={"ion-tab"}>
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
        </IonApp>

    );

}

export default App;
