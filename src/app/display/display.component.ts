import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoryService } from '../services/story.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  selectedIndex: number = -1;

  @Output() getIndex= new EventEmitter<any>()

  constructor(public storyService: StoryService) { }

  ngOnInit() {
  }

  onclickCard(i) {
    this.selectedIndex = i;
    this.getIndex.emit(i)
  }

}
