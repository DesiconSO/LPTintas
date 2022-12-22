import './App.css'
import Product from './components/Product'
import './index.css'

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do produto 1',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    name: 'Produto 3',
    description: 'Descrição do produto 1',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    name: 'Produto 4',
    description: 'Descrição do produto 1',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 5,
    name: 'Produto 5',
    description: 'Descrição do produto 1',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 6,
    name: 'Produto 6',
    description: 'Descrição do produto 1',
    image: 'https://picsum.photos/200/300'
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
            <Product key={product.id} name={product.name} id={product.id} description={product.description} image={product.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
