import React from 'react';

function History(props) {
    return (
        <div style={{ fontSize: '13px' }}>
            <span onClick={props.setUrlYoutube} style={{ cursor: 'pointer', color: '#5e72e4', marginLeft: "8px" }}>
               {props.history} 
            </span>
        </div>
    )
}

export default History;