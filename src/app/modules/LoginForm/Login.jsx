import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { saveToLocalStorage } from "@/lib/localstorage"
import { useNavigate } from "react-router-dom"

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {

  const navigate = useNavigate()

  const handleClick = () => {
    saveToLocalStorage("token", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3dC5hY2FleC5lcy1rZXkifQ.eyJqdGkiOiI1UGZqc1VYY0d2WWp1UTBKVHlCZk05UWNramxvV1FWeGJIUzFjUlJyRlY3WGVHZ29hUzJoMUZqNzZRdHUydGpfSzAzWllaMzR4QkdjaGliQ0Q4MXZKdyIsImlzcyI6Imh0dHBzOi8vY29udHJvbGhvcmFyaW8uYWNhZXguZXMiLCJzdWIiOiJsdWlzbWlndWVsLmNhYmV6YXMiLCJpYXQiOjE3MjgwMjgxMTEsImV4cCI6MTcyODA1NjkxMSwibmJmIjoxNzI4MDI3ODExLCJETkkiOiIwODg2ODE0M1gifQ.dQpyF1cXIm6TLhBsocFp7sKtygk-oVMbL9qwgRxLTmyju5NoPkp3vLvZD8Q5-qAdQ_OiUEqNtjMr3I4JHEZU4J2x-DSVl-HshLfSgGKidzNxeax9w-qup8fHFO5WsXX6awr_ETBrc07QZu-NswDABnXC82SpQIHqqhzA7Sxfq6jjkpJyr2bNH4BJstRx5jaDtzxq9CAAvBZ1eq7zNDm5GlgflC5WYQs4baJlbtAA-jkGVeI2pVeFtmNxGmy4hgEt9xtfxcQfvmsrORQhDb2AjPn-i_Eb61-8htpfWr2LNZVDu86glmgJJKXWiy4KnyCFxZ3zC3V6WuBymLcocUeGJQ")
    navigate("/")
  }

  return (
    <div className="flex items-center justify-center h-screen">

    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleClick}>Sign in</Button>
      </CardFooter>
    </Card>
    </div>
  )
}