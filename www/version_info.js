var versionTimestamp = "2019-10-31 14:24";
var versionCommitID = "c45b48fcc";
console.log(versionTimestamp+" ("+versionCommitID+")");
if (versionCommitID) {
    let prefix;
    if (window.Globals && Globals.LogPrefix) {
        prefix = '[' + Globals.LogPrefix + ']';
    } else {
        prefix = 'Cabri -';
    }
    console.log(prefix, 'build', versionCommitID);
}