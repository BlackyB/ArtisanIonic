import React, {useState} from "react";
import {IonItem, IonSearchbar, IonSelect, IonSelectOption} from "@ionic/react";
import {requestAPI} from "../API/API";

const LocationInput = (props: any) => {

    const {setLocation} = props
    const [locations, setLocations] = useState([])

    const handleSearch = async (value: string) => {

        let rst = await requestAPI("GET", "LOCATION", null, null, [{key: "q", value: value}])
        setLocations(rst.data)

    }

    const handleSelected = (e: any) => {
        setLocation(e)
    }

    let options: {}[] = [];
    if(locations) {
        Object.entries(locations).forEach(([key, value]:any) => {
            return options.push(<IonSelectOption value={`${value.id}`} key={key}>{`${value.city.name} (${value.zip.zip})`}</IonSelectOption>);
        })
    }

    return (
        <>
            <IonSearchbar type="text" className="ion-no-padding" onIonChange={e => handleSearch(e.detail.value!)} animated placeholder="Ville"/>
            <IonSelect onIonChange={e => handleSelected(e.detail.value)}>
                {options}
            </IonSelect>
        </>
    )
}

export default LocationInput