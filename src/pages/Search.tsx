import React, {useState} from 'react';
import {IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PageTitle from "../components/PageTitle";

const Search = (props: { match: { params: any; }; }) => {

    console.log(props.match.params)
    const [searchText, setSearchText] = useState('')

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
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"/>
                </IonContent>
            </IonPage>
        </IonContent>
    );
};

export default Search;
