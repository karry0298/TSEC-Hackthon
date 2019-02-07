const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
const nodemailer=require('nodemailer');
const mysql=require('mysql');
const faker = require('faker');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const jwt=require('jsonwebtoken');
//var nodemailer = require('nodemailer');
// var cors = require('cors');
// app.use(cors);    
var {donate}=require('./tables/donate.js');
var {admin}=require('./tables/admin.js');
var {message}=require('./tables/message.js');
var {app} = require('./views.js');  
var {academic}=require('./tables/academic.js');  
app.use(express.static(__dirname+'/Public'));
app.use(bodyParser.json());
console.log(__dirname+'/Public');
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/donate',(req,res)=>{
    console.log(req.body);
    console.log("Hello page-donate");
    var d= new Date();
    let stmt = `INSERT INTO donate(name,email,phone,amount,ddate) VALUES(?,?,?,?,?)`;
    let todo = [faker.name.firstName(),faker.internet.email(),faker.phone.phoneNumber(),faker.random.number(),faker.date.between('2018-01-01','2018-12-31')];
    donate.query(stmt,todo,(err,result)=>{
    if(err){
      console.log(err);
      state='failure';
    }
    else{
        state='success';  
    }
    console.log(req.body);
    
    res.send({
        status: state
    });
  })
});




app.post('/login',(req,res)=>{
    console.log(req.body);
    let stmt = `SELECT * FROM admin WHERE email=? AND password=?`;
    //let todo = [req.body.email,req.body.password,false];
    admin.query(stmt,[req.body.email,req.body.password],function (err, result,fields) {
    //  if (err) throw err;
    var d=new Date();
      if(result[0].email ==req.body.email && result[0].password==req.body.password){
        let stmt = `UPDATE admin SET last_login =? WHERE email =? AND password =?`;
        let todo = [d,req.body.email,req.body.password];
        admin.query(stmt,todo, function (err, result){
          if (err)
            console.log(err);
          console.log("login date update");
        });
      }
      //console.log(result);
      //console.log(result[0].username+'hello');
  
      //res.render('Public/Home/Aunthentication/otp.hbs');
    });
    //res.redirect('/otp');
  });
//app.get('/message',(req,res)=>{});  
// app.post('/message',(req,res)=>{});
app.post('/academic',(req,res)=>{
    console.log(req.body);
    // var x = Math.floor((Math.random() * 100) + 1)
    // var y = Math.floor((Math.random() * 100) + 1)
    // var z = Math.floor((Math.random() * 100) + 1)
    let stmt = `INSERT INTO academic(rollNo,English,Maths,Science) VALUES(?,?,?,?)`;
    //let todo = [req.body.rollNo,req.body.English,req.bobdy.Maths,req.body.Science];
    academic.query(stmt,[req.body.rollNo,req.body.English,req.bobdy.Maths,req.body.Science],function (err, result,fields) {
        if(err){
            console.log(err);
            res.sendStatus(404);
          }
          else{
              state='success';
              res.sendStatus(200);  
          }

    });
});
app.post('/message',(req,res)=>{
    console.log(req.body);
    var d=new Date();
    var x = Math.floor((Math.random() * 1000000) + 1);
    let stmt = `INSERT INTO message(id,email,message,item,area,mdate,reply) VALUES(?,?,?,?,?,?,?)`;
    //let todo = [req.body.email,req.body.password,false];
    message.query(stmt,[x,faker.internet.email(),req.body.message,req.body.item,req.body.area,d,"md-close"],function (err, result,fields) {
        if(err){
            console.log(err);
            res.sendStatus(404);
          }
          else{
              state='success';
              res.sendStatus(200);  
          }

    });
});
app.post('/message-reply',(req,res)=>{
    console.log(req.body);
    let stmt = `SELECT * FROM message WHERE id=? `;
    //let todo = [req.body.id];
    message.query(stmt,[req.body.id],function (err, result,fields) {
    //  if (err) throw err;
    var d=new Date();
      if(result[0].id ==req.body.id ){
        let stmt = `UPDATE message SET reply =? WHERE id =? `;
        let todo = [req.body.reply,req.body.id];
        message.query(stmt,todo, function (err, result){
          if (err)
            console.log(err);
          else
            res.sendStatus(200);    
          console.log("login date update");
        });
      }
      //console.log(result);
      //console.log(result[0].username+'hello');
  
      //res.render('Public/Home/Aunthentication/otp.hbs');
    });
});
//--pension app
// //Mysql database

