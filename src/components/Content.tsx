type Props = {
  path: string;
  content: string;
};

export const Content = ({ path, content }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};
