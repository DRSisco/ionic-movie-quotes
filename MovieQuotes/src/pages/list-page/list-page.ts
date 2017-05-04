import { MovieQuote } from './../../models/MovieQuote.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html',
})
export class ListPage {
  public movieQuotesStream: FirebaseListObservable<MovieQuote[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase, private alertCrlr: AlertController) {
    this.movieQuotesStream = this.afDatabase.list("Quotes")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  addQuote(): void {
    const prompt = this.alertCrlr.create({
      title: "Add Quote",
      inputs: [
        {
          name: 'quote',
          placeholder: 'Quote',
        },
        {
          name: 'movie',
          placeholder: 'Quote from'
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: () => {
          }
        },
        {
          text: "Add Quote",
          handler: (data: MovieQuote) => {
            console.log(data)
          }
        }
      ]
    })
    prompt.present()
  }

}
