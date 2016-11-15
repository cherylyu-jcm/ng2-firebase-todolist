import { Ng2FirebaseTodolistPage } from './app.po';

describe('ng2-firebase-todolist App', function() {
  let page: Ng2FirebaseTodolistPage;

  beforeEach(() => {
    page = new Ng2FirebaseTodolistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
