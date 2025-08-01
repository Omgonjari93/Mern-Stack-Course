import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const name = "Om Gonjari"

  console.log("Hello Project")

  console.log(name, "====")

  return (
    <>


      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">Om Gonjari</a>
        <div class="container">


          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

      </div>

    {/* // <!-- Hero Section --> */}
    <section class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="text-white mt-5 mb-5">Hi, I'm Om Gonjari</h1>
                    <p class="text-white">MERN Stack Developer With Experience</p>
                    <a class="btn btn-primary btn lg mb-10">Hier Me</a>
                </div>
            </div>
        </div>
    </section>

    {/* // <!-- About Us --> */}

    <div class="container py-3">
        <h2 class="text-center section-title">About Me</h2>
        <div class="row">
            <div class="col-md-6 text-center">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Profile"
                    class="w-50 img-fluid rounded">
            </div>
            <div class="col-md-6 m-auto">
                <p>I am a dedicated MERN stack learner and a professional developer and love to creat the websites
                    for others. I am getting my hands on HTML,javascript,css and other langugaes
                    I am a dedicated MERN stack learner and a professional developer and love to creat the websites
                    for others. </p>
                <p>
                    I am getting my hands on HTML,javascript,css and other langugaes
                    I am a dedicated MERN stack learner and a professional developer and love to creat the websites
                    for others. I am getting my hands on HTML,javascript,css and other langugaes
                </p>

                <button>Download Resume</button>
            </div>


        </div>

        {/* <!-- Skills Section --> */}
        <section>
            <div class="container">
                <div class="row">
                    <h2 class="text-center section-title">Skills</h2>
                    <div class="col md-3 text-center">
                        <div class="card">
                            <img src="https://cdn-icon.png.flation.com/512/1205/1205510.png" class="card-img-top"
                                alt="...">
                            <div class="card-body">
                                <h5 class="card-title">MongoDb</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card’s content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col md-3 text-center">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Express Js.</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card’s content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col md-3 text-center">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">React</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card’s content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col md-3 text-center">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Node</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card’s content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </>
  );
}

export default App
