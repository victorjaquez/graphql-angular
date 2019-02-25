import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let AppRoutingModule: AppRoutingModule;

  beforeEach(() => {
    AppRoutingModule = new AppRoutingModule()
  });

  it('should create an instance', () => {
    expect(AppRoutingModule).toBeTruthy();
  });
  
})