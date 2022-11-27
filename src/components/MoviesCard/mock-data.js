const mockCards = [
  {
    id: 1,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 2,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 3,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 4,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 5,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 6,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 7,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666126431272-8bffcafa6fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 8,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666016228433-145d56882cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 9,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666032234128-abc3e45bd1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 10,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 11,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
  {
    id: 12,
    title: "33 слова о дизайне",
    duration: "1ч 42м",
    trailerLink:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",

    thumbnail:
      "https://images.unsplash.com/photo-1666138117498-71ec8eb175d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  },
];

export default mockCards;
