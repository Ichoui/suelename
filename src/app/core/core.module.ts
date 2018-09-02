import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotfoundComponent} from './notfound/notfound.component';
import {CoreRoutingModule} from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MarseilleComponent } from './marseille/marseille.component';
import { MonacoComponent } from './monaco/monaco.component';
import { GenerateComponent } from './generate/generate.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [NotfoundComponent, LayoutComponent, HomeComponent, MarseilleComponent, MonacoComponent, GenerateComponent]
})
export class CoreModule {
}
