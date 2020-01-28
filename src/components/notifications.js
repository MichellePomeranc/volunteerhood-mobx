import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from 'react-router-dom';

@inject('Feed', 'User')
@observer
class Notifications extends Component {

    async componentWillMount() {
        // this.props.Feed.matchHelpAndHelper(this.props.User.user.id);
        let x = await this.props.Feed.matchHelpAndHelper(this.props.User.user.id);
        // this.props.Feed.notifications.push(x)
        console.log(x);


    }
    render() {
        // let notifications = [...this.props.Feed.notifications];
        // let x = this.props.Feed.matchHelpAndHelper(this.props.User.user.id);
        // console.log(x);

        // console.log(notifications);
        // console.log(this.props.User.user.id);
        // console.log(this.props.Feed.notifications[1].id)
        // return (
        //     < div >
        //         <h3>noti</h3>
        //         {/* <div>{this.props.Feed.notifications.map(n => <div>{n.id}</div>)}</div> */}
        //         {/* <div>{notifications.map(n => <div>{n.id}</div>)}</div> */}
        //     </div >

        // )
        if (this.props.Feed.notifications.length > 1) {
            let notifications = this.props.Feed.notifications[0].filter(n => n !== undefined)
            let userReqId = this.props.Feed.notifications[0].map(n => n.help_request_id)
            userReqId = [...new Set(userReqId)]
            console.log(userReqId);
            // let helpers = this.props.Feed.notifications[0].map(n => n.helper_id)




            return (
                <div>
                    {/* <div>request for help id: {notifications.map(n => <div>{n.id}</div>)}</div>
                    <div>who wants to help? {notifications.map(n => <div>{n.userHelper}</div>)}</div> */}

                    {/* <div>request for help id: {notifications.map(n => <div>{n.help_request_id}</div>)}</div> */}
                    <div>request for help id: {notifications[0].help_request_id}</div>
                    <div>who wants to help? {notifications.map(n => <div>{n.helper_id}</div>)}</div>

                    {/* <div>{userReqId.map(r=> {

                    })}</div> */}
                </div>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default Notifications;