// //DATABASE------------------------------------>>>
// //var {con}=require('./db/mysql.js');
// var {contact}=require('./tables/contact.js');
// var {users}=require('./tables/users.js');
// var {otpdb}=require('./tables/otpdb.js');
// var {admin}=require('./tables/admin.js');
// var {pension}=require('./tables/pension.js');
// var {personal}=require('./tables/personal.js');

// var {pension_id}=require('./tables/pension_id.js');
// var {pension_add}=require('./tables/pension_add.js');
// var {pension_bank}=require('./tables/pension_bank.js');
//  var {insurance}=require('./tables/insurance.js');
// var {insurance_id}=require('./tables/insurance_id.js');
// var {insurance_add}=require('./tables/insurance_add.js');
//  var {insurance_bank}=require('./tables/insurance_bank.js');


//var {transporter}=require('./email.js');
//var {otp}=require('./email.js');

//<<<------------------------------------
// var {mailmake}=require('./email.js');
// var {mailsend}=require('./email.js');
// var {app}=require('./authenticateAdmin.js');
// var {passport}=require('./authenticate.js');
// var {otp}=require('./otp.js');
// var {authenticate}=require('./middleware/authenticate.js');
// // var {nexmo}=require('./smshandler.js');
// const crypto=require('crypto');
//console.log(otp);

// var otp=Math.floor(100000 + Math.random() * 900000);
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
//---------------------------------------->



// }


// app.post('/home',(req,res)=>{
//   let stmt = `INSERT INTO contact(name_home,email,message)
//             VALUES(?,?,?)`;
//   let todo = [req.body.Name,req.body.Email,req.body.Message];
//   contact.query(stmt,todo,(err,result)=>{
//     if(err)
//       console.log(err);
//     console.log("1 message inserted");
//     res.redirect('/home');
//   })
// });
// app.post('/user/dashboard',(req,res)=>{
//   let stmt = `INSERT INTO contact(name_home,email,message)
//             VALUES(?,?,?)`;
//   let todo = [req.body.Name,req.body.Email,req.body.Message];
//   contact.query(stmt,todo,(err,result)=>{
//     if(err)
//       console.log(err);
//     console.log("1 message inserted");
//     res.redirect('/user/dashboard');
//   })
// });

// app.post("/login", passport.authenticate('local', {
//     successRedirect: '/user/Personal',
//     failureRedirect: '/login',
//     failureFlash: true
// }), function(req, res, info){

//     res.render('/login/index',{'message' :req.flash('Suuccessful')});
//     console.log("Suuccessful1");
// });


// app.post('/signup',(req,res)=>{
//   console.log(req.body);

//   // var username=req.body.username;
//   // var decoded=jwt.verify(token,'specialKEy');
//   // console.log(decoded);
//   // console.log(token);
//   // res.set('x-auth', token);

//   var d= new Date();
//   var salt = crypto.randomBytes(16).toString('hex');
//   var password=crypto.pbkdf2Sync(req.body.password,salt,
//     1000, 64, `sha512`).toString(`hex`);
//   let stmt = `INSERT INTO users(username,email,password,token_accees,token,application_status,last_login,signup_date)
//             VALUES(?,?,?,?,?,?,?,?)`;

