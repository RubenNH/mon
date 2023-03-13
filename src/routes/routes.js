import { Router}  from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('abaout');
});

router.post('/addtasks', (req, res) => {
    console.log(req.body);
    res.send('received');
});

export default router;
