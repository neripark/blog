import Link from "next/link";
import { getPosts } from "../lib/newt";
import styles from "./page.module.css";

// const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  // server component なので直接書いてOK。クライアントでは実行されない。
  const posts = await getPosts();
  return (
    <main className={styles.container}>
      <h1>neriparkのブログ</h1>
      <ul>
        {posts.map((article) => {
          return (
            <li key={article._id}>
              <Link href={`posts/${article.slug}`}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
