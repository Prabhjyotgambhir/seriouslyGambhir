import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stories: Story[];
  constructor(private storyService: StoryService, private router: Router) {
    this.getStory();
  }

  getStory() {
    this.storyService.getStory().subscribe((response) => {
      this.stories = response;
    });
  }

  ngOnInit() {

  }

  openStoryDetails(story: Story) {
    this.router.navigateByUrl(`story/${story._id}`);
  }

}
