import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from "./app.routing";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { RegressionComponent } from './regression/regression.component';
import { ArticulationComponent } from './articulation/articulation.component';
import { ViewFieldComponent } from './view-field/view-field.component';
import { KlinComponent } from './view-field/klin/klin.component';
import { ShulteComponent } from './view-field/shulte/shulte.component';
import { StepsComponent } from './view-field/steps/steps.component';
import { MetronomeComponent } from './metronome/metronome.component';
import { TimerComponent } from './timer/timer.component';

import { HttpService } from './http.service';

mergeAllIconsToOneObject();

@NgModule({
  declarations: [
    AppComponent,
    KlinComponent,
    RegressionComponent,
    ArticulationComponent,
    ViewFieldComponent,
    ShulteComponent,
    StepsComponent,
    RecomendationsComponent,
    MetronomeComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    FontAwesomeModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

function mergeAllIconsToOneObject() {
  let fa = {...fas, ...fab};
  for (const icon in fa) {
    fa[icon].prefix = 'fas';
  }
  library.add(fa);
}