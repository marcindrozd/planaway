import React from 'react';
import styled from 'styled-components';

import './stylesheets/reset.scss';
import './stylesheets/application.scss';

const Header = styled.header`
  font-size: 2rem;
  background: red;
  color: white;
  padding: 20px;
`;

const App = () => (
  <div className="App">
    <Header>
      <h1>
        Hello, world
      </h1>
    </Header>
  </div>
);

export default App;
