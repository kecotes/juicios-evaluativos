import { Button, Card, TextInput } from "@tremor/react";
import { useUserActions } from "../hook/useUserActions";

export function SignIn(){

    const { login } = useUserActions();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get("username") as string
        const password = formData.get("password") as string

        login({name, password})

        form.reset()
    }
    return (
        <Card style={{ marginTop: "16px" }}>
            <div className="mx-auto max-w-sm space-y-8">
                <form onSubmit={handleSubmit} >
                    <div>
                        <TextInput name="username" placeholder="Usuario" />
                    </div>
                    <div>
                        <TextInput name="password" placeholder="Contraseña"/>
                    </div>
                    <div>
                        <Button type="submit" style={{ marginTop: "16px" }}>Inicar Sessión</Button>
                    </div>
                </form>
            </div>
        </Card>
    )
}