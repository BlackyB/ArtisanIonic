import React, {useState} from 'react';
import {
    IonCol,
    IonContent, IonGrid, IonInfiniteScroll, IonInfiniteScrollContent,
    IonPage,
    IonRow,
    IonSearchbar, IonSpinner,
} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import {requestAPI} from "../API/API";
import Ad from "../components/Ad";

const Search = () => {

    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState(undefined)
    const [recentAd, setRecentAd] = useState()
    const [loading, setLoading] = useState(false)
    const [recentAdLoaded, setRecentAdLoaded] = useState(false)

    const [page, setPage] = useState(1)

    const loadRecentAds = async () => {
        try {
            let ads = await requestAPI("GET", "RECENT_ADS")
            if (ads) {
                setRecentAd(ads.data)
            }

        } catch {
            return null
        }
    }

    if (!recentAdLoaded) {
        loadRecentAds()
        setRecentAdLoaded(true)
    }

    const handleSearch = async (value: any) => {

        let nextPage = page

        if (searchText !== value) {
            nextPage = 1
            setPage(1)
            setSearchText(value)
        } else {
            nextPage++
            setPage(nextPage)
        }

        if (value) {
            try {
                setLoading(true)
                let ads = await requestAPI("GET", "ADS", null, null, [{
                    key: "page",
                    value: nextPage.toString()
                }, {key: "title", value: value}])

                if (searchText === value && searchResult) {
                    // @ts-ignore
                    setSearchResult(searchResult.concat(ads.data))
                } else {
                    setSearchResult(ads.data)
                }

            } catch {
                setSearchResult(undefined)
            }

            setLoading(false)

        } else {
            setLoading(false)
            setSearchResult(undefined)
        }
    }

    const handleScroll = (event: CustomEvent<void>) => {
        handleSearch(searchText);
        (event.target as HTMLIonInfiniteScrollElement).complete()
    }


    return (
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
                    </IonRow>

                    {loading
                        ?
                        <IonRow className="ion-justify-content-center">
                            <IonSpinner name="crescent"/>
                        </IonRow>
                        :
                        null
                    }

                    {searchResult ?
                        <>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="12" size-md="6">
                                    <Ad title="Résultat de la recherche" ad={searchResult}/>
                                </IonCol>
                            </IonRow>
                            <IonInfiniteScroll threshold="100px"
                                               onIonInfinite={(e: CustomEvent<void>) => handleScroll(e)}>
                                <IonInfiniteScrollContent
                                    loadingSpinner="bubbles"
                                    loadingText="Chargement des annonces suivantes...">
                                </IonInfiniteScrollContent>
                            </IonInfiniteScroll>
                        </>
                        :
                        null
                    }

                    {recentAd ?
                        <IonRow className="ion-justify-content-center">
                            <IonCol size="12" size-md="6">
                                <Ad title="Dernières Annonces" ad={recentAd}/>
                            </IonCol>
                        </IonRow>
                        :
                        null
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Search;
