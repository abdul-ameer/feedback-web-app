import React from "react";
import Thankyou from "./Thankyou";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Ratings from "./Ratings";
import "./App.css";


class ReviewForm extends React.Component{
    
    state = {
        name: "",
        email:"",
        phone: "",
        host:"Excellent",
        beverage:"Excellent",
        clean:"Excellent",
        experience:"Excellent",
    };
    // function Example() {

    add = (e) => {
        e.preventDefault();
        if(this.state.name ==="" || this.state.email === "" || this.state.phone === ""){
            alert("All the fields are mandatory!");
            return;
        }

        this.props.addFeedbackHandler(this.state);
        this.setState({name:"", email:"", phone:"", host:"", beverage:"",clean:"", experience:""});
        // <Thankyou />
        console.log(this.props);
        // this.props.history.push("/");

    }
    render(){
        return (
            <div className="ui main">
            <div className="ui segment">
            <h2>Aromatic bar</h2>
            </div>

            <form className="ui form" onSubmit={this.add}>
            {/* <div class="ui two column very relaxed grid"> */}
            <div className="ui segment">

                    <div className="field">
                        <label className="required">Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Name" 
                        value ={this.state.name} 
                        onChange={(e) => this.setState({name:e.target.value})} />
                    </div>

                    <div className="field">
                        <label className="required">Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="Email" 
                        value ={this.state.email} 
                        onChange={(e) => this.setState({email:e.target.value})}/>
                    </div>

                    <div className="field">
                        <label className="required">Phone</label>
                        <input 
                        type="tel"
                        placeholder="9999999999"
                        value ={this.state.phone} 
                        onChange={(e) => this.setState({phone:e.target.value})}/>
                    </div>
                       
                    <div className="field">
                    <label className="required">Please rate the quality of the service you received from your host.</label>
                    {/* <Ratings host={this.state}/> */}
                    </div>
                    <div className="field">
                    <label className="required">Please rate the quality of your beverage.</label>
                    {/* <Ratings getState={this.state}/> */}
                    </div>
                    <div className="field">
                    <label className="required">Was our restaurant clean?</label>
                    {/* <Ratings getState={this.state}/> */}
                    </div>
                    <div className="field">
                    <label className="required">Please rate your overall dining experience</label>
                    {/* <Ratings getState={this.state}/> */}
                    </div>
                    
                </div>
                    
                    <button className="ui button green right">Submit Review</button>

                </form>

                
            </div>
        );
    }
}

export default ReviewForm;