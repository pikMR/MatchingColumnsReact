using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MatchingColumnsReactProyect.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MatchingColumnsReactProyect.Controllers
{
    [Route("api/[controller]")]
    public class InformeController : Controller
    {
        [HttpGet("[action]")]
        public Informe ObtenerInforme(int id)
        {
            Informe Informe = new Informe("Política");
            Cuadro cuadro = new Cuadro(Informe, new Conector("Chalet de Iglesias"), new Conector("600.000 euros"));
            cuadro.Descripcion = "Propiedades de Políticos";
            cuadro.AddConnectores(new Conector("Felipe Gonzalez"), new Conector("Yate de lujo"));
            Informe.AddCuadro(cuadro);
            return Informe;
        }
            
        /*public IActionResult Index()
        {
            return View();
        }*/
    }
}
