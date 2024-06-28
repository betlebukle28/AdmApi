import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xml-page',
  templateUrl: './xml-page.component.html',
  styleUrls: ['./xml-page.component.css']
})
export class XmlPageComponent {
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
