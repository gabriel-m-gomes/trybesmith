import { User } from "../../src/types/User"
const bodySuccessfull: User = {
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$EBdAGTsklUgmzJmwyXQrwOvQXayKqcAESKLjOktYgptf/eUgkjvBG',
}


const noEmptyName = {
  username: '',
  password: '123456'
}

const noEmptyPassword = {
  username: 'gabrielzinho',
  password: ''
}

export default {
  bodySuccessfull,
  noEmptyName,
  noEmptyPassword,
}