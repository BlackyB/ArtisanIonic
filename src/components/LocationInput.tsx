import React, {useState} from "react";
import {IonItem, IonSearchbar, IonSelect, IonSelectOption} from "@ionic/react";
import {requestAPI} from "../API/API";
import {register} from "../serviceWorker";
// import {useForm} from "react-hook-form";

const LocationInput: React.FC = () => {

    const [locations, setLocations] = useState([])

    // const {register, handleSubmit, errors, formState} = useForm({
    //     mode: "onBlur"
    // });

    const handleSearch = async (value: string) => {

        let rst = await requestAPI("GET", "LOCATION", null, null, [{key: "q", value: value}])
        setLocations(rst.data)

    }


    let options: {}[] = [];
    if(locations) {
        Object.entries(locations).forEach(([key, value]:any) => {
            return options.push(<IonSelectOption value={`${value.id}`} key={key}>{`${value.city.name} (${value.zip.zip})`}</IonSelectOption>);
        })
    }

    return (
        <IonItem>
            <IonSearchbar type="text" onIonChange={e => handleSearch(e.detail.value!)} animated placeholder="Ville"/>
            <IonSelect name="location">
                {options}
            </IonSelect>
        </IonItem>


    )
}

export default LocationInput