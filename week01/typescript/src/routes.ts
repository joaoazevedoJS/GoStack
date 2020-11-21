import { Request, Response } from 'express'
import CreateUser from './services/CreateUser'

export function HelloWorld(req: Request, res: Response) {
  const user = CreateUser({
    name: 'João', 
    email: 'dev@404.com', 
    password: '1234',
    techs: [
      'Node.js', 
      'React.js', 
      'Angular',
      { title: 'Javascript', experience: 89 }
    ]
  })

  const json = { message: 'Hello World' }
  
  res.json(user)
}