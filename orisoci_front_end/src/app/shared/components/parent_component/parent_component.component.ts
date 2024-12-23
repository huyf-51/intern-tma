import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'parent-component',
  imports: [
    FormsModule,
  ],
  templateUrl: './parent_component.component.html',
  styleUrls: ['./parent_component.component.scss']
})
export class ParentComponentComponent {
  valueString: string = "";
}
