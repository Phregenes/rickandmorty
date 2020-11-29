import React, { Component } from 'react';
import api from '../../api';

class Home extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ episodes: response.data });
    console.log(response.data)
  }

  render() {

    const { episodes } = this.state;

    return (
      <div>
        <h1>Listar os Filmes</h1>
        {episodes.map(episode => (
          <li key={episode.id}>
            <h2>
              <strong>Título: </strong>
              {episode}
            </h2>
            {/* <p>
              {filme.show.url}
            </p> */}

          </li>
        ))}
      </div>
    );
  };
};

export default Home;
