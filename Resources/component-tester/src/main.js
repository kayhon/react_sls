import React from "react";

const Main = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <a className="navbar-brand" href="#">
        Senior Living Service (858) 633-3590
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              href="#" >
              Portfolio
                         </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Team
                    </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
                    </a>
          </li>
        </ul>
        
      </div>
    </nav>
    <div className="jumbotron">
      <h1>About Us</h1>
      <p>
        Senior Living Services is a referral placement agency for Senior Housing options. Our service is free to clients and we work with you to find the best possible housing options for your loved ones needs. We do this by first understanding what’s important to you. From understanding clinical, social and even family dynamic aspects of how you see care implemented. We connect all family members communication together to come to an informed decision.</p>
      <p>
        Prior to narrowing down communities that fit your needs, we first personally preview each property to make sure that it meets our high standards and yours. We give you all available information that are available, including the State’s records.</p>
      <p>
        We then accompany you to the actual showings and step into an advocacy role as you make the decision on the community that fits all of your requirements. We even accompany you to the signing of contract and help bring any available professional resources to you. We also guide you to completing the clinical required documentation that are needed prior to your move-in date.</p>
      <p>
        Our job is to make this difficult time an easy and stress free as possible.
      </p>
    </div>
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Our services.</h3>

      </div>
      <div className="card-body">
        <p className="card-text">
          How we work:</p>

        <h3> Placement Procedure</h3>
        <p>
          Finding the right Home Care, Assisted Living or Memory Care for your loved on is not an easy process.  We want to make sure that you know exactly what to expect.  At Senior Living Service, we collaborate and advocate with you each step of the way.  The following are steps in which you can expect.</p>
        <p>
          First initial meeting via phone/ in person to discuss current situation, preference, timeline and budget. We collect all pertinent information about your loved one’s medical and social history to help us find the best Assisted Living/ care options.</p>
        <p>
          We begin our research phase and evaluate the State’s records, community reputation and industry knowledge in order to narrow down to the 3 best communities to show you.
</p>
        <p>
          We preview the communities in order to make sure it meets our high standards and yours.</p>
        <p>
          We set up a time to accompany you to all showings and move into an Advocate role in representing you.
 We discuss with you the best options and present to you the pros and cons of each community.</p>
        <p>
          We help you gather all clinical, State, and Community paperwork required for a move-in.</p>
        <p>
          We obtain a copy of the contract/ agreement to pre-review before you sign, to make sure there are no surprises.</p>
        <p>
          We negotiate with the community on the best rooms, rates, and terms on your behalf.</p>
        <p>
          We accompany you to the signing and move-in agreement.</p>
        <p>
          We bring any additional resources to you such as Elder Law/ Trust Attorney, Financial Planner, Real Estate Agent/Broker, and Moving companies that specialize in senior moves.</p>
        <p>
          After the move-in, we follow up with the community to see how your loved one is adjusting to their new home and report back to you and your family.
        </p>
      </div>
    </div>
  </div>

);
export default Main;