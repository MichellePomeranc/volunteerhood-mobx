import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';
import Axios from 'axios';

@inject("User")
class Profile extends Component {
	chooseSkill = async (e) => {
		e.preventDefault();
		let skills = this.state.skills;
		console.log(skills)
		let userId = this.props.User.user.id;
		let data = {
			skills: skills,
			userId: userId
		};
		console.log(data)
		Axios.post(`http://localhost:8080/addSkill`, data)
	}


		updateState = async (e) => {
			const value = e.target.value;
			let skills = this.props.User.user.skills;
			if (skills.includes(value)) {
				skills.splice(skills.indexOf(value), 1)
			} else {
				skills.push(value)
			}
			console.log(skills)
			this.setState({
				skills: skills
			})
		}

		render() {
			if (this.props.User.user.login) {
				return (
					<form>
						<div className="userProfile">
							<div className="profileName">Name</div>
							<div className="profileInfo">{this.props.User.user.name}</div>
							<div className="profileEmail">Email</div>
							<div className="profileInfo">{this.props.User.user.email}</div>
							<div className="profileRanking">Ranking</div>
							<div className="profileInfo">{this.props.User.user.ranking}<span>★</span></div>
						</div>
						<div>
							Skills: <br />
							<div name="skills" onChange={this.updateState}>
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Carpentry")} value="Carpentry" />Carpentry
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Design")} value="Design" />Design
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Languages")} value="Languages" />Languages
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Legal")} value="Legal" />Legal
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Electricity")} value="Electricity" />Electricity
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Math")} value="Math" />Math
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Plumbing")} value="Plumbing" />Plumbing
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Programming")} value="Programming" />Programming
                        <br />
								<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Writing")} value="Writing" />Writing
                    </div>
							<button onClick={this.chooseSkill}>sumbit</button>
						</div>
					</form>
				);
			} else {
				return <Redirect to="/login" />;
			}
		}
	}

	export default Profile;