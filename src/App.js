import Theme from './theme/Theme';

import AddDish from './components/Dishes/AddDish';
import FormLayout from './components/Layout/FormLayout';

const App = () => {
  return (
    <Theme>
      <FormLayout>
        <AddDish />
      </FormLayout>
    </Theme>
  );
};

export default App;
