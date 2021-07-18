import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    // Called first
    console.log('Constructor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
     // called after a bound input property changes
    console.log('ngOnChanges called!', changes);
  }

  ngOnInit(): void {
    // called once the component is initialized
    console.log('ngOnInit called!')
    console.log('Text Content: ', this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // called during every change detection run
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    // called after content (ng-content) has been projected into view
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // called every time the projected content has been checked
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    // called after the component’s view (and child views) has been initialized
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    // called every time the view (and child views) have been checked
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() { 
    // called right before the component is about to be destroyed
    console.log('ngOnDestroy called!');
  }

}
