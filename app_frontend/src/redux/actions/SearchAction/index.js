


export const SEARCH = "SEARCH"


export function search(data){
    console.log('===========from search action=========================');
    console.log(data);
    console.log('====================================');
    return{
        type: SEARCH,
        data: data
    }
}