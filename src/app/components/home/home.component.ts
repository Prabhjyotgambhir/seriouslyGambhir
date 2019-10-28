import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stories: Story[];
  constructor(private storyService: StoryService) {
    this.getStory();
  }

  getStory() {
    this.storyService.getStory().subscribe((response) => {
      this.stories = response;
    });
  }

  ngOnInit() {

  }

}
