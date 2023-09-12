
const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
            <a href="/" className='navbar-brand'>
                MovieBox
            </a>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="What do you want to watch?"/>
            <div className="control">
                <button>Search</button>
            </div>
        </div>
        <button>Sign in</button>
        <button>Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
