function Navbar() {
  return (
    <main>
      <nav className="navbar fixed-top navbar-light bg-danger">
        <div className="container">
          <a className="navbar-brand text-light" href="#home">Home</a>
          <a className="navbar-brand text-light" href="#about">About me</a>
          <a className="navbar-brand text-light" href="#projects">Projects</a>
          <a className="navbar-brand text-light" href="#experience">Experience</a>
          <a className="navbar-brand text-light" href="#interests">Interests</a>
          <a className="navbar-brand text-light" href="#contact">Contact</a>
        </div>
      </nav>
    </main>
  )
}

export default Navbar