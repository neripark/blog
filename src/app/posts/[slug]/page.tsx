import { getPostBySlug } from "@/lib/newt";

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
  // todo: getStaticPaths で `paths` に返されたページをすべて事前生成しており、
  // fallback で404を返せるのであればこの if 文は消したい。方法を調べる
  if (post === null) return <p>記事は存在しません。</p>;
  return (
    <main>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
