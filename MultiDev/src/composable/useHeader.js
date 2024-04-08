import { ref } from "vue";

export default (function useHeader() {
  const HeaderInfo = [
    {
      FrontEnd: [
        {
          title: "React",
          title1: "Angular",
          title2: "Vue",
        },
      ],
      BackEnd: [
        {
          title: "Spring Boot",
          title1: "Laravel",
          title2: "Django",
          title3: "Express",
        },
      ],
    },
  ];

  let instance = { HeaderInfo };

  return () => {
    return instance;
  };
})();