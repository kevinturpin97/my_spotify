<?php

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

$db = new PDO(
    "mysql:host=localhost;dbname=spotify;charset=utf8",
    "breath",
    "root"
);

function api(string $music, string $album, string $artist, string $genre)
{
    global $db;

    $my_json = [];
    $albums = [];
    $tracks = [];
    
    if ($artist != "") {
        $query = "SELECT * FROM artists WHERE artists.name LIKE '" . $artist . "%' LIMIT 5;";
    } 
    else if ($music != "") {
        $query = "SELECT artists.id, artists.name, artists.description, artists.bio, artists.photo, tracks.name AS 'name_tracks' FROM artists INNER JOIN albums ON albums.artist_id = artists.id INNER JOIN tracks ON tracks.album_id = albums.id WHERE tracks.name LIKE '" . $music . "%' LIMIT 5;";
    }
    else if ($album != "") {
        $query = "SELECT artists.id, artists.name, artists.description, artists.bio, artists.photo, albums.name AS 'name_albums' FROM artists INNER JOIN albums ON albums.artist_id = artists.id WHERE albums.name LIKE '" . $album . "%' LIMIT 5;";
    }
    else if ($genre != "") {
        $query = "SELECT artists.id, artists.name, artists.description, artists.bio, artists.photo, genres.name AS 'name_genres' FROM artists INNER JOIN albums ON albums.artist_id = artists.id INNER JOIN genres_albums ON genres_albums.album_id = albums.id INNER JOIN genres ON genres.id = genres_albums.genre_id WHERE genres.name LIKE '" . $genre . "%' LIMIT 5;";
    } else {
        $query = "SELECT * FROM artists ORDER BY RAND() LIMIT 5;";
    }
    
    foreach ($db->query($query) as $a => $x_value) {

        $albums = [];
        $tracks = [];

        if ($genre != "") {
            $query = "SELECT albums.cover, albums.id, albums.name, genres.name AS 'genre' FROM albums INNER JOIN genres_albums ON albums.id = genres_albums.album_id INNER JOIN genres ON genres_albums.genre_id = genres.id INNER JOIN artists ON artists.id = albums.artist_id WHERE albums.artist_id=" . $x_value["id"] . " AND genres.name = '" . $x_value["name_genres"] . "';";
        }
        else if ($album != "") {
            $query = "SELECT albums.cover, albums.id, albums.name, genres.name AS 'genre' FROM albums INNER JOIN genres_albums ON albums.id = genres_albums.album_id INNER JOIN genres ON genres_albums.genre_id = genres.id INNER JOIN artists ON artists.id = albums.artist_id WHERE albums.artist_id=" . $x_value["id"] . " AND albums.name = '" . $x_value["name_albums"] . "';";
        } else {
            $query = "SELECT albums.cover, albums.id, albums.name, genres.name AS 'genre' FROM albums INNER JOIN genres_albums ON albums.id = genres_albums.album_id INNER JOIN genres ON genres_albums.genre_id = genres.id WHERE albums.artist_id=" . $x_value["id"] . ";";
        }
        

        foreach ($db->query($query) as $b => $value) {

            if ($music != "") {
                $query = "SELECT tracks.name, tracks.mp3 FROM tracks WHERE tracks.album_id=" . $value["id"] . " AND tracks.name ='" . $x_value["name_tracks"] . "';";
            } else {
                $query = "SELECT tracks.name, tracks.mp3 FROM tracks WHERE tracks.album_id=" . $value["id"];
            }

            foreach ($db->query($query) as $c => $n_value) {
                $tracks[] = array(
                    "title" => $n_value["name"],
                    "link" => $n_value["mp3"]
                );
            }
            $albums[] = array(
                "name" => $value["name"],
                "genre" => $value["genre"],
                "cover" => $value["cover"],
                "tracks" => $tracks
            );
        }
        $my_json[] = array(
            "name" => $x_value["name"],
            "bio" => $x_value["bio"],
            "description" => $x_value["description"],
            "albums" => $albums,
            "photo" => $x_value["photo"]
        );
    }
    echo json_encode($my_json);
}

if (@$_GET["music"] != NULL) {
    api(
        $music = strval($_GET["music"]),
        $album = "",
        $artist = "",
        $genre = "",
    );
}
elseif (@$_GET["album"] != NULL) {
    api(
        $music = "",
        $album = strval($_GET["album"]),
        $artist = "",
        $genre = "",
    );
}
elseif (@$_GET["artist"] != NULL) {
    api(
        $music = "",
        $album = "",
        $artist = strval($_GET["artist"]),
        $genre = "",
    );
}
elseif (@$_GET["genre"] != NULL) {
    api(
        $music = "",
        $album = "",
        $artist = "",
        $genre = strval($_GET["genre"]),
    );
} else {
    api(
        $music = "",
        $album = "",
        $artist = "",
        $genre = "",
    );
}