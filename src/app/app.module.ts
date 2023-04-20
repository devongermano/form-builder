import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormElementsModule } from "./form-elements/form-elements.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DndModule } from 'ngx-drag-drop';
import { DynamicInsertionDirective } from './dynamic-insertion.directive';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormElementContainerComponent } from './form-element-container/form-element-container.component';
import { FormElementConfigSidebarComponent } from './form-element-config-sidebar/form-element-config-sidebar.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormElementSidebarComponent } from './form-element-sidebar/form-element-sidebar.component';
import { DragToSelectModule } from "ngx-drag-to-select";


@NgModule({
  declarations: [
    AppComponent,
    DynamicInsertionDirective,
    FormBuilderComponent,
    FormElementContainerComponent,
    FormElementConfigSidebarComponent,
    FormElementSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormElementsModule,
    DragDropModule,
    DndModule,
    FormsModule,
    BrowserAnimationsModule,
    DragToSelectModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
