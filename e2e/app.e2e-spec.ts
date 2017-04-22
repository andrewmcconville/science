import { SciencePage } from './app.po';

describe('science App', () => {
  let page: SciencePage;

  beforeEach(() => {
    page = new SciencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
