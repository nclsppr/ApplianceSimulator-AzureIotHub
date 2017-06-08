import { AppliancePage } from './app.po';

describe('appliance App', () => {
  let page: AppliancePage;

  beforeEach(() => {
    page = new AppliancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
