import React, {useContext, useState} from 'react';
import {IonButton, IonCol, IonContent, IonPage, IonRow} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import Ad from "../components/Ad";
import {AuthConsumer, authContext} from "../context/AuthContext";
import Login from "../components/Login";
import {requestAPI} from "../API/API";


const Profile: React.FC = () => {

    const [myAds, setMyAds] = useState()
    const [myAdsLoaded, setMyAdsLoaded] = useState(false)

    const context = useContext(authContext)

    const loadMyAds = async () => {
        try {
            let ads = await requestAPI("GET", "MY_ADS", null, null, [{key: "token", value: context.user.token}])
            setMyAds(ads.data)
        } catch {
            return null
        }
    }

    if (!myAdsLoaded) {
        loadMyAds()
        setMyAdsLoaded(true)
    }

    let capitalize = function (word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <AuthConsumer>
            {({authenticated, user, logout}) =>
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
                                        {myAdsLoaded && myAds ?
                                            <Ad title="Mes annonces" ad={myAds}/>
                                            :
                                            null
                                        }
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
