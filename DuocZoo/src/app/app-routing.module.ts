import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./Paginas/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'listar-admin',
    loadChildren: () => import('./Paginas/listar-admin/listar-admin.module').then( m => m.ListarAdminPageModule)
  },
  {
    path: 'agregar-admin',
    loadChildren: () => import('./Paginas/agregar-admin/agregar-admin.module').then( m => m.AgregarAdminPageModule)
  },
  {
    path: 'modificar-admin/:idAnimal',
    loadChildren: () => import('./Paginas/modificar-admin/modificar-admin.module').then( m => m.ModificarAdminPageModule)
  },
  {
    path: 'eliminar-admin/:idAnimal',
    loadChildren: () => import('./Paginas/eliminar-admin/eliminar-admin.module').then( m => m.EliminarAdminPageModule)
  },
  {
    path: 'inicio-usuario',
    loadChildren: () => import('./Paginas/inicio-usuario/inicio-usuario.module').then( m => m.InicioUsuarioPageModule)
  },
  {
    path: 'perfilusuario',
    loadChildren: () => import('./Paginas/perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
  },
  {
    path: 'agendar-hora',
    loadChildren: () => import('./Paginas/agendar-hora/agendar-hora.module').then( m => m.AgendarHoraPageModule)
  },
  {
    path: 'modificar-hora',
    loadChildren: () => import('./Paginas/modificar-hora/modificar-hora.module').then( m => m.ModificarHoraPageModule)
  },
  {
    path: 'eliminar-hora',
    loadChildren: () => import('./Paginas/eliminar-hora/eliminar-hora.module').then( m => m.EliminarHoraPageModule)
  },
  {
    path: 'listar-hora',
    loadChildren: () => import('./Paginas/listar-hora/listar-hora.module').then( m => m.ListarHoraPageModule)
  },
  {
    path: 'apadrinar/:idAnimal',
    loadChildren: () => import('./Paginas/apadrinar/apadrinar.module').then( m => m.ApadrinarPageModule)
  },
  {
    path: 'lista-animales-tratados',
    loadChildren: () => import('./Paginas/lista-animales-tratados/lista-animales-tratados.module').then( m => m.ListaAnimalesTratadosPageModule)
  },
  {
    path: 'agregar-animal',
    loadChildren: () => import('./Paginas/agregar-animal/agregar-animal.module').then( m => m.AgregarAnimalPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./Paginas/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'cambiar/:idUsuario',
    loadChildren: () => import('./Paginas/cambiar/cambiar.module').then( m => m.CambiarPageModule)
  },
  {
    path:'pago',
    loadChildren: () => import('./Paginas/pago/pago.module').then(m=> m.PagoPageModule)
  },
  {
    path: 'tratamiento-animal/:idAnimal',
    loadChildren: () => import('./Paginas/tratamiento-animal/tratamiento-animal.module').then( m => m.TratamientoAnimalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
