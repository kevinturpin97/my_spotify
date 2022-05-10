import ShortCover from '../images/short-cover.jpeg';

function Catalog()
{
    return (
        <div id="catalog"> 
            <h2>Notre sélection</h2>
            <div className="row list-playlist">
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
            </div>
            <div className="row list-playlist">
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
                <div className="col-md-3 short-cover-playlist">
                    <img src={ShortCover} alt="cover" />
                    <h3>Daily Mix 2</h3>
                    <p>Future, Lil Tjay, Meek Mill, et bien plus</p>
                </div>
            </div>
        </div>
    );
}

export default Catalog;