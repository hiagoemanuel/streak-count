import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(4).max(16),
  createdAt: z.date(),
  credentials: z.object({
    email: z.string().email().min(6),
    password: z.string().min(8).max(16)
  }),
  _streakCounts: z.object({
    href: z.string(),
    method: z.string()
  })
})

export type UserType = z.infer<typeof UserSchema>

export const CreateUserParams = z.object({
  name: UserSchema.shape.name,
  email: UserSchema.shape.credentials.shape.email,
  password: UserSchema.shape.credentials.shape.password
})

export const UpdateUserParams = z.object({
  name: UserSchema.shape.name.optional(),
  email: UserSchema.shape.credentials.shape.email.optional(),
  password: UserSchema.shape.credentials.shape.password.optional()
})

export type CreateUserParamsType = z.infer<typeof CreateUserParams>
export type UpdateUseParamsType = z.infer<typeof UpdateUserParams>
