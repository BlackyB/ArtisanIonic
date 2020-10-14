import React from 'react';
import {IonCol, IonRow, IonGrid, IonText} from '@ionic/react';
import '../App.css';

const Ad = (props: any) => {
    let data = colAd(props.ad)
    return (
        <IonGrid>
            <IonText className="ion-text-center">
                <h3>{props.title}</h3>
            </IonText>
            {data}
        </IonGrid>
    )
}

const colAd = (data: any) => {
    let tableRender: any = [];
    let columns: any = [];
    data.forEach((ad: any, i: any) => {
        let img = ad?.image?.length > 0 ? ad.image[0].path : "/assets/image/empty.png";
        columns.push(
            <IonCol key={"col-" + i} size="4">
                <a href={`/recherche/${ad.id}`}>
                    <img src={img} alt={`${ad.title}`}/>
                    <p className={"ion-text-center "}>{ad.title}</p>
                </a>
            </IonCol>
        );
        if ((i + 1) % 3 === 0) {
            tableRender.push(<IonRow key={"row-" + i}>{columns}</IonRow>);
            columns = [];
        }
    });

    if (columns !== []) {
        tableRender.push(<IonRow key={'rows'}>{columns}</IonRow>);
    }
    return tableRender;
}


export default Ad;