import record from '../Config/Http'

class AxiosService{
    getData(keyName){
        return record.get(keyName)
    }
    postData(keyName,value){
        return record.post(keyName,value)
    }
    DeleteData(keyName){
        return record.delete(keyName)
    }
    UpdateData(keyName,value){
        return record.put(keyName,value)
    }
}

var obj=new AxiosService

export default obj