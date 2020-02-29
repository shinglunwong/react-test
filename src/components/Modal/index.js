import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, subsCounter } from '../../actions/counterAction';

class Modal extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.counter > 5 ? 'red' : 'yellow'
        }
    }
    render() {
        return (
            <div style={styles.modal}>
                <div style={styles.modalMain}>
                    <div style={styles.modalContent}>
                        <div style={{ ...styles.square, ...this.getStyle() }}></div>
                        <div style={styles.ctrWrapper}>
                            <div style={styles.ctrButton} onClick={this.props.subsCounter}>-</div>
                            <input style={styles.numInput} type="number" value={this.props.counter} onChange={() => { }} />
                            <div style={styles.ctrButton} onClick={this.props.addCounter}>+</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
    },
    modalMain: {
        position: 'fixed',
        background: 'white',
        borderRadius: '10px',
        width: '80%',
        height: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
    },
    modalContent: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
    numInput: {
        textAlign: 'center',
        width: '50px',
    },
    ctrButton: {
        padding: '0 5px',
    },
    square: {
        width: '20px',
        height: '20px',
        margin: '5px',
    },
    ctrWrapper: {
        display: 'flex',
        flexDirection: 'row',
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
})
export default connect(mapStateToProps, { addCounter, subsCounter })(Modal);