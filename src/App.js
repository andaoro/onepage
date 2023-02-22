import { AppLayout } from "./components/Applayout/AppLayout";
import { Sagas } from "./Arrays/CapitulosArray";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [visible, setvisible] = useState(null)

  const toogle = (i) => {
    if (visible == i) {
      return setvisible(null)
    }

    setvisible(i)
  }

  return (
    <AppLayout>
      <h1 className="text-center text-4xl lg:text-8xl py-6 text-sky-700 indent-4 font-bold">ONE PIECE</h1>
      <div>

      </div>
      <div className="flex flex-col items-center justify-center lg:mx-32 ">
        {
          Sagas.map((saga, index) => (
            <div key={saga.id} className="flex flex-col h-full w-full bg-gray-200 rounded items-center border-b-4 border-sky-900 my-4 hover:bg-gray-300">
              <img src={saga.image} className='w-full lg:h-96 object-cover rounded-t mb-2 border-b-2 border-black opacity-80 '/>
              <div className={'w-full mx-12 '}>
                <div className="flex flex-row w-full justify-between py-6 cursor-pointer"
                  onClick={() => {
                    toogle(index)
                  }}
                >
                  <span className="mx-6 text-basic lg:text-3xl font-bold">Saga de {saga.saga}<span className="text-sky-800/50 lg:text-2xl ml-2">{saga.capitulos}</span></span>
                  <span className="mx-6">{visible == index ? <BsArrowUp size={25} /> : <BsArrowDown size={25} />}</span>
                </div>
                <div className={`mx-6 mb-6 ${visible == index ? '' : 'hidden'}`}>
                  {
                    saga.arcos.map((arco) => (
                      <div key={arco.id} className={'my-4 border-b-2 border-sky-600/20'}>
                        <span className="text-black/90 italic font-semibold">{arco.nombre}</span>
                        {
                          arco.capitulos.map((capitulo) => (
                            <ul key={capitulo.id} className='my-2 lg:mx-12'>
                              <li className={`font-bold mr-12 ${capitulo.relleno ? 'line-through text-red-400 ' : ''}`}>
                                {capitulo.capitulo}.
                                <span className={`text-gray-900/70 font-normal ${capitulo.relleno ? 'line-throug' : ''}`}>{capitulo.nombre}</span>
                                <span>{capitulo.relleno ? ' Relleno' : ''}</span></li>
                            </ul>
                          ))
                        }

                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </AppLayout>
  );
}

export default App;
