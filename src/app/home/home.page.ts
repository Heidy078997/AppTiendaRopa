import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { ProductoResponse } from '../interfaces/producto';
import { CategoriaResponse } from '../interfaces/categoria';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public list_prod:ProductoResponse[]=[];
  public list_categ:CategoriaResponse[]=[];
  id_categoria_seleccionada: any;
  categoria_seleccionada!: CategoriaResponse;
  constructor(private serviceProducto:ProductoService,private router: Router) {

  }
  ngOnInit(){
    this.serviceProducto.getListaProductos()
    .subscribe(resp=>{
      console.log(resp);
          this.list_prod= JSON.parse(JSON.stringify(resp));
    });
}

getProductosCaterogias(){
    
  this.serviceProducto.getProductosCaterogias(this.id_categoria_seleccionada)
  .subscribe(resp=>{
      console.log(resp);
      this.list_categ= JSON.parse(JSON.stringify(resp));
      
                
  });
}

mostrarListaProductos(categoria:CategoriaResponse){
  let NavigationExtras: NavigationExtras ={
    state: {
      categoria_seleccionada: categoria,
      
    }
  };
  this.router.navigate(['/detalleproducto'],NavigationExtras )
}





}

