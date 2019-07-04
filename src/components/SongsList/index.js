import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class SongsList extends Component {
  componentDidMount() {
    const { songs, getSongs } = this.props;

    if (songs.length === 0) {
      getSongs();
    }
  }

  render() {
    const { songs } = this.props;
    return (
      <Grid container>
        {songs.map(elem => (
          <Grid key={elem.id} item>
            {elem.name} - {elem.song}
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default SongsList;
