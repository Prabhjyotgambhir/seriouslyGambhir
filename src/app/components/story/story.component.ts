import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input('story') story: Story;

  constructor() { }

  ngOnInit() {
  }
  }

