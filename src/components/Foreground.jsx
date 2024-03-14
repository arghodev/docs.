import { useRef } from "react";
import Card from "./Card";
import Ball from "./Ball";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.",
      fileSize: ".4mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Upload Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.",
      fileSize: ".4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Upload Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5 z-20"
      >
        {data.map((item, idx) => (
          <Card key={idx} data={item} reference={ref} />
        ))}

        {data.map((item, idx) => (
          <Ball key={idx} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
