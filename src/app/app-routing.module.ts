import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {SightsCardsComponent} from './Sights/sights-cards/sights-cards.component';
import {NewsComponent} from './News/news.component';
import {GoogleSearchComponent} from './google-search/google-search.component';

const routes: Routes = [
  {path: 'news/:query', component: NewsComponent},
  {path: 'search', component: GoogleSearchComponent},
  {path: '', component: SightsCardsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
