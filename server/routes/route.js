import express from "express";
import { getPosts } from "../controller/post-controller.js";
import { userSignup , userLogin , userSignupUpdate,userPasswordUpdate} from "../controller/user-controller.js";
import { enterChat } from "../controller/chat-controller.js";
import { enterLike } from "../controller/like-controller.js";
import { enterComment } from "../controller/comment-controller.js";
import { deleteChat } from "../controller/delete-controller.js";
import { deleteComment } from "../controller/delete-controller.js";
import {getNotify} from "../controller/notification-controller.js";
import {deleteNotify} from "../controller/notification-controller.js";
import Notification from "../model/notify-schema.js";
const router=express.Router();

router.get('/posts',getPosts);

router.post('/signup',userSignup); 
router.post('/signupupdate',userSignupUpdate); 
router.post('/passwordupdate',userPasswordUpdate); 
//usersignup: callback function after signup hit to do something
router.post('/login',userLogin); 

router.post('/posts-chat',enterChat);
router.post('/posts-like',enterLike);
router.post('/posts-comment',enterComment);
router.post('/delete-chat',deleteChat);
router.post('/delete-comment',deleteComment);
router.get('/getnotify/:username', getNotify);
router.post('/deletenotifications/:username',deleteNotify);

export default router;