import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import pic1 from '../../../images/pic1.jpg';
import pic2 from '../../../images/pic2.jpg';
import other5 from '../../../images/other5.jpg';
import art1 from '../../../images/art1.jpg';
import art2 from '../../../images/art2.jpg';
import art3 from '../../../images/art3.jpg';
import art4 from '../../../images/art4.jpg';
import last from '../../../images/last.jpg';
import {  FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="container">
                <div className="row">

                    <div class="featured-area">
                        <h3><b>Featured Works</b></h3>
                        <p>Technology and art combine to deliver a very contemporary <br/> visual story telling approach in the world of art.</p>
                        <div class="image-area">
                            <img class="pic1" src={pic1} alt=""/>
                            <img  src={pic2} alt=""/>
                            <img class="pic2" src={other5} alt=""/>
                        </div>
                    </div>

                    <div>
                        <div class="category-area">
                            <h3 class="text"><b>My Category</b></h3>
                            <p class="text1">Discover The World Through Original Paintings For Sale</p>
                        </div>
                    </div>
                    <section>
                        <div className="card" style="width: 18rem;">
                            <img src={art1} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </section>

                    <div>
                        <div className="row footer-area">
                                <div className="col-md-4">
                                    <h3>Arafat Hosen</h3>
                                    <div class='icon-area'>
                                        <a class='icon-style' href=""><FaFacebookF /></a>
                                        <a class='icon-style' href=""><AiFillYoutube /></a>
                                        <a class='icon-style' href=""><FaTwitter/></a>
                                        <a class='icon-style' href=""><GrLinkedinOption/></a>
                                        <a class='icon-style' href=""><FaInstagram/></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h4>LINK</h4>
                                    <br/>
                                    <p>Home</p>
                                    <p>About</p>
                                    <p>Gallery</p>
                                    <p>Shop</p>
                                </div>
                                <div className="col-md-4">
                                    <h4>GET IN TOUCH WITH US</h4>
                                    <br/>
                                    <p>832 Thompson Drive, San Fransisco CA 94107, United States</p>
                                    <p>+123 345123 556</p>
                                    <p>support@bookland.id</p>
                                </div>
                            
                        </div>

                        <div className="row last">
                        <footer>Arafat Hosen© 2020 All Rights Reserved</footer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;