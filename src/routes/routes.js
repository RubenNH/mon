import { Router}  from 'express';
import model from '../models/Task';

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('abaout');
});

router.post('/addtasks', async(req, res) => {
    const task = model(req.body);
    
    
    const taskSaved = await task.save();
    res.send('received');
    console.log(taskSaved);
});

export default router;
