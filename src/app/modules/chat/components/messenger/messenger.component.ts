import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-messenger",
  templateUrl: "./messenger.component.html",
  styleUrls: ["./messenger.component.scss"]
})
export class MessengerComponent {
  @ViewChild("chatContainer") private chatContainer: ElementRef;
  @ViewChild("textarea") private textarea: ElementRef;

  messages = [];
  message = "";

  onChangeMessage($event) {
    this.message = $event.target.value;
    if ($event.key === "Enter") {
      this.sendMessage();
    }

    this.textareaResize();
  }
  textareaResize() {
    const text = this.textarea.nativeElement;
    text.style.height = "1px";
    text.style.height = text.scrollHeight + "px";
  }
  scrollToBottom() {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  scrollToTop() {
    this.chatContainer.nativeElement.scrollTop = 0;
  }
  sendMessage() {
    this.messages = [
      ...this.messages,
      {
        msg: this.message
      }
    ];
    // reset message
    this.message = "";
    this.textarea.nativeElement.value = "";
    this.textareaResize();
  }
}
