import React from 'react';

function Home() {
    return (
        <div className="wrap">
            <div className="form-center p-4 bg-secondary ">
                <h2 className="text-center mb-3">Floating for YouTube</h2>
                <form method="POST">
                    <div className="form-wrap my-1">
                        <input type="text" className="form-control form-control-alternative" placeholder="Paste Your URL..." />
                        <button type="button" className="btn btn-primary ml-2">OK</button>
                    </div>
                </form>
                <small className="text-muted">Paste youtube url (or youtube playlist) here.</small>
            </div>
            <div className="alert-fixed">
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
            </div>
        </div>
    );
}

export default Home;
