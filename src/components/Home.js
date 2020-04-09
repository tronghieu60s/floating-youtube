import React from 'react';
import History from '../components/Home/History';

function Home(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit();
    }

    function renderHistories(histories) {
        let result = null;
        result = histories.map((history, index) => {
            return (
                <History setUrlYoutube={() => props.setUrlYoutube(index)} key={index} history={history}></History>
            )
        })
        return result;
    }

    return (
        <div className="wrap">
            <div className="form-center p-4 bg-secondary ">
                <h2 className="text-center mb-3">Floating for YouTube</h2>
                {props.error.status ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <button onClick={props.removeAlert} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>{props.error.alert}</strong>
                </div> : null}
                <form method="GET" onSubmit={handleSubmit}>
                    <div className="form-wrap my-1">
                        <input onChange={props.onChange} value={props.urlYoutube || ""} type="text" className="form-control form-control-alternative" placeholder="Paste Your URL..." required />
                        <button type="submit" className="btn btn-primary ml-2">OK</button>
                    </div>
                </form>
                <small className="text-muted">Paste youtube url (or youtube playlist) here.</small>
                {props.history.length !== 0 ?
                    <div className="mt-3">
                        <h4 className="text-uppercase">History:</h4>
                        {renderHistories(props.history)}
                    </div> : null}
            </div>
        </div>
    );
}

export default Home;
