import { connect } from "react-redux";
import fetchSongs from "../middlewares/fetchSongs";
import SongsList from "../../components/SongsList";

const mapStateToProps = state => ({
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsList);
