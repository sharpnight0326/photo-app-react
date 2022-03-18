import {useEffect, useState} from "react";
import {getHeaders} from "../utils";

const Profile = () =>{
    const [profileImg, setProfileImg] = useState("")
    const [profileName, setProfileName] = useState("")
    useEffect(()=>{
        fetch("/api/profile", {
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                setProfileImg(data.thumb_url)
                setProfileName(data.username)
            })
    })
    return (
        <div>
            <img src={profileImg} />
            {profileName}
        </div>
    )
}

export default Profile