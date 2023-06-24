import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'peach',
    loadComponent: () => import('./peach/peach.page').then( m => m.PeachPage)
  },
  {
    path: 'mario',
    loadComponent: () => import('./mario/mario.page').then( m => m.MarioPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'luigi',
    loadComponent: () => import('./luigi/luigi.page').then( m => m.LuigiPage)
  },
  {
    path: 'yoshi',
    loadComponent: () => import('./yoshi/yoshi.page').then( m => m.YoshiPage)
  },
  {
    path: 'bowser',
    loadComponent: () => import('./bowser/bowser.page').then( m => m.BowserPage)
  },
  {
    path: 'toad',
    loadComponent: () => import('./toad/toad.page').then( m => m.ToadPage)
  },
  {
    path: 'wario',
    loadComponent: () => import('./wario/wario.page').then( m => m.WarioPage)
  },
  {
    path: 'waluigi',
    loadComponent: () => import('./waluigi/waluigi.page').then( m => m.WaluigiPage)
  },
  {
    path: 'daisy',
    loadComponent: () => import('./daisy/daisy.page').then( m => m.DaisyPage)
  },
  {
    path: 'rosalina',
    loadComponent: () => import('./rosalina/rosalina.page').then( m => m.RosalinaPage)
  },
  {
    path: 'donkey-kong',
    loadComponent: () => import('./donkey-kong/donkey-kong.page').then( m => m.DonkeyKongPage)
  },
  {
    path: 'diddy-kong',
    loadComponent: () => import('./diddy-kong/diddy-kong.page').then( m => m.DiddyKongPage)
  },
  {
    path: 'lakitu',
    loadComponent: () => import('./lakitu/lakitu.page').then( m => m.LakituPage)
  },
  {
    path: 'shy-guy',
    loadComponent: () => import('./shy-guy/shy-guy.page').then( m => m.ShyGuyPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastrar',
    loadComponent: () => import('./cadastrar/cadastrar.page').then( m => m.CadastrarPage)
  },
];
