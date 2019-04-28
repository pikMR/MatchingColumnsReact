using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchingColumnsReactProyect.Domain.Entities
{
    public class Conector
    {
        public int Id { get; set; }
        public string Datos { get; set; }
        public string Descripcion { get; set; }

        public Conector() { }

        /// <summary>
        /// Constructor que permite la creación de un Conector escribiendo ya sea la pregunta o respuesta en la
        /// </summary>
        /// <param name="dato"></param>
        public Conector(string datos)
        {
            Datos = datos;
        }
    }
}
