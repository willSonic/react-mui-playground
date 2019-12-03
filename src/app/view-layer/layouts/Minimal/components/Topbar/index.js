import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
  },
  toolBox: {
    display: 'flex',
  },
  routeIcon: {
    height: '56px',
    padding: '4px',
  },
  rightItem: {
    marginLeft: 'auto',
    fontSize: '20px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '-0.06px',
    color: '#fff',

    '&:hover': {
      color: '#47c553',
    },
    '&:active': {
      color: '#278545',
    },
  },
}))

const Topbar = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar className={classes.toolBox}>
        <RouterLink to="/">
          <img
            alt="Logo"
            className={classes.routeIcon}
            src="/images/logos/windmill.svg"
          />
        </RouterLink>
        <RouterLink to="/about" className={classes.rightItem}>
          ABOUT
        </RouterLink>
      </Toolbar>
    </AppBar>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
}

export default Topbar
