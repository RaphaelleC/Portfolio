function Contact() {
  return (
    <main className="text-center" id="contact">
      <br/>
      <br/>
      <br/>
      <h1 className="">Contact</h1>
      <div className="row">
        <div className="col"></div>
        <div className="m-5 pt-4 col-3 border border-5 border-light rounded-circle bg-light">
          <a
            className="link-danger"
            target="_blank" 
            href="mailto:raphaelle.charrier@gmail.com" 
            rel="noreferrer">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-envelope"></i>
              </li>
              <li className="list-inline-item fs-5"><p>Email</p></li>
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
                <i className="fa fa-github"></i>
              </li>
              <li className="list-inline-item fs-5"><p>GitHub</p></li>
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
                <i className="fa fa-linkedin"></i>
              </li>
              <li className="list-inline-item fs-5"><p>LinkedIn</p></li>
            </ul>
          </a>
        </div>
        <div className="col"></div>
      </div>
    </main>
  )
}

export default Contact