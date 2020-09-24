import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

// import {chevronBack} from 'ionicons/icons';

const PageTitle = (props:any) => {
    return (
        <IonHeader>
            <IonToolbar>
                {/*<IonButtons slot="start">*/}
                {/*    <IonBackButton icon={chevronBack} />*/}
                {/*</IonButtons>*/}
                <IonTitle className={"ion-text-center"}>{props.pageTitle}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default PageTitle
