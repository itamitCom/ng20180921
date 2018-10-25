import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    @Input()
    public year!: string;

    @Input()
    public shopName!: string;

  constructor() { }

  ngOnInit() {
  }

}
