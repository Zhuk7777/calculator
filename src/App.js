import React from 'react';
import styled from 'styled-components'
import Calculator from './components/Calculator';

const AppWrapper = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
background: rgb(39, 38, 38);
`

function App() {
  return (
    <AppWrapper>
      <Calculator/>
    </AppWrapper>
  );
}

export default App;
