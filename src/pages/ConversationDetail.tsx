import React, {useState} from 'react';
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
    new_message: true,
    other_user: "Marcel Dublanc"
}

let userId: number = 27;
// let other_user_id = conv['user_1_id'] === userId ? conv['user_2_id'] : conv['user_1_id'];


const Conversation: React.FC = () => {

    let [input, setInput] = useState(null)
    let [newMessage, setNewMessage] = useState("")
    let [messageSent, setMessageSent] = useState(false)

    const handleValueChange = (event: any) => {
        if (!input) {
            setInput(event.target)
        }
        //
        // if(messageSent) setMessageSent(false)

        setNewMessage(event.target.value)
    }

    const sendMessage = () => {

        // @ts-ignore
        if(newMessage) {
            messages.push(
                {
                    id: 1,
                    username: 'Maxime William',
                    user_id: 27,
                    message_date: "21/08/2020 18h38",
                    message_content: newMessage,
                    new_message: false
                }
            )
            // @ts-ignore
            input.value = null
            setMessageSent(true)
        }

    }

    return (
        <IonContent>
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
                    />
                    <IonButton size="default" fill="outline" onClick={sendMessage}>
                        <IonIcon icon={send}/>
                    </IonButton>
                </IonItem>
            </IonPage>
        </IonContent>
    );
};

export default Conversation;
