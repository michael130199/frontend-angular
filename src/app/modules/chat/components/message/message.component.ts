import { Component, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
  animations: [
    trigger("flyIn", [
      transition("void => sent", [
        style({
          opacity: "0",
          transform: "translate(10px, 30px)"
        }),
        animate(
          ".18s ease",
          style({
            opacity: "1",
            transform: "translate(0, 0)"
          })
        )
      ]),
      transition("void => rcvd", [
        style({
          opacity: "0",
          transform: "translate(-30px, 30px)"
        }),
        animate(
          ".18s ease",
          style({
            opacity: "1",
            transform: "translate(0, 0)"
          })
        )
      ])
    ]),
    trigger("expandMsg", [
      state(
        "start",
        style({
          padding: "8px 0",
          width: "39px",
          height: "55px"
        })
      ),
      state(
        "end",
        style({
          padding: "8px 12px",
          width: "*",
          height: "*"
        })
      ),
      transition("start => end", animate(".1s"))
    ])
  ]
})
export class MessageComponent {
  @Input() isLast: boolean;
  @Input() message: object;

  expand: string = "start";
  fadeIn: boolean = false;

  flyInAnimation(event) {
    if (event.phaseName === "done") {
      this.expand = "end";
    }
  }
  expandAnimation(event) {
    if (event.phaseName === "done") {
      setTimeout(() => {
        this.fadeIn = true;
      }, 250);
    }
  }
}

