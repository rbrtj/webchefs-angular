import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UsersComponent } from './pages/users/users.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { RolesAndPermissionsComponent } from './pages/roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { TopNavigationBarComponent } from './components/top-navigation-bar/top-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    UserListComponent,
    UsersComponent,
    UserEditComponent,
    RolesAndPermissionsComponent,
    SettingsComponent,
    StatisticsComponent,
    TopNavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
