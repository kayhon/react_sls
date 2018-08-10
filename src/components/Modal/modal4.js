import React from'react';

const Modal4 = () => (
<div className="portfolio-modal modal fade" id="portfolioModal4" tab-index="-1" role="dialog" aria-hidden="true">
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
                             {/* Project Details Go Here  */}
                                    <h2 className="text-uppercase">Trusted Proffesionals</h2>

                                <p className="item-intro text-muted">Preferred Professionals</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/trust.jpg" alt=""/> 
                                <p>
                                    We understand that our clients often need trusted resources that can assist in this phase of their lives. Senior Living Services works with many trusted professionals in order to support our clients. There is no financial incentives, we simply just want to refer you to professionals that hold the same high standards as we do. We follow the process to ensure that our clients are happy with the professional referrals that we provide. From estate planning to hospice, private-duty home care and medical equipment.
                                </p>
                                <ul className="list-inline">
                                    <li>Date: January 2017</li>
                                    <li>Senior Living Service</li>
                                    <li>Category: Trusted Proffesionals</li>
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
    );

    export default Modal4;