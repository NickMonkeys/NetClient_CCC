/**
 *  creator: nick li
 *  date: 2019-07-26
 */

enum HttpMethod {
    GET = "GET",    // 请求数据（查）
    POST = "POST", // 修改数据（改）
    PUT = "PUT",    // 增加数据（增）
    DELETE = "DELETE", // 删除数据（删）
}

export default class Http {

    public static get(url: string, callback: (content) => void) {
        const xhr = this.getXHR();
        xhr.onreadystatechange = () => {
            this.onreadystatechange(xhr, callback);
        }
        xhr.open(HttpMethod.GET, url, true);
        xhr.send();
    }
    public static post(url: string, callback: () => void) {
        const xhr = this.getXHR();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response) {
                    callback();
                }
            }
        }
        xhr.responseType = "arraybuffer";
        xhr.open(HttpMethod.POST, url, true);
        xhr.send();
    }

    private static getXHR() {
        return new XMLHttpRequest();
    }

    private static onreadystatechange(xhr, callback: (content) => void) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.response) {
                callback(xhr.response);
            }
        }
    }
}


