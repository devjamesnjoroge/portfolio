import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    {
      name: 'PIZZA LEGACIES.',
      description: 'A website where people can add a pizza, toppings to cart and checkout. They can choose whether to be delivered or not.',
      image: 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1656914209/photo_2022-03-21_07-18-41_jbndak.jpg',
      technologies: ['HTML', 'CSS', 'Javascript', 'bootstrap5'],
      github: 'https://github.com/devjamesnjoroge/pizza-legacies',
      live: 'https://devjamesnjoroge.github.io/pizza-legacies/'
    },
    {
      name: 'QUOTE BOOKS.',
      description: 'A website that shows a quote and its details. A user is able to add a quote and it displays on the website but temporarily since no database used.',
      image: 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1656914232/Screenshot_from_2022-07-02_20-55-06_jyz9zi.png',
      technologies: ['HTML', 'CSS', 'Angular'],
      github: 'https://github.com/devjamesnjoroge/quotes-book',
      live: 'http://quotes-book-app.vercel.app/'
    },
    {
      name: 'IMGALLERIA.',
      description: 'An image gallery websites that display images stored in a database. A user is able to search an image by its category.',
      image: 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1656914261/Screenshot_from_2022-07-02_21-08-40_j3hj0p.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'Django', 'PSQL', 'Cloudinary', 'Bootstrap'],
      github: 'https://github.com/devjamesnjoroge/img-galleria',
      live: 'https://imgalleria.herokuapp.com/'
    },
    {
      name: 'NEWS APP.',
      description: 'A flask web app that displays news by consuming the news api. A user is able to view all news from a particular source.',
      image: 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1656914289/Screenshot_from_2022-07-02_21-10-31_lxdg8q.png',
      technologies: ['HTML', 'CSS', 'FLASK', 'bootstrap', 'API endpoint'],
      github: 'https://github.com/devjamesnjoroge/news-app',
      live: 'https://news-api-app-flask-xd.herokuapp.com/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
