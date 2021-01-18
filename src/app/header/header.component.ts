import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])

  onWindowScroll() {

    let header = document.getElementById('header');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
  }

  goToMain() {
    let main = document.getElementById('main_banner');
    main.scrollIntoView({ behavior: "smooth" });
  }

  goToAbout() {
    let about = document.getElementById('main_about');
    about.scrollIntoView({ behavior: "smooth" });
  }

  goToRecipes() {
    let skills = document.getElementById('main_recipes');
    skills.scrollIntoView({ behavior: "smooth" });
  }

  goToServices() {
    let projects = document.getElementById('main_services');
    projects.scrollIntoView({ behavior: "smooth" });
  }

  goToContact() {
    let contact = document.getElementById('main_contact');
    contact.scrollIntoView({ behavior: "smooth" });
  }

}
