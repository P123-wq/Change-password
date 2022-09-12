import { Button, Typography } from "@material-ui/core";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import ChangePassword from "./ChangePassword";
import CloseDialogIcon from '@material-ui/icons/Close';
import styles from "./styles/DialogStyles";

const Profile = (props)=>{
    const [open, setOpen] = React.useState(false);
    const classes = styles();
  
    const handleClickToOpen = () => {
        setOpen(true);
    };
    
    const handleToClose = () => {
        setOpen(false);
    };
    return<>
    <h1>User Profile</h1>

    <div >
        <Typography>username : {localStorage.getItem("username")}</Typography>
        <Button 
            variant="contained"
            type="submit"
            color="primary"
            onClick={handleClickToOpen}>
                CHANGE PASSWORD
            </Button>
    </div>
    


    <Dialog  open={open} onClose={handleToClose} >
        <div className={classes.dialog}>
            
            
            <ChangePassword handleToClose = {handleToClose}></ChangePassword>
            <CloseDialogIcon onClick = {handleToClose}></CloseDialogIcon>
        </div>
        
    </Dialog>
    </>

}

export default Profile;
