import { Component, OnInit, Input } from "@angular/core";
import { Viewer } from "../../models/user";

@Component({
  selector: "git-starred-repo",
  templateUrl: "./starred-repo.component.html",
  styleUrls: ["./starred-repo.component.css"]
})
export class StarredRepoComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("ownerStarredRepoObject") viewer: Viewer;
  constructor() {}

  ngOnInit() {}
}
