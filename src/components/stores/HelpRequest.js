import { observable } from 'mobx'
import axios from 'axios';

export class HelpRequest {
    @observable userReq
    @observable text
    @observable skill
    @observable status = 'opened'
    @observable date

    constructor(userReq, text, skill, date) {
        // this.userReq = userReq
        this.text = text
        this.skill = skill
        this.date = date
    }
}
