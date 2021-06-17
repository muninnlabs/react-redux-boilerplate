import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Posts from './components/posts';
import PostForm from './components/postForm';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>teste</h1>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
