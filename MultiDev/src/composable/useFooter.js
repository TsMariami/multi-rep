import { ref } from "vue";

export default (function useFooter() {
  const useFooteInfo = [
    {
      Description: [
        {
          title: "Discover Multidev",
          title1: "Get in touch ",
          title2: "Follow Us ",
        },
      ],
    },
  ];

  let instance = { useFooteInfo };

  return () => {
    return instance;
  };
})();