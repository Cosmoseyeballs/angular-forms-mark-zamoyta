import { AngularFormsMarkZamoytaPage } from './app.po';

describe('angular-forms-mark-zamoyta App', () => {
  let page: AngularFormsMarkZamoytaPage;

  beforeEach(() => {
    page = new AngularFormsMarkZamoytaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
