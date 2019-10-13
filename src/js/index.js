import Search from './models/Search';

const state = {};

const controlSearch = async () => {
    // 1. Get query from view 
    const query = 'pizza';

    if(query){
        // 2. New Search object and Add to state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render the UI for results 
        console.log(state.search.result);
        
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});