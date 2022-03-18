import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/panel/user',
    pathMatch: 'full'
  },
  {
    path:'panel',
    component: SkeletonComponent,
    children:[
     {
       path: 'user',
       //lazyloading 
       loadChildren: ()=>
         import ('@modules/user/user.module').then((m)=>m.UserModule)
     },
     {
      //catch error
      path:'**',
      redirectTo:'/panel/user',
      pathMatch:'full'
    }
    ]
  },
  {
    //catch error
    path:'**',
    redirectTo:'/panel/user',
    pathMatch:'full'
  }
];
//useHash:true esto quita el # de las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
