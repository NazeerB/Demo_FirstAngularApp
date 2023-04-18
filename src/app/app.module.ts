import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { RequiredFieldValidationComponent } from './required-field-validation/required-field-validation.component';
import { ChildcomponentComponent } from './child-component/childcomponent.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
// import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { PreviewphotoComponent } from './previewphoto/previewphoto.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormmoduleComponent } from './formmodule/formmodule.component';
import { RoutingcompComponent } from './routingcomp/routingcomp.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { BootstrapstylesComponent } from './bootstrapstyles/bootstrapstyles.component';
import { ReativeformsComponent } from './reativeforms/reativeforms.component';
import { DatabindingsComponent } from './databindings/databindings.component';
import { PipeComponent } from './pipe/pipe.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { InlineTestCompComponent } from './inline-test-comp/inline-test-comp.component';
import { GenderPipePipe } from './gender-pipe.pipe';
import { ChangeDirectiveDirective } from './change-directive.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { HealthServiceComponent } from './health-service/health-service.component';
import { EducationServiceComponent } from './education-service/education-service.component';

const route: Routes = [
  {
    path:'child', component:ChildcomponentComponent
  },
  {
    path: 'first', component: FirstComponent
  },
  {
    path: 'second', component: SecondComponent
  },
  {
    path: 'radiobutton', component: RadiobuttonComponent
  },
  {
    path: 'services', component: ServicesComponent,
    children: [{
      path:'health',component:HealthServiceComponent
    }, {
      path:'education',component:EducationServiceComponent
    }]

  },
  {
    path: '', redirectTo:'/child',pathMatch:'full'
  },
    {
    path: 'edit/:id', component: EditComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  } 
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NgifComponent,
    NgForComponent,
    NgSwitchComponent,
    RequiredFieldValidationComponent,
    ChildcomponentComponent,
    RadiobuttonComponent,
    EditComponent,
    PreviewphotoComponent,
    FormValidationComponent,
    FormmoduleComponent,
    RoutingcompComponent,
    DynamicValidationComponent,
    BootstrapstylesComponent,
    ReativeformsComponent,
    DatabindingsComponent,
    PipeComponent,
    ListEmployeeComponent,
    InlineTestCompComponent,
    GenderPipePipe,
    ChangeDirectiveDirective,
    PageNotFoundComponent,
    ServicesComponent,
    HealthServiceComponent,
    EducationServiceComponent,
    // CustomvalidatorComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // CustomvalidatorComponent
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent, FirstComponent, SecondComponent, HttpClientModule, ReactiveFormsModule, NgSwitchComponent, RequiredFieldValidationComponent, ChildcomponentComponent]
})
export class AppModule { }
