import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulares',
  templateUrl: './regulares.page.html',
  styleUrls: ['./regulares.page.scss'],
})
export class RegularesPage implements OnInit {
  items: object[]

  constructor(public router: Router) {
    this.items = [
      {
        url: 'https://www.geeksforgeeks.org/difference-between-dfa-and-nfa/?ref=rp',
        title: 'GeeksForGeeks',
      },
      {
        url: 'https://ths.rwth-aachen.de/wp-content/uploads/sites/4/regular_exercises_ws1718.pdf',
        title: 'Exercício de Linguagens Regulares'
      },
      {
        url: 'https://sites.google.com/site/julianolg/home/pesquisa/tccomputacao2017_2',
        title: 'Teoria da Computação - IFSC'
      },
    ]
  }

  navigateToAF() {
    this.router.navigate(['regulares/automatos-finitos'], {})
  }

  ngOnInit() {
  }

}
