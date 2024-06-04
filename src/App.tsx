import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import myImage from './assets/thats_me.jpeg';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2023/03/23/john-wick-4-baba-yaga-e-o-mais-novo-capitulo-da-franquia-que-revitalizou-a-carreira-de-keanu-reeves-1679541049583_v2_1x1.png',
      name: 'Leonardo Capoccia',
      role: 'Web Dev',
    },
    content: [
      { type: 'paragraph', content: 'Good morrow, everyone' },
      { type: 'paragraph', content: 'Shall we forge on?' },
      { type: 'paragraph', content: 'We shant allow ourselves to become complacent. Take each trial as it comes' },
      { type: 'link', content: 'https://www.youtube.com/watch?v=J9Bm5U-MJZw' },
    ],
    publishedAt: new Date('2024-05-24 10:29:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/04/22/145359515-b8dd8d8527a1ea3c37b898f1bb94f940.jpg',
      name: 'John Wick',
      role: 'Holy Hunter',
    },
    content: [
      { type: 'paragraph', content: 'Happy Birthday, Meleena' },
      { type: 'paragraph', content: 'Wish you good things' },
      { type: 'paragraph', content: 'We shant allow ourselves to become complacent. Take each trial as it comes' },
      { type: 'link', content: 'https://www.youtube.com/watch?v=J9Bm5U-MJZw' },
    ],
    publishedAt: new Date('2024-05-18 10:29:00')
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

