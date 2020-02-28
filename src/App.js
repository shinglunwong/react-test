import React, { Component } from 'react';
import Modal from './components/Modal';

class App extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div>
        {
          this.state.show ? <Modal /> : null
        }
        <button style={styles.button} type="button" onClick={this.showModal}>
          Open
        </button>
      </div>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#2772b8',
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 5,
    outline: 'none',
    fontWeight: 700,
  }
}

export default App;
