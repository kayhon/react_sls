import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            location: "",
            serv: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleFormSubmit(event) {
        event.preventDefault();
        console.log('handling the submit');
        const data = this.state;
        console.log(data);
        axios.post('api/contacts', data)
        .then(function(data){
            console.log(data)
        }).catch(function(err){
            console.log(err);
        });
    }

    handleChange (event) {
        const {name , value } = event.target;
        this.setState({ 
            [name]: value
        });
    }
    
    render(){
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <div className="container" id="nownow">
                    <div className="wrapper animated bounceInLeft">
                        <div className="company-info" >
                            <h3 >Senior Living Service</h3>
                            <ul>
                                <li><i className="fa fa-road"></i> Contact Now!</li>
                                <li><i className="fa fa-phone"></i> (858) 633-3590</li>
                                <li><i className="fa fa-envelope"></i> seniorlivingervices@gmail.com</li>
                            </ul>
                        </div>
                        <div id="results" className="contact">
                            <h3>Find a Place, Services, & Location</h3>
                            <form>
                                <p>
                                    <label>Name</label>
                                    <input id="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter your name" type="text" name="name"/>
                                </p>
                                <p>
                                    <label>Service</label>
                                    <select onChange={this.handleChange} value={this.state.serv} id="services" list="services5" name="serv">
                                        <option value="Independant Living">Independant Living</option>
                                        <option value="Assisted Living">Assisted Living</option>
                                        <option value="Memory Care">Memory Care</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Email Address</label>
                                    <input id="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" type="text" name="email"/>
                                </p>
                                <p>
                                    <label>Phone Number</label>
                                    <input id="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone Number" type="text" name="phone"/>
                                </p>
                                <p>
                                    <label>Location:</label>
                                    <input id="location" onChange={this.handleChange} value={this.state.location} placeholder="please enter a zip" type="text" name="location"/>
                                </p>
                                <p className="full">
                                    <button id="submitBtn" onClick={this.handleFormSubmit}>Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="absolute"></div>
            </div>
        )
    }    
}

export default Form;