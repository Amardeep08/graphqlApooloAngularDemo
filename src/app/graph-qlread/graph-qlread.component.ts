import { Component, OnInit } from '@angular/core';
import { DocumentNode, graphql } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Command } from '../types/types.command';
import { Platform } from '../types/types.platform';
import { Apollo, gql } from 'apollo-angular';

const readQuery =gql`
 
query{
  platform{
  id,
  name,
  commands{
    commandLine,
    howTo,
    id,
    platformId
  }
  }
}

      `;
  


@Component({
  selector: 'app-graph-qlread',
  templateUrl: './graph-qlread.component.html',
  styleUrls: ['./graph-qlread.component.css']
})
export class GraphQLReadComponent implements OnInit {
  platforms: any;
  constructor(private readonly apollo : Apollo) {
    
  }


  ngOnInit(): void {
    // use injected apollo service to run query
		// response JSON returns as { data: { events: [] } }
		// to get the calendarEvents$, map to the data.events
		this.apollo
    .watchQuery({ query:  readQuery})
    .valueChanges
    .subscribe(result=>{
      let commandResult=(result.data as any);
console.log(commandResult.platform);
 this.platforms = commandResult.platform;
    });

  }

  queryGQL=`
  
  query{
    platform{
    id,
    name,
    commands{
      commandLine,
      howTo,
      id,
      platformId
    }
    }
  }

  `;
  
}
