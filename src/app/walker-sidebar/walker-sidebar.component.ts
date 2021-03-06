import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-walker-sidebar",
  templateUrl: "./walker-sidebar.component.html",
  styleUrls: ["./walker-sidebar.component.css"]
})
export class WalkerSidebarComponent implements OnInit {
  walkerData: object = {
    firstName: "Jill",
    lastName: "Farmington",
    rating: 4,
    bio:
      "I've been an animal lover since birth and I'm excited to meet your dog. We will definitely go on walks on the Monon Trail and play in Broad Ripple Park since I live across the street from it. I have tons of toys and treats also. Your dog will get plenty of attention from me and my dog. My dog loves having friends come along on walks with us.",
    pic: "../../assets/walker-icon.png"
  };
  constructor(public doggoService: DoggoService) {}

  firstName: string;
  lastName: string;
  bio: string;
  rating: string;
  picture: string = "../../assets/owner-icon.png";
  condition: boolean;

  ngOnInit() {
    this.doggoService.getUserInfo().subscribe((requested: any) => {
      this.firstName = requested.data.firstName;
      this.lastName = requested.data.lastName;
      this.bio = requested.data.bio;

      this.walkerData = {
        firstName: requested.data.firstName,
        lastName: requested.data.lastName,
        bio: requested.data.bio
      };
      if (requested.data.pic == null || requested.data.pic == "") {
        Object.assign(this.walkerData, { pic: "../../assets/walker-icon.png" });
        this.picture = requested.data.pic;
      } else {
        Object.assign(this.walkerData, { pic: requested.data.pic });
        this.picture = requested.data.pic;
      }
      this.doggoService.userDataInfo = requested.data;
    });
  }
}
