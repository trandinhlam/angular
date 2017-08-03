import { LoginAppPage } from './app.po';

describe('login-app App', () => {
  let page: LoginAppPage;

  beforeEach(() => {
    page = new LoginAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
