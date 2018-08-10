import React from 'react';

const Modal1= () => (

<div className="portfolio-modal modal fade" id="portfolioModal1" tab-index="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                    <div className="rl"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            {/*  Project Details Go Here  */}
                                <h2 className="text-uppercase">Independent Living</h2>

                            <p className="item-intro text-muted">For an older adult, the choice between assisted living and independent living usually depends on how well an individual can manage daily activities without extra assistance.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/indep.jpg" alt="" /> 
                            <p>
                                Independent Living Communities vary in size, capacity, and general look-and-feel. They can be quaint, cozy communities or palatial estates. This type of community provides the least amount of care. However, you can hire in-home care within a retirement community.
                
                                Independent living is for elders who may not be safe living at home, may not be safe driving, may be living in an unsafe                                neighborhood, or may need minor assistance daily.

                                Independent Living offers:<br />

                                •Meal plans<br />

                                •Transportation<br />

                                •Laundry<br />

                                •Housekeeping<br />

                                •Home and yard maintenance<br />

                                •Safe community<br />
                            </p>
                            <ul className="list-inline">
                                <li>Date: June 2018</li>
                                <li>Senior Living Service</li>
                                <li>Category: Indpenedent Living</li>
                            </ul>
                            <button className="btn btn-primary" data-dismiss="modal" type="button">
                                <i className="fa fa-times"></i>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</div>
)

export default Modal1;