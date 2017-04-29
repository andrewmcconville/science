import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sciti-root',
  templateUrl: './sciti.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sciti.component.scss']
})
export class ScitiComponent {
  title = 'Sci-ti works!';
}
