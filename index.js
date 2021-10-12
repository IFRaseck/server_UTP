var express = require('express');
const cors = require("cors");
var path = require('path');
var morgan = require("morgan");
var mongoose = require('mongoose');

const app = express();

//CONEXION A BASE DE DATOS
mongoose
    .connect(
        "mongodb+srv://IFRaseck:DcBAi7jMmynEklhP@cluster0.tqzwx.mongodb.net/administracion?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
var db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to mongoDB");
});



//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// }); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//RUTA
app.use('/api', require('./routes/rutas'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'src')));

app.set("PORT", process.env.PORT || 3000);
app.listen(app.get("PORT"), () => {
 console.log(`Server started on port: ${app.get("PORT")}`);
});