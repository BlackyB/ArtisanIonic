import React, {useState, useEffect} from "react";
import {IonCol, IonSearchbar, IonSelect, IonSelectOption, IonText} from "@ionic/react";
import {requestAPI} from "../API/API";
import {register} from "../serviceWorker";
import {useForm} from "react-hook-form";

const LocationInput: React.FC = () => {

    const [searchText, setSearchText] = useState('');
    const [location, setLocation] = useState([])

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    const handleSearch = async (value: string) => {
        setSearchText(value);

        let rst = requestAPI("GET", "LOCATION", null, null, [{key: "q", value: value}])
        // let rst = await requestAPI("GET", "LOCATION", 10)
        
        console.log(rst)
        // setLocation(rst.data)
    }

    // console.log('location',location)

    // let options = [];
    // for(let loc in location)
    // {
    //     options.push(<IonSelectOption>{location}</IonSelectOption>)
    // }

    return (
        <>
            <IonSearchbar type="text" onIonChange={e => handleSearch(e.detail.value!)} animated/>
            <IonSelect>
                {/*{options}*/}
            </IonSelect>
        </>


    )
}

export default LocationInput