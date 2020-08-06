import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'Tree',
      imageUrl: 'assets/tree-new.jpg',
      username: 'nature',
      content: 'Minimal Tree'
    },
    { title: 'Mountain',
      imageUrl: 'assets/mountain-new.jpeg',
      username: 'mountain',
      content: 'Snowy Mountain'
    },
    { title: 'Bicycle',
      imageUrl: 'assets/biking-new.jpeg',
      username: 'biker',
      content: 'Beautiful Bike'
    }
  ];
}
