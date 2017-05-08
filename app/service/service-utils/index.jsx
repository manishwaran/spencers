export default class ServiceUtils {

  checkForError(data) {
    return new Promise((resolve, reject) => {
      data.text().then((result) => {
        try {
          const resultObj = JSON.parse(result);
          return (resultObj.serverError) ? reject(resultObj) : resolve(resultObj);
        } catch (err) {
          return resolve(result);
        }
      });
    });
  }


}
