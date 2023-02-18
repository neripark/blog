import { getPostBySlug } from "@/lib/newt";
import styles from "./page.module.css";

interface Props {
  params: {
    slug: string;
  };
}

// todo: app dir を使っていると next build でエラーになるため、必要かどうか確かめる
// export const getStaticPaths = async () => {
//   console.log("getStaticPaths");
//   const posts = await getPosts();
//   return {
//     paths: posts.map((post) => ({
//       params: {
//         slug: post.slug,
//       },
//     })),
//     fallback: false,
//   };
// };

export default async function Post(props: Props) {
  const post = await getPostBySlug(props.params.slug);
  return (
    <main className={styles.container}>
      {/* todo: getStaticPaths で `paths` に返されたページをすべて事前生成しており、
          fallback で404を返せるのであればこの if 文は消したい。方法を調べる */}
      {post === null ? (
        <p>記事は存在しません。</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </>
      )}
    </main>
  );
}
