export const rootURL = "https://tt-189-anywhere-fitness-api.herokuapp.com/api";
export const classes = "/classes";
/* example use: 
axios.get(`${rootURL}${getClassById(id)}`)
.then(res => setClassList(res.data))
**/
export const getClassById = (id) => {
  return `/classes/${id}`;
};
export const dummyClassList = [
  {
    class_id: 1,
    class_name: "Zumba",
    type: "dance",
    start_time: "12:00 PM",
    duration: "60",
    occasion: "weekly",
    day: "Friday",
    intensity: "low-high",
    location: "online",
    max_size: "32",
    instructor: "Paula O",
  },
];
