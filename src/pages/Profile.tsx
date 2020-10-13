import React from 'react';
import {IonButton, IonCol, IonContent, IonPage, IonRow} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import Ad from "../components/Ad";
import {AuthConsumer} from "../context/AuthContext";
import Login from "../components/Login";

const Profile: React.FC = () => {

    return (
        <AuthConsumer>
            {({authenticated, accessToken, user}) =>
                authenticated ? (
                    <IonPage>
                        <PageTitle pageTitle={"Mon compte"}/>
                        <IonContent fullscreen>
                            <IonRow>

                                {/*<p>{user?.role}</p>*/}

                                {/*TODO PAGE MON COMPTE*/}

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
