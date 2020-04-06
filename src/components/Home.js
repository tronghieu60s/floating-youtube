import React from 'react';

function Home(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit();
    }

    return (
        <div className="wrap">
            <div className="form-center p-4 bg-secondary ">
                <h2 className="text-center mb-3">Floating for YouTube</h2>
                <form method="GET" onSubmit={handleSubmit}>
                    <div className="form-wrap my-1">
                        <input onChange={props.onChange} value={props.urlYoutube || ""} type="text" className="form-control form-control-alternative" placeholder="Paste Your URL..." required />
                        <button type="submit" className="btn btn-primary ml-2">OK</button>
                    </div>
                </form>
                <small className="text-muted">Paste youtube url (or youtube playlist) here.</small>
            </div>
            {props.error.status ? <div className="alert-fixed">
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{props.error.alert}</strong></div>
            </div> : null}
        </div>
    );
}

export default Home;
