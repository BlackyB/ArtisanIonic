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

export const colAd = (data: any) => {
    let tableRender: any = [];
    let columns: any = [];
    data.forEach((ad: any, i: any) => {
        columns.push(
            <IonCol size="4" className={"ion-text-center"}>
                <img src={"https://picsum.photos/id/" + i * i +  "/200/200"} alt=""/>
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