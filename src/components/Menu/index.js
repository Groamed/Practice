import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle
} from "@material-ui/core";
import Search from "../Search";
import Authentication from "../../redux/containers/Authentication";

const useStyles = makeStyles(theme => ({
  menu: {
    height: 70
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Menu = () => {
  const classes = useStyles();
  const user = useSelector(state => state.auth);
  const [open, setOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <Grid
      container
      className={classes.menu}
      spacing={2}
      alignItems="center"
      justify="space-evenly"
      color="primary"
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Music for entire life
          </Typography>
          <Search />
          {user.name ? (
            <React.Fragment>
              <Typography variant="h6" className={classes.title}>
                Welcom {user.name}
              </Typography>
              <Button
                variant="contained"
                onClick={() => dispatch(logout())}
                className={classes.menuButton}
              >
                Выход
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button
                variant="contained"
                className={classes.menuButton}
                onClick={() => setRegOpen(true)}
              >
                Регистрация
              </Button>
              <Dialog open={regOpen}>
                <DialogTitle>{"Регистрация"}</DialogTitle>
                <DialogContent dividers>
                  <Authentication />
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    className={classes.menuButton}
                    onClick={() => setRegOpen(false)}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              <Button
                variant="contained"
                className={classes.menuButton}
                onClick={() => setOpen(true)}
              >
                Вход
              </Button>
              <Dialog open={open}>
                <DialogTitle>{"Авторизация"}</DialogTitle>
                <DialogContent dividers>
                  <Authentication />
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    className={classes.menuButton}
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Menu;
