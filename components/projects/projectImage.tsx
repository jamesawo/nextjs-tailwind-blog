import React from "react";

type Props = {
    image: string
}
const ProjectImage = ({image}: Props) => {
    const style = {"var(-imageUrl)": image} as React.CSSProperties


    return (<>
      <div
          style={{ backgroundImage: `url(${image})`}}
          className={`bg-no-repeat bg-cover bg-center
          h-72 w-full md:w-2/5 md:h-auto
          sm:bg-none md:bg-none`}

      />
  </>);
}

export default ProjectImage;
