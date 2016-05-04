import { Component } from '@angular/core';

import { BarComponent } from './bar';

@Component({
  moduleId: module.id,
  selector: 'foo-app',
  templateUrl: 'foo.component.html',
  styleUrls: ['foo.component.css'],
  directives: [BarComponent]
})
export class FooAppComponent {
    title = 'foo works!';
}
