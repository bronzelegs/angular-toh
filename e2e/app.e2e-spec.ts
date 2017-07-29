import { TohAgainPage } from './app.po';

describe('toh-again App', () => {
  let page: TohAgainPage;

  beforeEach(() => {
    page = new TohAgainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
