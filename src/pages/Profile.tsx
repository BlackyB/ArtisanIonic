import React from 'react';
import {IonButton, IonCol, IonContent, IonPage, IonRow, IonText} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import LoginForm from "./LoginForm";
import Ad from "./Ad";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <PageTitle pageTitle={"Mon compte"}/>
            <IonContent fullscreen>
                <IonRow>
                    {/*TODO PAGE MON COMPTE*/}
                    <IonCol size-md="3"/>
                    <IonCol size="12" size-md="6">
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <IonButton>Poster une annonce</IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <Ad ad={['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze']}/>
                        </IonRow>
                    </IonCol>
                    <IonCol size-md="3"/>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
