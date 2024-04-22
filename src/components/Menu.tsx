import { Tab, TabGroup, TabList } from '@tremor/react';
import { NavLink } from 'react-router-dom';

export const Menu = () => (
  <div className="mx-auto max-w-lg space-y-12">
    <TabGroup>
      <TabList variant="line" defaultValue="1">
        <NavLink to='/'><Tab value="1">Inicio</Tab></NavLink>
        <NavLink to='/new'><Tab value="2">Nuevo Usuario</Tab></NavLink>
        <NavLink to='/signin'><Tab value="3">Iniciar Sesion</Tab></NavLink>
      </TabList>
    </TabGroup>
  </div>
);