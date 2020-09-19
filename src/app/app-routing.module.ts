import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post/:id', component: PageComponent },
  { path: 'post', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// RouterModule.forRoot([
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'hello', component: PageComponent },
//   { path: 'home', component: HomeComponent },
// ])