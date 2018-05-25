import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { getUserRepository, getLoggedUser } from "../query/gitGraphQLQueries";

@Component({
  selector: "git-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  ownerRepos: Observable<any[]>;

  ownerObject: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: getLoggedUser,
        variables: {
          first: 50
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.ownerObject = data;
        console.log("data", this.ownerObject);
      });
  }
}
