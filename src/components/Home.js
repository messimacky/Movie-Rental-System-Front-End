const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="login"> <b>Sign in</b> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

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
            </div>
        </nav>


    );
}

export default Navbar;