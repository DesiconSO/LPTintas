import './App.css'
import Product from './components/Product'
import './index.css'
import AzulExpression from './assets/images/azul_expression.png';
import BrancoUsoGeral from './assets/images/branco_usoGeral.png';
import PrataTemperatura from './assets/images/prata_temperatura.png';
import PretaMetalica from './assets/images/preta_metalica.png';
import RosaFluorescente from './assets/images/rosa_fluorescente.png';
import VerdeAgricola from './assets/images/verde_agricola.png';

import Banner from './assets/images/banner.jpg';

const products = [
  {
    id: 1,
    title: 'Metálica',
    category: "0",
    image: PretaMetalica
  },
  {
    id: 2,
    title: 'Uso Geral',
    category: "",
    image: BrancoUsoGeral
  },
  {
    id: 3,
    title: `Agrícolala`,
    category: "",
    image: VerdeAgricola
  },
  {
    id: 4,
    title: 'Expression',
    category: "",
    image: AzulExpression
  },
  {
    id: 5,
    title: 'Alta Temperatura',
    category: "",
    image: PrataTemperatura
  },
  {
    id: 6,
    title: 'Fluorescente',
    category: "",
    image: RosaFluorescente
  }
]

function App() {
  return (
    <div className="w-screen h-screen overflow-auto bg-slate-50">
      <div className="h-2/5 bg-blue-600 overflow-hidden">
        <img src={Banner} alt="Banner" className='h-auto w-full' />
      </div>

      <div className="lg:min-h-3/5 flex justify-center items-center flex-col w-full px-20 bg-slate-50">
        <div className='w-full text-center mt-12'>
          <h1 className='text-3xl text-orange-500'>Categorias de Tintas</h1>
          <p className='mt-8 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ab quidem nihil nesciunt voluptatem cupiditate voluptates facere quia eaque quibusdam iure saepe illo laborum voluptatibus, culpa odit beatae consequatur. Aliquid.
            Inventore dolor iste doloremque dolorum commodi ipsa atque minima velit, consequuntur ad maiores nostrum neque expedita esse totam recusandae facilis accusantium debitis at sint? Modi officiis eaque ipsum consectetur omnis.
            Reiciendis hic quaerat placeat facilis iure, amet ducimus autem sed asperiores illum doloribus iste error voluptates eos assumenda accusamus soluta nihil quam? Accusantium expedita ratione cum dolorem excepturi rem harum?</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 flex-wrap w-full lg:mt-16">
          {products.map((product) => (
            <Product key={product.id} category={product.category} title={product.title} image={product.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
