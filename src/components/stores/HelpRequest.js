import { observable } from 'mobx'

export class HelpRequest {
    @observable userReq
    @observable description
    @observable skill
    @observable status = 'open'
    @observable date

    constructor(userReq, description, skill, date) {
        this.userReq = userReq
        this.description = description
        this.skill = skill
        this.date = date
    }
}
