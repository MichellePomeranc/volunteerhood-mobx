import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject('Feed', 'User')
@observer
class Notifications extends Component {

    componentWillMount() {
        this.props.Feed.matchHelpAndHelper(this.props.User.user.id);
    }
    render() {
        if (this.props.Feed.notifications.length > 1) {
            let notifications = this.props.Feed.notifications[this.props.Feed.notifications.length - 1].filter(n => n !== undefined)
            return (
                <div>
                    <div>{notifications.map(n => <div key={n.helper_id + n.help_request_id}>{n.helper_id} wants to help with {n.help_request_id}</div>)}</div>
                </div>
            )
        } else {
            return (
                < div >
                    <h3>please log in</h3>
                </div >
            )
        }
    }
}

export default Notifications;