using MatchingColumnsReactProyect.Domain.Entities;
using MatchingColumnsReactProyect.Domain.ViewEntities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MatchingColumnsReactProyect.Controllers
{
    [Route("api/[controller]")]
    public class InformeController : Controller
    {
        [HttpGet("[action]")]
        public VMInforme ObtenerInforme(int id)
        {
            Informe Informe = new Informe("Política");
            Cuadro cuadro = new Cuadro(Informe, new Conector("Chalet de Iglesias") { Id = 0 }, new Conector("600.000 euros") { Id = 1 },"Propiedades","Precio");
            cuadro.Descripcion = "Propiedades de Políticos";
            cuadro.AddConnectores(new Conector("Yate de Felipe Gonzalez") { Id=2 }, new Conector("700.000 euros") { Id=3 });
            Informe.AddCuadro(cuadro);
            VMInforme vmodel = new VMInforme();

            vmodel.InformeId = Informe.Id;
            vmodel.InformeNombre = Informe.Nombre;

            return vmodel.GetVista(cuadro);
            //return vmodel.GetJson();
            //return GetInformeJson(Informe);
        }
    }
}
