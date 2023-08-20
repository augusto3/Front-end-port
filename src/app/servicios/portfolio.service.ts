import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SobreMi } from '../componentes/page-one/page-one.component';
import { Experiencia } from '../componentes/page-two/page-two.component';
import { Cursos, Universidad } from '../componentes/page-three/page-three.component';
import { Habilidades } from '../componentes/page-four/page-four.component';
import { Proyectos } from '../componentes/page-five/page-five.component';
import { Mensajes } from '../componentes/page-six/page-six.component';
import { Redes } from '../componentes/menu-head/menu-head.component';
const httpOptions = {
  headers : new HttpHeaders({
    'cont-type':'aplication/json',
  }),
};
@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  url="http://localhost:8080"
  url1="https://portfolio43.onrender.com";
  urlFire="https://angular-3696a-default-rtdb.firebaseio.com";  
  constructor(private http:HttpClient){}
  SobreMi():Observable<SobreMi[]>{
    return this.http.get<SobreMi[]>(this.url+"/sobremi/datos");
  }
  Redes():Observable<Redes[]>{
    return this.http.get<Redes[]>(this.url+"/redes/datos");
  }
  Experiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+"/experiencia/datos");
  }
  Habilidades():Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(this.url+"/habilidades/datos");
  }
  Cursos():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.url+"/cursos/datos");
  }
  Universidad():Observable<Universidad[]>{
    return this.http.get<Universidad[]>(this.url+"/universidad/datos");
  }
  Proyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url+"/proyectos/datos");
  }
  Mensajes():Observable<Mensajes[]>{
    return this.http.get<Mensajes[]>(this.url+"/mensajes/datos");
  }
