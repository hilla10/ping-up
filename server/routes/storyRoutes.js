import { Router } from 'express';

import { protect } from '../middleware/auth.js';
import { upload } from '../config/multer.js';
import { addUserStory, getStories } from '../controllers/storyController.js';
const router = Router();

router.post('/create', upload.single('media'), protect, addUserStory);
router.get('/get', protect, getStories);

export default router;
