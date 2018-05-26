import { Component, OnInit, Input } from "@angular/core";
import { Viewer } from "../../models/user";

@Component({
  selector: "git-pinned-repo",
  templateUrl: "./pinned-repo.component.html",
  styleUrls: ["./pinned-repo.component.css"]
})
export class PinnedRepoComponent implements OnInit {
  @Input("ownerObject") ownerObject: Viewer;
  constructor() {}

  ngOnInit() {}
}
