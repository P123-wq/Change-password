import React,{useState} from "react";
import styles from "./styles/ChangePasswordStyles";
import axios from "axios";
import { urls } from "../../config/env-config";
import {Button, Input, FormControl, FormGroup} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { authHeader } from "../../helpers/authService";


    
const ChangePassword = (props)=>{
     const [oldPassword, setOldPassword] = useState("");
     const [newPassword, setNewPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
    const classes = styles();
    const [showError, setShowError] = useState(false);
  

    
    if (showError) {
        return (
            <Typography variant="body1" color="error" className={classes.changepasswordMessage}>
                bad request
            </Typography>
        )
    
}
// headers: {
//     'Access-Control-Allow-Origin':'http://localhost:8080'
// }
   
const authBasic = (oldPassword, newPassword, confirmPassword) => {
    return window.btoa(oldPassword + ':' + newPassword + ':' + confirmPassword);
}

let conf = [oldPassword, newPassword, confirmPassword];


const config = {
    headers: {
        Authorization:  conf,  'Access-Control-Allow-Origin':'http://localhost:3000'
        
    }
};
    
const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const data = JSON.stringify(conf);
        console.log(data);
        const response = await axios.put(`${urls.service}/password`, data, config);
        console.log(response.data);
        
    } catch (err) {
        // do something when error occurrs
        console.log(err);
    }
};
  const validate = async(e)=>{
       e.preventDefault();
        const pattern = new RegExp("^(?=.*[0-9])"
        + "(?=.*[a-z])(?=.*[A-Z])"
        + "(?=.*[@#$%^&+=])"
        + "(?=\\S+$).{8,64}$");
       
           
            console.log(conf+ "Successfull");
            const api = axios.create({baseURL: `${urls.service}`})
            console.log(`${urls.service}`);
            await api.put('/password',config,authHeader)
           .then(res => {
                console.log(res)
           })
           .catch(error => {
                console.log(error)
           })
            console.log(conf+ "Password reset Successfull");
      
        

        
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <FormGroup className={classes.container}>
                <h3>Change Password</h3>
                <Input type="password" onChange={e=>setOldPassword(e.target.value)}  name="old-password" placeholder="Enter Old Password"  required>Old Password</Input>
                <Input type="password" onChange={e=>setNewPassword(e.target.value)} name="new-password" placeholder="Enter New Password"  required>New Password</Input>
                <Input type="password" onChange={e=>setConfirmPassword(e.target.value)} name="confirm-password" placeholder="Confirm New Password" required>Confirm Password</Input>
                <Button
                    className={classes.button}
                    variant="contained"
                    type="submit"
                    color="primary"
                    // onClick={validation}
                >
                    Submit
                </Button>
            </FormGroup>
        </form>
            
        
    );
}

export default ChangePassword;
