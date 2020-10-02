import React from 'react';
import {
    IonAvatar,
    IonContent,
    IonItem,
    IonList,
    IonPage,
    IonLabel,
    IonIcon
} from '@ionic/react';
import {chatbox} from 'ionicons/icons';
import PageTitle from "../components/PageTitle";
import conversation from "../DataOffline/Conversations"


const Conversation: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <PageTitle pageTitle="Messagerie"/>
                <IonList>
                    {
                        conversation.map((conv, index) => {

                            return (

                                <IonItem key={conv['id']} href="/messagerie/conversation" color={index % 2 === 0 ? 'light' : ''}
                                         className={conv['new_message'] ? 'message-border' : ''}>
                                    <IonAvatar slot="start">
                                        <img src={conv['img']} alt={'Photo de profil ' + index}/>
                                    </IonAvatar>
                                    <IonLabel color={conv['new_message'] ? 'primary' : ''}>
                                        <h3 className="color-dark">{conv['other_user']}</h3>
                                        <p className="color-light">{conv['ad_title']}</p>
                                        <p className={conv['new_message'] ? 'bold color-primary' : 'color-light'}>{conv['last_message_date']} - {conv['last_message_content']}</p>
                                    </IonLabel>
                                    {conv['new_message']
                                        ?
                                        <IonIcon slot="end" icon={chatbox} color="primary">
                                        </IonIcon>
                                        : ''
                                    }
                                </IonItem>
                            )
                        })}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Conversation;
