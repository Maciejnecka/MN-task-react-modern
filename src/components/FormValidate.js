const FormValidate = (taskName, user, setTaskNameError, setUserError, tasks, setTasks, todoLimit) => {
    if (taskName.trim() === '' || user.trim() === '') {
        setTaskNameError('Field is required!');
        setUserError('Field is required!');
        return false;
    }

    const todoTasks = tasks.filter((task) => task.idColumn === 1);
    if (todoTasks.length >= todoLimit) {
        // eslint-disable-next-line
        alert('To do column limit reached. Cannot add more tasks.');
        return false;
    }

    setTaskNameError('');
    setUserError('');

    const newTaskId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

    const newTask = {
        id: newTaskId,
        name: taskName,
        idColumn: 1,
        user,
        createdAt: new Date(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    return true;
};
export default FormValidate;
