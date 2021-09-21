const imageOptions = [
  'https://images.unsplash.com/photo-1589691962030-8d2b7f2a1ffe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // bubbles
  'https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // wall plant
  'https://images.unsplash.com/photo-1572884745373-47cbb0ecc054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // palm front
  'https://images.unsplash.com/photo-1605898309384-aa35fe9d9b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // horsetail moss
  'https://images.unsplash.com/photo-1617957743103-310accdfb999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // gradient
  'https://images.unsplash.com/photo-1617957743043-91ba3aa22558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // gradient 2
  'https://images.unsplash.com/photo-1617957743089-7639c938a845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // gradient 3
  'https://images.unsplash.com/photo-1617957718583-e83389e2b317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // gradient 4
  'https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // gradient 5
  'https://images.unsplash.com/photo-1617957718645-7680362d6312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // gradient 6
  'https://images.unsplash.com/photo-1491800943052-1059ce1e1012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // boat
  'https://images.unsplash.com/photo-1513864299838-b60b4b7d2bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // boats
  'https://images.unsplash.com/photo-1512097707017-ed0040ff3690?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // floating
  'https://images.unsplash.com/photo-1486512696050-930b2d89cb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // boat 2
  'https://images.unsplash.com/photo-1508971344143-29b17efc1689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // boat 3
  'https://images.unsplash.com/photo-1451175714674-c840fe5ffbd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // aqua water
  'https://images.unsplash.com/photo-1480365443306-930b898cb434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // sandy beach
  'https://images.unsplash.com/photo-1515063312047-b40b86035e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // aqua beach
  'https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // dark water beach
  'https://images.unsplash.com/photo-1516439851893-1367ebb35ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // aqua water
  'https://images.unsplash.com/photo-1516441983740-65fe2f63f809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // dark water 2
  'https://images.unsplash.com/photo-1515059642903-adcb10484069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // sideways beach
  'https://images.unsplash.com/photo-1516473885809-4bb8f0abf0ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // sideways beach 2
  'https://images.unsplash.com/photo-1502571021998-c562c753aedc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // ocean waves
  'https://images.unsplash.com/photo-1617868634057-2c5ed2eb0a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // seaplane
  'https://images.unsplash.com/photo-1617868636554-e5a894d7af1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // seaplanes 2
  'https://images.unsplash.com/photo-1617868634099-47f2f38d6be9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // seaplanes 3
  'https://images.unsplash.com/photo-1569310408826-6a8badde8a6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // paint brush strokes
  'https://images.unsplash.com/photo-1511689774932-3aca18459e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // succulents
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // plane in forest
  'https://images.unsplash.com/photo-1449364903531-9f176de63beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // wet leaf
  'https://images.unsplash.com/photo-1502444760674-ee834ced0da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // wet leaf 2
  'https://images.unsplash.com/photo-1487017931017-0e0d9e02bb0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // wet leaf 3
  'https://images.unsplash.com/photo-1482121633111-4d4630b01070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80', // cool leaf
  'https://images.unsplash.com/photo-1517584623449-78bf7667d0f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80', // dolphins
].sort(() => Math.round(Math.random() * -1));

let nextIndex = 0;
const getRandomImage = () => {
  // const randomIndex = Math.floor(Math.random() * imageOptions.length);
  if (nextIndex === imageOptions.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex += 1;
  }

  return imageOptions[nextIndex];
};

// Create mock item data to render
const mockData = new Array(22).fill(null).map((value, index) => ({
  id: index,
  coverImage: {
    sources: [{ uri: getRandomImage() }],
  },
  title: `Item ${index + 1}`,
}));

export default mockData;
