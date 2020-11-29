import React, { Component } from 'react';
import api from '../../api';

class Home extends Component {

  state = {
    episodes: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ episodes: response.data });
    // console.log(response.data)
  }

  render() {

    const { episodes } = this.state;

    return (
      <div>
        <h1>Listar os Filmes</h1>
        {episodes.map(episode => (
          <li key={episode.results}>
            <h2>
              <strong>Título: </strong>
              {episode.results.id}
            </h2>

          </li>
        ))}
      </div>
    );
  };
};

export default Home;
