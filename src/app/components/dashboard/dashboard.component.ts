import { Component, OnInit, OnDestroy } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import {
  getLoggedUserQuery,
  getFollowersQuery,
  getFollowingQuery,
  getStarredRepoQuery,
  getUserRepositoryQuery
} from "../../query/gitGraphQLQueries";
import { Viewer } from "../../models/user";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "git-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  ownerObject: Viewer;

  ownerFollowersObject: Viewer;

  ownerFollowingObjects: Viewer;

  ownerStarredRepoObjects: Viewer;

  ownerRepoObjects: Viewer;

  // Routing getting usernam by params
  username: String;
  private sub: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.ownerFollowersObject = new Viewer();
    this.ownerFollowingObjects = new Viewer();
    this.ownerStarredRepoObjects = new Viewer();
    this.ownerRepoObjects = new Viewer();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params["id"]; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.apollo
      .watchQuery<any>({
        query: getLoggedUserQuery,
        variables: {
          first: 50,
          login: this.username
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerObject = data.user;
        console.log("data", this.ownerObject);
      });
  }

  getFollowersData() {
    this.apollo
      .watchQuery<any>({
        query: getFollowersQuery,
        variables: {
          first: 50,
          login: this.username
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerFollowersObject = data.user;
        console.log("data", this.ownerFollowersObject);
      });
  }

  getFollowingData() {
    this.apollo
      .watchQuery<any>({
        query: getFollowingQuery,
        variables: {
          first: 50,
          login: this.username
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerFollowingObjects = data.user;
        console.log("data", this.ownerFollowingObjects);
      });
  }

  getStarredRepoData() {
    this.apollo
      .watchQuery<any>({
        query: getStarredRepoQuery,
        variables: {
          first: 50,
          login: this.username
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerStarredRepoObjects = data.user;
        console.log("data", this.ownerStarredRepoObjects);
      });
  }

  getRepositories() {
    this.apollo
      .watchQuery<any>({
        query: getUserRepositoryQuery,
        variables: {
          first: 50,
          login: this.username
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerRepoObjects = data.user;
        console.log("data", this.ownerRepoObjects);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
