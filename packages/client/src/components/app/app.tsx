import Dashboard from '@layouts/dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';

import Schelude from '@pages/schelude/schelude';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="schelude" element={<Schelude />} />
      </Route>
    </Routes>
  );
};

export default App;
