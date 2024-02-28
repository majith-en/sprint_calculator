import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  targetSprintPoints: number;
  @Input() getIndexs: any
  arrayData: StoryService;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  
  autoSelectStories() {

  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    console.log(this.getIndexs)
    this.storyService.clearStoriesIndex(this.getIndexs);
  }


}
