var profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    for (let index=0; index < profileDataArr.length; index++) {
        console.log(profileDataArr[index]);
    }

    console.log('==========');

    profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDataArgs);