import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {LayoutComponent} from './layout/layout.component';
import {MarseilleComponent} from './marseille/marseille.component';
import {MonacoComponent} from './monaco/monaco.component';
import {HomeComponent} from './home/home.component';
import {GenerateComponent} from './generate/generate.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'marseille',
        component: MarseilleComponent
      },
      {
        path: 'monaco',
        component: MonacoComponent
      },
      {
        path: 'generate',
        component: GenerateComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
