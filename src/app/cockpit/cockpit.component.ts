import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // Only reason this now has a parameter of nameInput is that we're using a local reference in the cockpit.component.html file and demonstrating that there is a way to pass data without two-way data binding
  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
    // console.log(nameInput.value);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }
  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.serverContentInput.nativeElement.value});
  }


}
