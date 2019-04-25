using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections;


namespace MatchingColumnsReactProyect.Domain.Entities
{
    public class Informe
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        private ArrayList ListaDeCuadros;

        public Informe(string nombre)
        {
            Nombre = nombre;
            ListaDeCuadros = new ArrayList();
        }

        /// <summary>
        /// Agrega un Cuadro a un Informe determinado.
        /// </summary>
        /// <param name="cuadro"></param>
        public void AddCuadro(Cuadro cuadro)
        {
            if (cuadro != null && !ListaDeCuadros.Contains(cuadro))
            {
                ListaDeCuadros.Add(cuadro);
            }
        }

        /// <summary>
        /// Devuelve ListaCuadros referentes al Informe.
        /// </summary>
        /// <returns></returns>
        public ArrayList GetListaCuadrosTotales()
        {
            return ListaDeCuadros;
        }
    }
}
