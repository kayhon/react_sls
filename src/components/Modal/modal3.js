import React from 'react';


const Modal3 = () => (

<div className="portfolio-modal modal fade" id="portfolioModal3" tab-index="-1" role="dialog" aria-hidden="true">
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
                            {/* Project Details Go Here */} 
                            <h2 className="text-uppercase">Memory Care</h2>

                            <p className="item-intro text-muted">caters to patients with Alzheimer's disease, dementia and other types of memory problems.</p>

                            <img className="img-fluid d-block mx-auto" src="assets/img/mem.jpg" alt="" />
                            <p>
                                Memory care communities are ideal for seniors suffering from memory loss due to dementia, Alzheimer’s Disease, or some neurodegenerative disorder. Although most memory-related illnesses are incurable, many facilities work to with specialized methods and treatment plans to slow the condition’s progression.<br/>

                                All memory care communities are secured in order to create additional safety measures.<br/>

                                These communities offer:<br/>

                                •Meal preparation<br/>

                                •Medication managements<br/>

                                *Activities geared towards memory impairment<br/>

                                •Laundry<br/>

                                •Housekeeping<br/>

                                •ADLs<br/>

                                •Showering<br/>

                                •Grooming<br/>

                                •Dressing<br/>

                                *Incontinence Care<br/>
                            </p>

                            <ul className="list-inline">
                                <li>Date: June 2018</li>
                                <li>Senior Living Services</li>
                                <li>Category: Memory care</li>
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

export default Modal3;