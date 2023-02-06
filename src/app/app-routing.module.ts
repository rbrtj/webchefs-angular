import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesAndPermissionsComponent } from './pages/roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, children: [
    {path: 'user-list', component: UserListComponent},
    {path: 'user-edit', component: UserEditComponent},
    {path: 'roles-and-permissions', component: RolesAndPermissionsComponent},
    {path: 'settings', component: SettingsComponent}
  ]
}, {
  path: 'statistics', component: StatisticsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
