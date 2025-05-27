'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Trash } from 'lucide-react'
import { useEffect, useState } from 'react'

const DBTest = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])

  const createPost = async () => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content })
      })

      const data = await response.json()

      console.log(data)

      setTitle('')
      setContent('')
      await getPosts()
    } catch {}
  }

  const getPosts = async () => {
    try {
      const response = await fetch('/api/posts')

      const data = await response.json()

      setPosts(data)
    } catch {}
  }

  const deletePost = async (id: string) => {
    try {
      const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' })

      const data = await response.json()

      console.log(data)

      await getPosts()
    } catch {}
  }

  useEffect(() => {
    ;(async () => await getPosts())()
  }, [])

  return (
    <div>
      <div className="container">
        <div className="my-5 flex grid-cols-3 flex-col gap-5 md:grid">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Создать пост</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>
                <span>Введите название</span>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Label>

              <Label>
                <span>Введите контент</span>
                <Input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Label>

              <Button className="mt-5 w-full" onClick={createPost}>
                Создать
              </Button>
            </CardContent>
          </Card>

          <Card className="col-span-2">
            {!posts.length && (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <h2 className="text-4xl font-medium">Постов нет</h2>
                <Button variant="link" onClick={getPosts}>
                  Обновить
                </Button>
              </div>
            )}

            {!!posts.length && (
              <>
                <CardHeader>
                  <CardTitle>Все посты</CardTitle>
                </CardHeader>
                <CardContent className="h-full space-y-4">
                  {posts.map(
                    (
                      post: { title: string; content: string; _id: string },
                      index
                    ) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>{post.content}</CardContent>
                        <CardFooter>
                          <Button onClick={() => deletePost(post._id)}>
                            <Trash />
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  )}
                  <Button className="mx-auto mt-5" onClick={getPosts}>
                    Обновить данные
                  </Button>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DBTest
