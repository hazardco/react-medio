import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2 } from 'lucide-react';
import { DevTool } from '@hookform/devtools'
import { focusManager } from '@tanstack/react-query'
import { toast } from 'sonner'


export const RHForm = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset, control, watch } = useForm()

    /* 
        esto lo tenemos solo porque mostramos tambien la lista en el mismo componente
        si el listado estuviera en otra pagina no haría falta este estado 'posts'
    
    */
    const [posts, setPosts] = useState([])

    const mySubmit = (data) => {
        console.log(data)

        const newPost = {
            id: Date.now(), //timestamp
            title: data.title,
            body: data.body,
            published: false,
        };

        setPosts([...posts, newPost]);
        toast.success(`Post ${newPost.id} creado`)

    }

    const togglePublished = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, published: !post.published } : post
        ))
    }

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        toast.error(`Post ${id} eliminado`)
    }

    // watch se utiliza para observar y obtener el valor actual de los campos del formulario en tiempo real, conforme se actualizan
    //const watchForm = watch()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form for creating posts */}
            <Card className="max-h-80">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Gestión de Posts</CardTitle>
                        <CardDescription>
                            Formulario con react-hook-forms y validaciones implicitas
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* configuracion del rhf devtool */}
                    <DevTool control={control} />
                    {/* plasmar en pantalla la info del formulario */}
                    {/*<span>{JSON.stringify(watchForm)}</span> */}

                    <form className="space-y-4" onSubmit={handleSubmit(mySubmit)} noValidate>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Título
                            </label>
                            <Input
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Es obligatoriddddo"
                                    },
                                    validate: value => value.length > 5 || "El nombre de usuario debe tener más de 5 caracteres"

                                })}
                                aria-invalid={errors.title ? "true" : "false"}
                                type="text"
                                id="title"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Insertar título del post"
                            />
                            {errors.title && <p className="text-red-500">{errors.title?.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                                Contenido
                            </label>
                            <Textarea
                                {...register("body", {
                                    required: "Es obligatorio"
                                })}
                                aria-invalid={errors.body ? "true" : "false"}
                                id="body"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Insertar contenido del post"
                            />
                            {errors.body && <p className="text-red-500">{errors.body.message}</p>}
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className="w-full"
                            //disabled={Object.keys(errors).length > 0} // Desahibilita el boton de envio hasta que no haya errores
                            //disabled ={!isValid}  // deshabilitad el boton si el formulario es valido
                            >
                                Crear Post
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Listado de posts */}
            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Listado de Posts</CardTitle>
                        <CardDescription>
                            Publica o elimina los posts creados.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    {posts.length === 0 ? (
                        <p className="text-gray-600">No hay posts creados aún.</p>
                    ) : (
                        <ul className="space-y-4">
                            {posts.map(post => (
                                <li key={post.id} className="border p-4 rounded-md relative">
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="absolute top-3 right-3 text-red-500"
                                    >
                                        <Trash2 />
                                    </button>
                                    <h3 className="text-lg font-semibold">{post.title}</h3>
                                    <p className="text-gray-600 mt-2 break-words">{post.body}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className={`text-sm ${post.published ? 'text-green-600' : 'text-red-600'}`}>
                                            {post.published ? 'Publicado' : 'No publicado'}
                                        </span>
                                        <div className="flex items-center">
                                            <Switch
                                                id={`published-${post.id}`}
                                                checked={post.published}
                                                onCheckedChange={() => togglePublished(post.id)}
                                            />
                                            <label htmlFor={`published-${post.id}`} className="ml-2 text-sm text-gray-700">
                                                {post.published ? 'Despublicar' : 'Publicar'}
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
