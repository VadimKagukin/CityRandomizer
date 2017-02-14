import { CityRandomizerPage } from './app.po';

describe('city-randomizer App', function() {
  let page: CityRandomizerPage;

  beforeEach(() => {
    page = new CityRandomizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
