import Cover from "../images/cover.jpeg";

function NavPlaylist()
{
    return (
        <div id="nav-playlist">
            <div className="row list-playlist">
                <div className="col-md-4 long-cover-playlist">
                    <img src={Cover} alt="cover" width={75} />
                    <p>Epic Battle Music 2022</p>
                </div>
                <div className="col-md-4 long-cover-playlist">
                    <img src={Cover} alt="cover" width={75} />
                    <p>Epic Battle Music 2022</p>
                </div>
                <div className="col-md-4 long-cover-playlist">
                    <img src={Cover} alt="cover" width={75} />
                    <p>Epic Battle Music 2022</p>
                </div>
            </div>
            <div className="row list-playlist">
                <div className="col-md-4 long-cover-playlist">
                    <img src={Cover} alt="cover" width={75} />
                    <p>Epic Battle Music 2022</p>
                </div>
                <div className="col-md-4 long-cover-playlist">
                    <img src={Cover} alt="cover" width={75} />
                    <p>Epic Battle Music 2022</p>
                </div>
                <div className="col-md-4 long-cover-playlist">
                    <img src={Cover} alt="cover" width={75} />
                    <p>Epic Battle Music 2022</p>
                </div>
            </div>
        </div>
    );
}

export default NavPlaylist;