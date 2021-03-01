import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section className="home-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-6 mt-5">
                        <h1 className="home-title display-1 fw-bold">Get Your <br /> Team <span>Hired</span></h1>
                        <p className="lead">TeamHired helps you to make football players teams for the next world cup. You can find the top footballer here. We will provide you the best services all over the world. Feel free to contact us if you have any doubt.</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;