import { Component, Inject, ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'content-application';

  constructor(protected router: Router,
              public cdRef: ChangeDetectorRef,
              public ngZone: NgZone,
              @Inject(DOCUMENT) private document) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.ngZone.run(() => {
        this.cdRef.detectChanges();
      });
    });

  }

  ngOnInit() {
    const microfront = this.document.createElement('script');
    microfront.src = 'assets/gateway/gateway.js';
    document.body.appendChild(microfront);
  }
}
