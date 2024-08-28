

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn")
const PORT = 6005;

const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");
const jobdb = require('./model/jobSchema');

const clientid = "347066522201-5ia9lhqemoosjovhjnjqu6gfhdeioeg5.apps.googleusercontent.com";
const clientsecret = "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";





app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

//app.get("/",(req,res)=>{
// res.status(200).json("server start")
//})

//session
app.use(session({
    secret: "1234blue",
    resave: false,
    saveUninitialized: true
}))

//setuppassport

app.use(passport.initialize());
app.use(passport.session());



/*passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)
*/

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

// initial google ouath login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login"
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

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));


app.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await jobdb.find();
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});

app.post('/api/jobs', async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(500).json({ message: 'Error inserting job', error: err });
    }
});


app.put('/api/jobs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedJob = await jobdb.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedJob);
    } catch (err) {
        res.status(500).json({ message: 'Error updating job', error: err });
    }
});


app.listen(PORT, () => {
    console.log(`server start at port no ${PORT}`)
})




