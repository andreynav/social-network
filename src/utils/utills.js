const setActive = (param) => {
    return ({ isActive }) => isActive ? param : '';
}

export { setActive };