import ProductList from "./prodList";

const productosDestacados = [
    {
      nombreProd:
        "Mini horma Colonia Caroya reggianito/grano de pimienta/ finas hierbas",
      img: "https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/450_1000.jpeg",
    },
    {
      nombreProd:
        "Mini horma Colonia Caroya reggianito/grano de pimienta/ finas hierbas",
      img: "https://saporiintensi.com/#",
    },
    {
      nombreProd:
        "Mini horma Colonia Caroya reggianito/grano de pimienta/ finas hierbas",
      img: "https://saporiintensi.com/#",
    }
  ];

export default function ProdListContainer(){
    return(
        <ProductList productosDestacados={productosDestacados}></ProductList>
    )
}