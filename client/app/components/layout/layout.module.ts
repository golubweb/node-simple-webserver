import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import LayoutComponent         from './layout.component';
import HeaderComponent         from './header/header.component';
import SidebarLeftComponent    from './sidebar/sidebar-left.component';
import SidebarRightComponent   from './sidebar/sidebar-right.component';
import FooterComponent         from './footer/footer.component';
import LoginWidgetComponent    from './login/login-widget.component';
import RegisterWidgetComponent from './register/register-widget.component';

import LoginAnimateDirective from './login/directive/login-animate.directive';
import ToggleElementDirective from '../../shared/directives/toggle-element.directive';

import MeniusModule  from './menius/menius.module';
import WidgetsModule from './widgets/widgets.module';

const layoutList: any[] = [
    LayoutComponent,
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    FooterComponent,
    LoginWidgetComponent,
    RegisterWidgetComponent
];

@NgModule({
    imports:      [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MeniusModule,
        WidgetsModule
    ],
    declarations: [
        layoutList,
        LoginAnimateDirective,
        ToggleElementDirective
    ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ layoutList ]
})
export default class LayoutModule { }
