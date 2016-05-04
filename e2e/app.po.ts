export class FooPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('foo-app h1')).getText();
  }
}
