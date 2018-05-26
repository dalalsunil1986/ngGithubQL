import { Component, OnInit, Input } from "@angular/core";
import { Viewer } from "../../models/user";

@Component({
  selector: "git-repo",
  templateUrl: "./repo.component.html",
  styleUrls: ["./repo.component.css"]
})
export class RepoComponent implements OnInit {
  @Input("ownerRepoObjects") ownerRepoObjects: Viewer;
  constructor() {}

  ngOnInit() {}
}
