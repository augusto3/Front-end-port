export class funcionPortfolio{
  public edit:boolean=false;
  public mostrar:boolean=false;
  public add:boolean=false;
 
  botonOpciones():void{
    this.mostrar=!this.mostrar;
  }
  botonEdit():void{
    this.edit=!this.edit;
  }
  botonAdd():void{
    this.add=!this.add; 
  }
}