import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor() {
    this.getAllVideos();
  }

  ngOnInit() {
  }

  getAllVideos() {
    let data = [
      {
        video_name: "Chapter-1",
        video_id: "1"
      }, {
        video_name: "Chapter-2",
        video_id: "2"
      }, {
        video_name: "Chapter-3",
        video_id: "3"
      }, {
        video_name: "Chapter-4",
        video_id: "4"
      }, {
        video_name: "Chapter-5",
        video_id: "5"
      }, {
        video_name: "Chapter-6",
        video_id: "6"
      }, {
        video_name: "Chapter-7",
        video_id: "7"
      }, {
        video_name: "Chapter-8",
        video_id: "8"
      }, {
        video_name: "Chapter-9",
        video_id: "9"
      }, {
        video_name: "Chapter-10",
        video_id: "10"
      }, {
        video_name: "Chapter-11",
        video_id: "11"
      }, {
        video_name: "Chapter-12",
        video_id: "12"
      }, {
        video_name: "Chapter-13",
        video_id: "13"
      }, {
        video_name: "Chapter-14",
        video_id: "14"
      }, {
        video_name: "Chapter-15",
        video_id: "15"
      }, {
        video_name: "Chapter-16",
        video_id: "16"
      }, {
        video_name: "Chapter-17",
        video_id: "17"
      }, {
        video_name: "Chapter-18",
        video_id: "18"
      }, {
        video_name: "Chapter-19",
        video_id: "19"
      }, {
        video_name: "Chapter-20",
        video_id: "20"
      },
    ]
    this.videos = data;
  }
  baseUrlToVideo = 'http://localhost:3000/video'; // URL goes here
  selectedFile = '';
  
  // videoToPlay = this.baseUrlToVideo;
  videos = new Array();
  atleastOneSelected: boolean = false;
  videoToPlay;
  handleFileChange() {
    this.atleastOneSelected = true;
    console.log("I will play video with id " + this.selectedFile);
    this.videoToPlay = this.baseUrlToVideo + '?video_id=' + this.selectedFile;
  }
}
