import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Feed } from './pages/Feed'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
