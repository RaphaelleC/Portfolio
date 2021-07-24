function Contact() {
  return (
    <main className="text-center" id="contact">
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1 className="fw-bold text-danger mb-5">Contact</h1>
          <hr className="border"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="m-5 pt-4 col-4 border border-5 border-light rounded bg-light">
          <a
            className="link-danger"
            target="_blank" 
            href="mailto:raphaelle.charrier@gmail.com" 
            rel="noreferrer">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-envelope fs-4"></i>
              </li>
              <li className="list-inline-item fs-4">
                <p className="badge bg-danger">Email</p>
              </li>
            </ul>
          </a>
          <a
            className="link-danger"
            target="_blank" 
            href="https://github.com/RaphaelleC" 
            rel="noreferrer"
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-github fs-4"></i>
              </li>
              <li className="list-inline-item fs-4">
                <p className="badge bg-danger">GitHub</p>
              </li>
            </ul>
          </a>
          <a
            className="link-danger"
            target="_blank" 
            href="https://linkedin.com/in/raphaellecharrier" 
            rel="noreferrer"
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-linkedin fs-4"></i>
              </li>
              <li className="list-inline-item fs-4">
                <p className="badge bg-danger">LinkedIn</p>
              </li>
            </ul>
          </a>
        </div>
        <div className="col"></div>
      </div>
    </main>
  )
}

export default Contact