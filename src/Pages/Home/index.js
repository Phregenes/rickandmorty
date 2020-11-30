import React, { Component } from 'react';
import api from '../../api';
import './styles.css';

class Home extends Component {

  state = {
    episodes: {},
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ episodes: response.data });
      console.log(response.data)
  }

  render() {

    const { episodes } = this.state;

    const { results = [] } = episodes;
    console.log('aqui' , episodes.results , results )

    return (
      <div className="container">
        {results.map(episode => (
          <li key={episode.id} className = "episode">
            <div className="container--person">
              <img src={episode.image} alt={episode.name} className="episode--image"/>
              <div className="characteristics">
                <span>{ 'Name:' + episode.name }</span>
                <span>{ 'status: '+ episode.status }</span>
                <span>{ 'species: '+ episode.species }</span>
                <span>{ 'species: '+ episode.gender }</span>
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  };
};

export default Home;

