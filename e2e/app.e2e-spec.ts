import { AngularcliPage } from './app.po';

describe('angularcli App', () => {
  let page: AngularcliPage;

  beforeEach(() => {
    page = new AngularcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
