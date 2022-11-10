const fs = require('fs').promises

class Contenedor {
    constructor(path){
        this.path=path
       
    }

    async save(item){
        try{
            const leer=await fs.readFile(this.path, 'utf-8');
            const data=JSON.parse(leer)
            let id;
                data.length ===0
                ? (id=1)
                : (id = data[data.length -1].id+1);
            const newItem = {...item, id};
            data.push(newItem);
            await fs.writeFile(this.path, JSON.stringify(data,null, 2),'utf-8') 
            return newItem.id;
        }catch(e){
            console.log(e);
        }
    }

    async getById(id){
        try{
            const leer=await fs.readFile(this.path, 'utf-8')
            const data= JSON.parse(leer)
            const item = data.find(item=>item.id===id)
           !item ? console.log(null) : console.log(item)
    
        }catch(e){
            console.log(e);
        }
    }

    //asyn ya que debe buscar la info en otro lugar.
    async getAll(){
            const leer=await fs.readFile(this.path, 'utf-8')
            return JSON.parse(leer)
    }

   async deleteById(id){
    try{
        const leer=await fs.readFile(this.path, 'utf-8')
        const data= JSON.parse(leer)
        const item = data.find(item=>item.id===id)
        if (item){
            const newData= data.filter(item => item.id !==id)
            await fs.writeFile(this.path, JSON.stringify(newData,null, 2),'utf-8') 
            console.log('producto eliminado');
        }else{
            console.log('no existe el producto');
        }

    }catch(e){
        console.log(e);
    }
    }

    
//para borrar se sobreescribe el archivo
    async deleteAll(){
        try{
           await fs.writeFile(this.path, JSON.stringify([],null, 2),'utf-8')
        } catch(e){
             console.log(e);   
        }
    }
}

module.exports=Contenedor