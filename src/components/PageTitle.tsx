import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

const PageTitle = (props:any) => {
    return (
        <IonHeader className={"bg-primary"}>
            <IonToolbar color={"custom-primary"}>
                <IonTitle className={"ion-text-center"}>{props.pageTitle}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default PageTitle
