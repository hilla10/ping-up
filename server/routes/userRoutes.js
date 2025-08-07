import { Router } from 'express';
import {
  acceptConnectionRequest,
  discoverUsers,
  followUser,
  getUserConnections,
  getUserData,
  sendConnectionRequest,
  unfollowUser,
  updateUserData,
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
import { upload } from '../config/multer.js';

const router = Router();

router.get('/data', protect, getUserData);
router.post(
  '/update',
  upload.fields([
    { name: 'profile', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
  ]),
  protect,
  updateUserData
);
router.post('/discover', protect, discoverUsers);
router.post('/follow', protect, followUser);
router.post('/unfollow', protect, unfollowUser);
router.post('/connect', protect, sendConnectionRequest);
router.post('/accept', protect, acceptConnectionRequest);
router.get('/connections', protect, getUserConnections);

export default router;
