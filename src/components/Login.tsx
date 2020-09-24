import React from "react";
import {AuthConsumer} from "../context/AuthContext";
import {IonButton, IonCol, IonContent, IonGrid, IonInput, IonRow, IonText} from "@ionic/react";
import isEmail from "validator/lib/isEmail";
import {useForm} from "react-hook-form";

const Login: React.FC = () => {

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    return (
        <AuthConsumer>
            {({initiateLogin}) => (
                <>
                    <IonContent>
                        <IonGrid className="align-center">
                            <IonRow className="align-center ion-full-row">
                                <IonCol size="10" size-md="4" className="ion-text-center">
                                    <IonText color="muted">
                                        <h2>Se connecter</h2>
                                    </IonText>
                                    <form onSubmit={handleSubmit(initiateLogin)}>
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
                                                   disabled={formState.isSubmitting} className="btn btn-sm btn-primary">
                                            Connexion
                                        </IonButton>
                                    </form>

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
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </>
            )}
        </AuthConsumer>
    )
};

export default Login;