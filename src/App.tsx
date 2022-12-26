import './App.css'
import Product from './components/Product'
import './index.css'

const products = [
  {
    id: 1,
    title: 'Metálica',
    category: "123060"
  },
  {
    id: 2,
    title: 'Uso Geral',
    category: ""
  },
  {
    id: 3,
    title: `Agrícolala`,
    category: ""
  },
  {
    id: 4,
    title: 'Expression',
    category: ""
  },
  {
    id: 5,
    title: 'Alta Temperatuda',
    category: ""
  },
  {
    id: 6,
    title: 'Fluorescente',
    category: ""
  }
]

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="h-2/5 bg-blue-600">

      </div>
      <div className="h-3/5 flex justify-around items-center">
        <div className="flex gap-12">
          {products.map((product) => (
            <Product key={product.id} category={product.category} title={product.title}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
