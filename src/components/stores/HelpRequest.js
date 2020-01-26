import {observable} from 'mobx'
import axios from 'axios';

export class HelpRequest {
    @observable userReq
    @observable description
    @observable skill
    @observable status = 'opened'
    @observable date

    // constructor (helpDescription) {
    //     this.description = helpDescription
    // }
}
