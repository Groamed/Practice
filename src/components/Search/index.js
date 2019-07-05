import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";
import { Grid, IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  text: {
    width: 450
  }
});

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        className={classes.text}
        label="Search"
        placeholder="Enter something"
        margin="dense"
        variant="outlined"
        onChange={event => setText(event.target.value)}
      />
      <IconButton onClick={() => dispatch(filter(text))}>
        <SearchIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default Search;
