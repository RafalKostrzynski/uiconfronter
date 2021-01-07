export class PageEntity {
  id:number;
  oldPage:string;
  newPage:string;
  createDate:string;

  constructor(oldPage: string, newPage: string) {
    this.oldPage = oldPage;
    this.newPage = newPage;
  }
}
