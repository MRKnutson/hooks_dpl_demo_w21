import useWindow from "./Hooks/useWindow";

const Size = () => {
  const {width, height} = useWindow();

  return(
    <div>
      <h1>Size</h1>
      <div>height: {height}</div>
      <div>Width: {width}</div>
    </div>
  );
};

export default Size;