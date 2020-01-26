import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import { observable } from "mobx"

class NewRequest extends Component {
    constructor() {
        super();
        this.state = {
            skill: "",
            text: "",
            date: "",
            redirect: false
        }
    }
    @observable updateState = (e) => {
        const value = e.target.value
        const name = e.target.name
        console.log(name)
        this.setState({
            [name]: value
        })
        console.log(value)

    }

    addNewHelpReq = () => {
        let details = this.state
        this.props.addNewRequest(details)
        this.setState({
            redirect: true
        })
    }

    render() {
        const startDate = new Date();
        function onResize(event) {
            console.log(event.type);
        }

        if (this.state.redirect) {
            return (
                <Redirect to="/feed" />
            )
        } else {
            return (
                <div className="requestForm">
                    <div className="descriptionForm">Descripition</div>
                    <div><TextareaAutosize onResize={onResize} maxRows={5} className="description" type="text" name='text' onChange={this.updateState}></TextareaAutosize></div>
                    <div className="skillNeeded">Skill needed</div>
                    <div>
                        <select className="skillDropdown" name="skill" onChange={this.updateState}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="Carpentry"> Carpentry </option>
                            <option value="Design"> Design</option>
                            <option value="Electricity"> Electricity</option>
                            <option value="Languages"> Languages</option>
                            <option value="Legal"> Legal</option>
                            <option value="Math"> Math</option>
                            <option value="Plumbing"> Plumbing</option>
                            <option value="Programming"> Programming</option>
                            <option value="Writing"> Writing</option>
                        </select>
                    </div>
                    <div className="dateOption">Date</div>
                    <div>
                        <input className="dateSelected" type="date" name='date' min={startDate} onChange={this.updateState}></input>
                    </div>
                    <div >
                        <button className="addRequest" onClick={this.addNewHelpReq}>Create request</button>
                    </div>
                </div>
            )
        }
    }
}

export default NewRequest;