import { Router } from 'express';

import { protect } from '../middleware/auth.js';
import { upload } from '../config/multer.js';
import {
  getChatMessages,
  sendMessage,
  sseController,
} from '../controllers/messageController.js';

const router = Router();

router.get('/:userId', sseController);
router.post('/send', upload.single('image'), protect, sendMessage);
router.post('/get', protect, getChatMessages);

export default router;
