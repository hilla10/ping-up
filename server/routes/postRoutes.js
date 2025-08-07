import { Router } from 'express';

import { upload } from '../config/multer.js';
import { protect } from '../middleware/auth.js';
import {
  addPost,
  getFeedPosts,
  likePost,
} from '../controllers/postController.js';

const router = Router();

router.post('/add', upload.array('images', 4), protect, addPost);
router.get('/feed', protect, getFeedPosts);
router.post('/like', protect, likePost);

export default router;
