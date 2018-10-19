import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes = [
      new Quote("I actually think that the most efficacious way of making a difference is to lead by example, and doing random acts of kindness is setting a very good example of how to behave in the world.", "Misha Collins"),
      new Quote("A return to first principles in a republic is sometimes caused by the simple virtues of one man. His good example has such an influence that the good men strive to imitate him, and the wicked are ashamed to lead a life so contrary to his example.", "Niccolo Machiavelli"),
      new Quote("Me being the best in the world, it doesn't mean that much to me if I'm not a good person at the end of the day, if I'm not setting a good example for other people to be better to each other.", "Rose Namajunas"),
      new Quote("Olympism seeks to create a way of life based on the joy found in effort, the educational value of a good example and respect for universal fundamental ethical principle.","Pierre de Coubertin"),


  ]
  deleteQuote(isRead,index){
     if(isRead){
        let toDelete = confirm('Are you sure you want to delete this quote?')

        if(toDelete){
           this.quotes.splice(index,1)
        }
     }
 }

  toggleDetails(index) {
     this.quotes[index].showAuthorName = !this.quotes[index].showAuthorName;
 }
  constructor() { }

  ngOnInit() {
  }

}
