import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walker-new-requests',
  templateUrl: './walker-new-requests.component.html',
  styleUrls: ['./walker-new-requests.component.css']
})
export class WalkerNewRequestsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'dogs', 'location', 'accept', 'decline'];
  pendingRequestData = [
    {
      dateRequested: '09/25/2019', 
      timeRequested: '2:30PM',
      walkerId: '1',
      userId: '2',
      isAccepted: true,
      isCompleted: false,
      ownerNotified: false,
      reviewTitle: 'Great', 
      review: 'test',
      rating: '****',
    },
      {
        dateRequested: '09/27/2019', 
        timeRequested: '2:30PM',
        walkerId: '1',
        userId: '2',
        isAccepted: false,
        isCompleted: false,
        ownerNotified: false,
        reviewTitle: 'Great', 
        review: 'test',
        rating: '****',
      }
    ]

  constructor() { }

  ngOnInit() {
  }

}
