import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  IconButton,
  LinearProgress,
  Hidden
} from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  playIcon: {
    height: 38,
    width: 38
  },
  spac: {
    margin: theme.spacing(1, 1, 1, 7)
  }
}));

const Song = ({
  id,
  name,
  song,
  url,
  isPlaying,
  setPlaying,
  nextSong,
  prevSong
}) => {
  const classes = useStyles();
  const audioRef = useRef(null);
  const [time, setTime] = useState(0);
  const user = useSelector(state => state.auth);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  });

  return (
    <Card className={classes.spac}>
      <Grid container>
        <Grid item xs container alignContent="center" justify="center">
          <CardActionArea>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {name} - {song}
              </Typography>
              <Hidden>
                <audio
                  src={url}
                  ref={audioRef}
                  onTimeUpdate={() =>
                    setTime(prev =>
                      Math.floor(
                        (audioRef.current.currentTime /
                          audioRef.current.duration) *
                          100
                      )
                    )
                  }
                />
              </Hidden>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid container item xs={4} alignItems="center" justify="center">
          <IconButton aria-label="Previous" onClick={() => prevSong()}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="Play/pause" onClick={() => setPlaying(id)}>
            {isPlaying ? (
              <PauseIcon className={classes.playIcon} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} />
            )}
          </IconButton>
          <IconButton aria-label="Next" onClick={() => nextSong()}>
            <SkipNextIcon />
          </IconButton>
        </Grid>
        {user.name && (
          <Grid container item xs={2} alignItems="center" justify="center">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <LinearProgress variant="determinate" value={time} />
    </Card>
  );
};

export default Song;
