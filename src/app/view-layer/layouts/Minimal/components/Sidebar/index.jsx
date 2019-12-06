import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon  from '@material-ui/icons/Info';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon  from '@material-ui/icons/People';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import SidebarNav from './components/SidebarNav';


const useStyles = makeStyles( theme =>({
   drawer: {
      width: 240,
      [theme.breakpoints.up('lg')]: {
         marginTop: 64,
         height: 'calc(100% - 64px)'
      }
   },
   root: {
      backgroundColor: theme.palette.white,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: theme.spacing(2),
   },
   divider:{
      margin: theme.spacing(2, 0)
   },
   nav: {
      marginBottom: theme.spacing(2)
   }

}));

const Sidebar = props => {
   const { open, variant, onClose, className, ...rest} = props;

   const classes = useStyles();

   const pages = [

    {
      title: 'Home',
      href: '/',
      icon: <HomeIcon />
    },

    {
      title: 'About',
      href: '/about',
      icon: <InfoIcon />
    },

    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },

    {
      title: 'Authentication',
      href: '/signin',
      icon: <LockOpenIcon />
    },

    {
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon />
    },

    {
      title: 'Products',
      href: '/products',
      icon: <LibraryBooksIcon />
    },

   ];

   return (
    <Drawer
      anchor={"left"}
      classes={{paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
      >
        <div
          {...rest}
          className={clsx(classes.root, className)}
        >
         <SidebarNav
            className={classes.nav}
            pages={pages}
         />
        </div>
    </Drawer>
   )

};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;




