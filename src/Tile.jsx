export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="h-14 w-14 rounded-[8px] bg-[#a5b4fd] "
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="h-14 w-14 rounded-[8px] bg-[#6466f1] text-white flex items-center justify-center p-1 ">
          <Content
            style={{
              width: "90%",
              height: "90%"
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className=" h-14 w-14 rounded-[8px] text-[#c7d2ff] flex items-center justify-center p-1">
          <Content
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>

    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
