import { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { UiHeader } from '@nx-react/ui-header';
import { UiSidebar } from '@nx-react/ui-sidebar';

import axios from 'axios';
import { API_URL, Service} from "@nx-react/api-interface";


export function App() {
  const [service, setService] = useState<Service[]>([]);
  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});

  const getServices = useCallback(async () => {
    const resp = await axios.get<Service[]>(API_URL + 'services');
    setService(resp.data);
    console.log(resp);
  }, []);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <UiHeader />
      <section className="grid grid-cols-2">
      <UiSidebar />
      <main>
        {service.map (s => {
          return(
            <>
           <h2 className="text-xl text-red-800">{s.name}</h2> 
           <h3>{s.price}</h3>
           </>
            )
          
        })}
        <p>{JSON.stringify(service)}</p>
       
      </main>
      </section>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      </>
  );
}

export default App;
