const idxGreetings = (req, res) => {
    res.send('Welcome to the Express.js Tutorial 😀');
};

const alandGreetings = (req, res) => {
    res.send('Greetigns is Aland');
};

module.exports = {
    idxGreetings,
    alandGreetings
}