import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livres-contexto',
  templateUrl: './livres-contexto.page.html',
  styleUrls: ['./livres-contexto.page.scss'],
})
export class LivresContextoPage implements OnInit {

  constructor(public router: Router) { }

  navigateToG() {
    this.router.navigate(['livres-contexto/gramaticas'], {})
  }
  ngOnInit() {
  }

}
