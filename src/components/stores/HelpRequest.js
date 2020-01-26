import {observable} from 'mobx'

export class Request {
    @observable description
    @observable skill
    @observable status = 'opened'
    constructor (helpDescription) {
        this.description = helpDescription
    }
}
