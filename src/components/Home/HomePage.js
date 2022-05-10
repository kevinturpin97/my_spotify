import NavPlaylist from "./NavPlaylist";
import Catalog from "./Catalog";

function HomePage() {
    return (
        <div id="main" className="container offset-md-2 p-2">
            <div className="row justify-content-between">
                <div className="col-md-2 text-light">
                    <button className="nav_arrow btn"><i className="fa fa-angle-left"></i></button>
                    <button className="nav_arrow btn"><i className="fa fa-angle-right"></i></button>
                </div>
                <div className="col-md-1">
                    <button id="user" className="btn text-light">
                        RainMan <i className="fa fa-caret-down"></i>
                    </button>
                </div>
            </div>
            <NavPlaylist />
            <Catalog />
        </div>
    );
}



export default HomePage;