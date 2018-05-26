import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "git-main-compo",
  templateUrl: "./main-compo.component.html",
  styleUrls: ["./main-compo.component.css"]
})
export class MainCompoComponent implements OnInit {
  username: String;
  constructor(private router: Router) {}

  ngOnInit() {}

  getUser(form: NgForm) {
    this.router.navigate(["/user", this.username]);
  }
}
