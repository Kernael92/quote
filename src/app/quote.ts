export class Quote {
   public showAuthorName:boolean;
   constructor(public name:string,public authorName:string, public creationDate:Date){
      this.showAuthorName=false
   }
}
