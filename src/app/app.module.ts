import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { DirectMessageComponent } from './direct-message/direct-message.component';
import { AuthComponent } from './components/auth/auth.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { ChannelComponent } from './components/channel/channel.component';
import { CreateChannelComponent } from './components/modals/create-channel/create-channel.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Stepper } from './components/auth/stepper/stepper.component';
import { ManageUsersComponent } from './components/modals/manage-users/manage-users.component';
import { UpdateChannelComponent } from './components/modals/update-channel/update-channel.component';
import { DeleteChannelComponent } from './components/modals/delete-channel/delete-channel.component';
import { UpdateProfileComponent } from './components/modals/update-profile/update-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutComponent,
    MessageBoxComponent,
    ChannelComponent,
    DirectMessageComponent,
    CreateChannelComponent,
    SidenavComponent,
    Stepper,
    ManageUsersComponent,
    UpdateChannelComponent,
    DeleteChannelComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateChannelComponent, ManageUsersComponent, UpdateChannelComponent, DeleteChannelComponent, UpdateProfileComponent]
})
export class AppModule { }
