/**
 * RestClient
 *
 * Utility class for making REST calls.
 */

class RestClient {

  public get(url: string, success: (data: any, status: any) => void, fail: (msg?: string) => void): void {

    $.get(url, (data, status) => {
      if (status === "success") {
        success(data, status);
      } else {
        if (fail) {
          fail();
        }
      }
    }).fail((res, status) => {
      let msg: string;
      if (res.responseJSON && res.responseJSON.error && res.responseJSON.error.message) {
        msg = res.responseJSON.error.message;
      } else {
        msg = res.status + " " + res.statusText;
      }
      if (fail) {
        fail(msg);
      }
    });
  }

  public postMessage(url: string, postData: any,
                     success: (data: any, status: any) => void,
                     fail: (msg?: string) => void) {

    $.post(url, postData, (data, status) => {
      if (status === "success") {
        success(data, status);
      } else {
        if (fail) {
          fail();
        }
      }
    }).fail((res, status) => {
      let msg: string;
      if (res.responseJSON && res.responseJSON.error && res.responseJSON.error.message) {
        msg = res.responseJSON.error.message;
      } else {
        msg = res.status + " " + res.statusText;
      }
      if (fail) {
        fail(msg);
      }
    });
  }

}

let restClient = new RestClient();
export default restClient;
