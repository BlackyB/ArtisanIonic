import React, {useState} from 'react';
import {IonButton, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonRow} from "@ionic/react";
import {requestAPI} from "../API/API";
import {imagePath} from "../API/ServerUrl";

const AdDetail = (props: any) => {

    let id = props.match.params.id;
    const [detailsLoaded, setDetailsLoaded] = useState(false)
    const [detail, setDetail] = useState({
        title: undefined,
        description: null,
        image: [{path: null}],
        location: {
            city: {name: null},
            zip: {zip: null},
            departement: {name: null},
            region: {name: null}
        }
    })

    const loadDetails = async (id: number) => {
        try {
            let rst = await requestAPI("GET", "AD", id)
            if (rst) {
                setDetail(rst.data)
            }
        } catch {
            return null
        }
    }

    if( ! detailsLoaded)
    {
        loadDetails(id)
        setDetailsLoaded(true)
    }

    return (
        <IonContent>
            <IonGrid>
                {detailsLoaded
                    ?
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" size-md="6">
                            <IonRow>
                                <IonCol size="12" size-md="6" className="ion-padding">
                                    {detail.image?.[0].path
                                        ?
                                        <img src={imagePath + detail.image[0].path} alt={detail.title}/>
                                        :
                                        <img src="/assets/image/empty.png" alt=""/>
                                    }

                                </IonCol>
                                <IonCol size="12" size-md="6" className="ion-padding">
                                    <h2 className="ion-text-center ion-no-margin ion-padding-bottom color-primary bold">{detail.title}</h2>
                                    {detail.location.city ?
                                        <>
                                            <IonItem>
                                                <IonLabel>
                                                    {detail.location.city.name} ({detail.location.zip.zip})
                                                </IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <sub>{detail.location.departement.name} - {detail.location.region.name}</sub>
                                            </IonItem>
                                        </>
                                        :
                                        null
                                    }
                                    <IonRow className="ion-justify-content-center ion-padding">
                                        <IonButton>Envoyer un message</IonButton>
                                    </IonRow>
                                    <IonItem>
                                        <p><span className="bold">Description:</span><br/><br/> {detail.description}</p>
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