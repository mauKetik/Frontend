# Frontend

router.post("/create-room", Controller.createRoom)
router.patch("/join-room/:roomId", Controller.joinRoom)
// router.delete("/room/:id", Controller.destroyRoom)
router.get("/my-profile", Controller.myProfile)
router.get("/rooms", Controller.getAllRoom)
router.get("/leaderboard", Controller.leaderboard)
