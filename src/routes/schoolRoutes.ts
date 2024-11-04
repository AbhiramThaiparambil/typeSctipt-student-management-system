import { Router } from 'express';
import Student from '../models/Student';
import Teacher from '../models/Teacher';
import Assignment from '../models/Assignment';

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/add-student', async (req, res) => {
    const { name, age } = req.body;
  
    const student = new Student({ name, age: parseInt(age), courses: [] });
    await student.save();
    
    res.redirect('/students');
  });
  
  router.post('/add-teacher', async (req, res) => {
      const { name, age } = req.body;
      const teacher = new Teacher({ name, age: parseInt(age), courses: [] });
      await teacher.save();
      res.redirect('/teachers');
    });
    
    router.get('/students', async (req, res) => {
      const students = await Student.find();
      res.render('students', { students });
    });
     
    
    
  export default router;
  