import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-sprint-display',
  templateUrl: './sprint-display.component.html',
  styleUrls: ['./sprint-display.component.css']
})
export class SprintDisplayComponent implements OnInit {

  selectedIndex: number = -1;

  @Output() getIndex= new EventEmitter<any>()

  constructor(public storyService: StoryService) { }

  ngOnInit(): void {
  }

  onclickCard(i) {
    this.selectedIndex = i;
    this.getIndex.emit(i)
  }

}
