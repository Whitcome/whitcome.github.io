import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
import { MainCardComponent } from './main-card/main-card.component';
import { LeftColumnComponent } from './main-card/left-column/left-column.component';
import { RightColumnComponent } from './main-card/right-column/right-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroHeaderComponent,
    FooterComponent,
    SkillsComponent,
    SocialComponent,
    MainCardComponent,
    LeftColumnComponent,
    RightColumnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
