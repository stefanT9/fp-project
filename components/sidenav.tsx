import React from 'react';
import ProfileButton from './profileButton';
import Link from 'next/link';
import {Button, Input, Typography} from "@material-ui/core";
import classes from '../styles/layout.module.scss';
import { Formik } from 'formik';
import SearchIcon from '@material-ui/icons/Search';

const Sidenav = ()=> {
    return (
    <>
        <div className={classes.topnav}>
            <div className={classes.navList}>
                <Link href={'/'}>
                    <a className={classes.navListItem}>
                        <Typography variant='h3'>
                            Feed
                        </Typography>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={classes.navListItem}>
                        <Typography variant='h3'>
                            Profile
                        </Typography>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className={classes.navListItem}>
                        <Typography variant='h3'>
                            Settings
                        </Typography>
                    </a>
                </Link>
            </div>
        </div>
    </>)
}

export default Sidenav