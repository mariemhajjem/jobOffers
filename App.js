import { Provider } from 'react-redux';
import {configureStore} from './redux/store';
import Navigation from './navigation';

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Navigation /> 
    </Provider>
  );
}