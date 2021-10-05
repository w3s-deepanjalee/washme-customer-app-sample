import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-address-book",
  templateUrl: "./address-book.page.html",
  styleUrls: ["./address-book.page.scss"],
})
export class AddressBookPage implements OnInit {
  constructor() {}

  className: string = "";
  value: string = "home";

  addressChange(ev: any) {
    // console.log("Segment change :", ev.detail.value);

    switch (ev.detail.value) {
      case "home":
        console.log("Home is select");
        break;
      case "office":
        console.log("office is select");
        break;
      default:
        console.log("Other is select");
        break;
    }
  }

  ngOnInit() {}
}
