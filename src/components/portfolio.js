import React from 'react';

const Portfolio = () => (

    <section class="bg-light" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">A Portfolio of Care</h2>
                    <h3 class="section-subheading text-muted">We consider everything when finding the right place for a loved one...</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="/img/indep.jpg" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>Independent</h4>
                        <p class="text-muted">Living</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="/img/assist.jpg" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>Assisted</h4>
                        <p class="text-muted">Living</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="/img/mem.jpg" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>Memory</h4>
                        <p class="text-muted">Care</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="/img/trust.jpg" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>Trusted</h4>
                        <p class="text-muted">Professionals</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="/img/law.jpg" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>Trust Attorneys</h4>
                        <p class="text-muted">Elder Law</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="/img/corp6.jpg" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>Corporate</h4>
                        <p class="text-muted">Partners</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

);

export default Portfolio;