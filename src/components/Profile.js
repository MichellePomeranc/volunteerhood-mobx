import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';
import Axios from 'axios';

@inject("User")
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      skills: []
    };
  }
  
componentWillMount(){
	this.setState({
		skills: this.chooseSkill()
	})		
}

//  componentDidMount(){
// 	this.preventDefault()
//  }

  chooseSkill = async()=>{
        let skills = this.state.skills
		let userId = this.props.User.user.id
        let data ={
          skills: skills,
          userId: userId
        }
		await Axios.post(`http://localhost:8080/addSkill`, data)
		skills = await this.props.User.getSkills()
		skills = skills.data.map(s=>s.skill)
			this.setState({
				skills
			})
		console.log(skills)
			

  	}
	
	//   login = () => {
	// 	let newUser = { ...this.state }
	// 	this.props.User.login(newUser.email, newUser.password)
	//   }

    	updateState = async (e) => {
        const value = e.target.value;
        let skills = this.state.skills;
        if(skills.includes(value)){
          return skills
        }
    		skills.push(value);
    		// await this.setState({
    		// 	skills
    		// });
	  };
	  
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
								<input type="checkbox" value="Carpentry" />Carpentry
								<br />
								<input type="checkbox" checked={this.skills} value="Design" />Design
								<br />
								<input type="checkbox" value="Languages" />Languages
								<br />
								<input type="checkbox" value="Legal" />Legal
								<br />
								<input type="checkbox" defaultChecked={false} value="Electricity" />Electricity
								<br />
								<input type="checkbox" value="Math" />Math
								<br />
								<input type="checkbox" value="Plumbing" />Plumbing
								<br />
								<input type="checkbox" value="Programming" />Programming
								<br />
								<input type="checkbox" value="Writing" />Writing
								<br />
								<input type="checkbox" value="Education" />Education<br />
							</div>
							<button onClick={this.chooseSkill}>Save</button>
						</div>
				</form>
			);
		} else {
			return <Redirect to="/login" />;
		}
	}
}
export default Profile;