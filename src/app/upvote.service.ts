import { Injectable } from '@angular/core';
import { Qoute } from '../qoute'

@Injectable({
  providedIn: 'root'
})
export class UpvoteService {

  constructor() { }
  getQouteVotes(quoteId): Qoute<any> {
     // Get total votes
     return this.object('upvotes/$(qouteId)')
 }
 updateQouteVote(qouteId, vote): void {
    // creates or updates Qoute's vote
    let data = {}
    data[qouteId] = vote
    this.object('updates/${qouteId}').update(data)
}
}
