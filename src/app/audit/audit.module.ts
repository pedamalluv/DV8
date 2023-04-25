import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuditComponent } from './audit.component';
import { AuditLandingComponent } from './audit-landing/audit-landing.component';
import { AuditRoutingModule } from './audit-routing.module';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    AuditComponent,
    AuditLandingComponent
  ],
  imports: [
    FormsModule,
    ButtonModule,
    DropdownModule,
    PaginatorModule,
    CommonModule,
    AuditRoutingModule
  ]
})
export class AuditModule { }
