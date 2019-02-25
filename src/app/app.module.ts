import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
//Used because Apollo HttpLink requires HttpClient
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";

// Service to connect our client to external GraphQL Server
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";

// Place to store data in. Default cache implementation for Apollo. 
import { InMemoryCache } from "apollo-cache-inmemory";
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { DataComponent } from './data/data.component';



@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "https://www.graphqlhub.com/graphql"
        })
      }
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
