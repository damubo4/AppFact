import { Component } from '@angular/core';
import { SideNavComponent } from '../../common/side-nav/side-nav.component';
import { HeaderNavComponent } from '../../common/header-nav/header-nav.component';
import { DashboardComponent } from '../../common/dashboard/dashboard.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [SideNavComponent, HeaderNavComponent, DashboardComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
