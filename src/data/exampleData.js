export const exampleTodos = [
  {
    id: Math.floor(Math.random() * 100000),
    title: "Welcome to /hub, my portfolio webpage.",
    complete: true,
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "You can add or remove todos.",
    complete: true,
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "And control the UI with header icons.",
    complete: true,
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "Your done todos can be found here.",
    complete: true,
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "Don't forget to check the Applets section!",
    complete: true,
  },
];

export const exampleNotes = [
  {
    id: Math.floor(Math.random() * 100000),
    title: "You can add and delete notes!",
    body: `Use the form above to add new notes.
Delete button is inside the note!`,
    date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
    color: "black",
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "Notes form buttons:",
    body: `You can resize the body input field!
Clear inputs with the eraser icon!
Clear all notes at once!`,
    date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
    color: "red",
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "You can also filter your notes!",
    body: `To filter a note, just type in the input bellow Saved Notes.
You can also filter for name and body of the note!`,
    date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
    color: "green",
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "Changing colors!",
    body: `Change the color of the note by clicking on
the colored circle at the bottom of the note!`,
    date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
    color: "blue",
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: "Forgot something?",
    body: `Edit the note by clicking the edit button in the top right corner.
Don't forget to click the SAVE button when you are done!`,
    date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
    color: "orange",
  },
];
