import React, { useEffect, useState } from 'react';
import { splitUrlYoutube } from '../../support';

function History(props) {
    const [history, setHistory] = useState({})

    useEffect(() => {
        splitUrlYoutube(props.history, (data) => {
            setHistory(data)
        })
    }, [])

    return (
        <div style={{ fontSize: '13px' }}>
            <span className="ml-3 text-capitalize">- {history.type}: </span>
            <span onClick={props.setUrlYoutube} style={{ cursor: 'pointer', color: '#5e72e4' }}>
                {props.history}
            </span>
        </div>
    )
}

export default History;