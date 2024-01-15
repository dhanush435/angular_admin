import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ContactComponent } from './contact/contact.component';
import { CybernewsComponent } from './cybernews/cybernews.component';
import { AntivirusComponent } from './antivirus/antivirus.component';
import { IncidentreportsComponent } from './incidentreports/incidentreports.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'contact', component: ContactComponent},
{path: 'cybernews', component: CybernewsComponent},
{path: 'incidentreports', component: IncidentreportsComponent},
{path: 'antivirus', component: AntivirusComponent}
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }