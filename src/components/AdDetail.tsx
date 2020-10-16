import React, {useState} from 'react';
import {IonButton, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonRow} from "@ionic/react";
import {requestAPI} from "../API/API";
import {imagePath} from "../API/ServerUrl";

const AdDetail = (props: any) => {

    let id = props.match.params.id;
    const [detailsLoaded, setDetailsLoaded] = useState(false)
    const [details, setDetails] = useState({
        createdAt: null,
        title: undefined,
        description: null,
        image: [{path: null}],
        location: {
            city: {name: null},
            zip: {zip: null},
            departement: {name: null},
            region: {name: null}
        },
        user: {
            firstName: undefined,
            lastName: undefined,
            email: undefined
        }
    })

    const loadDetails = async (id: number) => {
        try {
            let rst = await requestAPI("GET", "AD", id)
            if (rst) {
                setDetails(rst.data)
            }
        } catch {
            return null
        }
    }

    if (!detailsLoaded) {
        loadDetails(id)
        setDetailsLoaded(true)
    }

    return (
        <IonContent>
            <IonGrid>
                {     console.log(details)}
                {detailsLoaded
                    ?

                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" size-md="6">
                            <IonRow>
                                <IonCol size="12" size-md="6" className="ion-padding">
                                    {details.image?.[0].path
                                        ?
                                        <img src={imagePath + details.image[0].path} alt={details.title}/>
                                        :
                                        <img src="/assets/image/empty.png" alt=""/>
                                    }

                                </IonCol>
                                <IonCol size="12" size-md="6" className="ion-padding">
                                    <h2 className="ion-text-center ion-no-margin ion-padding-bottom color-primary bold">{details.title}</h2>
                                    <IonItem>
                                        <IonLabel>
                                            {details.location.city.name} ({details.location.zip.zip})
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <sub>{details.location.departement.name} - {details.location.region.name}</sub>
                                    </IonItem>
                                    <IonRow className="ion-justify-content-center ion-padding">
                                        <a href={`mailto:${details.user.email}?Subject=${details.title}`}>
                                            <IonButton>Envoyer un message</IonButton>
                                        </a>
                                    </IonRow>
                                    <IonItem>
                                        <p>Annonce publiée le {details.createdAt} par {details.user.firstName} {details.user.lastName}</p>
                                    </IonItem>
                                    <IonItem>
                                        <p><span className="bold">Description:</span><br/><br/> {details.description}</p>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    :
                    <p>No data loaded</p>
                }

            </IonGrid>
        </IonContent>
    )
}

export default AdDetail