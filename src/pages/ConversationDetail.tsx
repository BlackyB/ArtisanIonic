import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonItem,
    IonList,
    IonPage,
    IonLabel,
    IonIcon,
    IonText,
    IonInput,
    IonButton, IonToast
} from '@ionic/react';
import {send} from 'ionicons/icons';
import PageTitle from "../components/PageTitle";
import messages from "../DataOffline/Messages";


let conv = {
    id: 1,
    ad_title: 'Travaux cuisine',
    img: "https://picsum.photos/400",
    user_1_id: 12,
    user_2_id: 27,
    last_message_date: "22/08",
    last_message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    new_message: false,
    other_user: "Marcel Dublanc"
}

let userId: number = 27;
// let other_user_id = conv['user_1_id'] === userId ? conv['user_2_id'] : conv['user_1_id'];

let testUserIds = [27, 12]



const Conversation: React.FC = () => {

    let [input, setInput] = useState(null)
    let [newMessage, setNewMessage] = useState("")
    let [messageSent, setMessageSent] = useState(false)

    const options: Intl.DateTimeFormatOptions = {
        day: "numeric", month: "numeric", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    };

    const handleValueChange = (event: any) => {
        if (!input) {
            setInput(event.target)
        }
        //
        // if(messageSent) setMessageSent(false)

        setNewMessage(event.target.value)
    }

    const sendMessage = () => {

        let nextSender = testUserIds[Math.round(Math.random() * Math.floor(1))]

        // @ts-ignore
        if (newMessage) {
            var date = new Date();

            messages.push(
                {
                    id: 1,
                    username: 'Maxime William',
                    user_id: nextSender,
                    message_date: date.toLocaleDateString("fr-FR", options),
                    message_content: newMessage,
                    new_message: false
                }
            )
            // @ts-ignore
            input.value = null
            setMessageSent(true)
        }

    }

    const listenSubmit = (event:any) => {
        if (event?.charCode === 13) {
            if (newMessage != null) {
                sendMessage()
            }
        }
    }

    const scrollBottom = () => {
        let list = document.querySelector("ion-content"); return list && list.scrollToBottom();
    }

    useEffect(() => {
        scrollBottom()
    })



    return (
            <IonPage>
                <PageTitle pageTitle={conv['other_user'] + " - " + conv['ad_title']} previous={'/messagerie'}/>
                <IonContent>
                    <IonList className="ion-padding">
                        {
                            messages.map((message, index) => {

                                return (
                                    <IonItem key={index}
                                             color={userId === message['user_id'] ? 'primary' : 'light'}
                                             className={userId === message['user_id'] ? 'ion-margin chat-bubble chat-bubble-right ion-text-right' : 'ion-margin chat-bubble chat-bubble-left'}

                                    >
                                        <IonLabel className="ion-text-wrap">
                                            <IonText>
                                                <p>{message['message_content']}</p>
                                            </IonText>
                                            <IonText color="secondary">
                                                <p>{message['message_date']}</p>
                                            </IonText>
                                        </IonLabel>
                                    </IonItem>
                                )
                            })}
                    </IonList>
                </IonContent>
                <IonToast
                    isOpen={messageSent}
                    onDidDismiss={() => setMessageSent(false)}
                    message="Message envoyé"
                    duration={2000}
                    position="top"
                    color="success"
                />
                <IonItem lines="none" color="light">
                    <IonInput
                        className="custom-input"
                        name="message"
                        type="text"
                        placeholder="Répondre"
                        onIonChange={handleValueChange}
                        onKeyPress={listenSubmit}
                    />
                    <IonButton size="default" fill="outline" onClick={sendMessage}>
                        <IonIcon icon={send}/>
                    </IonButton>
                </IonItem>
            </IonPage>
    );
};

export default Conversation;
