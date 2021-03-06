import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

const controlSearch = async () => {
    // 1. Get query from view 
    const query = searchView.getInput();

    if(query){
        // 2. New Search object and Add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render the UI for results 
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});