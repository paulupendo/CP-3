// Angular module import
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NavComponent } from './nav/nav.component'
import { siteComponents } from './components'
import { loginForm } from './loginform/login.component'
import { LoaderComponent } from './loader/loader.component'

@NgModule({
     imports: [BrowserModule],
        declarations: [
            siteComponents,
            NavComponent,
            loginForm,
            LoaderComponent
            ],
        bootstrap: [siteComponents, LoaderComponent]
 })
 export class AppModule {}