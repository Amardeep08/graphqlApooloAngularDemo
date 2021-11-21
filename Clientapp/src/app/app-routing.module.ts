import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphQLComponent } from './graph-ql/graph-ql.component';
import { GraphQLCreateComponent } from './graph-qlcreate/graph-qlcreate.component';
import { GraphQLDeleteComponent } from './graph-qldelete/graph-qldelete.component';
import { GraphQLReadComponent } from './graph-qlread/graph-qlread.component';
import { GraphQLUpdateComponent } from './graph-qlupdate/graph-qlupdate.component';

const routes: Routes = [ 
  {path: 'GraphQL', component: GraphQLComponent ,children :
    [
      {      path: 'Create', component: GraphQLCreateComponent     },
      {      path: 'Read', component: GraphQLReadComponent     },
      {      path: 'Update', component: GraphQLUpdateComponent     },
      {      path: 'Delete', component: GraphQLDeleteComponent     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
