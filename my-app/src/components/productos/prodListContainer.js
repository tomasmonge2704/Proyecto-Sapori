import ProductList from "./prodList";
import Picada from '../../img/picada.png';
import Picada2 from '../../img/picada2.png';
const productosDestacados = [
    {
      nombreProd:
        "Mini horma Colonia Caroya reggianito",
      img: "https://http2.mlstatic.com/D_NQ_NP_840322-MLA44151909329_112020-V.jpg",
    },
    {
      nombreProd:
        "Mirtillo chutney de moras/arándanos 220gr",
      img: "https://www.los-almendros.com.ar/shop/wp-content/uploads/il-mirtilo-chutney-de-arandanos-D_NQ_NP_968650-MLA31661896935_082019-F.jpg",
    },
    {
      nombreProd:
        "Mirtillo mermelada de arandanos400g",
      img: "https://http2.mlstatic.com/D_NQ_NP_966661-MLA43632460939_092020-V.jpg",
    },
    {
        nombreProd:
          "Arytza mostaza clasica 200g",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/093/780/products/mostaza_clasica_imagen11-2444756fcf67feda4a15711023351173-640-0.jpg",
      }
      ,
    {
        nombreProd:
          "Arytza mostaza finas hierbas 200g",
        img: "https://haceclick.com.ar/wp-content/uploads/2021/03/052770000000007-1.jpg",
      }
      ,
    {
        nombreProd:
          "Arytza mostaza alemana 200g",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/093/780/products/mostaza_alemana_1_gr1-2cbcbcb55cfc8280f115711020673998-640-0.jpg",
      }
      ,
    {
        nombreProd:
          "Arytza mayonesa clasica 340g",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/345/284/products/17581-e67efa995900a3c1ac16330099850598-1024-1024.jpg",
      }
      ,
    {
        nombreProd:
          "Arytza mayonesa con ajo / ahumada 340g",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/942/490/products/arytza-360gr-61-92362582364b0ad2e116388053459156-640-0.png",
      }
  ];
  const Picadas = [
    {
      nombreProd:
        "Picada para 2 Personas",
      img: Picada,
    },
    {
      nombreProd:
        "Picada para 4 Personas",
      img: Picada2,
    },
    {
      nombreProd:
        "Picada para 8 Personas",
      img: Picada,
    },
    
  ];
  const bebidas = [
    {
      nombreProd:
        "Jack Daniels 75cl",
      img: "https://frappe.com.ar/img/productos/grande/1568.png",
    },
    {
      nombreProd:
        "Johnnie Walker Red label 75cl",
      img: "https://www.vinorema.com/2472-large_default/whisky-johnnie-walker-red-label.jpg",
    },
    {
      nombreProd:
        "Johnnie Walker Red label 1L",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/132/733/products/shop-johnnie-red71-6af6c5e3673271592715972883689719-1024-1024.jpg",
    },
    {
        nombreProd:
          "Johnnie Walker Double black 75cl",
        img: "https://media-verticommnetwork1.netdna-ssl.com/wines/johnnie-walker-double-black-549063.jpg",
      },
      {
        nombreProd:
          "Hendrick´s Gin 70cl",
        img: "https://cepadevinos.com/wp-content/uploads/2018/03/Gin-Hendrix.jpg",
      },
      {
        nombreProd:
          "Bacardí Carta oro",
        img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/185/530/products/bacardi1-c8b09eb8a91179c4cd15909694924467-640-0.jpg",
      },
      {
        nombreProd:
          "Bacardí Carta blanca",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/ron-bacardi-carta-blanca-12x7501-8f3d245606836ff3bb15329818159170-640-0.png",
      },
      {
        nombreProd:
          "White Hourse 75cl",
        img: "https://www.whiskyantique.com/media/prodotti/white-horse-bot-80-s-75cl-40-blended-montenegro-import-73800/img_2D_0012.jpg",
      }
  ];
  const prodImportados = [
    {
      nombreProd:
        "Fideos Garofalo parpardelle",
      img: "https://www.pasta-garofalo.com/es/wp-content/uploads/sites/10/2019/07/585x500_0001_pappardelle-sfondo-bianco.jpg",
    },
    {
      nombreProd:
        "Fideos Garofalo tagliatelle nido",
      img: "https://www.pasta-garofalo.com/es/wp-content/uploads/sites/10/2019/07/585x500_0000_tagliatelle-nido-sfondo-bianco.jpg",
    },
    {
      nombreProd:
        "Fideos Garofalo linguine",
      img: "https://www.pasta-garofalo.com/es/wp-content/uploads/sites/10/2019/07/0014_linguine-bianco.jpg",
    },
    {
        nombreProd:
          "Fideos Garofalo orecchiette",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/239/415/products/orecchiette-pasta-garofalo-durum-wheat-semolina-pasta-585x5001-e6f66b742b78c906c016238714458077-640-0.jpg",
      },
      {
        nombreProd:
          "Fideos Garofalo spaghetti",
        img: "https://www.pasta-garofalo.com/es/wp-content/uploads/sites/10/2019/07/spaghetti-igp-pasta-garofalo-durum-wheat-semolina-pasta-585x500-eu.jpg",
      },
      {
        nombreProd:
          "Salsa de tomate Mutti",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/887/products/salsa-inventa-sugo1-6e24acabd3eacec3c616007105875445-640-0.png",
      },
      {
        nombreProd:
          "Aceto millan 250ml",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/348/263/products/aceto-balsamico-acetaia-millan-laur_550x1-ee7bc3648cad63e98716221449050744-640-0.jpg",
      }
  ];
export default function ProdListContainer(){
    return(
        <ProductList productosDestacados={productosDestacados} bebidas={bebidas} prodImportados={prodImportados} Picadas={Picadas}></ProductList>
    )
}