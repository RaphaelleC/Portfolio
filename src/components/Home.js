function Home() {
  return (
    <section className="" id="home">
      <br/>
      <br/>
      <div className="d-flex justify-content-evenly mt-5"></div>
      <div className="container home-div bg-light">
        <div className="text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="name text-danger text-bold text-uppercase m-5">Raphaelle Charrier</h1>
          <p className="fs-2 text-danger">
            Junior Full-stack Developer<br/>Travel and snowboard enjoyer
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mt-5">
        <i className="fa fa-caret-square-down fa-3x"></i>
      </div>
    </section>
  )
}

export default Home