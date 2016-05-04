import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FooAppComponent } from '../app/foo.component';

beforeEachProviders(() => [FooAppComponent]);

describe('App: Foo', () => {
  it('should create the app',
      inject([FooAppComponent], (app: FooAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'foo works!\'',
      inject([FooAppComponent], (app: FooAppComponent) => {
    expect(app.title).toEqual('foo works!');
  }));
});
