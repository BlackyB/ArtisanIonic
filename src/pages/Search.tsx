import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PageTitle from "../components/PageTitle";

const Search: React.FC = () => {
    return (
        <IonContent>
            <IonPage>
                <PageTitle pageTitle={"Recherche"}/>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Tab 3</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ExploreContainer name="Tab 3 page"/>
                </IonContent>
            </IonPage>
        </IonContent>
    );
};

export default Search;
