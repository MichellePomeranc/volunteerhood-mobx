import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from 'react-router-dom'


@inject('Feed', 'User')
@observer
class Notifications extends Component {

    UNSAFE_componentWillMount() {
        this.props.Feed.matchHelpAndHelper(this.props.User.user.id);
    }
    render() {
        // let notifications = this.props.Feed.notifications[this.props.Feed.notifications.length - 1].filter(n => n !== undefined)
        let notifications = this.props.Feed.notifications;
        let helperDetails = this.props.Feed.helperDetails;
        if (notifications.length > 0) {
            return (
                <div>
                    <div>
                        {notifications.map(n => <div key={n.helper_id + n.help_request_id}>
                            {n.helper_id} wants to help with {n.help_request_id}
                            <span onClick={() => this.props.Feed.userAcceptsHelp(n.helper_id)}> Accept</span>
                        </div>)}
                        <div>{helperDetails.name}</div>
                        <div>{helperDetails.phone}</div>
                    </div>
                </div>
            )
        } else if (!this.props.User.user.login) {
            return <Redirect to='/login'></Redirect>
        } else {
            return <div>No new notifications</div>
        }
    }
}

export default Notifications;