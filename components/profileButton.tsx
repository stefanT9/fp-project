import React from 'react'
import Image from 'next/image'
import {Button, Typography} from "@material-ui/core";
import classes from '../styles/layout.module.scss';

const ProfileButton = ()=>{
    const authContext={
        username:'lorem ipsum'
    }

    return (
    <div>
        <Button>
            <Image src={'/'} width={'30px'} height={'30px'}/>
            <Typography className={classes.profile}>
                {authContext.username}
            </Typography>
        </Button>
    </div>
    )
}

export default ProfileButton