const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
            <li className="nav-item active">
                <a className="nav-link" href="/"> <b>Home</b> <span class="sr-only">(current)</span></a>
            </li>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">






                    <a className="navbar-brand" href="login"> <b>Sign in</b> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/customers"> <b>Customers</b> <span class="sr-only">(current)</span></a>
                        </li>

                    </ul>


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/movies"> <b>Movies</b> <span class="sr-only">(current)</span></a>
                        </li>

                    </ul>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/rentals"> <b>Rentals</b> <span class="sr-only">(current)</span></a>
                        </li>

                    </ul>


                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>


    );
}

export default Navbar;