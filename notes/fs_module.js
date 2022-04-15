const fs=require("fs")


// fs.mkdir(<path and name>);

fs.writeFile() //

fs.
access() // 	Checks if a user has access to this file or directory
accessSync() //	Same as access(), but synchronous instead of asynchronous
appendFile() //	Appends data to a file
appendFileSync() //	Same as appendFile(), but synchronous instead of asynchronous
chmod()     //	Changes the mode of a file
chmodSync() //	Same as chmod(), but synchronous instead of asynchronous
chown() //  	Changes the owner of a file
chownSync() //	Same as chown(), but synchronous instead of asynchronous
close() 	//      Closes a file
closeSync() //      Same as close(), but synchronous instead of asynchronous
constants //    	Returns an object containing constant values for the file system
createReadStream() //   	Returns a new stream object
createWriteStream() 	//  Returns a new writeable stream object
exists() //     	Deprecated. Checks if a file or folder exists
existsSync() // 	Same as exists(), but synchronous instead of asynchronous. This method is NOT deprecated
fchmod() //     	Changes the mode of a file
fchmodSync() // 	Same as fchmod(), but synchronous instead of asynchronous
fchown() //     	Changes the owner of a file
fchownSync()     //	Same as fchown(), but synchronous instead of asynchronous
fdatasync() //  	Syncronizes a file with the one stored on the computer
fdatasyncSync() //	Same as fdatasync(), but synchronous instead of asynchronous
fstat() //      	Returns the status of a file
fstatSync()     //	Same as fstat(), but synchronous instead of asynchronous
fsync() //  	    Syncronizes a file with the one stored on the computer
fsyncSync()     //	Same as fsync(), but synchronous instead of asynchronous
ftruncated()    //	Truncates a file
ftruncatedSync()    //Same as ftruncated(), but synchronous instead of asynchronous
futimes() //    	Change the timestamp of a file
futimesSync() //   	Same as futimes(), but synchronous instead of asynchronous
lchmod() //     	Changes the mode of a file, for Mac OS X
lchmodSync()     //	Same as lchmod(), but synchronous instead of asynchronous
lchown()    //  	Changes the owner of a file, for Mac OS X
lchownSync()    //	Same as lchown(), but synchronous instead of asynchronous
link()  //      	Makes an addition name for a file. Both the old and the new name may be used
linksync()  //  	Same as link(), but synchronous instead of asynchronous
lstat()     //  	Returns the status of a file
lstatSync() 	//  Same as lstat(), but synchronous instead of asynchronous
mkdir() 	//      Makes a new directory
mkdirSync() 	//  Same as mkdir(), but synchronous instead of asynchronous
mkdtemp() //    	Makes a new temporary directory
mkdtempSync() 	//  Same as mktemp(), but synchronous instead of asynchronous
open() //       	Opens a file
openSync() 	//      Same as open(), but synchronous instead of asynchronous
read() 	//          Reads the content of a file
readdir() //   	    Reads the content of a directory
readdirSync()   //	Same as readdir(), but synchronous instead of asynchronous
readFile() //   	Reads the content of a file
readFileSync() //	Same as readFile(), but synchronous instead of asynchronous
readlink() 	//      Reads the value of a link
readlinkSync() //	Same as readlink(), but synchronous instead of asynchronous
realpath() //   	Returns the absolute pathname
realpathSync() //  	Same as realpath(), but synchronous instead of asynchronous
rename() //     	Renames a file
renameSync()      //Same as rename(), but synchronous instead of asynchronous
rmdir()         //	Removes a directory
rmdirSync() //  	Same as rmdir(), but synchronous instead of asynchronous
stat() //       	Returns the status of a file
statSync() //   	Same as stat(), but synchronous instead of asynchronous
symlink() //    	Makes a symbolic name for a file
symlinkSync() //	Same as symlink(), but synchronous instead of asynchronous
truncate() //   	Truncates a file
truncateSync() //  	Same as truncate(), but synchronous instead of asynchronous
unlink() //     	Removes a link
unlinkSync() // 	Same as unlink(), but synchronous instead of asynchronous
unwatchFile() //   	Stops watching for changes on a filename
utimes()        //	Change the timestamp of a file
utimesSync()    //	Same as utimes(), but synchronous instead of asynchronous
watch()     //  	Watch for changes of a filename or directoryname
watchFile()     //	Watch for changes of a filename
write() //      	Writes buffer to a file
write()     //  	Writes data to a file
writeFile() //  	Writes data to a file
writeFileSync() //	Same as writeFile(), but synchronous instead of asynchronous
writeSync() 	//  Same as write(); writes buffer to a file synchronous instead of asynchronous
writeSync() //  	Same as write(); writes data to a file synchronous instead of asynchronous