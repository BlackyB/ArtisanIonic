import {
    IonInput,
    IonButton,
    IonText,
    IonGrid,
    IonCol,
    IonRow, IonItem, IonContent
} from "@ionic/react";
import React from "react";
import {useForm} from 'react-hook-form';
import isEmail from "validator/lib/isEmail";

const LoginForm: React.FC = () => {

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    function onSubmit(data: any) {
        console.log(data);

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
            <IonGrid className="align-center">
                <IonRow className="align-center ion-full-row">
                    <IonCol size="10" size-md="4" className="ion-text-center">
                        <IonText color="muted">
                            <h2>Se connecter</h2>
                        </IonText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <IonGrid className="my-2">
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
                                            style={{borderColor: errors.password && "red"}}
                                            placeholder="Identifiant"
                                        />
                                        {errors.email &&
                                        <IonText color="danger">L'adresse email est invalide</IonText>}
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
                                        <IonText color="danger">Le mot de passe est invalide</IonText>}
                                    </IonCol>
                                </IonRow>
                            </IonGrid>

                            <IonButton type="submit" color="primary"
                                       disabled={formState.isSubmitting}>
                                Connexion
                            </IonButton>
                            <IonRow className="my-2">
                                <IonCol>
                                    <IonRow className="ion-full-row">
                                        <a href={'toto'}>J'ai oublié mon mot de passe</a>
                                    </IonRow>
                                    <IonRow className="ion-full-row">
                                        <IonButton type="button" href="/inscription" color="primary">
                                            Je n'ai pas encore de compte
                                        </IonButton>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </form>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}

export default LoginForm