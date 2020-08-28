import {IonBackButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

import {chevronBack} from 'ionicons/icons';

const PageTitle = (props:any) => {
    return (
        <IonHeader>
            <IonToolbar color={"light"}>
                {/*<IonButtons slot="start">*/}
                {/*    <IonBackButton />*/}
                {/*</IonButtons>*/}
                <IonTitle className={"ion-text-center"}>{props.pageTitle}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default PageTitle
