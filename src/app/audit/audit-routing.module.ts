//leaves-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditComponent } from './audit.component';
import { AuditLandingComponent } from './audit-landing/audit-landing.component';

const routes: Routes = [
  {
    path: '', component: AuditComponent, children: [
      {
        path: 'list', component: AuditLandingComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule { }
