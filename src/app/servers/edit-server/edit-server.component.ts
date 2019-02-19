import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router} from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactiviate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
     this.route.fragment.subscribe(()=>{
      
    })
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((queryParams: Params)=>{
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true 
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    console.log('got here 2')
    if(!this.allowEdit){
      return true
    }


    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      console.log('got here 1')
      return confirm('Do you want to discard the changes?');
    }else { 
      return true; 
    }
  }


}