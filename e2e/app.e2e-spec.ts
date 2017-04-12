import { Untitled4Page } from './app.po';

describe('untitled4 App', function() {
  let page: Untitled4Page;

  beforeEach(() => {
    page = new Untitled4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
