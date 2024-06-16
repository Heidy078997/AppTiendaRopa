import { Component, OnInit } from '@angular/core';
import { CategoriaResponse } from '../interfaces/categoria';
import {  Router,ActivatedRoute,NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.page.html',
  styleUrls: ['./detalleproducto.page.scss'],
})
export class DetalleproductoPage implements OnInit {
  categoria_seleccionada:CategoriaResponse | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state && navigation.extras.state['categoria_seleccionada']) {
        this.categoria_seleccionada = navigation.extras.state['categoria_seleccionada'];
      }
    });
  }

  ngOnInit() {
  }

}
