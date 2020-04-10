import React from 'react';

function History(props) {
    
    return (
        <div style={{ fontSize: '13px' }}>
            <span className="ml-3 text-capitalize">- {props.history.type}: </span>
            <span onClick={props.setUrlYoutube} style={{ cursor: 'pointer', color: '#5e72e4' }}>
            {props.history.videoURL}
            </span>
        </div>
    )
}

export default History;