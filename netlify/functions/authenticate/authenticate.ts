import { Handler } from '@netlify/functions'

interface UserData {
  email: string;
  password: string;
}

export const handler: Handler = async (event) => {
  const { email, password }: UserData = JSON.parse(event.body)

  if (email !== 'guest@mono.studio' || password !== '123456') return {
    statusCode: 401,
    body: JSON.stringify({
      error: 'The email and password you entered don\'t match.'
    })
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      username: 'Guest',
      token: 'eyJ1c2VySWQiOjEsImF1dGhvcml6YXRpb24iOiJhZG1pbiJ9',
    }),
  }
}
