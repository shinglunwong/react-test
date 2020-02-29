import React, { Component } from 'react';
import Modal from './components/Modal';

import { connect } from 'react-redux';
import { showModal } from './actions/modalAction';

class App extends Component {
  render() {
    return (
      <div>
        <p>result: {this.props.counter}</p>
        {
          this.props.visible ? <Modal /> : null
        }
        <button style={styles.button} type="button" onClick={this.props.showModal}>
          Open
          </button>
      </div>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#2772b8',
    padding: 10,
    color: 'white',
    borderRadius: 5,
    outline: 'none',
    fontWeight: 700,
  }
}

const mapStateToProps = state => ({
  visible: state.visible,
  counter: state.counter,
})
export default connect(mapStateToProps, { showModal })(App);
