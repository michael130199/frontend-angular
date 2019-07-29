import { Component, OnChanges, DoCheck } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';



@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})

export class AddNewsComponent implements DoCheck{

  public titleCom:string="Agregar Noticias";
  public editorTiny: EditorModule;
  
  public newsTitle:string;
  public newsDescrip:string;
  public newsAuthor:string;
  public newsTag:string;
  public newsContent:any;
  public newsStatus:any;
  
  public newsFech:any = "2019-12-12";

  public fecha:any;

  public newsDay:number;
  public newsMonth:any;
  public newsYear:number;

  public status:any = [
    { name: 'Publicar'},
    { name: 'Borrador'},
    { name: 'Otro..'}
  ];

  public monthName:any = [
    {"id": "1",  "pre": "Ene",  "name": "Enero"},
    {"id": "2",  "pre": "Feb",  "name": "Febrero"},
    {"id": "3",  "pre": "Mar",  "name": "Marzo"},
    {"id": "4",  "pre": "Abr",  "name": "Abril"},
    {"id": "5",  "pre": "May",  "name": "Mayo"},
    {"id": "6",  "pre": "Jun",  "name": "Junio"},
    {"id": "7",  "pre": "Jul",  "name": "Julio"},
    {"id": "8",  "pre": "Ago",  "name": "Agosto"},
    {"id": "9",  "pre": "Sep",  "name": "Septiembre"},
    {"id": "10", "pre": "Oct",  "name": "Octubre"},
    {"id": "11", "pre": "Nov",  "name": "Noviembre"},
    {"id": "12", "pre": "Dic",  "name": "Diciembre"}
  ];

  constructor() {

  }


  ngDoCheck(){
    this.fecha = this.extraer();

    let fecha1 = this.fecha[1];

    let fecha2 = this.monthName.filter(function(v){
      return v.id == fecha1;
    });
    
    this.newsMonth = fecha2[0]["pre"];
    this.newsYear = this.fecha[0];
    this.newsDay = this.fecha[2];
  }


  extraer(){ 
    let fecha1 = this.newsFech.split('-');
    return fecha1;
  }


}
