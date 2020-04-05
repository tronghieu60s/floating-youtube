import React from 'react';
import playIcon from './icons/play.svg';
import deleteIcon from './icons/delete.svg';

function Play() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8">
                    <div className="video-player">
                        <div className="video">
                            <iframe width={560} height={315} title="" src="https://www.youtube.com/embed/iLBBRuVDOo4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="border mt-4 p-3">
                        <div className="mb-3">
                            <h3 className="text-uppercase mb-0">My playlists: MUSIC</h3>
                            <small className="text-muted">Youtube</small>
                        </div>
                        <div className="playlist border mt-2">
                            <div className="playlist-video active">
                                <img className="playlist-video-play" src={playIcon} alt="" />
                                <div className="playlist-video-img">
                                    <img className="img-fluid" src="http://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg" alt="" />
                                    <div className="playlist-video-time">4:40</div>
                                </div>
                                <div className="playlist-video-content">
                                    <h4 className="playlist-video-title">Vicetone &amp; Tony Igy - Astronomia</h4>
                                    <div className="playlist-video-author">Vicetone</div>
                                </div>
                                <img className="playlist-video-delete" src={deleteIcon} alt="" />
                            </div>
                        </div>
                        <div className="card card-body bg-secondary" style={{ width: '100%', marginTop: '18px' }}>
                            <form method="POST">
                                <h5 className="text-uppercase">Edit Playlist</h5>
                                <div className="form-wrap my-1">
                                    <input type="text" className="form-control form-control-alternative" placeholder="Paste Your URL..." />
                                    <button type="button" className="btn btn-primary ml-2">OK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;
