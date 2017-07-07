import { TradefinPage } from './app.po';

describe('tradefin App', () => {
  let page: TradefinPage;

  beforeEach(() => {
    page = new TradefinPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
