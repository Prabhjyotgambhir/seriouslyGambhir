import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/service/story.service';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {
  storyId: string;
  story: Story;
  constructor(private route: ActivatedRoute, private storyService: StoryService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.storyId = params.id;
      this.getStoryDetailById();
    });
  }

  getStoryDetailById() {
    this.storyService.getStoryById(this.storyId).subscribe((response) => {
      this.story = response;
    });
  }

}
