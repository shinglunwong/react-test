import React from 'react';

function Modal() {
    return (
        <div style={styles.modal}>
            <div style={styles.modalMain}>
            </div>
        </div>
    );
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
    }
}


export default Modal;