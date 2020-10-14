import React, {useEffect, useState} from 'react';
import {IonCol, IonContent, IonGrid, IonRow} from "@ionic/react";
import {requestAPI} from "../API/API";

const AdDetail = (props: any) => {

    let id = props.match.params.id;
    const [detail, setDetail] = useState({
        title: undefined,
        description: null,
        image: [],
        location: {
            city: {name: null},
            zip: {zip: null},
            departement: {name: null},
            region: {name: null}
        }
    })

    const load = async (id: number) => {
        if (id) {
            let rst = await requestAPI("GET", "AD", id)
            if (rst) {
                setDetail(rst.data)
            }
        }
    }

    useEffect(() => {
        load(id)
    }, [])



    return (
        <IonContent>
            <IonGrid>
                {detail
                    ?
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" size-md="6">
                            <IonRow>
                                <IonCol size="12" size-md="6" className="ion-padding">

                                    {detail.image.length ?
                                        <img src={detail?.image[0]} alt={detail.title} />
                                        :
                                        <img src="/assets/image/empty.png" alt="No image" />
                                    }

                                </IonCol>
                                <IonCol size="12" size-md="6" className="ion-padding">
                                    <h2 className="ion-text-center ion-no-margin ion-padding-bottom color-primary bold">{detail.title}</h2>
                                    {detail.location.city ?
                                        <>
                                            <p>{detail.location.city.name} ({detail.location.zip.zip})</p>
                                            <sub>{detail.location.departement.name} - {detail.location.region.name}</sub>
                                        </>
                                        :
                                        null
                                    }
                                    <p><span className="bold">Description:</span> {detail.description}</p>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    :
                    <p>Could not load data</p>
                }

            </IonGrid>
        </IonContent>
    )


    // const request = async (id: number) => {
    //     try {
    //         ad = await requestAPI("GET", "AD", id)
    //         // return adRequest;
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     const fetch = async () => {
    //         let rst = request(id)
    //     };
    //     fetch();
    // }, [id])


}

export default AdDetail