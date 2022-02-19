const DBQUERY = {
    "InsertBankDetails": "insert into tbl_gm_bankmaster(bankname,isactive,craetedate) values (?,?,CURRENT_TIMESTAMP)",
    "getBankDeatils": "select * from tbl_gm_bankmaster",
    "deleteByBankName": "delete from tbl_gm_bankmaster where bankname=?",
    "updateByBankName":"update tbl_gm_bankmaster set bankname=? where bankname=?"

}

module.exports = DBQUERY;