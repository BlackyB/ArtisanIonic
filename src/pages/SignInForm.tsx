import {
    IonInput,
    IonButton,
    IonText,
    IonGrid,
    IonCol,
    IonRow,
    IonContent, IonAlert, IonRadio, IonLabel, IonRadioGroup, IonItem
} from "@ionic/react";
import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import isEmail from "validator/lib/isEmail";
import {SIREN_HEADERS, requestAPI} from "../API/API";
import axios from 'axios';
import LocationInput from "../components/LocationInput";

const SignInForm: React.FC = () => {

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    const [showAlert1, setShowAlert1] = useState(false);
    const [selected, setSelected] = useState<string>("1");
    const [naf, setNaf] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [searchText, setSearchText] = useState("");

    const resetSearch = () => {
        setSearchText('')
    }

    const handleRole = (role: string) => {
        setSelected(role)
    }

    const handleSIRET = async (siret: string | undefined | null) => {

        if (siret) {
            setNaf("");
            setCompany("");

            let info = await axios.get("https://api.insee.fr/entreprises/sirene/V3/siret/" + siret, SIREN_HEADERS)

            if (info.data.header.statut === 200) {
                let denomination = info.data.etablissement.uniteLegale.denominationUniteLegale;
                let nafCode = info.data.etablissement.uniteLegale.activitePrincipaleUniteLegale

                let activity = await axios.get("https://api.insee.fr/metadonnees/nomenclatures/v1/codes/nafr2/sousClasse/" + nafCode, SIREN_HEADERS)
                let intitule = activity.data.intitule

                setNaf(intitule)
                setCompany(denomination)
            }
        }
    }

    function onSubmit(data: any) {
        console.log(data);

        if (data.password !== data.password_confirm) {
            setShowAlert1(true)
        } else {
            requestAPI("POST", "USER_ADD", null, data)
        }

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

    return <IonContent>

        <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            message={'Les mots de passe ne sont pas identiques'}
            buttons={['OK']}
        />

        <IonGrid className="align-center">
            <IonRow className="align-center ion-full-row">
                <IonCol size="10" size-md="6">
                    <IonText className="ion-text-center">
                        <h2>Inscription</h2>
                    </IonText>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <IonGrid className="my-2">
                            <IonText>
                                <h3>Je suis un :</h3>
                            </IonText>

                            <IonRadioGroup
                                name="role"
                                ref={register({
                                    required: true,
                                })}
                                value={selected}
                                onIonChange={e => handleRole(e.detail.value)}>

                                <IonItem>
                                    <IonLabel>Particulier</IonLabel>
                                    <IonRadio slot="end" value="1"/>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Professionnel</IonLabel>
                                    <IonRadio slot="end" value="2"/>
                                </IonItem>
                            </IonRadioGroup>
                        </IonGrid>

                        <IonGrid>
                            <IonText>
                                <h3>Informations de connexion</h3>
                            </IonText>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>
                                        Adresse e-mail
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="email"
                                            type="email"
                                            ref={register({
                                                required: true,
                                                validate: (input) => isEmail(input),
                                            })}
                                            style={{borderColor: errors.email && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.email &&
                                    <IonText color="danger">L'adresse email est invalide</IonText>}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>
                                        Mot de passe
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="password"
                                            type="password"
                                            ref={register({
                                                required: true,
                                                minLength: 8,
                                            })}
                                            style={{borderColor: errors.password && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.password &&
                                    <IonText color="danger">Le mot de passe est invalide</IonText>}
                                </IonCol>
                                <IonCol size="12">
                                    <IonLabel>
                                        Confirmation du mot de passe
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="password_confirm"
                                            type="password"
                                            ref={register({
                                                required: true,
                                                minLength: 8,
                                            })}
                                            style={{borderColor: errors.password_confirm && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.password_confirm &&
                                    <IonText color="danger">Le mot de passe est invalide</IonText>}
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonGrid className="my-2">
                            <IonText>
                                <h3>Profil</h3>
                            </IonText>
                            <IonRow>
                                <IonCol size="12">
                                    <IonLabel>
                                        Nom
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="lastName"
                                            type="text"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.lastname && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.lastname && <IonText color="danger">Le nom est invalide</IonText>}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12">
                                    <IonLabel>
                                        Prénom
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="firstName"
                                            type="text"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.firstname && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.firstname && <IonText color="danger">Le prénom est invalide</IonText>}
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12">

                                    <LocationInput setLocation={setLocation} setSearchText={setSearchText} searchText={searchText}/>

                                    <IonInput
                                        onIonChange={resetSearch}
                                        name="location"
                                        ref={register({
                                            required: true,
                                        })}
                                        hidden
                                        value={location}>{location}
                                    </IonInput>
                                    {errors.location && <IonText color="danger">Veuillez selectionner une ville dans la liste déroulante</IonText>}

                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12">
                                    <IonLabel>
                                        Date de naissance
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="birthdate"
                                            type="date"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.birthdate && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.birthdate &&
                                    <IonText color="danger">La date de naissance est invalide</IonText>}
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                        {
                            selected === "2"
                                ?
                                <IonGrid className="my-2">
                                    <IonText>
                                        <h3>Informations professionnelles</h3>
                                    </IonText>

                                    <IonRow>
                                        <IonCol size="12">
                                            <IonLabel>
                                                Numero SIRET
                                                <IonInput
                                                    className="custom-input"
                                                    color="primary"
                                                    name="siret"
                                                    type="text"
                                                    ref={register({
                                                        required: true,
                                                        minLength: 14,
                                                        maxLength: 14,
                                                    })}
                                                    style={{borderColor: errors.siret && "red"}}
                                                    onIonChange={e => handleSIRET(e.detail.value)}
                                                />
                                            </IonLabel>

                                            {errors.siret &&
                                            <IonText color="danger">Le numero SIRET est invalide</IonText>}
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol size="12">
                                            <IonLabel>
                                                Secteur d'activité
                                                <IonInput
                                                    readonly
                                                    className="custom-input"
                                                    color="secondary"
                                                    name="activity"
                                                    type="text"
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    style={{borderColor: errors.activity && "red"}}
                                                    value={naf}
                                                />
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol size="12">
                                            <IonLabel>
                                                Nom de la société
                                                <IonInput
                                                    readonly
                                                    className="custom-input"
                                                    color="secondary"
                                                    name="company"
                                                    type="text"
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    style={{borderColor: errors.company && "red"}}
                                                    value={company}
                                                />
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                                :
                                null
                        }
                        <IonRow className="ion-full-row ion-margin-bottom">
                            <IonButton type="submit" color="primary"
                                       disabled={formState.isSubmitting}>
                                Créer un compte
                            </IonButton>
                        </IonRow>
                    </form>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
}

export default SignInForm