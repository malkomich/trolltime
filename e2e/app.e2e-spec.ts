import { TrolltimePage } from './app.po';

describe('trolltime App', function() {
  let page: TrolltimePage;

  beforeEach(() => {
    page = new TrolltimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