//   let todo = [req.body.username,req.body.email,password,'auth',salt,false,d,d];
//   users.query(stmt,todo, function (err, result) {
//     if (err)
//       console.log(err);
//     console.log("1 record inserted");

//     //setting pension status
//     let sql = "INSERT INTO pension (application_status ,pension_personal,pension_id ,pension_add ,pension_bank ,dr_calc_status ,dr_calc ,gratuity_calc_status ,gratuity_calc ,pension_calc_status ,pension_calc ,username) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
//     pension.query(sql,["pending",false,false,false,false,false,"",false,"",false,10,req.body.username], function (err, result) {
//       if (err) throw err;
//       console.log("1 record pension status inserted");
//     });

//     //setting insurance status
//     let sql2='INSERT INTO insurance (application_status ,insurance_id ,insurance_add ,insurance_bank ,username) VALUES(?,?,?,?,?)';
//     insurance.query(sql2,["pending",false,false,false,req.body.username],(err,result)=>{
//       if (err) throw err;
//       console.log("1 record insurance status inserted");
//     });
//     otp.otp_key=Math.floor(100000 + Math.random() * 900000);
//     console.log(otp.otp_key);
//     mailmake.text=otp.otp_key.toString();
//     mailmake.to=req.body.email;
//     mailsend.send();
//     res.redirect('/otp');
//     //res.redirect('/otp');
//     //res.render('Public/Home/Aunthentication/otp.hbs');
//   });
// });

// app.post('/otp',(req,res)=>{
//     if(otp.otp_key==req.body.otp){
//       res.redirect('/user/Personal');
//     }
// });



// //PEnsion application

// app.post('/Pension/applicationIdentity',(req,res)=>{
//   //res.render('Public/Dashboard/PensionScheme/applicationIdentity.hbs');
// });
// app.post('/Pension/applicationAddress',(req,res)=>{
//   //res.render('Public/Dashboard/PensionScheme/applicationAddress.hbs');
// });
// app.post('/Pension/applicationWorkBank',(req,res)=>{
//   //res.render('Public/Dashboard/PensionScheme/applicationWorkBank.hbs');
// });
// //Insurance application

// app.post('/Insurance/applicationIdentity',(req,res)=>{
//   res.render('Public/Dashboard/InsuranceScheme/applicationIdentity.hbs');
// });
// app.post('/Insurance/applicationAddress',(req,res)=>{
//   res.render('Public/Dashboard/InsuranceScheme/applicationAddress.hbs');
// });
// app.post('/Insurance/applicationWorkBank',(req,res)=>{
//   res.render('Public/Dashboard/InsuranceScheme/applicationWorkBank.hbs');
// });


// //admin


// //fttt


// const http = require('http');
// // const express = require('express');
// const socketIO = require('socket.io');

// const {generateMessage, generateLocationMessage} = require('./utils/message');
// const {isRealString} = require('./utils/validation');
// const {Users} = require('./utils/users');

// var server = http.createServer(app);
// var io = socketIO(server);
// var usersx = new Users();




// //handlebarsconnectivity

// //app.use(express.static(publicPath));

// //tables
// var {question}=require('./tables/questions.js');

// //chat




// io.on('connection', (socket) => {
//   console.log('New user connected');

//   socket.on('join', (params, callback) => {
//     if (!isRealString(params.name) || !isRealString(params.room)) {
//       return callback('Name and room name are required.');
//     }

//     socket.join(params.room);
//     usersx.removeUser(socket.id);
//     usersx.addUser(socket.id, params.name, params.room);

//     io.to(params.room).emit('updateUserList', usersx.getUserList(params.room));
//     socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
//     socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
//     callback();
//   });

//   socket.on('createMessage', (message, callback) => {
//     var user = usersx.getUser(socket.id);

//     if (user && isRealString(message.text)) {
//       io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
//     }

//     callback();
//   });

//   socket.on('createLocationMessage', (coords) => {
//     var user = usersx.getUser(socket.id);

