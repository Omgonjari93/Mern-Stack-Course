import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div>
            <div className="container">
                <div className="row mt-5 ">
                    <h2 className="text-center">Om Gonjari</h2>
                    <div className="col-md-4 text-center py-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OX5CX-Z50Oky3PxWkf6vqDHpMeUmQXqbjA&s" alt="profile-img" className="w-50" />
                    </div>
                    <div className="col-md-4 py-1 text-center">
                        <div>
                            <ul className='text-align'>
                                <b>Username :-</b>  om302005
                                <b>Email :-</b> om302005@gmail.com
                                <b>Mobile No :-</b> 8594394059
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 text-end  ">
                        <button className="my-2 btn btn-danger w-50">Log Out</button> <br />
                        <button className="my-2 btn btn-primary  w-50" onClick={handleShow}>Edit Profile</button ><br />
                        <button className="my-2 btn btn-warning w-50">Delete Profile</button> <br />
                        <button className="my-2 btn btn-success w-50">Post</button> <br />
                    </div>
                </div>


                {/*Post section start*/}
                <div className="row text-center">
                    <div className="col-md-6">
                        <h2>Feeds</h2>

                        <div className="card my-2">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
                                className="card-img-top w-100" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Beautifull Sunrise</h5>
                                <p className="card-text"></p>

                            </div>
                        </div>
                        <div className="card my-2">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
                                className="card-img-top w-100" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Beautifull Sunrise</h5>
                                <p className="card-text"></p>

                            </div>
                        </div>
                        <div className="card my-2">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
                                className="card-img-top w-100" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Beautifull Sunrise</h5>
                                <p className="card-text"></p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>My Posts</h2>
                        <div className="card my-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifpNoAIggamG9EZQQKpXsS4ty_4WjUyfQYA&s"
                                className="card-img-top w-60" alt="" />
                            <div className="card-body">
                                <button>Edit</button>
                                <p className="card-text"></p>
                            </div>
                        </div>
                         <div className="card my-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifpNoAIggamG9EZQQKpXsS4ty_4WjUyfQYA&s"
                                className="card-img-top w-60" alt="" />
                            <div className="card-body">
                                <button>Edit</button>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} animation={false} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <form className="login-form">
                        <div className="col-md-4 text-center py-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OX5CX-Z50Oky3PxWkf6vqDHpMeUmQXqbjA&s"
                         alt="profile-img" className="w-50" />
                    </div>
                        <div className="form-group  my-2  w-10">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter username" />
                        </div>
                        <div className="form-group  my-2  w-10">
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email" />
                        </div>
                         <div className="form-group  my-2  w-10">
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter number" />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary w-10 mt-4  register-btn">
                            Submit
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>





    )
}

export default Home
