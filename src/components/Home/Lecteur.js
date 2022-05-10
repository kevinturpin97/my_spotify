var is_playing = 0;
var my_list_music = music();

async function music() {
    var my_list = [];
    
    const response = await fetch("http://localhost:8000/api.php");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].albums.length; j++) {
            for (let k = 0; k < data[i].albums[j].tracks.length; k++) {
                my_list.push({
                    "artist" : data[i].name,
                    "title" : data[i].albums[j].tracks[k].title, 
                    "link" : data[i].albums[j].tracks[k].link
                });
            }
        }
    }
    return my_list;
}
 
function Lecteur()
{
    return (
        <div id="lecteur" onLoad={music} className="container offset-md-2">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn"><i className="fa fa-repeat"></i></button>
                    <button onClick={last_play} className="btn"><i className="fa fa-arrow-left"></i></button>
                    <button id="play" onClick={my_play} className="btn"><i className="fa fa-circle-play"></i></button>
                    <button onClick={next_play} className="btn"><i className="fa fa-arrow-right"></i></button>    
                    <button className="btn"><i className="fa fa-shuffle"></i></button>
                </div>
                
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button id="mute" onClick={mute} className="btn"><i className="fa fa-volume-high"></i></button>
                    <input onChange={e => volume(e)} className="bg-dark" type="range" min="0" max="1" step="0.01" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto text-light">
                    <p id="title-song"></p>
                </div>
            </div>
        </div>
    );
}

var audio = my_list_music.then(data => new Audio(data[is_playing].link));

function title()
{
    my_list_music.then(function (data) {
        document.getElementById("title-song").innerText = data[is_playing].artist + " - " + data[is_playing].title;
    });
}

function my_play()
{   
    if (document.querySelector("#play").innerHTML == '<i class="fa fa-circle-play"></i>') {
        audio.then(data => data.play());
        document.querySelector("#play").innerHTML = '<i class="fa fa-circle-pause"></i>';
    } else {
        audio.then(data => data.pause());
        document.querySelector("#play").innerHTML = '<i class="fa fa-circle-play"></i>'; 
    }
    title();
}

function mute()
{
    audio.then((data) => {
        if (data.muted == true) {
            data.muted = false;
            document.getElementById("mute").innerHTML = '<i class="fa fa-volume-high"></i>';
        }
        else {
            data.muted = true;
            document.getElementById("mute").innerHTML = '<i class="fa fa-volume-xmark"></i>';
        }
    })
}

function next_play()
{
    my_list_music.then(data => {
        if (is_playing + 1 <= data.length) {
            is_playing++;
            audio.then(song => {
                song.load();
                song.src = data[is_playing].link;
                if (document.querySelector("#play").innerHTML != '<i class="fa fa-circle-play"></i>') {
                    song.play();
                }
            });
        }
    });
    title();
}

function last_play()
{
    my_list_music.then(data => {
        if (is_playing - 1 >= 0) {
            is_playing -= 1;
            audio.then(song => {
                song.load();
                song.src = data[is_playing].link;
                if (document.querySelector("#play").innerHTML != '<i class="fa fa-circle-play"></i>') {
                    song.play();
                }
            });
        }
    });
    title();
}

function volume(e)
{
    audio.then(data => {

        if (data.volume > 0.6) {
            document.getElementById("mute").innerHTML = '<i class="fa fa-volume-high"></i>'; 
        } else if (data.volume > 0.1) {
            document.getElementById("mute").innerHTML = '<i class="fa fa-volume-low"></i>'; 
        } else {
            document.getElementById("mute").innerHTML = '<i class="fa fa-volume-off"></i>'; 
        }
        data.volume = e.target.value;
    });
}

export default Lecteur;