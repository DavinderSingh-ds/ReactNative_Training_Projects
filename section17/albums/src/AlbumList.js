import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class component  it can handle dynamic data     // component class has so much functions
class AlbumList extends Component {
  state = {albums: []};

  // it can be used for fetching data in console log in browser
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums() {
    //map is an array helper  // here key is used for uniqueness
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {/* {this.renderAlbums()} */}
        <Text style={{color: 'red'}}>Hi</Text>
      </ScrollView>
    );
  }
}

export default AlbumList;
