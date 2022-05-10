function HomeSearch() {
    return (
        <div id="main" className="container offset-md-2 p-2">
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <label htmlFor="search"><i className="fa fa-search text-light"></i></label>
                    <input onKeyUp={(e) => my_search(e)} type="text" name="search" id="search" className="form-control" autoComplete="off" />
                </div>
            </div>
            <div id="response" className="row scroll--simple">

            </div>
        </div>
    );
}

async function my_search(e) {
    if (e.code == "Enter" && e.target.value.length != 0) {
        var artist = document.getElementById("response");
        artist.innerHTML = "";

        await find_artist(e.target.value);
        await find_album(e.target.value);
        await find_track(e.target.value);
        await find_genre(e.target.value);

        if (artist.innerHTML === "") {
            artist.innerHTML = "<h1 class='m-2'>Aucun résultat trouvé !</h1>";
        }
    }
}

async function find_genre(name) {
    return await fetch("http://localhost:8000/api.php?genre=" + encodeURI(name))
        .then(data => data.text())
        .then(response => JSON.parse(response))
        .then(function (message) {
            if (message.length != 0) {
                var artist = document.getElementById("response");
                artist.innerHTML += "<h2>Genres: </h2>";

                for (let i = 0; i < message.length; i++) {
                    for (let j = 0; j < message[i].albums.length; j++) {
                        var my_div = document.createElement("div");
                        var my_img = document.createElement("img");
                        var my_text = document.createElement("p");

                        my_div.className = "col-md-4 result-artist";
                        my_img.src = message[i].albums[j].cover;
                        my_img.width = 75;
                        my_text.innerText = message[i].albums[j].genre + " - " + message[i].albums[j].name;

                        my_div.appendChild(my_img);
                        my_div.appendChild(my_text);
                        artist.appendChild(my_div);
                    }
                }
            }
        }
        );
}

async function find_album(name) {
    return await fetch("http://localhost:8000/api.php?album=" + encodeURI(name))
        .then(data => data.text())
        .then(response => JSON.parse(response))
        .then(function (message) {
            if (message.length != 0) {
                var artist = document.getElementById("response");
                artist.innerHTML += "<h2>Albums: </h2>";

                for (let i = 0; i < message.length; i++) {
                    for (let j = 0; j < message[i].albums.length; j++) {
                        var my_div = document.createElement("div");
                        var my_img = document.createElement("img");
                        var my_text = document.createElement("p");

                        my_div.className = "col-md-4 result-artist";
                        my_img.src = message[i].albums[j].cover;
                        my_img.width = 75;
                        my_text.innerText = message[i].name + " - " + message[i].albums[j].name;

                        my_div.appendChild(my_img);
                        my_div.appendChild(my_text);
                        artist.appendChild(my_div);
                    }
                }
            }
        }
        );
}

async function find_track(name) {
    return await fetch("http://localhost:8000/api.php?music=" + encodeURI(name))
        .then(data => data.text())
        .then(response => JSON.parse(response))
        .then(function (message) {
            if (message.length != 0) {
                var artist = document.getElementById("response");
                artist.innerHTML += "<h2>Morceaux: </h2>";

                for (let i = 0; i < message.length; i++) {
                    for (let k = 0; k < message[i].albums[0].tracks.length; k++) {
                        var my_div = document.createElement("div");
                        var my_img = document.createElement("img");
                        var my_text = document.createElement("p");

                        my_div.className = "col-md-4 result-artist";
                        my_img.src = message[i].albums[0].cover;
                        my_img.width = 75;
                        my_text.innerText = message[i].name + " - " + message[i].albums[0].tracks[k].title;

                        my_div.appendChild(my_img);
                        my_div.appendChild(my_text);
                        artist.appendChild(my_div);
                    }
                }
            }
        }
        );
}

async function find_artist(name) {
    return await fetch("http://localhost:8000/api.php?artist=" + encodeURI(name))
        .then(data => data.text())
        .then(response => JSON.parse(response))
        .then(function (message) {
            if (message.length != 0) {
                var artist = document.getElementById("response");
                artist.innerHTML += "<h2>Artistes: </h2>";

                for (let i = 0; i < message.length; i++) {
                    var my_div = document.createElement("div");
                    var my_img = document.createElement("img");
                    var my_text = document.createElement("p");
                    var my_description = document.createElement("p");


                    my_div.className = "col-md-4 result-artist";
                    my_description.className = "col-md-4 result-artist";
                    my_img.src = message[i].photo;
                    my_img.width = 75;
                    my_text.innerText = message[i].name;
                    my_description.innerText = message[i].description;

                    my_div.appendChild(my_img);
                    my_div.appendChild(my_text);
                    my_div.appendChild(my_description);
                    artist.appendChild(my_div);
                    
                   
                }
            }
        }
        );
}


export default HomeSearch;