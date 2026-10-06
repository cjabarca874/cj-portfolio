import {Component,ChangeDetectionStrategy} from '@angular/core';
import {DashboardLayout} from './layout/dashboard-layout';
@Component({changeDetection:ChangeDetectionStrategy.OnPush,selector:'app-root',imports:[DashboardLayout],template:'<app-dashboard-layout/>'}) export class App {}
