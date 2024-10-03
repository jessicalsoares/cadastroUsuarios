
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const users = [
    {
      id: '5689ghjm',
      name: 'Jessica',
      age:  32,
      email: 'jess@email.com'
    },
    {
      id: '1234ghjm',
      name: 'Aline',
      age:  32,
      email: 'aline@email.com'
    }
  ]


  return (

    <div>
      <form className='container'>
        <h1>Cadastro de Usuário</h1>
        <input name="nome" type='text' />
        <input name="idade" type='number' />
        <input name="email" type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      { users.map(user => (
        <div key={user.id}>
        <div>
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
        <button>
          <img src={Trash} alt="" />
        </button>
      </div>
      ))}
    </div>    
  )
}

export default Home
