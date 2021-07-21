function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand dark-red-color" href="#home">Home</a>
        <a className="navbar-brand dark-red-color" href="#about">About me</a>
        <a className="navbar-brand dark-red-color" href="#projects">Projects</a>
        <a className="navbar-brand dark-red-color" href="#experience">Experience</a>
        <a className="navbar-brand dark-red-color" href="#interests">Interests</a>
        <a className="navbar-brand dark-red-color" href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar