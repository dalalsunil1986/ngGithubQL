import { Component, OnInit, Input } from "@angular/core";
import { Viewer } from "../../models/user";

@Component({
  selector: "git-following",
  templateUrl: "./following.component.html",
  styleUrls: ["./following.component.css"]
})
export class FollowingComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("ownerFollowingObject") viewer: Viewer;
  constructor() {}

  ngOnInit() {}
}
