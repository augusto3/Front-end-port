import { SobreMi } from "./SobreMi";
import { Experiencia } from "./Experiencia";
import { Universidad } from "./Universidad";
import { Cursos } from "./Cursos";
import { Habilidades } from "./Habilidades";
import { Proyectos } from "./Proyectos";
export interface Datos{
    sobremi:SobreMi,
    experiencia:Experiencia,
    universidad:Universidad,
    cursos:Cursos,
    habilidades:Habilidades,
    proyectos:Proyectos
}