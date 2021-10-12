const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
// const MongoClient = require ('mongodb').MongoClient;
var mongoose = require('mongoose');


const app = express();
const port = 3000;
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://localhost:27017/toko';
// const dbName = 'mean-crud';
// let db;

// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error :'));
db.once('open',function(){
    console.log('Koneksi ke MongoDB Berhasil');
}); 

// app.post('/api/pesan',(req, res)=> {
//     console.log(req.body);
//     db.collection('kotakpesan').insertOne({'pesan':req.body});
//     res.status(200).send();

// })


const TokoSchema = new mongoose.Schema({
    id: String,
    name: String,
    department: String
});
const Toko = mongoose.model('barang',TokoSchema);

app.post('/api/employees', (req, res) => {
    const toko = new Toko(req.body);
    toko.save();
    res.status(200).send();
})

app.get('/api/employees', async (req, res) => {
    const docs = await Toko.find();

    if(!docs) return res.json({error: "Gagal mengambil pesan"});

    res.json(docs);
})
app.get('/api/employees/:id', async (req, res) => {
    // Toko.findById(req.params.id)
   Toko.findOne({"id": req.params.id})
    .then(data => {
        if (!data)
         res.status(404).send({ message: "Tidak ditemukan data id " +id});
        else res.send(data);
    })
    .catch(err => {
        res
            .status(500)
            .send({ message: " error data id "+id})
    });
});




app.delete('/api/employees/:id',(req, res) => {
 Toko.findOneAndDelete({"id" :req.params.id})
    .then(data => {
    if (!data){
        res.status(404).send({
            message: 'Gagal Menghapus Data=$(id).'
        });
    }else{
        res.send({
            message: "Data Berhasil dihapus"
        });
    }
})
.catch(err =>{
    res.status(500).send({
        message:"Tidak dapat menghapus data id=" +id
    });
  });
})

app.put('/api/employees/:id',(req, res, next) =>{
   console.log(req.body);

   Toko.findOneAndUpdate({ "id" : req.params.id}, {
       $set: req.body
   },(error, data) => {
       if(error){
           console.log(error)
           return next(error)
       }else{
           console.log('Data berhasil update:' +data)
           res.send('Selesai')
       }
   })
})


mongoose.connect(url);


// MongoClient.connect(url, function(err, client){
//     if (err) return console.log ('mongo error :', err);
//     console.log ("connected successfully to server");
//     db = client.db(dbName);
// });

app.get('/',(req, res)=> res.send('testing server'));

app.listen(port, ()=> console.log('Aplikasi berjalan di port', port));