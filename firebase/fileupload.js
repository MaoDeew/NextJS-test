import firebase from "../firebase/firebase";
const storage = firebase.storage();



export function uploadFilesToFirebase(files){
    const promises = [];
    const responseUpload = [];
    files.forEach(file=>{
        const promise = new Promise((resolve,reject)=>{
            const uploadTask = storage.ref(`files/${file.name}`).put(file);
            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) =>{
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //console.log('Upload is ' + progress + '% done');
                },
                (error) =>{
                  reject(error)
                },
                async () =>{
                   resolve("File Uploaded")
                }
            )
        })
        promises.push(promise)
    })
    Promise.all(promises.map(promise => promise.catch(e => e)))
        .then(responses =>{
            const foundError = responses.every(response=> response!="File Uploaded")
            if(foundError){
                responses.forEach(response =>{      
                    responseUpload.push(response.message) 
                })  
            }else{
                responseUpload.push("All Files Uploaded") 
            }
        })
    
    
    return responseUpload;
}