import {
    IonInput,
    IonButton,
    IonText,
    IonGrid,
    IonCol,
    IonRow, IonItem, IonItemDivider, IonTabs, IonContent
} from "@ionic/react";
import React from "react";
import {useForm} from 'react-hook-form';
import isEmail from "validator/lib/isEmail";
import firebase from "../firebase";

const SignInForm: React.FC = () => {

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    function onSubmit(data: any) {
        console.log(data);
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        // fetch("https://api.example.com/items")
        //     .then(
        //         res => res.json()
        //     )
        //     .then(
        //         // (result) => {
        //         //     user.setIs_logged({
        //         //         isLoaded: true,
        //         //         isLogged: true,
        //         //         items: result.items
        //         //     });
        //         // },
        //         // (error) => {
        //         //     this.setState({
        //         //         isLoaded: true,
        //         //         isLogged: false,
        //         //         error
        //         //     });
        //         // }
        //     )
    }

    return (
        <IonContent>
            <IonGrid className={"align-center"}>
                <IonRow className={"align-center"}>

                    <IonCol size="10" size-md="6">
                        <IonText className={"ion-text-center"} color="muted">
                            <h2>Inscription</h2>
                        </IonText>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <IonGrid className="my-2">
                                <IonText>
                                    <h3>Informations de connexion</h3>
                                </IonText>
                                <IonRow>
                                    <IonCol>
                                        <IonInput
                                            className="custom-input"
                                            name="email"
                                            type="email"
                                            ref={register({
                                                required: true,
                                                validate: (input) => isEmail(input),
                                            })}
                                            style={{borderColor: errors.email && "red"}}
                                            placeholder="Identifiant"
                                        />
                                        {errors.email &&
                                        <IonText color={"danger"}>L'adresse email est invalide</IonText>}
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonInput
                                            className="custom-input"
                                            name="password"
                                            type="password"
                                            ref={register({
                                                required: true,
                                                minLength: 8,
                                            })}
                                            style={{borderColor: errors.password && "red"}}
                                            placeholder="Mot de passe"
                                        />
                                        {errors.password &&
                                        <IonText color={"danger"}>Le mot de passe est invalide</IonText>}
                                    </IonCol>
                                    <IonCol size="12">
                                        <IonInput
                                            className="custom-input"
                                            name="password_confirm"
                                            type="password"
                                            ref={register({
                                                required: true,
                                                minLength: 8,
                                            })}
                                            style={{borderColor: errors.password_confirm && "red"}}
                                            placeholder="Confirmation du mot de passe"
                                        />
                                        {errors.password_confirm &&
                                        <IonText color={"danger"}>Le mot de passe est invalide</IonText>}
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            <IonGrid className="my-2">
                                <IonText>
                                    <h3>Profil</h3>
                                </IonText>
                                <IonRow>
                                    <IonCol size="12">
                                        <IonInput
                                            className="custom-input"
                                            name="lastname"
                                            type="text"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.lastname && "red"}}
                                            placeholder="Nom"
                                        />
                                        {errors.lastname && <IonText color={"danger"}>Le nom est invalide</IonText>}
                                    </IonCol>
                                    <IonCol size="12">
                                        <IonInput
                                            className="custom-input"
                                            name="firstname"
                                            type="text"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.firstname && "red"}}
                                            placeholder="Prénom"
                                        />
                                        {errors.firstname && <IonText color={"danger"}>Le prénom est invalide</IonText>}
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="12">
                                        <IonInput
                                            className="custom-input"
                                            name="city"
                                            type="text"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.city && "red"}}
                                            placeholder="Ville"
                                        />
                                        {errors.city && <IonText color={"danger"}>La ville est invalide</IonText>}
                                    </IonCol>
                                    <IonCol size="12">
                                        <IonInput
                                            className="custom-input"
                                            name="birthdate"
                                            type="date"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.birthdate && "red"}}
                                            placeholder="Date de naissance"
                                        />
                                        {errors.birthdate &&
                                        <IonText color={"danger"}>La date de naissance est invalide</IonText>}
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            <IonRow>
                                <IonButton type="submit" className="bg-primary" color={"custom-primary"}
                                           disabled={formState.isSubmitting}>
                                    Créer un compte
                                </IonButton>
                            </IonRow>
                        </form>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}

export default SignInForm