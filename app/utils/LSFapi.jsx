import superagent from 'superagent';

const path = 'https://live.hpc.mssm.edu'

export function getSummary(callback) {
  superagent
    .get( path + '/jobstable2json.php?type=summary' )
    .on( 'error', (res) => { console.log(res); } )
    .end( callback );
}

export function getUsers(callback) {
  superagent
    .get( path + '/jobstable2json.php?type=xpery&field=user&dictionary=true&sort=cores' )
    .on( 'error', (res) => { console.log(res); } )
    .end( callback );
}

export function getProjects(callback) {
  superagent
    .get( path + '/jobstable2json.php?type=xpery&field=project_name&dictionary=true&sort=cores' )
    .on( 'error', (res) => { console.log(res); } )
    .end( callback );
}
