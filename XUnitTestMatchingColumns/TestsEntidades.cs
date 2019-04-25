using System;
using Xunit;
using XUnitTestMatchingColumns.Entities;
using XUnitTestMatchingColumns.Mock;
using System.Linq;

namespace XUnitTestMatchingColumns
{
    public class TestsEntidades
    {
        #region Conector
        [Fact]
        public void ConstructorConector()
        {
            Conector conect = new Conector(StringEntitiesMocks.CONECTOR_pregunta_1);
            Assert.Equal(conect.Datos, StringEntitiesMocks.CONECTOR_pregunta_1);
        }
        #endregion

        #region Informe
        [Fact]
        public void ConstructorInforme()
        {
            Informe Informe = new Informe(StringEntitiesMocks.Informe1);
            Informe.GetListaCuadrosTotales();
            Assert.True(true);
        }

        [Fact]
        public void Informe_AddCuadro()
        {
            Informe Informe = new Informe(StringEntitiesMocks.Informe1);
            Cuadro cuadro = new Cuadro(Informe, new Conector(StringEntitiesMocks.CONECTOR_pregunta_1), new Conector(StringEntitiesMocks.CONECTOR_respuesta_1));
            Informe.AddCuadro(cuadro);
        }
        #endregion

        #region Cuadro
        [Fact]
        public void Cuadro_GetFirstConectorDestinoDeDictionary()
        {
            Informe Informe = new Informe(StringEntitiesMocks.Informe1);
            var conectorPregunta = new Conector(StringEntitiesMocks.CONECTOR_pregunta_2);
            var conectorRespuesta = new Conector(StringEntitiesMocks.CONECTOR_respuesta_2);
            Cuadro cuadro = new Cuadro(Informe, conectorPregunta, conectorRespuesta);
            Assert.Equal(conectorRespuesta,cuadro.GetFirstConectorDestinoDeDictionary(conectorPregunta));
        }

        [Fact]
        public void Cuadro_AddConectores()
        {
            Informe Informe = new Informe(StringEntitiesMocks.Informe1);
            Cuadro cuadro = new Cuadro(Informe, new Conector(StringEntitiesMocks.CONECTOR_pregunta_2), new Conector(StringEntitiesMocks.CONECTOR_respuesta_2));
            Informe.AddCuadro(cuadro);
            var conectorPregunta = new Conector(StringEntitiesMocks.CONECTOR_pregunta_3);
            var conectorRespuesta = new Conector(StringEntitiesMocks.CONECTOR_respuesta_3);
            cuadro.AddConnectores(conectorPregunta, conectorRespuesta);
            Assert.Equal(conectorRespuesta,cuadro.GetFirstConectorDestinoDeDictionary(conectorPregunta));
            //cuadro.GetMatchConectoresDictionary.
        }

        [Fact]
        public void Cuadro_ConstructorCuadroSobrecargado()
        {
            Conector cpregunta = new Conector(StringEntitiesMocks.CONECTOR_pregunta_2);
            Conector crespuesta = new Conector(StringEntitiesMocks.CONECTOR_respuesta_2);
            Cuadro cuadro = new Cuadro(new Informe(StringEntitiesMocks.Informe2), cpregunta, crespuesta);
            Assert.True(cuadro.GetFirstConectorDestinoDeDictionary(cpregunta).Equals(crespuesta) && cuadro.Informe.Equals(StringEntitiesMocks.Informe2));
        }

        [Fact]
        public void Cuadro_ConstructorCuadro()
        {
            Informe Informe = new Informe(StringEntitiesMocks.Informe1);
            Cuadro cuadro = new Cuadro(Informe);
            Assert.Single(Informe.GetListaCuadrosTotales());
        }
        #endregion

    }
}
