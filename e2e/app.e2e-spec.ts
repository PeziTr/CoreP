import { PazitrPage } from './app.po';

describe('pazitr App', () => {
  let page: PazitrPage;

  beforeEach(() => {
    page = new PazitrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
