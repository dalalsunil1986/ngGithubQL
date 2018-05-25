import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import {
  getLoggedUser,
  getFollowersQuery
} from "../../query/gitGraphQLQueries";
import { Viewer } from "../../models/user";

@Component({
  selector: "git-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  ownerObject: Viewer;

  ownerFollowersObject: Viewer;

  constructor(private apollo: Apollo) {
    this.ownerFollowersObject = new Viewer();
  }

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: getLoggedUser,
        variables: {
          first: 50
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerObject = data.viewer;
        console.log("data", this.ownerObject);
      });
  }

  getFollowersData() {
    this.apollo
      .watchQuery<any>({
        query: getFollowersQuery,
        variables: {
          first: 50
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerFollowersObject = data.viewer;
        console.log("data", this.ownerFollowersObject);
      });
  }
}
