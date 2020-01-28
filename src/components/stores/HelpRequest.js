import { observable } from 'mobx'

export class HelpRequest {
    @observable userReq
    @observable description
    @observable skill
    @observable status = 'open'
    @observable date
    @observable name

    constructor(userReq, description, skill, date, name) {
        this.userReq = userReq
        this.description = description
        this.skill = skill
        this.date = date
        this.name = name
    }
}
