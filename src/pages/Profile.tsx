import React from 'react';
import {IonContent, IonPage, IonText} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import LoginForm from "./LoginForm";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <PageTitle pageTitle={"Mon compte"}/>
            <IonContent fullscreen>
                {/*TODO PAGE MON COMPTE*/}
                <IonText>Mon compte</IonText>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
