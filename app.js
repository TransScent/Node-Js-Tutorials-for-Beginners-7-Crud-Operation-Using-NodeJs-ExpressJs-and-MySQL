const express = require('express');
const dbconfig = require('./dbconfig');
const dbQuery = require('./dbQuery');
const app = express();
const cors = require('cors');
const { send } = require('express/lib/response');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/getBankDetailsInsert', (req, res) =>
{
    dbconfig.query(dbQuery.InsertBankDetails, [req.body.bankname,req.body.isactive], (error, result) =>
    {
        if (error) {
            res.send(error);
        } else {

            res.json({ "status": 200, "IsSuccess": "Y" });
        }

    })
})

app.get("/getBankDetails", (req, res) =>
{
    dbconfig.query(dbQuery.getBankDeatils, (error, result) =>
    {
        if (error) {
            res.send(error);
        } else {
            res.json({"status":200,"isSuccess":"Y","result":result});
        }
    })
    })
app.post("/getDeleteBankByName", (req, res) =>
{
    dbconfig.query(dbQuery.deleteByBankName, [req.body.bankname],(error, result) =>
    {
        if (error) {
            res.send(error);
        } else {
            res.json({ "status": 200, "IsSuccess": "Y","msg":"Record Deleted Successfully"});
        }
    })
})


app.post("/getUpdateBankByName", (req, res) =>
{
    dbconfig.query(dbQuery.updateByBankName, [req.body.newBank,req.body.bankname],(error, result) =>
    {
        if (error) {
            res.send(error);
        } else {
            res.json({ "status": 200, "IsSuccess": "Y","msg":"Record Updated Successfully"});
        }
    })
})






app.listen(8080, () =>
{
    console.log("Server Started Successfully");

})
