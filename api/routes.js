"use strict";
var admin = require("firebase-admin");
module.exports = function (app) {
  // todoList Routes
  app.route("/notification").post(async (req, res) => {
    try {
      // token được lấy từ app gửi lên
      //token: cUsR2fMqg0RbssjGvTYX72:APA91bGJINCvyR55zQXZI02N3TkoNnjMBd1BQ5Cu4Gj1ND50_mhMcq1CmtZXH5Ibu0kfUVWs6-PY2YMn_TK-8cvyTuyFkWRKN2Pw57SZZDrkuULXc2xYUNi0SJGYnxnvjECZyJnKm8D7
      let  token  = 'cbCu5AOiSua3LnC9rH05fd:APA91bHyS6qcm0vYp7r8i0UZrs76LyCR8gG4EJlkCu-49DFXXzgkgZyCN-DzThef_bTEWrQqhJ6HDqyc2zsMC-8rvXC2XjDtykwD8lMuUa5_Vusjx0hklwj3SAXTga0dXeFJUsEtMAHM';
      let response = await admin.messaging().sendToDevice(token, {
        notification: {
          body: "body test",
          title: "title test",
        },
        data: { data: "data test" },
      });
      res.json("ok");
    } catch (error) {
      console.log("error: ", error);
      res.status(400).json("error");
    }
  });
};
