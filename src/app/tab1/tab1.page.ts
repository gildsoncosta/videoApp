import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/iFilme.model';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';


  listaVideos: IFilme[] = [
    {
      nome: 'Kings Man: A Origem (2021)',
      lancamento: '06/01/2022 (BR)',
      duracao: '2h 10m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pVL9AyKKLfUwrYD6jhdsI15gBQ7.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra']
    },
    {
      nome: 'Ghostbusters: Mais Além (2021)',
      lancamento: '8/11/2021',
      duracao: '2h 4m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/719aIhGrTrJ0yzkZ806Ea4rbonV.jpg',
      generos: ['Fantasia', 'Comédia', 'Aventura']
    },
    {
      nome: 'Liga da Justiça',
      lancamento: '16/12/2016',
      duracao: '1h 26m',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mg9Nlc1GXw0ihf1Ha0BSTZ5fd8D.jpg',
      generos: ['Action', 'Adventure']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController, private titleService: Title) {
    this.titleService.setTitle(this.titulo);
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta !',
      message: 'Deseja realmente favoritar o filme ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim favoritar',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
