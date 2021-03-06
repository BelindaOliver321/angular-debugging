import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { UiModule } from './ui/ui.module';
import { ExamplesModule } from './examples/examples.module';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, AboutComponent],
    imports: [BrowserModule, UiModule, ExamplesModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
