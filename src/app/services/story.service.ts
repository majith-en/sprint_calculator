import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private stories: { story: string, points: number }[] = [];
  private sprints: { story: string, points: number }[] = [];

  constructor() { }

  addStory(story: string, points: number) {
    this.stories.push({ story, points });
  }

  addSprint(story: string, points: number) {
    this.sprints.push({ story, points });
  }

  isDuplicate(story: string): boolean {
    return this.stories.some(s => s.story === story);
  }

  getStories(): { story: string, points: number }[] {
    return this.stories;
  }

  getSprints(): { story: string, points: number }[] {
    return this.sprints;
  }

  clearStories() {
    this.stories = [];
    this.sprints = [];
  }

  clearStoriesIndex(index) {
    this.stories.splice(index, 1);
    this.sprints.splice(index, 1);
  }
}
