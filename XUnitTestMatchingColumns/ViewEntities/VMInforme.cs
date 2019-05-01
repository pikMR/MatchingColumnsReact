using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using XUnitTestMatchingColumns.Entities;

namespace XUnitTestMatchingColumns.ViewEntities
{
    public class VMInforme
    {
        public int InformeId { get; set; }
        public string InformeNombre { get; set; }
        public string CuadroDescripcion { get; set; }
        public int CuadroId { get; set; }
        public string Conectores { get; set; }

        public string CuadroTema1 { get; set; }

        public string CuadroTema2 { get; set; }

        public VMInforme GetVista(Cuadro cuadro)
        {
            CuadroDescripcion = cuadro.Descripcion;
            CuadroId = cuadro.Id;
            CuadroTema1 = cuadro.Tema1;
            CuadroTema2 = cuadro.Tema2;

            var stringConector = String.Empty;
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(Dictionary<Conector, IEnumerable<Conector>>));
            using (MemoryStream ms = new MemoryStream())
            {
                serializer.WriteObject(ms, cuadro.MatchConectores);
                stringConector = Encoding.Default.GetString(ms.ToArray());
            }

            Conectores = stringConector;
            return this;
        }
    }
}
