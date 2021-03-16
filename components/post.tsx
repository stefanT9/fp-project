import React from 'react'
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import Image from 'next/image';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import classes from '../styles/home.module.scss';

interface User {
    id:string,
    name:string,
    surname:string,
    displayName:string,
}

interface PostProps{
    id
    author:User,
    text:string,
    metadata:any
}

const Post = (props:PostProps)=>{

    return (
    <Paper elevation={3} className={classes.postPaper}>
        <Container>
            <Grid container>
            <Grid item xs={12}>
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderLeft}>
                        <Image src='/' height='2rem' width='2rem'/>
                        <Typography variant='body1'>
                            {`${props.author.displayName} - lorem minutes ago`}
                        </Typography>
                    </div>
                    <Button>
                        <MoreHorizIcon/>
                    </Button>
                </div>
                <div className={classes.postText}>
                    <Typography variant='body2'>
                        {props.text}
                    </Typography>
                </div>
                <div className={classes.postFooter}>
                    <Button>
                        Like
                    </Button>
                    <Button>
                        Share
                    </Button>
                    <Button>
                        Comment
                    </Button>
                </div>
            </Grid>
        </Grid>
        </Container>
    </Paper>)
}
export default Post