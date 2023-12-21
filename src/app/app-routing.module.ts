import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MusicComponent } from "./features/music/music.component";

const routes: Routes = [
  { path: "music", component: MusicComponent },
  { path: "**", redirectTo: "music" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
