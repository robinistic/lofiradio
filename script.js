
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '0',
    width: '0',
    videoId: 'qI6hFhksPFs',
    disablekb: '0',
    playerVars: {
        start: Math.round(Math.random()*1000),
        autoplay: 1,
        loop: 1,
        controls: 0,
        showinfo: 0,
        autohide: 1,
        modestbranding: 1,
        vq: 'sd144',
        
    }
  });
}