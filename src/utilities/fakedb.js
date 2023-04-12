// use local storage to manage cart data

const appliedJobIDsKey = 'appliedJobIDs';

export const getAppliedJobIDS = () => {
    let appliedJobIDS = [];
    const appliedJobsIDsString = localStorage.getItem(appliedJobIDsKey);
    if(appliedJobsIDsString){
        appliedJobIDS =  JSON.parse(appliedJobsIDsString);
    }
    return appliedJobIDS;
}

export const addAppliedJobIDS = (id) => {
    const appliedJobIDs = getAppliedJobIDS();
    appliedJobIDs.push(id);
    localStorage.setItem(appliedJobIDsKey, JSON.stringify(appliedJobIDs));
    return getAppliedJobIDS();
}