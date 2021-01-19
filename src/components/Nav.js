import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logoimg from "./logo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className="Navbarche">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className="navbar-brand">
                <img className="imglogo" src={logoimg} alt="Logo" />
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className="pocetna">
                Почетна
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/naracaj" className="catalogg">
                Каталог
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/akcija" className="catalogg">
                Акција
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/AboutUs" className="aboutUs">
                За нас
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Contact" className="contactInfo">
                Поврзи се
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
