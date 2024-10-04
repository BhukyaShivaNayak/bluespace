

require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
require("./db/conn")
const router = require("./Routes/router");




app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 6007

app.use(cors());



app.use(router);





const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./models/userSchema");
const jobdb = require('./models/jobSchema');
const createJob = require('./models/createJob')


const clientid = "347066522201-5ia9lhqemoosjovhjnjqu6gfhdeioeg5.apps.googleusercontent.com";
const clientsecret = "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";





app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());


app.use(session({
    secret: "1234blue",
    resave: false,
    saveUninitialized: true
}))



app.use(passport.initialize());
app.use(passport.session());





passport.use(
    new OAuth2Strategy({
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;


                if (!email.endsWith('@thebluespire.com')) {

                    return done(null, false, { message: 'Email not authorized' });
                }

                let user = await userdb.findOne({ googleId: profile.id });

                if (!user) {
                    user = new userdb({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: email,
                        image: profile.photos[0].value
                    });

                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        })
);


passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
});


app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login-failure"
}))

app.get("/login/sucess", async (req, res) => {

    if (req.user) {
        res.status(200).json({ message: "user Login", user: req.user })
    } else {
        res.status(400).json({ message: "Not Authorized" })
    }
})

app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err) }
        res.redirect("http://localhost:3000");
    })
})

//---- Job APIs ----- 


app.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await jobdb.find();
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});





app.listen(PORT, () => {
    console.log(`server start at port no ${PORT}`)
})



