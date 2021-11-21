import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { Platform } from '../types/types.platform';
///import { ToastrService } from 'ngx-toastr';

const addPlatform = gql`
mutation add_platform($newName:String!){
  addPlatform (input :
  {
    name: $newName
  }){
    platform{
      id,
      name
    }
  }
}
`;

const AllPlatforms = gql`
query{
  platform{
    id,
    name
  }
}
`;

const addCommand = gql`
mutation($newCommandLine : String!,$newHowTo :String! ,$selectedPlatformId :Int!  ){
  addCommand(input :
  {
    commandLine : $newCommandLine,
    howTo : $newHowTo,
    platformId : $selectedPlatformId
  }){
    command{
      commandLine,
      howTo,
      id,
      platformId,
      platform{
        id,
        name
      }
    }
  }
}
`;

@Component({
  selector: 'app-graph-qlcreate',
  templateUrl: './graph-qlcreate.component.html',
  styleUrls: ['./graph-qlcreate.component.css']
})
export class GraphQLCreateComponent implements OnInit {
  constructor(private readonly apollo: Apollo, private fb: FormBuilder/*,private toastr: ToastrService*/) {

  }
  platformForm = this.fb.group({
    name: ['', Validators.required],
    // body:['',Validators.required]
  });

  commandForm = this.fb.group({
    platformId: ['', Validators.required],
    howTo: ['', Validators.required],
    commandLine: ['', Validators.required]
    // body:['',Validators.required]
  });

  platformList: any;
  getAllPlatform() {
    this.apollo
      .watchQuery({ query: AllPlatforms })
      .valueChanges
      .subscribe(result => {
        let commandResult = (result.data as any);
        console.log(commandResult.platform);
        this.platformList = commandResult.platform;
      });
  }

  ngOnInit() {
    this.getAllPlatform();
  }

  onSubmit() {
    // use injected apollo service to run query
    // response JSON returns as { data: { events: [] } }
    // to get the calendarEvents$, map to the data.events
    let newName = this.platformForm.value.name;
    console.warn(newName);
    this.apollo
      .mutate({
        mutation: addPlatform, variables: {
          newName,
          // body : this.platformForm.value.body
        }
      })
      .subscribe(result => {
        console.log(result);
     //   this.toastr.success("Added successfully","SUCCESS!!!");
        this.platformForm.reset();
      }, (error) => {
        console.log('there was an error sending the query', error);
   //     this.toastr.error("Error Occurred. Contact Admin....","xxxERRORxxx");
      });

    // TODO: Use EventEmitter with form value
    console.warn(this.platformForm.value);
  }

  onAddingCommand() {
    // use injected apollo service to run query
    // response JSON returns as { data: { events: [] } }
    // to get the calendarEvents$, map to the data.events
    let newCommandLine = this.commandForm.value.commandLine;
    console.warn(newCommandLine);
    let newHowTo = this.commandForm.value.howTo;
    console.warn(newHowTo);
    let selectedPlatformId = this.commandForm.value.platformId;
    console.warn(selectedPlatformId);
  
    this.apollo.mutate({
      mutation: addCommand,
      variables: {
        newCommandLine: newCommandLine,
        newHowTo: newHowTo,
        selectedPlatformId: parseInt(selectedPlatformId) 
        
      },
      optimisticResponse :{

      }
    })
      .subscribe(result => {
        console.log(result);
       // this.toastr.success("Added successfully","SUCCESS!!!");
        this.commandForm.reset();
      }, (error) => {
        console.log('there was an error sending the query', error);
        //this.toastr.error("Error Occurred. Contact Admin....","xxxERRORxxx");
      });

  }
  get f() {
    return this.commandForm.controls;
  }
  changePlatform(e: any) {
    console.log(e.target.value);
  }
}