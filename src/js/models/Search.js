import axios from 'axios';

export default class {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const key = '7baa57126f5209f8bbe3c6b9aff70051';

        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        }
        catch(e){
            console.log(e);
        }
    }
}