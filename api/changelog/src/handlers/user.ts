import prisma from '../db'
import { comparePasswords, createjwt, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password)
    }
  })
  
  const token =  createjwt(user)
  res.json({ token: token})
}

export const signin = async(req,res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  const isValid =  await comparePasswords(req.body.password, user.password)
  
  if(!isValid) {
    res.status(401)
    res.json({message: 'nope'})
    return
  }

  const token = createjwt(user) 
  res.json({token: token})
}