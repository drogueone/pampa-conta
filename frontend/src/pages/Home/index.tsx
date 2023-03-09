import './styles.css'
import Expense from '../../components/Expense'

const Home = () => {
  return (
    <div>
      <Expense onClick={() => {}} title='Nubank' expiration='08/03/2023' price='123' status='pendente' />
    </div>
  );
};

export default Home;