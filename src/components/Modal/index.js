import React, { Component } from 'react';

class Modal extends Component {
    state = {
        value: 1,
    }

    minus = () => {
        this.setState({
            value: this.state.value - 1,
        })
    }
    add = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }
    render() {
        return (
            <div style={styles.modal}>
                <div style={styles.modalMain}>
                    <div style={styles.modalContent}>
                        <div style={styles.ctrButton} onClick={this.minus}>-</div>
                        <input style={styles.numInput} type="number" value={this.state.value} onChange={() => { }} />
                        <div style={styles.ctrButton} onClick={this.add}>+</div>
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
        margin: 'auto'
    },
    numInput: {
        textAlign: 'center',
    },
    ctrButton: {
        padding: '0 5px',
    }
}


export default Modal;