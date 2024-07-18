const nodemailer = require("nodemailer");

const sendmail = async (res, user, url)=>{
  try{
    const transport = nodemailer.createTransport({
    service: "gamil",
    host: "smtp.gmail.com",
    port: 465,
    auth:{
        user: "dinkardiwakar0@gmail.com",
        pass: "cgczoeabremuiaut",
    },

    });

    const mailoptions ={
        from: "<Social Media Private Limited>",
        to: user.email,
        subject: "User Reset Password",
        text: "Do not share this link to anyone",
        html: `<a href=${url}>Reset Password Link</a>`,
    };


    transport.sendMail(mailoptions, async (err, info)=> {
        if(err) res.send(err);
        console.log(info);

        user.resetPasswordToken = 1;
        await user.save();

        res.send(
            `<h1 style="text-align:center; margin-top: 20px; color: tomato;">Check Inbox/Spam</h1>`
        );
    });

  }catch(error){
    res.send(error);
  }

};

module.exports = sendmail;





// const nodemailer = require("nodemailer");

// const sendmail = async (res, email, user)=>{
//     try{
//         const url =`http://localhost:3000/forget-password/${user._id}`;

//         const transport = nodemailer.createTransport({
//             service: "gmail",
//             host: "smtp.gmail.com",
//             port: 465,
//             auth: {
//                 user: "dinkardiwakar0@gmail.com",
//                 pass: "cgczoeabremuiaut",
//             },
//         });

//         const mailOptions = {
//             form: "Social Media Private Ltd. <social@media.pvt.ltd>",
//             to: email,
//             subject: "Password Reset Link",
//             text:"Do not share this link to anyone",
//             html: `<a href="${url}">Reset Password Link</a>`,
//         };

//         transport.sendMail(mailOptions, async (err,info)=>{
//             if(err)return res.send(err);
//             console.log(info);

//             user.resetPasswordToken = 1;
//             await user.save();

//             res.send(`<h1 class="text-5xl text-center mt-5 bg-red-300">check your inbox/spam</h1>`);
//         });
//     } catch(error){
//        res.send(error);
//     }
// };

// module.exports = sendmail;


