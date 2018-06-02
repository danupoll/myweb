import { Myweb2Page } from './app.po';

describe('myweb2 App', function() {
  let page: Myweb2Page;

  beforeEach(() => {
    page = new Myweb2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
