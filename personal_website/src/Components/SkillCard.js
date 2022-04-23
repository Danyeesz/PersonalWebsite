import SkillButton from "./SkillButton";
import { RImage, CImage, UImage, HImage } from "../Data/LoreSkillsData";
import { useState } from "react";

const SkillCard = () => {
  const initialValues = {
    image: CImage,
    text: "I have been using C# since my early days in secondary school, so it is safe to say it is the language I am most experinced with. I have recently finsihed a course about C#, just to keep my knowledge up-to-date.",
  };

  const [useImage, setImage] = useState(initialValues);
  const clickHandler = (Values) => {
    setImage(Values);
  };

  return (
    <div className='rounded-3xl m-2 text-lg p-2 justify-center'>
      <div className='flex justify-center lg:text-3xl text-2xl font-bold'>
        Skills:
      </div>
      <div className='flex justify-center'>
        <SkillButton
          onClicked={() =>
            clickHandler({
              image: CImage,
              text: 'I have been using C# since my early days in secondary school, so it is safe to say it is the language I am most experinced with.',
            })
          }
          image={CImage}
        />
        <SkillButton
          onClicked={() =>
            clickHandler({
              image: RImage,
              text: 'I started using React.js a few months ago, when my attention was drawn to web development. I am currently doing a course about React.js and I am eager to learn more about it. This website was devloped with the use of React.js.',
            })
          }
          image={RImage}
        />
        <SkillButton
          onClicked={() =>
            clickHandler({
              image: UImage,
              text: 'I have been using Unity  since I started my university studies. You can see some of my projects I worked on, at the Projects page.',
            })
          }
          image={UImage}
        />
        <SkillButton
          onClicked={() =>
            clickHandler({
              image: HImage,
              text: 'I have been using these 3, since the early days of secondary school, not continueously, but I have experince with them.',
            })
          }
          image={HImage}
        />
      </div>
      <div className='flex items-center w-12/12 justify-center text-center'>
        <img className='lg:w-2/12 w-3/12' src={useImage.image} />
        <div className='lg:w-2/12 w-6/12 m-5 font-medium lg:text-xl text-sm'>
          {useImage.text}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
