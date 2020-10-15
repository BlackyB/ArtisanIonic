import React from 'react';
import {IonButton, IonCol, IonContent, IonPage, IonRow} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import Ad from "../components/Ad";
import {AuthConsumer} from "../context/AuthContext";
import Login from "../components/Login";


const Profile: React.FC = () => {

    let capitalize = function (word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <AuthConsumer>
            {({authenticated, accessToken, user, logout}) =>
                authenticated ? (
                    <IonPage>
                        <PageTitle pageTitle={"Mon compte"}/>
                        <IonContent fullscreen>
                            <IonRow className="ion-justify-content-center">
                                <p className="ion-text-center">Bienvenue sur votre espace personnel {capitalize(user.firstName)}</p>
                            </IonRow>
                            {/*TODO PAGE MON COMPTE*/}
                            <IonRow>
                                <IonCol size-md="3"/>
                                <IonCol size="12" size-md="6">
                                    <IonRow>
                                        <IonCol className="ion-text-center">
                                            <IonButton href="/profile/annonce">Poster une annonce</IonButton>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <Ad title="Mes annonces" ad={['un', 'deux', 'trois', 'quatre']}/>
                                    </IonRow>
                                </IonCol>
                                <IonCol size-md="3"/>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonButton onClick={logout}>
                                    Se déconnecter
                                </IonButton>
                            </IonRow>
                        </IonContent>
                    </IonPage>
                ) : (
                    <IonPage>
                        <Login/>
                    </IonPage>
                )
            }
        </AuthConsumer>

    );
};

export default Profile;
