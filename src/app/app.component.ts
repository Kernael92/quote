import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
     new Quote("I actually think that the most efficacious way of making a difference is to lead by example, and doing random acts of kindness is setting a very good example of how to behave in the world."),
     new Quote("A return to first principles in a republic is sometimes caused by the simple virtues of one man. His good example has such an influence that the good men strive to imitate him, and the wicked are ashamed to lead a life so contrary to his example."),
     new Quote("Me being the best in the world, it doesn't mean that much to me if I'm not a good person at the end of the day, if I'm not setting a good example for other people to be better to each other."),
     new Quote("Olympism seeks to create a way of life based on the joy found in effort, the educational value of a good example and respect for universal fundamental ethical principle"),


 ]
}
