import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users/users.component'

const appRoutes = [
  {path: '', component: UsersComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);