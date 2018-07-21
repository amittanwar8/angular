import { Component, OnInit } from '@angular/core'
import { UserService } from '../_services/user.service'
import { NewUserService } from '../_services/Newuser.service'
import { Link } from '../_model/link.model'
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
    //selector: 'link-app',
    templateUrl: './link.component.html'

})

export class LinkComponent {

    LinkMaster: Link[] = []
    Link: Link[] = []
    Title: string;
    LinkURl: string;
    LinkMaster1: any = {}

    constructor(
        private _Service: UserService,
        private _Service1: NewUserService,


    ) { }

    ngOnInit() {
        this.GetAllDetails();
    }

    GetAllDetails() {
        this._Service.Retrive('/Login/LinkMasterReturn1')
            .subscribe(user => this.Link = user)
    }
    SaveLink() {
        debugger


        this.LinkMaster1 = {
            link_name: this.Title,
            link_url: this.LinkURl,
            status: 'A',
            createdDate: new Date(),
            CreatedBy: localStorage.getItem('CurrentUser')
        }
        this._Service1.Create(this.LinkMaster1, 'Login/LinkMaster')
            .subscribe(
                data => {                   
                    this.Link  = data.json()
                    });


    }



}