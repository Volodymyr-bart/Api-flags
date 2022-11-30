import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
};
