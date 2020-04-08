import React from 'react';

function History(props) {
    let { history } = props;
    
    return (
        <div style={{ fontSize: '13px' }}>
            <span className="ml-3 text-capitalize">- {history.type}: </span>
            <span onClick={props.setUrlYoutube} style={{ cursor: 'pointer', color: '#5e72e4' }}>
                {history.type === 'video' ? `https://www.youtube.com/watch?v=${history.id}` : `https://www.youtube.com/playlist?list=${history.id}`}
            </span>
        </div>
    )
}

export default History;