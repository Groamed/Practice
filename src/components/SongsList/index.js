import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Song from "../Song";

class SongsList extends Component {
  state = {
    playing: null
  };

  next = id => {
    const { songs } = this.props;
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === id) {
        if (i + 1 !== songs.length) {
          return songs[i + 1].id;
        } else {
          return songs[0].id;
        }
      }
    }
  };

  prev = id => {
    const { songs } = this.props;
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === id) {
        if (i - 1 !== -1) {
          return songs[i - 1].id;
        } else {
          return songs[songs.length - 1].id;
        }
      }
    }
  };

  setPlaying = playing =>
    this.setState({ playing: this.state.playing === playing ? null : playing });

  nextSong = () => this.setState({ playing: this.next(this.state.playing) });
  prevSong = () => this.setState({ playing: this.prev(this.state.playing) });

  componentDidMount() {
    const { songs, getSongs } = this.props;

    if (songs.length === 0) {
      getSongs();
    }
  }

  render() {
    const { songs } = this.props;

    return (
      <Grid container spacing={2}>
        {songs.map(elem => (
          <Grid key={elem.id} item xs={5}>
            <Song
              id={elem.id}
              name={elem.name}
              song={elem.song}
              url={elem.url}
              isPlaying={elem.id === this.state.playing}
              setPlaying={this.setPlaying}
              nextSong={this.nextSong}
              prevSong={this.prevSong}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default SongsList;
