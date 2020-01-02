import React from 'react';
import './App.css';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h3>
        REDUX MOVIELIST APP
      </h3>
      <br />
      <p><span style={{ color: 'green' }}>YOUR CURRENT MOVIE :</span> {props.movie.name}</p>
      <button onClick={props.updateMovies}>
        Update Movies
      </button>
      <br />
      {props.users.length === 0 ? <p style={{ color: 'red' }} >THERE ARE NO USERS</p> :
        props.users.map(user => <p>{user.first_name} {user.last_name}</p>)}

      < button onClick={props.fetchUsers}>
        FETCH USERS
      </button>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
