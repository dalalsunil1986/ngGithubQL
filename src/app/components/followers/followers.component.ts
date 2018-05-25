import { Component, OnInit, Input } from "@angular/core";
import { Viewer } from "../../models/user";

@Component({
  selector: "git-followers",
  templateUrl: "./followers.component.html",
  styleUrls: ["./followers.component.css"]
})
export class FollowersComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("ownerFollowerObject") viewer: Viewer;

  constructor() {}

  ngOnInit() {}
}
