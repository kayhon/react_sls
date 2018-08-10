import React from "react";

const Service = () => (

    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Call us today A 100% Free service to families to assist with your Senior Living search. From Consultation to showing you properties. We are here for you every step of the way. FIND THE RIGHT SENIOR LIVING OPTION Call us today ...WE ARE YOUR ADVOCATE</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Consultation and Assessment</h4>
            <p className="text-muted">Once we speak with you to determine your current situation, preferences, timeline, and budget, we begin to research senior living options that fit your needs. We first begin by checking the States records on how well a particular community is doing and what the past track records look like. From there, we preview the community and learn more about the details that matter the most.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Property Showings</h4>
            <p className="text-muted">Based on what we learned about your needs and preferences, we narrow down to showing you the best three communities that fit you well. We accompany you to showings to advocate and support you during this process. We intervene at the most appropriate time and guide you to the most informative tours on your behalf.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Negotiation and Contract</h4>
            <p className="text-muted">Once we complete your showings with you, we discuss with you whether you would like to see more properties or make a decision based on what you have seen. If you are satisfied with narrow down your options, we begin our negotiation process with the communities to fine tune the agreements and continue to advocate for you.</p>
          </div>
        </div>
      </div>
    </section>
);

export default Service;