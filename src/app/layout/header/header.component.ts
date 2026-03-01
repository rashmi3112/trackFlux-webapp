import { Component, inject } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  title$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      let currentRoute = this.router.routerState.root;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      return currentRoute?.snapshot.data['title'] ?? 'TrackFlux';
    })
  );

  action$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => {
      let route = this.router.routerState.root;
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route.snapshot.data['headerAction'] ?? null;
    })
  );
}