/** getSobreMi():Observable<SobreMi>{
    this.http.get<SobreMi>(this.url+"/sobremi/datos");
    return this.http.get<SobreMi>(this.urlFire+"/sobremi.json");
  }
  getRedes():Observable<Redes>{
    this.http.get<Redes>(this.url+"/redes/datos");
    return this.http.get<Redes>(this.urlFire+"/redes.json");
  }
  getExperiencia():Observable<Experiencia[]>{
    this.http.get<Experiencia[]>(this.url+"/experiencia/datos");
    return this.http.get<Experiencia[]>(this.urlFire+"/experiencia.json");
  }
  getMisHabilidades():Observable<Habilidades[]>{
    this.http.get<Habilidades[]>(this.url+"/habilidades/datos");
    return this.http.get<Habilidades[]>(this.urlFire+"/habilidades.json");
  }
  getCursos():Observable<Cursos[]>{
    this.http.get<Cursos[]>(this.url+"/cursos/datos");
    return this.http.get<Cursos[]>(this.urlFire+"/cursos.json");
  }
  getUniversidad():Observable<Universidad>{
    this.http.get<Universidad>(this.url+"/universidad/datos");
    return this.http.get<Universidad>(this.urlFire+"/universidad.json");
  }
  getProyectos():Observable<Proyectos[]>{
    this.http.get<Proyectos[]>(this.url+"/proyectos/datos");
    return this.http.get<Proyectos[]>(this.urlFire+"/proyectos.json");
  }
  getMensajes():Observable<Mensajes[]>{
    this.http.get<Mensajes[]>(this.url+"/mensajes/datos");
    return this.http.get<Mensajes[]>(this.urlFire+"/mensajes.json");
  }
  newSobreMi(sobremi:SobreMi):Observable<SobreMi>{
    this.http.post<SobreMi>(this.url+"/sobremi/crear",sobremi);
    return this.http.post<SobreMi>(this.urlFire+"/sobremi.json",sobremi);
  }
  newRedes(redes:Redes):Observable<Redes>{
    this.http.post<Redes>(this.url+"/redes/crear",redes);
    return this.http.post<Redes>(this.urlFire+"/redes.json",redes);
  }
  newExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    this.http.post<Experiencia>(this.url+"/experiencia/crear",experiencia)
    return this.http.post<Experiencia>(this.urlFire+"/experiencia.json",experiencia);
  }
  newMisHabilidades(habilidades:Habilidades):Observable<Habilidades>{
    this.http.post<Habilidades>(this.url+"/habilidades/crear",habilidades);
    return this.http.post<Habilidades>(this.urlFire+"/habilidades.json",habilidades);
  }
  newCursos(cursos:Cursos):Observable<Cursos>{
    this.http.post<Cursos>(this.url+"/cursos/crear",cursos);
    return this.http.post<Cursos>(this.urlFire+"/cursos.json",cursos);
  }
  newUniversidad(universidad:Universidad):Observable<Universidad>{
    this.http.post<Universidad>( this.url+"/universidad/crear",universidad);
    return this.http.post<Universidad>( this.urlFire+"/universidad.json",universidad);
  }
  newProyectos(proyectos:Proyectos):Observable<Proyectos>{
    this.http.post<Proyectos>( this.url+"/proyectos/crear",proyectos);
    return this.http.post<Proyectos>( this.urlFire+"/proyectos.json",proyectos);
  }
  setSobreMi(sobremi:SobreMi):Observable<SobreMi>{
    this.http.put<SobreMi>(this.url+"/sobremi/edit/"+sobremi.id,sobremi);
    return this.http.put<SobreMi>(this.url+"/sobremi/"+sobremi.id,sobremi);
  }
  setRedes(redes:Redes):Observable<Redes>{
    this.http.put<Redes>(this.url+"/redes/edit/"+redes.id,redes);
    return this.http.put<Redes>( this.urlFire+"/redes/"+redes.id,redes);
  }
  setExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    this.http.put<Experiencia>( this.url+"/experiencia/edit/"+experiencia.id,experiencia);
    return this.http.put<Experiencia>( this.urlFire+"/experiencia/"+experiencia.id,experiencia);
  }
  setMisHabilidades(habilidades:Habilidades):Observable<Habilidades>{
    this.http.put<Habilidades>( this.url+"/habilidades/"+habilidades.id,habilidades);
    return this.http.put<Habilidades>( this.urlFire+"/habilidades/"+habilidades.id,habilidades);
  }
  setCursos(cursos:Cursos):Observable<Cursos>{
    this.http.put<Cursos>( this.url+"/cursos/edit/"+cursos.id,cursos);
    return this.http.put<Cursos>( this.urlFire+"/cursos/"+cursos.id,cursos);
  }
  setUniversidad(universidad:Universidad):Observable<Universidad>{
    this.http.put<Universidad>(this.url+"/universidad/edit/"+universidad.id,universidad);
    return this.http.put<Universidad>(this.urlFire+"/universidad/"+universidad.id,universidad);
  }
  setProyectos(proyectos:Proyectos):Observable<Proyectos>{
    this.http.put<Proyectos>(this.url+"/proyectos/edit/"+proyectos.id,proyectos);
    return this.http.put<Proyectos>(this.urlFire+"/proyectos/"+proyectos.id,proyectos);
  }
  deleteSobreMi(id:number):Observable<SobreMi>{
    this.http.delete<SobreMi>(this.url+"/sobremi/delete/"+id);
    return this.http.delete<SobreMi>(this.urlFire+"/sobremi/"+id);
  }
  deleteRedes(id:number):Observable<Redes>{
    this.http.delete<Redes>(this.url+"/redes/delete"+id);
    return this.http.delete<Redes>(this.urlFire+"/redes/"+id);
  }
  deleteExperiencia(id:number):Observable<Experiencia>{
    this.http.delete<Experiencia>(this.url+"/experiencia/delete/"+id);
    return this.http.delete<Experiencia>(this.urlFire+"/experiencia/"+id);
  }
  deleteMisHabilidades(id:number):Observable<Habilidades>{
    this.http.delete<Habilidades>(this.url+"/habilidades/delete/"+id);
    return this.http.delete<Habilidades>(this.urlFire+"/habilidades/"+id);
  }
  deleteCursos(id:number):Observable<Cursos>{
    this.http.delete<Cursos>(this.url+"/cursos/delete/"+id);
    return this.http.delete<Cursos>(this.urlFire+"/cursos/"+id);
  }
  deleteUniversidad(id:number):Observable<Universidad>{
    this.http.delete<Universidad>(this.url+"/universidad/delete/"+id);
    return this.http.delete<Universidad>(this.urlFire+"/universidad/"+id);
  }
  deleteProyectos(id:number):Observable<Proyectos>{
    this.http.delete<Proyectos>(this.url+"/proyectos/delete/"+id);
    return this.http.delete<Proyectos>(this.urlFire+"/proyectos/"+id);
  }*/
}