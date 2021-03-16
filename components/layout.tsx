import React from 'react'
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import Sidenav from "./sidenav";
import SearchField from "./searchField";
import ProfileButton from "./profileButton";
import Link from "next/link";
import classes from "../styles/layout.module.scss";

const Layout = ({ children })=> {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Paper>
                <Grid container>
                <Grid item xs={4}>
                    <Link href={'/'}>
                        <a className={classes.navListItem}>
                            <Typography variant='h3'>
                                logo
                            </Typography>
                        </a>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <SearchField/>
                </Grid>
                <Grid item xs={4}>
                    <ProfileButton/>
                </Grid>
            </Grid>
            </Paper>
            <Grid container>
                <Grid item xs={4}>
                    <Sidenav/>
                </Grid>
                <Grid item xs={4}>
                    {children}
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout