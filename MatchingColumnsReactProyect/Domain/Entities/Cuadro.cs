using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace MatchingColumnsReactProyect.Domain.Entities
{
    public class Cuadro
    {
        public Dictionary<Conector, IEnumerable<Conector>> MatchConectores;
        public string Descripcion { get; set; }
        public int Id { get; set; }
        private string Informe { get; set; }

        public string Tema1 { get; set; }
        public string Tema2 { get; set; }

        /// <summary>
        /// Crea un Cuadro y lo añade a su Informe correspondiente.
        /// </summary>
        /// <param name="informe"></param>
        public Cuadro(Informe informe)
        {
            Informe = informe.Nombre;
            MatchConectores = new Dictionary<Conector, IEnumerable<Conector>>();
            informe.AddCuadro(this);
        }

        /// <summary>
        /// Crea un Cuadro y Agrega 2 conectores iniciales.
        /// </summary>
        /// <param name="informe"></param>
        /// <param name="conectorKey"></param>
        /// <param name="conectorValor"></param>
        public Cuadro(Informe informe, Conector conectorKey, Conector conectorValor) : this(informe)
        {
            AddConnectores(conectorKey, conectorValor);
        }

        /// <summary>
        /// Crea un Cuadro y Agrega 2 conectores iniciales.
        /// </summary>
        /// <param name="informe"></param>
        /// <param name="conectorKey"></param>
        /// <param name="conectorValor"></param>
        public Cuadro(Informe informe, Conector conectorKey, Conector conectorValor,string tema1, string tema2) : this(informe,conectorKey,conectorValor)
        {
            Tema1 = tema1;
            Tema2 = tema2;
        }

        /// <summary>
        /// Añade un Cuadro
        /// </summary>
        /// <param name="conectorKey"></param>
        /// <param name="conectorValor"></param>
        public void AddConnectores(Conector conectorKey, Conector conectorValor)
        {
            if (!MatchConectores.ContainsKey(conectorKey))
                MatchConectores.Add(conectorKey, new List<Conector>() { conectorValor });
            else
                ((List<Conector>)MatchConectores[conectorKey]).Add(conectorValor);
        }

        public Conector GetFirstConectorDestinoDeDictionary(Conector conectorKey)
        {
            if (conectorKey == null)
                throw new System.ArgumentNullException("Es necesario un conector Key en GetFirstConectorDestinoDeDictionary()");

            var conectorResultado = MatchConectores[conectorKey];

            if (conectorResultado != null)
            {
                return ((List<Conector>)MatchConectores[conectorKey]).FirstOrDefault();
            }

            return null;
        }

        public dynamic GetJsonObjects()
        {
           return JsonConvert.SerializeObject(MatchConectores);
        }
    }
}
