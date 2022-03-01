import Theme from './theme/Theme';

import NewDish from './components/Dishes/NewDish';
import FormLayout from './components/Layout/FormLayout';

const App = () => {
  return (
    <Theme>
      <FormLayout>
        <NewDish />
      </FormLayout>
    </Theme>
  );
};

export default App;
