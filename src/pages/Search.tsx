import React, {useState} from 'react';
import {
    IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonItem,
    IonPage,
    IonRow,
    IonSearchbar, IonSpinner,
    IonText
} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import {requestAPI} from "../API/API";
import Ad from "./Ad";


const Search = () => {

    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const [recentAd, setRecentAd] = useState()
    const [loading, setLoading] = useState(false)
    const [recentAdLoaded, setRecentAdLoaded] = useState(false)

    const loadRecentAds = async () => {
        try {
            let ads = await requestAPI("GET", "RECENT_ADS")

            setRecentAd(ads.data)
        } catch {
            return null
        }
    }

    if (!recentAdLoaded) {
        loadRecentAds()
        setRecentAdLoaded(true)
    }

    const handleSearch = async (value: string) => {
        setSearchText(value)

        if (value) {
            try {
                setLoading(true)
                let ads = await requestAPI("GET", "ADS", null, null, [{key: "title", value: value}])
                setSearchResult(ads.data)
            } catch {
                setSearchResult(null)
            }

            setLoading(false)
        } else {
            setSearchResult(null)
        }


    }


    return (
        <IonContent>
            <IonPage>
                <PageTitle pageTitle={"Recherche"}/>
                <IonContent fullscreen>
                    <IonGrid>
                        <IonRow className="ion-justify-content-center">
                            <IonCol size="12" size-md="6">
                                <IonSearchbar value={searchText} placeholder="Que recherchez-vous ?"
                                              onIonChange={e => handleSearch(e.detail.value!)}
                                              animated
                                              debounce={500}
                                              showCancelButton="focus"/>
                            </IonCol>

                            {/*<IonCol size="12" size-md="5">*/}
                            {/*    <IonSelect placeholder="Zone géographique" value="0" className="ion-text-center">*/}
                            {/*        <IonSelectOption value="0">Partout en France</IonSelectOption>*/}
                            {/*        /!*<option value={user.location.region.id}>Dans ma région ({user.location.region.name})</option>*!/*/}
                            {/*        /!*<option value={user.location.departement.id}>Dans mon departement ({user.location.departement.code})</option>*!/*/}
                            {/*        /!*<option value={user.location.city.id}>Dans ma ville {user.location.city.name} {user.location.city.zip}</option>*!/*/}
                            {/*    </IonSelect>*/}
                            {/*</IonCol>*/}
                        </IonRow>

                        {loading ?
                            <IonRow className="ion-justify-content-center">
                                <IonSpinner name="crescent"/>
                            </IonRow>

                            : null
                        }

                        {console.log(searchResult)}
                        {searchResult ?
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="10" size-md="6">
                                    <Ad title="Résultat de la recherche" ad={searchResult}/>
                                </IonCol>
                            </IonRow>
                            :
                            null
                        }

                        {recentAd ?
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="10" size-md="6">
                                    <Ad title="Dernières Annonces" ad={recentAd}/>
                                </IonCol>
                            </IonRow>
                            :
                            null
                        }

                    </IonGrid>
                </IonContent>
            </IonPage>
        </IonContent>
    );
};

export default Search;
