const sampleLines = [
  'Red Line to 95/Dan Ryan',
  'Red Line to Howard',
  'Blue Line to O\'Hare',
  'Blue Line to Forest Park',
  'Green Line to Harlem/Lake',
  'Green Line to Ashland/63rd'
];

const sampleStopList = {
  lineId: 2,
  name: 'Pink Line to Damen',
  stops: [
    {
      id: 1,
      name: "54th/Cermak",
      is_favorite: false
    },
    {
      id: 2,
      name: "Cicero",
      is_favorite: true
    },
    {
      id: 3,
      name: "Kostner",
      is_favorite: false
    },
    {
      id: 4,
      name: "Pulaski",
      is_favorite: false
    },
    {
      id: 5,
      name: "Central Park",
      is_favorite: true
    },
    {
      id: 6,
      name: "Kedzie",
      is_favorite: false
    },
    {
      id: 7,
      name: "California",
      is_favorite: false
    },
    {
      id: 8,
      name: "Western",
      is_favorite: false
    },
    {
      id: 9,
      name: "Damen",
      is_favorite: false
    }
  ]
}



const data = {
  sampleLines,
  sampleStopList,
  sampleStationList,
  sampleDirections
};

export default data;