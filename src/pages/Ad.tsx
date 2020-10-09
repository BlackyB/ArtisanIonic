import React from 'react';
import {IonCol, IonRow, IonGrid} from '@ionic/react';
import '../App.css';

const Ad = (props: any) => {
    let data = colAd(props.ad)
    return (
        <IonGrid>
            {data}
        </IonGrid>
    )
}

const colAd = (data: any) => {
    let tableRender: any = [];
    let columns: any = [];
    data.forEach((ad: any, i: any) => {
        let img = ad?.img ? ad.img : "/assets/image/empty.png";
        columns.push(
            <IonCol size="4">
                <img className={"hover-ad"} src={img} alt=""/>
                <p className={"ion-text-center "}>{ad.title}</p>
            </IonCol>
        );
        if ((i + 1) % 3 === 0) {
            tableRender.push(<IonRow>{columns}</IonRow>);
            columns = [];
        }
    });

    if (columns !== []) {
        tableRender.push(<IonRow>{columns}</IonRow>);
    }
    return tableRender;
}


export default Ad;