import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should pass its public configuration to the Path application', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.backendUrl = '/services';
    app.modelPath = '/assets/model.json';
    app.translationsPath = '/assets/translations.json';
    app.frontendVersion = '0.8.0-beta.8';
    app.startPage = 'mainmenu';
    app.currentUserForm = 'UserForm';
    fixture.detectChanges();

    const pathApplication = fixture.nativeElement.querySelector('path-application') as HTMLElement & {
      backendUrl: string;
      modelPath: string;
      translationsPath: string;
      frontendVersion: string;
      startPage: string;
      currentUserForm: string;
    };

    expect(pathApplication).toBeTruthy();
    expect(pathApplication.backendUrl).toBe('/services');
    expect(pathApplication.modelPath).toBe('/assets/model.json');
    expect(pathApplication.translationsPath).toBe('/assets/translations.json');
    expect(pathApplication.frontendVersion).toBe('0.8.0-beta.8');
    expect(pathApplication.startPage).toBe('mainmenu');
    expect(pathApplication.currentUserForm).toBe('UserForm');
  });
});
