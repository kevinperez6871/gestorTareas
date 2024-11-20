import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Api() {
  const [data, setData] = useState([]); // Almacena los personajes
  const url = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <section>
          <h1 className="text-8xl font-bold text-center my-10 text-black">
            The Rick and Morty API
          </h1>
        </section>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 p-8">
          {data.map((character) => (
            <div key={character.id} className="flex items-center bg-white rounded-lg shadow-md p-4" >
              {/* Imagen del personaje */}
              <img src={character.image} alt={character.name} className="w-24 h-24 rounded-md" />
              {/* Información del personaje */}
              <div className="ml-4 text-right flex-1">
                <h2 className="font-bold text-xl text-white  hover:text-orange-600" >{character.name}</h2>
                <p className="text-gray-600 ">
                  <span className="font-medium">Species:</span> {character.species}
                </p>
              </div>
            </div>  
          ))}
        </main>
      </div>
    </>
  );
}
