import axios from 'axios';

const path = 'https://live.hpc.mssm.edu'


//axios
export function getSummary(callback) {
  return axios.get( path + '/jobstable2json.php?type=summary' )
    .then( (res) => {
        if (res.status >= 400) { throw new Error("fetch error"); }
        console.log(res);
        return res.data;
    } );
}

export function getUsersTable(callback) {
  return axios.get( path + '/jobstable2json.php?type=xpery&field=user&dictionary=true&sort=cores' )
    .then( (res) => {
        if (res.status >= 400) { throw new Error("fetch error"); }
        console.log(res);
        return res.data;
    } );
}

export function getProjectsTable(callback) {
  return axios.get( path + '/jobstable2json.php?type=xpery&field=project_name&dictionary=true&sort=cores' )
    .then( (res) => {
        if (res.status >= 400) { throw new Error("fetch error"); }
        console.log(res);
        return res.data;
    } );
}
