interface Props {
  params: {
    slug: string;
  };
}

export default function Post(props: Props) {
  return (
    <>
      <h1>記事</h1>
      <p>id: {props.params.slug}</p>
    </>
  );
}
