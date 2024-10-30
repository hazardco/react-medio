import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormItem, FormLabel, FormMessage, FormField } from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';

// Validation schema with Zod
const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").nonempty("Title is required"),
  body: z.string().min(20, "Body must be at least 20 characters").nonempty("Body is required"),
});

export const ShadcnForm = () => {
  const [postList, setPostList] = useState([]);

  // Setup react-hook-form with zodResolver
  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      id: "",
      title: "",
      body: "",
      published: false,
    },
  });

  const onSubmit = (data) => {
    const newPost = {
      id: Date.now(),
      title: data.title,
      body: data.body,
      published: false,
    }

    setPostList([...postList, newPost]);
    form.reset(); // Clear the form after submission
    toast.success(`Post ${newPost.id} successfully!`);
  };

  const handleDelete = (id) => {
    setPostList(postList.filter(post => post.id !== id));
    toast.error(`Post ${id} successfully!`);

  };




  const togglePublished = (id) => {
    setPostList(postList.map(post =>
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Form for creating posts */}
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Gestión de Posts</CardTitle>
            <CardDescription>
              Formulario con validación de react-hook-form y Zod usando componentes ShadCN
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {/* Form using Shadcn Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert post title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      <Input as="textarea" placeholder="Insert post body" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Add Post
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* List of posts */}
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
          {postList.length === 0 ? (
            <p className="text-gray-600">No hay posts creados aún.</p>
          ) : (
            <ul className="space-y-4">
              {postList.map(post => (
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
  );
};
