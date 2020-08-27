import React from 'react';
import {
    IonAvatar,
    IonContent,
    IonItem,
    IonList,
    IonPage,
    IonText,
    IonCol
} from '@ionic/react';

let conversation = [
        {
            id: 1,
            ad_title: 'Travaux cuisine',
            username: 'Marcel',
            img: "https://picsum.photos/400",
            last_message_date: "22/08",
            last_message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            new_message: true
        },
        {
            id: 2,
            ad_title: 'Double vitrage',
            username: 'Philippe',
            img: "https://picsum.photos/400",
            last_message_date: "18/08",
            last_message_content: 'Pas pouvoir faire ça',
            new_message: false
        }
]


const Message: React.FC = () => {
    return (
        <IonContent>
            <IonPage>
                <IonContent fullscreen>
                    {/*<IonHeader collapse="condense">*/}
                    {/*    <IonToolbar>*/}
                    {/*        <IonTitle size="large">Tab 4</IonTitle>*/}
                    {/*    </IonToolbar>*/}
                    {/*</IonHeader>*/}

                    <IonList>
                        {
                            conversation.map(conv => {

                            return (
                                // <IonItem key={conv['id']} onClick={getDoctors}>
                                <IonItem className={"conversation"} key={conv['id']}>
                                    <IonAvatar>
                                        <img src={conv['img']}/>
                                    </IonAvatar>
                                    <IonCol className="ion-margin-horizontal">
                                        <IonText className="font-weight: bold;">
                                            <h3 className="ion-no-margin">{conv['username']}</h3>
                                        </IonText>
                                        <p className="ion-no-margin">{conv['ad_title']}</p>

                                    </IonCol>
                                    <p className="ion-no-margin">{conv['last_message_date']} - {conv['last_message_content']}</p>
                                </IonItem>
                            )
                        })}
                    </IonList>
                </IonContent>
            </IonPage>
        </IonContent>
    );
};

export default Message;
