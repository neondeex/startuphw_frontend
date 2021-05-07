var env = (prod) => {
  if(prod){
    
    var obj = {
      backend_url: '',
    }

    return obj;
    
  }else{

    var objf = {
      backend_url: 'http://localhost:8080/',
    }

    return objf;

  }
}
module.exports = {env}