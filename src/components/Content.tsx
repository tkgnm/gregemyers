import "./Content.css";

type Props = {
  // path is not used as a prop in the component,
  // but is necessary for type safety with preact-router
  path: string;
  title: string;
  body: string;
};

export const Content = ({ title, body }: Props) => {
  return (
    <>
      <h2>{title}</h2> <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </>
  );
};