//     if (user) {
//       io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
//     }
//   });

//   socket.on('disconnect', () => {
//     var user = usersx.removeUser(socket.id);

//     if (user) {
//       io.to(user.room).emit('updateUserList', usersx.getUserList(user.room));
//       io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
//     }
//   });
// });





// //chat
// //routes
// app.get('/faq',(req,res)=>{
//   res.render('Public/Dashboard/Forum/index.hbs');
// });
// app.get('/calc/dr',(req,res)=>{
//   res.render('Public/Home/calc/DR_calc.hbs');
// });
// app.get('/calc/pension',(req,res)=>{
//   res.render('Public/Home/calc/pension.hbs');
// });
// app.get('/chatlanding',(req,res)=>{
//   res.render('Public/Dashboard/Forum/chatland.hbs');
// });
// app.get('/chat',(req,res)=>{
//   res.render('Public/Dashboard/Forum/chat.hbs');
// });

// app.get('/forumcat',(req,res)=>{
//   question.query('commit',(err)=>{
//     if(err) throw err;
//     question.query('set autocommit=1',(err)=>{
//       if(err) throw err;
//       res.render('Public/Dashboard/Forum/forum_cat.hbs');
//     });

//   });

// });

// app.get('/forumask',(req,res)=>{
//   res.render('Public/Dashboard/Forum/forum_ask.hbs');
// });

// // questions
// app.get('/question',(req,res,err)=>{

//   var askno=req.query.quno;

// var questionq=req.query.quest;
// var asku=req.query.who;
// var asktype=req.query.atype;

// var list1=[];
// var list2=[];
// question.query('select * from anstable where qno= ?',askno,(err,rows)=>{
//    if(err) throw err;
//    // res.render('./general_forum.hbs',{quest: rows.questions});

//    var count;
//    var lengthr=rows.length;
//    for(count=0;count<lengthr;count++){

//      var ask = {
//                   'qno':rows[count].qno,
//                   'answer':rows[count].answer,
//                   'usera':rows[count].usera,
//               }

//               list1.push(ask);
//    }


//  });

//  question.query('select * from anstable where type= ?',asktype,(err,rows)=>{
//     if(err) throw err;
//     // res.render('./general_forum.hbs',{quest: rows.questions});

//     var count;
//     var lengthr=rows.length;
//     if(lengthr>5){
//       lengthr=5;
//     }
//     for(count=0;count<lengthr;count++){

//       var ask = {

//                    'topuser':rows[count].usera,

//                }

//                list2.push(ask);
//     }

// // console.log(rows[0].usera);
//   });


// res.render('Public/Dashboard/Forum/forum_home.hbs',{askno,questionq,asku,asktype,list1,list2});
// });

// // general
// app.get('/generalforum',(req,res)=>{
//   question.query('select * from qtable where type= "general"',(err,rows)=>{
//      if(err) console.log("BAD");
//      // res.render('./general_forum.hbs',{quest: rows.questions});
//      var list=[];
//      var count;
//      var lengthr=rows.length;
//      for(count=0;count<lengthr;count++){

//        var ask = {
//                     'qno':rows[count].qno,
//                     'questions':rows[count].questions,
//                     'quser':rows[count].quser,
//                     'type':rows[count].type,
//                 }

//                 list.push(ask);
//      }
//       res.render('Public/Dashboard/Forum/general_forum.hbs',{list});
//    });

// });

// // dr
// app.get('/drforum',(req,res)=>{
//   question.query('select * from qtable where type= "dr"',(err,rows)=>{
//      if(err) console.log("BAD");

//      var list=[];
//      var count;
//      var lengthr=rows.length;
//      for(count=0;count<lengthr;count++){

//        var ask = {
//                     'qno':rows[count].qno,
//                     'questions':rows[count].questions,
//                     'quser':rows[count].quser,
//                     'type':rows[count].type,
//                 }

