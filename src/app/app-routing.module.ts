import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F1Component } from './f1/f1.component';
import { RegisterComponent } from './f1/register/register.component';
import { SignInComponent } from './f1/sign-in/sign-in.component';
import { AlfaRomeoComponent } from './f1/standings/constructors/alfa-romeo/alfa-romeo.component';
import { AlphatauriComponent } from './f1/standings/constructors/alphatauri/alphatauri.component';
import { AlpineComponent } from './f1/standings/constructors/alpine/alpine.component';
import { AstonMartinComponent } from './f1/standings/constructors/aston-martin/aston-martin.component';
import { ConstructorsComponent } from './f1/standings/constructors/constructors.component';
import { FerrariComponent } from './f1/standings/constructors/ferrari/ferrari.component';
import { HaasComponent } from './f1/standings/constructors/haas/haas.component';
import { MclarenComponent } from './f1/standings/constructors/mclaren/mclaren.component';
import { MercedesComponent } from './f1/standings/constructors/mercedes/mercedes.component';
import { RedBullComponent } from './f1/standings/constructors/red-bull/red-bull.component';
import { WilliamsComponent } from './f1/standings/constructors/williams/williams.component';
import { AlbonComponent } from './f1/standings/drivers/albon/albon.component';
import { AlonsoComponent } from './f1/standings/drivers/alonso/alonso.component';
import { BottasComponent } from './f1/standings/drivers/bottas/bottas.component';
import { DeVriesComponent } from './f1/standings/drivers/de-vries/de-vries.component';
import { GaslyComponent } from './f1/standings/drivers/gasly/gasly.component';
import { GuanyuComponent } from './f1/standings/drivers/guanyu/guanyu.component';
import { HamiltonComponent } from './f1/standings/drivers/hamilton/hamilton.component';
import { HulkenbergComponent } from './f1/standings/drivers/hulkenberg/hulkenberg.component';
import { LeclercComponent } from './f1/standings/drivers/leclerc/leclerc.component';
import { MagnussenComponent } from './f1/standings/drivers/magnussen/magnussen.component';
import { NorrisComponent } from './f1/standings/drivers/norris/norris.component';
import { OconComponent } from './f1/standings/drivers/ocon/ocon.component';
import { PerezComponent } from './f1/standings/drivers/perez/perez.component';
import { PiastriComponent } from './f1/standings/drivers/piastri/piastri.component';
import { RussellComponent } from './f1/standings/drivers/russell/russell.component';
import { SainzComponent } from './f1/standings/drivers/sainz/sainz.component';
import { SargeantComponent } from './f1/standings/drivers/sargeant/sargeant.component';
import { StrollComponent } from './f1/standings/drivers/stroll/stroll.component';
import { TsunodaComponent } from './f1/standings/drivers/tsunoda/tsunoda.component';
import { VerstappenComponent } from './f1/standings/drivers/verstappen/verstappen.component';
import { FullConstructorsStandingsComponent } from './f1/standings/full-constructors-standings/full-constructors-standings.component';
import { FullDriverStandingsComponent } from './f1/standings/full-driver-standings/full-driver-standings.component';
import { LastRaceComponent } from './f1/standings/last-race/last-race.component';
import { SubscribeComponent } from './f1/subscribe/subscribe.component';
import { AuthenticsComponent } from './navbar/authentics/authentics.component';
import { ExperiencesComponent } from './navbar/experiences/experiences.component';
import { StoreComponent } from './navbar/store/store.component';
import { TicketsComponent } from './navbar/tickets/tickets.component';

const routes: Routes = [
  { path: "f1", component: F1Component },
  { path: "sign-in", component: SignInComponent },
  { path: "subscribe", component: SubscribeComponent },
  { path: "register", component: RegisterComponent },
  { path: "store", component: StoreComponent },
  { path: "authentics", component: AuthenticsComponent },
  { path: "experience", component: ExperiencesComponent },
  { path: "tickets", component: TicketsComponent },
  { path: "f1/constructors", component: ConstructorsComponent },

  { path: "f1/charles-leclerc", component: LeclercComponent },
  { path: "f1/carlos-sainz", component: SainzComponent },
  { path: "f1/max-verstappen", component: VerstappenComponent },
  { path: "f1/george-russell", component: RussellComponent },
  { path: "f1/lewis-hamilton", component: HamiltonComponent },
  { path: "f1/esteban-ocon", component: OconComponent },
  { path: "f1/lando-norris", component: NorrisComponent },
  { path: "f1/yuki-tsunoda", component: TsunodaComponent },
  { path: "f1/fernando-alonso", component: AlonsoComponent },
  { path: "f1/pierre-gasly", component: GaslyComponent },
  { path: "f1/guanyu-zhou", component: GuanyuComponent },
  { path: "f1/kevin-magnussen", component: MagnussenComponent },
  { path: "f1/lance-stroll", component: StrollComponent },
  { path: "f1/valtteri-bottas", component: BottasComponent },
  { path: "f1/sergio-perez", component: PerezComponent },
  { path: "f1/alex-albon", component: AlbonComponent },
  { path: "f1/oscar-piastri", component: PiastriComponent },
  { path: "f1/nick-de-vries", component: DeVriesComponent },
  { path: "f1/nico-hulkenberg", component: HulkenbergComponent },
  { path: "f1/logan-sargeant", component: SargeantComponent },


  { path: "f1/full-driver-standings", component: FullDriverStandingsComponent },
  { path: "f1/full-constructors-standings", component: FullConstructorsStandingsComponent },
  { path: "f1/last-race", component: LastRaceComponent },


  { path: "f1/ferrari", component: FerrariComponent },
  { path: "f1/red-bull", component: RedBullComponent },
  { path: "f1/mclaren", component: MclarenComponent },
  { path: "f1/mercedes", component: MercedesComponent },
  { path: "f1/haas", component: HaasComponent },
  { path: "f1/alphatauri", component: AlphatauriComponent },
  { path: "f1/alpine", component: AlpineComponent },
  { path: "f1/alfa-romeo", component: AlfaRomeoComponent },
  { path: "f1/williams", component: WilliamsComponent },
  { path: "f1/aston-martin", component: AstonMartinComponent },

  { path: "", redirectTo:"/f1", pathMatch: "full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
