import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLComponent } from './graph-ql/graph-ql.component';
import { GraphQLReadComponent } from './graph-qlread/graph-qlread.component';
import { GraphQLUpdateComponent } from './graph-qlupdate/graph-qlupdate.component';
import { GraphQLCreateComponent } from './graph-qlcreate/graph-qlcreate.component';
import { GraphQLDeleteComponent } from './graph-qldelete/graph-qldelete.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
///import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    GraphQLComponent,
    GraphQLReadComponent,
    GraphQLUpdateComponent,
    GraphQLCreateComponent,
    GraphQLDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
//    BrowserAnimationsModule,
  //  ToastrModule.forRoot({
    //  timeOut: 10000,
      //positionClass: 'toast-top-right',
      //preventDuplicates: true,
      
    //})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
