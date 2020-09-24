import React, {useState} from 'react';
import {IonContent, IonHeader, IonItem, IonPage, IonSearchbar} from '@ionic/react';
import PageTitle from "../components/PageTitle";


const Search = () => {

    const [searchText, setSearchText] = useState('')

    return (
        <IonContent>
            <IonPage>
                <PageTitle pageTitle={"Recherche"}/>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonItem>

                            {/*<select>*/}
                            {/*    <option value="0">Partout en France</option>*/}
                            {/*    <option value={user.location.region.id}>Dans ma région ({user.location.region.name})</option>*/}
                            {/*    <option value={user.location.departement.id}>Dans mon departement ({user.location.departement.code})</option>*/}
                            {/*    <option value={user.location.city.id}>Dans ma ville ({user.location.city.name} {user.location.city.zip)}</option>*/}
                            {/*</select>*/}
                        </IonItem>
                    </IonHeader>
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}
                                  showCancelButton="focus"/>


                    <p>toto</p>
                    {/*<p>{user.user_data.name}</p>*/}

                </IonContent>
            </IonPage>
        </IonContent>
    );
};

export default Search;
