import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  sprintForm: FormGroup;
  @Input() getIndexs: any
  public addedData: any = 0;
  public arrayData= []

  constructor(private formBuilder: FormBuilder, private storyService: StoryService) { 
    this.sprintForm = this.formBuilder.group({
      sprint: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  
  autoSelectStories() {
    this.arrayData= []
    this.addedData= 0
    this.storyService.getStories().forEach(data => {
        this.addedData += data.points;
        if(this.addedData <= this.sprintForm.value.sprint) {
              console.log(data)
              this.storyService.addSprint(data.story, data.points);
          }
    })
  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    console.log(this.getIndexs)
    this.storyService.clearStoriesIndex(this.getIndexs);
  }


}
