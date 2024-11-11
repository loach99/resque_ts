import { useDispatch, useSelector } from 'react-redux';
// import Auth from './pages/Auth/Auth.tsx';
import { useEffect } from 'react';
import { fetchToDos } from './store/todoSlice.ts';
import { AppDispatch } from './store/index.ts';
import { RootState } from './store/index.ts';

function App() {

  const { todo, status, error } = useSelector((state:RootState) => state.todo)
  const dispath: AppDispatch = useDispatch();
  useEffect(() => {
    // dispath(fetchToDos())
  }, [])

  return (
    <div className=''>
      {/* <Auth/> */}
      {status === 'loading' && <p>Loading...</p>}
            {status === 'rejected' && (
                <p>Error: {error ? error.message : "Something went wrong."}</p>
            )}
            {status === 'resolved' && (
                <ul>
                    {todo.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
    </div>
  )
}

export default App
