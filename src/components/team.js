import React from 'react';

const Team = () => (

    <section className="bg-light" id="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">We are here for you every step of the way.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/img/team/11.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/img/team/222.jpg" alt=""/>
                        <h4>Natalie Barrantes</h4>
                        <p className="text-muted">Director</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/img/team/33.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted"><b>Quotes from our previous clients:</b><br/>
                    "Natalie and Panida could not have made the stressful experience more smooth for our family. We were faced with having to place our mom in 3 days and these ladies made it happen. We couldn't be happier with the service received."<br/>
                    <b>Nancy L. Poway, CA</b><br/>
                    "I just wanted to send you our sincere thanks for all that you did in the last 2 weeks for my Mom and for her appropriate placement in Poway. We are hoping that things settle down soon and that she adjusts to her lovely new home. We know that there were lots of choices in San Diego, and we greatly appreciate your work in narrowing it down for us. We are happy to give you a referral for your excellent service !"<br/>
                    <b>Terri T. Redding, CA</b><br/></p>
                </div>
            </div>
        </div>
    </section>

);

export default Team;