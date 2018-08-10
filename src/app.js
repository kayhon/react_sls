import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Nav,Header,Form,Services,Portfolio,About,Team,Contact,Client,Footer,Modals,Biscard} from './components';



class App extends Component {
    render(){
        return (
            <div>
                <Nav />
                <Header />
                <Form />
                <Services />
                <Portfolio />
                <About />
                <Team />
                <Contact />
                <Client />
                <Footer />
                <Modals />
            </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'))