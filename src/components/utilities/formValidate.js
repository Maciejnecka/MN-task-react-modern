const formValidate = (taskName, user, setTaskNameError, setUserError, tasks, setTasks, todoLimit, setShowAlert) => {
    if (taskName.trim() === '' || user.trim() === '') {
        setTaskNameError('Field is required!');
        setUserError('Field is required!');
        setShowAlert(false);
        return false;
    }

    const todoTasks = tasks.filter((task) => task.idColumn === 1);
    if (todoTasks.length >= todoLimit) {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
        return false;
    }

    setTaskNameError('');
    setUserError('');
    setShowAlert(false);

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
export default formValidate;
