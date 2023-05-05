import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryService } from './repository.service';
import { RepositoryIssuelistComponent } from './repository-issuelist/repository-issuelist.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryIssuelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
