import { z } from 'zod';

export const schema = z.object({
    name: z
      .string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "O tipo de dado fornecido é diferente de texto!"
      })
      .min(5, "Deve conter pelo menos cinco caracteres!")
      .max(20, "Excedeu a quantidade máxima de caracteres"),
    email: z
      .string({
        required_error: "",
        invalid_type_error: "Campo obrigatório!"
      })
      .email({ message: "Email não é válido!" }),
    phone: z
      .string({
        required_error: "Campo obrigatório! Ex: XX 9 99999999"
      }),
    message: z
      .string({
        required_error: "Campo obrigatório!"
      })
      .max(300, "Excedeu a quantidade máxima de caracteres")
  })
  
  export type FormProps = z.infer<typeof schema>;