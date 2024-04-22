import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useState } from "react"
import { useUserActions } from "../hook/useUserActions"

export function CreateNewUser() {
	const { addUser } = useUserActions()
	const [result, setResult] = useState<"ok" | "ko" | null>(null)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		setResult(null)

		const form = event.target as HTMLFormElement
		const formData = new FormData(form)

		const name = formData.get("name") as string
		const password = formData.get("password") as string
		const email = formData.get("email") as string
		const act1 = formData.get("act1") as string
		const act2 = formData.get("act2") as string
		const act3 = formData.get("act3") as string
		const firstTime = formData.get("firstTime") as string
		const endTime = formData.get("endTime") as string

		if (!name || !email || !act1 || !act2 || !act3 || !firstTime || !endTime) {
			// validaciones que tu quieras
			return setResult("ko")
		}

		addUser({ name, password, email, act1, act2, act3, firstTime, endTime })
		setResult("ok")
		form.reset()
	}

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Registrar las actividades que realiza el trabajador</Title>

			<form onSubmit={handleSubmit} className="">
				<TextInput name="name" placeholder="Usuario del trabajador" />
				<TextInput name="password" placeholder="Contraseña del trabajador" />
				<TextInput name="email" placeholder="Correo" />
				<TextInput name="act1" placeholder="1-Actividades que realizo" />
				<TextInput name="act2" placeholder="2-Actividades que realizo" />
				<TextInput name="act3" placeholder="3-Actividades que realizo" />
				<TextInput name="firstTime" placeholder="tiempo inicio" />
				<TextInput name="endTime" placeholder="tiempo en que finalizo" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Trabajador
					</Button>
					<span>
						{result === "ok" && (
							<Badge color='green'>Guardado correctamente</Badge>
						)}
						{result === "ko" && <Badge color='red'>Error con los campos</Badge>}
					</span>
				</div>
			</form>
		</Card>
	)
}