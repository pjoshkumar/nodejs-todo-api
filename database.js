let data = [
  {
    id: 1,
    task: 'take a bath',
    completed: false
  },
  {
    id: 2,
    task: 'brush your teeth',
    completed: false
  },
  {
    id: 3,
    task: 'cut your nails',
    completed: false
  },
  {
    id: 4,
    task: 'have breakfast',
    completed: false
  }
];

let counter = 5;

function getAll() {
  return data;
}

function get(id) {
  const res = data.filter(task => task.id === id);
  if (res.length > 0) {
    return res[0];
  }

  return false;
}

function add(task) {
  data.push({
    id: counter++,
    task,
    completed: false
  });
  return true;
}

function update(updatedTask) {
  if (updatedTask.id && updatedTask.task && updatedTask.completed) {
    const filteredData = data.filter(task => task.id === parseInt(updatedTask.id));
    if (filteredData.length > 0) {
      filteredData[0].task = updatedTask.task;
      filteredData[0].completed = updatedTask.completed;
      return true;
    }
  }
  return false;
}

function remove(id) {
  data = data.filter(task => task.id !== parseInt(id));
  return true;
}

exports.default = {
  getAll,
  get,
  add,
  update,
  remove
};
