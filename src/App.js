import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './componentes/ChatFeed';
import LoginForm from './componentes/LoginForm';
import './App.css';

const projectID = 'b5c5ac59-1ef5-4d62-82bf-f66f3aca98bc';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
