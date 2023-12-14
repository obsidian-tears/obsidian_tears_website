import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "../../../shared/components/page-not-found-component/page-not-found.component";
import { WelcomeComponent } from "../main/welcome-component/welcome.component";
import { LayoutComponent } from "./layout.component";

export const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/welcome',
                pathMatch: 'full',
            },
            {
                path: 'welcome', component: WelcomeComponent
            },
            {
                path: 'game',
                loadChildren: () => import('../main/game-component/game.routes')
                    .then(r => r.GAME_ROUTES)
            },
            {
                path: 'artifacts',
                loadComponent: () => import('../main/artifacts-component/artifacts.component')
                    .then(c => c.ArtifactsComponent)
            },
            {
                path: 'governance',
                loadComponent: () => import('../main/governance-component/governance.component')
                    .then(c => c.GovernanceComponent)
            },
            {
                path: 'how-to',
                loadComponent: () => import('../main/how-to-component/how-to.component')
                    .then(c => c.HowToComponent)
            },
            {
                path: 'news',
                loadComponent: () => import('../main/news-component/news.component')
                    .then(c => c.NewsComponent)
            },
            { path: '**', component: PageNotFoundComponent }
        ],
    },
];