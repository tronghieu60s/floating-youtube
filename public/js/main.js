document.addEventListener('DOMContentLoaded', () => {
    let playlistVideoActive = document.querySelector(".playlist-video.active");
    let playlistVideoActiveChildren = playlistVideoActive.children;
    playlistVideoActiveChildren[0].style.display = 'block';
    
    let playlistVideos = document.getElementsByClassName("playlist-video");
    for (const playlistVideo of playlistVideos) {
        playlistVideo.addEventListener("mouseover", ()=>{
            let playlistVideoChildren = playlistVideo.children;
            playlistVideoChildren[3].style.display = 'block';
        })
        playlistVideo.addEventListener("mouseout", ()=>{
            let playlistVideoChildren = playlistVideo.children;
            playlistVideoChildren[3].style.display = 'none';
        })
    }
});