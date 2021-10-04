import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Configuracoes } from './Pages/Configuracoes';
import { Home } from './Pages/Home';
import { PropostaView } from './Pages/PropostaView';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/config" exact component={Configuracoes} />
        <Route path="/proposta/:id" exact component={PropostaView} />
      </Switch>
    </BrowserRouter>
  )
}