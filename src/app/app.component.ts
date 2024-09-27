import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Roomeey';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.clearAndLoadScripts();
      });
  }

  // Clear previously loaded scripts and then load new ones
  clearAndLoadScripts() {
    // Clear previously loaded script elements
    this.clearScripts();

    // Load the new scripts
    const scripts = [
      'assets/js/jquery.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/appear.js',
      'assets/js/parallax.min.js',
      'assets/js/tilt.jquery.min.js',
      'assets/js/jquery.paroller.min.js',
      'assets/js/wow.js',
      'assets/js/swiper.min.js',
      'assets/js/backtotop.js',
      'assets/js/odometer.js',
      'assets/js/parallax-scroll.js',
      'assets/js/gsap.min.js',
      'assets/js/SplitText.min.js',
      'assets/js/ScrollTrigger.min.js',
      'assets/js/ScrollToPlugin.min.js',
      'assets/js/ScrollSmoother.min.js',
      'assets/js/magnific-popup.min.js',
      'assets/js/jquery.meanmenu.min.js',
      'assets/js/nav-tool.js',
      'assets/js/jquery-ui.js',
      'assets/js/jquery.countdown.js',
      'assets/js/element-in-view.js',
      'assets/js/script.js'
    ];

    this.loadScripts(scripts);
  }

  // Clear previously added script elements
  clearScripts() {
    const scriptElements = document.querySelectorAll('script[src*="assets/js"]');
    scriptElements.forEach(script => {
      script.remove();
    });  
  }

  // Dynamically load scripts
  loadScripts(scripts: string[]) {
    scripts.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      }
    });
  }
}
