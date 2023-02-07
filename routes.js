
let cards = [
    {id: "1", name: 'first card', priority: 2, status: 'todo'},
    {id: "2", name: 'second card', priority: 5, status: 'progress'},
    {id: "3", name: 'next card', priority: 10, status: 'review'}
];
function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/cards', (req, res) => {
        res.send(cards)
    })

    app.post('/card', (req, res) => {
        const card = req.body;
        cards.push({id: Math.random().toString(), ...card});
        res.send('Card created')
    })

    app.delete('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        cards = cards.filter(el => el.id !== cardId);
        res.send(cards)
    })

    app.patch('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el);
        res.send('Card updated')
    })
}

module.exports = routes;