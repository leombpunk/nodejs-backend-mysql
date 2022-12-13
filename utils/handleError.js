const handleHttpError = (res, message="Algo malio sal", code = 403) => {
    res.status(code);
    res.send({ error: message });
};

module.exports = { handleHttpError };