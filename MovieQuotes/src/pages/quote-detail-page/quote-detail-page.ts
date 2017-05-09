import { MovieQuote } from './../../models/MovieQuote.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";

/**
 * Generated class for the QuoteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quote-detail-page',
  templateUrl: 'quote-detail-page.html',
})
export class QuoteDetailPage implements OnInit, OnDestroy {

    public movieQuote: MovieQuote;
    public movieQuoteStream : FirebaseObjectObservable<MovieQuote>
    private movieSubscription: Subscription


    ngOnInit(): void {
      const movieQuoteKey = this.navParams.get("key")
      this.movieQuoteStream = this.afDatabase.object("Quotes/" + movieQuoteKey)
      this.movieSubscription = this.movieQuoteStream.subscribe( (movieQuote:MovieQuote) => {
        this.movieQuote = movieQuote
      })
    }

    ngOnDestroy(): void {
      this.movieSubscription.unsubscribe()
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase, private alertCrlr: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteDetailPage');
  }

  editQuote(): void {
    const prompt = this.alertCrlr.create({
      title: "Edit this Quote",
      inputs: [
        {
          name: 'quote',
          placeholder: 'Quote',
          value: this.movieQuote.quote
        },
        {
          name: 'movie',
          placeholder: 'Quote from',
          value: this.movieQuote.movie
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: () => {
          }
        },
        {
          text: "Save Quote",
          handler: (data: MovieQuote) => {
            if (data.quote.length > 0 && data.movie.length > 0) {
              this.afDatabase.object("Quotes/" + this.movieQuote.$key).set(data)
            } else {
              console.log("Invalid movie quote")
              return false;
            }
          }
        }
      ]
    })
    prompt.present()
  }

}
