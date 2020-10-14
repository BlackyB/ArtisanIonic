import {
    IonInput,
    IonButton,
    IonText,
    IonGrid,
    IonCol,
    IonRow,
    IonContent, IonLabel, IonTextarea
} from "@ionic/react";
import React, {useRef, useState} from "react";
import {useForm} from 'react-hook-form';
import LocationInput from "../components/LocationInput";
import {requestAPI} from "../API/API";

const AdForm: React.FC = () => {

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    const [location, setLocation] = useState("");
    const [searchText, setSearchText] = useState("");
    const [image, setImage] = useState();

    const fileInput = useRef(null);

    const resetSearch = () => {
        setSearchText('')
    }

    const onSelectedFile = (e:any) => {
        setImage(e.target.files[0])
    }

    const onSubmit = async (data: any) => {

        if(image)
        {
            let uploadImage = new FormData();
            // @ts-ignore
            uploadImage.append('image', image);

            let uploadedImage = await requestAPI("POST", "IMAGE", null, uploadImage, [], true)

            if(uploadedImage){
                data.path = uploadedImage.data.path
            }

            if(localStorage.getItem('token')){
                data.token = localStorage.getItem('token');
            }

            if(data.token)
            {
                requestAPI("POST", "AD_ADD", null, data, [], true)
            }else{
                throw new Error('No user provided')
            }
        }
    }


    return (

    <IonContent>
        <IonGrid className="align-center">
            <IonRow className="align-center ion-full-row">
                <IonCol size="10" size-md="6">
                    <IonText className="ion-text-center">
                        <h2>Poster une annonce</h2>
                    </IonText>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>
                                        Titre
                                        <IonInput
                                            className="custom-input"
                                            color="primary"
                                            name="title"
                                            type="text"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.title && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.title &&
                                    <IonText color="danger">Le titre de l'annonce ne peut pas être vide</IonText>}
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonLabel>
                                        Description
                                        <IonTextarea
                                            className="custom-input"
                                            color="primary"
                                            name="description"
                                            ref={register({
                                                required: true,
                                            })}
                                            style={{borderColor: errors.description && "red"}}
                                        />
                                    </IonLabel>
                                    {errors.description &&
                                    <IonText color="danger">Veuillez renseigner une description pour l'annonce</IonText>}
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
                                        <input
                                            ref={fileInput}
                                            hidden
                                            name="image"
                                            type="file"
                                            accept="image/*"
                                            onChange={onSelectedFile}
                                        />
                                        <IonButton
                                            color="primary"
                                            onClick={() => {
                                                // @ts-ignore
                                                fileInput?.current?.click();
                                            }}>
                                            Image
                                        </IonButton>
                                </IonCol>
                            </IonRow>

                        </IonGrid>


                        <IonRow className="ion-full-row ion-margin-bottom">
                            <IonButton type="submit" color="primary"
                                       disabled={formState.isSubmitting}>
                                Poster mon annonce
                            </IonButton>
                        </IonRow>
                    </form>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
    )
}

export default AdForm