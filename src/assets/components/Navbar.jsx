import { Link } from "react-router-dom";
export const Navbar = ({data}) => {

    return(
        <>
        <nav id="main-nav">
        <div className="container">
            <img src="" alt="news.krimsonsquad" className="logo"/>
           
            <ul>
                <li><Link className="current" to="/">Home</Link></li>
                <li><Link className="ioio" to="/highlights">Highlights</Link></li>
                <li><Link className="ioio" to="/tools">Tools</Link></li>
                <li><Link className="ioio" to="/techniques">Techniques</Link></li>
                <li><Link className="ioio" to="/about">About</Link></li>
            </ul>
        </div>
    </nav>
        </>
    )
}
