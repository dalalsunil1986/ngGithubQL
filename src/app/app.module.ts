import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

// Apollo Client
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { githConfig } from "./../environments/environment";
import { FollowersComponent } from "./followers/followers.component";
import { FollowingComponent } from "./following/following.component";
import { PinnedRepoComponent } from "./pinned-repo/pinned-repo.component";
import { RepoComponent } from "./repo/repo.component";
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    FollowersComponent,
    FollowingComponent,
    PinnedRepoComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "bearer " + githConfig.token);

    apollo.create({
      link: httpLink.create({
        uri: githConfig.githubAPI,
        headers: headers
      }),
      cache: new InMemoryCache()
    });
  }
}
