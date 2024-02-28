import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private stories: { story: string, points: number }[] = [];

  constructor() { }

  addStory(story: string, points: number) {
    this.stories.push({ story, points });
  }

  isDuplicate(story: string): boolean {
    return this.stories.some(s => s.story === story);
  }

  getStories(): { story: string, points: number }[] {
    return this.stories;
  }

  clearStories() {
    this.stories = [];
  }

  clearStoriesIndex(index) {
    this.stories.splice(index, 1);
  }
}
