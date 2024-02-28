import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoryService } from '../services/story.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  storyForm: FormGroup;
  getSelectedIndex: any


  constructor(private formBuilder: FormBuilder, public storyService: StoryService) { 
    this.storyForm = this.formBuilder.group({
      story: ['', Validators.required],
      points: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.storyForm.valid) {
      const { story, points } = this.storyForm.value;
      if (!this.storyService.isDuplicate(story)) {
        this.storyService.addStory(story, points);
        this.storyForm.reset();
      } else {
        alert('Story already exists!');
      }
    }
  }

  indexDatas(event) {
    console.log(event)
    this.getSelectedIndex=event
  }

}
