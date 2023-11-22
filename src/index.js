import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import { store } from './store';
import './index.css';
import Container from './components/Container';
import Logo from './components/Logo.tsx';
import Navigation from './components/Navigation';
import { QueueScreen } from './Queue/QueueScreen.tsx';
import logo from './qudini-logo.png';
import Content from './components/Content';

const App = () => (
  <Provider store={store}>
    <Container>
      <Navigation>
        <Logo src={logo} />
      </Navigation>
      <Content>
        <QueueScreen />
      </Content>
    </Container>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
