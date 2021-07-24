function Projects() {
  return (
    <main className="text-center" id="projects">
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <h1 className="fw-bold text-danger mb-5">My Projects</h1>
          <hr className="border"></hr>
        </div>
      </div>
      <div className="row m-5 d-flex align-items-center">
        <div className="col">
          <img className="screenshot" src="https://i.imgur.com/XCrqqtj.png" alt="WoCRO"/>
        </div>
        <div className="col">
          <h2 className="badge bg-danger fs-2">WoCRO</h2>
          <h4 className="text-decoration-underline">Pair project | 11 days</h4>
          <div className="mb-3">
            <i className="fa fa-html5 m-2"></i>
            <i className="fa fa-css3 m-2"></i>
            <i className="fa fa-js m-2"></i>
            <i className="fa fa-sass m-2"></i>
            <i className="fa fa-react m-2"></i>
            <i className="fa fa-python m-2"></i>
          </div>
          <div>
            <p className="fs-5">WoCRO is an app for Help-seekers and NGOs to log major world crises into one place and to collaborate efficently on solving them.</p>
            <p className="fs-5">We created our own back end using Python, Django and TablePlus (SQL), as well as a front end with React. In this project, on the back end side, I created the user model and the login/register functionalities, and it followed on the front end side with the login/register pages, the NGO creating resources form, as well as implementing Mapbox in our app. I also took care of the layout of the website, using custom CSS classes and Bootstrap.</p>
            <a 
              href="https://wocro-client.netlify.app/"
              target="_blank" 
              rel="noreferrer" 
              type="button" 
              className="btn btn-danger m-2"
            >
              Open project
            </a>
            <a
              href="https://github.com/RaphaelleC/project-4-server" 
              target="_blank" 
              rel="noreferrer"
              type="button" 
              className="btn btn-danger m-2"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5">
            <hr className="border"></hr>
          </div>
        </div>
      </div>
      <div className="row m-5 d-flex align-items-center">
        <div className="col">
          <h2 className="badge bg-danger fs-2">MontVenture</h2>
          <h4 className="text-decoration-underline">Group project | 10 days</h4>
          <div className="mb-3">
            <i className="fa fa-html5 icon-medium-size m-2"></i>
            <i className="fa fa-css3 icon-medium-size m-2"></i>
            <i className="fa fa-js icon-medium-size m-2"></i>
            <i className="fa fa-sass icon-medium-size m-2"></i>
            <i className="fa fa-react icon-medium-size m-2"></i>
            <i className="fa fa-node-js icon-medium-size m-2"></i>
          </div>
          <p className="fs-5">MontVenture is an app for all nature enjoyers to publish their favourite spots for hiking, cycling, snowboarding and more.</p>
          <p className="fs-5">We created our own database/API using Node.js and MongoDB, and created a website with React from it. We divided the work into tasks, some done individually and some all together. My individual part was to create the different functions needed in the back end for Login and Register, to create the forms on the website using these two functionalities and the styling (using CSS and Bulma) of the activities pages.</p>
          <a 
            href="https://montventure-frontend.netlify.app/" 
            target="_blank" 
            rel="noreferrer" 
            type="button" 
            className="btn btn-danger m-2"
          >
            Open project
          </a>
          <a
            href="https://github.com/RaphaelleC/project-3-server" 
            target="_blank" 
            rel="noreferrer"
            type="button" 
            className="btn btn-danger m-2"
          >
            View on GitHub
          </a>
        </div>
        <div className="col">
          <img className="screenshot" src="https://i.imgur.com/JkVeRbE.jpg" alt="MontVenture"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5">
            <hr className="border"></hr>
          </div>
        </div>
      </div>
      <div className="row m-5 d-flex align-items-center">
        <div className="col">
          <img className="screenshot" src="https://i.imgur.com/VfB1bd2.jpg" alt="Ghiblipedia"/>
        </div>
        <div className="col">
          <h2 className="badge bg-danger fs-2">Ghiblipedia</h2>
          <h4 className="text-decoration-underline">Pair project | 2 days</h4>
          <div className="mb-3">
            <i className="fa fa-html5 icon-medium-size m-2"></i>
            <i className="fa fa-css3 icon-medium-size m-2"></i>
            <i className="fa fa-js icon-medium-size m-2"></i>
            <i className="fa fa-sass icon-medium-size m-2"></i>
            <i className="fa fa-react icon-medium-size m-2"></i>
          </div>
          <p className="fs-5">Ghiblipedia is a website referencing movies and characters from the Ghibli Studio, using a public API.</p>
          <p className="fs-5">We chose a public API to use to create a website. We divided the workload in half so we could both touch everything, from getting the data from the API, the links between pages and the styling with React and Bulma.</p>
          <a 
            href="https://peaceful-lalande-58dacb.netlify.app/" 
            target="_blank" 
            rel="noreferrer" 
            type="button" 
            className="btn btn-danger m-2"
          >
            Open project
          </a>
          <a
            href="https://github.com/RaphaelleC/project-2" 
            target="_blank" 
            rel="noreferrer"
            type="button" 
            className="btn btn-danger m-2"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5">
            <hr className="border"></hr>
          </div>
        </div>
      </div>
      <div className="row m-5 d-flex align-items-center">
        <div className="col">
          <h2 className="badge bg-danger fs-2">2048</h2>
          <h4 className="text-decoration-underline">Solo project | 1 week</h4>
          <div className="mb-3">
            <i className="fa fa-html5 icon-medium-size m-2"></i>
            <i className="fa fa-css3 icon-medium-size m-2"></i>
            <i className="fa fa-js icon-medium-size m-2"></i>
          </div>
          <p className="fs-5">I created 2048 with a focus on replicating the original game itsel, where you merge tiles to get from 2 to 2048, and chose to continue afterwards or stop and get your scsore.</p>
          <p className="fs-5">I created my own version of the 2048, a grid-based game, to be played in a browser. I used HTML, CSS and JavaScript.</p>
          <a 
            href="https://raphaellec.github.io/project-1/" 
            target="_blank" 
            rel="noreferrer" 
            type="button" 
            className="btn btn-danger m-2"
          >
            Open project
          </a>
          <a
            href="https://github.com/RaphaelleC/project-1" 
            target="_blank" 
            rel="noreferrer"
            type="button" 
            className="btn btn-danger m-2"
          >
            View on GitHub
          </a>
        </div>
        <div className="col">
          <img className="screenshot" src="https://i.imgur.com/iBLierm.png" alt="2048"/>
        </div>
      </div>
    </main>
  )
}

export default Projects