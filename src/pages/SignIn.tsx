import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button/Button";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { Heading } from "../components/Heading/Heading";
import { TextInput } from "../components/TextInput/TextInput";
import { Text } from "../components/Text/Text";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn ] = useState(false);

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await axios.post("/sessions", {
          email: "matheusviscki@gmail.com",
          password: "123456789",
        })
        
        setIsUserSignedIn(true);
    }
    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
        <header className="flex flex-col items-center">
          <Logo />
  
          <Heading size="lg" className="mt-4">
            Ignite Lab
          </Heading>
  
          <Text className="lg text-gray-400 mt-1">
            Faça login e comece a usar!
          </Text>
        </header>
  
        <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
            { isUserSignedIn && <Text>Login realizado!</Text>}

          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">
              Endereço de e-mail
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
                <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
            </TextInput.Root>
          </label>
  
          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">
              Sua senha
            </Text>
  
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
                <TextInput.Input type="password" id="password" placeholder="*******" />
            </TextInput.Root>
          </label>
  
          <label htmlFor="remember" className="flex items-center gap-2">
            <CheckBox id="remember"/>
            <Text size="sm" className="text-gray-200">
              Lembrar de mim por 30 dias
            </Text>
          </label>
  
          <Button type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
  
          <footer className="flex flex-col items-center gap-4 mt-4">
            <Text asChield size="sm">
              <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
            </Text>
            <Text asChield size="sm">
              <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
            </Text>
          </footer>
        </form>
      </div>
    )
}