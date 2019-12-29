import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { LeftColumnComponent } from './main-card/left-column/left-column.component';
import { MainCardComponent } from './main-card/main-card.component';
import { RightColumnComponent } from './main-card/right-column/right-column.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeroHeaderComponent,
        SkillsComponent,
        MainCardComponent,
        SocialComponent,
        FooterComponent,
        LeftColumnComponent,
        RightColumnComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('David Whitcome');
  });
});
