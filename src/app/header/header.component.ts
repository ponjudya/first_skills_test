import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])

  onWindowScroll() {

    let header = document.getElementById('header');
    let header_mobile = document.getElementById('header_mobile');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.classList.add('header-fixed');
      header_mobile.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
      header_mobile.classList.remove('header-fixed');
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


  openNav() {
    console.log("in")
    let body = document.body;
    let sideBar = document.getElementById("mySidebar");
    let nav = document.getElementById("nav");
    let home = document.getElementById("homeMobile");
      sideBar.classList.add('sideBarWidth');
      body.classList.add('overflow-none');
      nav.classList.add('overlay');
      home.classList.add('overlay');
      this.opened = true;
  }

  closeNav() {
    let body = document.body;
    let sideBar = document.getElementById("mySidebar");
    let nav = document.getElementById("nav");
    let home = document.getElementById("homeMobile");
      sideBar.classList.remove('sideBarWidth');
      body.classList.remove('overflow-none');
      nav.classList.remove('overlay');
      home.classList.remove('overlay');
      this.opened = false;
  }

}