//                 list.push(ask);
//      }
//       res.render('Public/Dashboard/Forum/dr_forum.hbs',{list});
//    });

// });


// // nps
// app.get('/nps',(req,res)=>{
//   question.query('select * from qtable where type= "nps"',(err,rows)=>{
//      if(err) console.log("BAD");

//      var list=[];
//      var count;
//      var lengthr=rows.length;
//      for(count=0;count<lengthr;count++){

//        var ask = {
//                     'qno':rows[count].qno,
//                     'questions':rows[count].questions,
//                     'quser':rows[count].quser,
//                     'type':rows[count].type,
//                 }

//                 list.push(ask);
//      }
//       res.render('Public/Dashboard/Forum/nps_forum.hbs',{list});
//    });

// });

// // defence
// app.get('/defence',(req,res)=>{
//   question.query('select * from qtable where type= "defence"',(err,rows)=>{
//      if(err) console.log("BAD");
//      // res.render('./general_forum.hbs',{quest: rows.questions});
//      var list=[];
//      var count;
//      var lengthr=rows.length;
//      for(count=0;count<lengthr;count++){

//        var ask = {
//                     'qno':rows[count].qno,
//                     'questions':rows[count].questions,
//                     'quser':rows[count].quser,
//                     'type':rows[count].type,
//                 }

//                 list.push(ask);
//      }
//       res.render('Public/Dashboard/Forum/defence_forum.hbs',{list});
//    });

// });

// // gratuity
// app.get('/gratuity',(req,res)=>{
//   question.query('select * from qtable where type= "gratuity"',(err,rows)=>{
//      if(err) console.log("BAD");
//      // res.render('./general_forum.hbs',{quest: rows.questions});
//      var list=[];
//      var count;
//      var lengthr=rows.length;
//      for(count=0;count<lengthr;count++){

//        var ask = {
//                     'qno':rows[count].qno,
//                     'questions':rows[count].questions,
//                     'quser':rows[count].quser,
//                     'type':rows[count].type,
//                 }

//                 list.push(ask);
//      }
//       res.render('Public/Dashboard/Forum/gratuity_forum.hbs',{list});
//    });

// });

// // reply from forumhome
// app.post('/reply',(req,res)=>{
//     var replystring= req.body.replyf;
//     var qno= req.body.questno;
//     var type=req.body.questtype;

//     var values = [[qno,replystring,req.user.username,type]];
//     question.query('insert into anstable (qno,answer,usera,type) values ?',[values],(err,rows)=>{
//        if(err) throw err;

//           res.redirect('back');


//        });


//    });



//  app.post('/ask',(req,res)=>{
//    var questionp= req.body.yourq;
//    var type= req.body.drop;


//    var values1 = [[questionp,"Solomon",type]];

// question.query('set autocommit=0',(err,row)=>{
//   if(err) throw err;

//    question.query('insert into qtable (questions,quser,type) values ?',[values1],(err,row)=>{
//      if(err) throw err;

//      question.query('select qno from qtable where questions= ?',questionp,(err,rows)=>{
//        if(err) throw err;
//        var values2 = [[rows[0].qno,"This Discussion is ready","Admin","default"]];
//        question.query('insert into anstable (qno,answer,usera,type) values ?',[values2],(err,rows)=>{
//          if(err) throw err;
//          res.redirect('back');
//        });
//      });




//    });
//  });

//  });

//  app.post('/undo',(req,res)=>{





//        question.query('rollback',(err,row)=>{
//         if(err) throw err;

//             res.redirect('back');
//           });
//         });







//         app.on('listening',function(){
//             console.log('ok, server is running');
//         });
// // app.listen(3006,(err)=>{
// //   if(err) throw err;
// //   console.log('Express server is runnin at port 3000');
// // });
app.listen(3000);

//huhuhu



//home/clayton/Project/Pension/Server/views
