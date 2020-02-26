import { TesteApiService } from './../teste-api.service';
import { Component, OnInit, APP_ID } from '@angular/core';

@Component({
  selector: 'app-teste-api',
  templateUrl: './teste-api.component.html',
  styleUrls: ['./teste-api.component.scss']
})
export class TesteApiComponent implements OnInit {
  
  //var localização
  localizacao: any = "";
  
  //Importar o serviço teste Api no construtor
  constructor(private TesteApiService : TesteApiService) { }

  ngOnInit(): void {
    //chamada método de listagem ao iniciar a tela
    //this.getLocalizacaoIp();
  }

  //método de listar dados localização da API por IP
  getLocalizacaoIp(data){
    this.TesteApiService.getLocalizacaoIp(data.ip).subscribe(localizacao => {
    this.localizacao = localizacao;
    }, err => {
      console.log('Erro ao localizar IP', err);
    })
  }

}
