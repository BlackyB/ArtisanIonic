import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PageTitle from "../components/PageTitle";

const Home: React.FC = () => {
    return (
        <IonContent>
            <IonPage>
                <PageTitle pageTitle={"Accueil"}/>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Tab 2</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ExploreContainer name="Tab 2 page"/>
                </IonContent>
            </IonPage>
        </IonContent>
    );
};

export default Home;
