import { AsmenuxPage } from './app.po';

describe('asmenux App', () => {
  let page: AsmenuxPage;

  beforeEach(() => {
    page = new AsmenuxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
