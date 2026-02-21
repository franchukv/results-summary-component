import { useEffect, useState } from 'react';
import ResultCard from './components/ResultCard/ResultCard';
import type { CategoryItem } from './types/common';

function App() {
  const [data, setData] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await fetch('/mocks/data.json');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const json: CategoryItem[] = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        !loading ? (
          <ResultCard categoryItems={data} />
        ) : (
          'Your result is loading...'
        )
      ) : (
        'There is no result'
      )}
    </>
  );
}

export default App;
