import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { F1Component } from './f1/f1.component';
import { InfoComponent } from './f1/info/info.component';
import { NewsComponent } from './f1/news/news.component';
import { EditorsPickComponent } from './f1/editors-pick/editors-pick.component';
import { MoreNewsComponent } from './f1/more-news/more-news.component';
import { RacesComponent } from './f1/races/races.component';
import { StandingsComponent } from './f1/standings/standings.component';
import { DriversComponent } from './f1/standings/drivers/drivers.component';
import { ConstructorsComponent } from './f1/standings/constructors/constructors.component';
import { LastRaceComponent } from './f1/standings/last-race/last-race.component';
import { MoreInfoComponent } from './f1/more-info/more-info.component';
import { EndComponent } from './f1/end/end.component';
import { AuthenticsComponent } from './navbar/authentics/authentics.component';
import { StoreComponent } from './navbar/store/store.component';
import { TicketsComponent } from './navbar/tickets/tickets.component';
import { HospitalityComponent } from './navbar/hospitality/hospitality.component';
import { ExperiencesComponent } from './navbar/experiences/experiences.component';
import { HeaderComponent } from './navbar/store/header/header.component';
import { MerchComponent } from './navbar/store/merch/merch.component';
import { FooterComponent } from './navbar/store/footer/footer.component';
import { LeclercComponent } from './f1/standings/drivers/leclerc/leclerc.component';
import { SainzComponent } from './f1/standings/drivers/sainz/sainz.component';
import { VerstappenComponent } from './f1/standings/drivers/verstappen/verstappen.component';
import { HamiltonComponent } from './f1/standings/drivers/hamilton/hamilton.component';
import { NorrisComponent } from './f1/standings/drivers/norris/norris.component';
import { PerezComponent } from './f1/standings/drivers/perez/perez.component';
import { AlbonComponent } from './f1/standings/drivers/albon/albon.component';
import { AlonsoComponent } from './f1/standings/drivers/alonso/alonso.component';
import { OconComponent } from './f1/standings/drivers/ocon/ocon.component';
import { RussellComponent } from './f1/standings/drivers/russell/russell.component';
import { BottasComponent } from './f1/standings/drivers/bottas/bottas.component';
import { MagnussenComponent } from './f1/standings/drivers/magnussen/magnussen.component';
import { GaslyComponent } from './f1/standings/drivers/gasly/gasly.component';
import { StrollComponent } from './f1/standings/drivers/stroll/stroll.component';
import { TsunodaComponent } from './f1/standings/drivers/tsunoda/tsunoda.component';
import { GuanyuComponent } from './f1/standings/drivers/guanyu/guanyu.component';
import { FullDriverStandingsComponent } from './f1/standings/full-driver-standings/full-driver-standings.component';
import { FullConstructorsStandingsComponent } from './f1/standings/full-constructors-standings/full-constructors-standings.component';
import { SignInComponent } from './f1/sign-in/sign-in.component';
import { RegisterComponent } from './f1/register/register.component';
import { MercedesComponent } from './f1/standings/constructors/mercedes/mercedes.component';
import { AstonMartinComponent } from './f1/standings/constructors/aston-martin/aston-martin.component';
import { RedBullComponent } from './f1/standings/constructors/red-bull/red-bull.component';
import { WilliamsComponent } from './f1/standings/constructors/williams/williams.component';
import { MclarenComponent } from './f1/standings/constructors/mclaren/mclaren.component';
import { HaasComponent } from './f1/standings/constructors/haas/haas.component';
import { AlphatauriComponent } from './f1/standings/constructors/alphatauri/alphatauri.component';
import { AlpineComponent } from './f1/standings/constructors/alpine/alpine.component';
import { FerrariComponent } from './f1/standings/constructors/ferrari/ferrari.component';
import { AlfaRomeoComponent } from './f1/standings/constructors/alfa-romeo/alfa-romeo.component';
import { DeVriesComponent } from './f1/standings/drivers/de-vries/de-vries.component';
import { SargeantComponent } from './f1/standings/drivers/sargeant/sargeant.component';
import { HulkenbergComponent } from './f1/standings/drivers/hulkenberg/hulkenberg.component';
import { PiastriComponent } from './f1/standings/drivers/piastri/piastri.component';
import { SubscribeComponent } from './f1/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    F1Component,
    InfoComponent,
    NewsComponent,
    EditorsPickComponent,
    MoreNewsComponent,
    RacesComponent,
    StandingsComponent,
    DriversComponent,
    ConstructorsComponent,
    LastRaceComponent,
    MoreInfoComponent,
    EndComponent,
    AuthenticsComponent,
    StoreComponent,
    TicketsComponent,
    HospitalityComponent,
    ExperiencesComponent,
    HeaderComponent,
    MerchComponent,
    FooterComponent,
    LeclercComponent,
    SainzComponent,
    VerstappenComponent,
    HamiltonComponent,
    NorrisComponent,
    PerezComponent,
    AlbonComponent,
    AlonsoComponent,
    OconComponent,
    RussellComponent,
    BottasComponent,
    MagnussenComponent,
    GaslyComponent,
    StrollComponent,
    TsunodaComponent,
    GuanyuComponent,
    FullDriverStandingsComponent,
    FullConstructorsStandingsComponent,
    SignInComponent,
    RegisterComponent,
    FerrariComponent,
    MercedesComponent,
    AstonMartinComponent,
    RedBullComponent,
    WilliamsComponent,
    MclarenComponent,
    HaasComponent,
    AlphatauriComponent,
    AlpineComponent,
    AlfaRomeoComponent,
    DeVriesComponent,
    SargeantComponent,
    HulkenbergComponent,
    PiastriComponent,
    SubscribeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
