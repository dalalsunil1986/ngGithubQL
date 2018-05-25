import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "git-leftside-dashboard",
  templateUrl: "./leftside-dashboard.component.html",
  styleUrls: ["./leftside-dashboard.component.css"]
})
export class LeftsideDashboardComponent implements OnInit {
  @Input("ownerObject") ownerObject;

  constructor() {}

  ngOnInit() {}
}
