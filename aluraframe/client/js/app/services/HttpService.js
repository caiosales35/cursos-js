export class HttpService {

    _handleErrors(res){
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res;
    }

    get(url) {
        return fetch(url)
            .then(resposta => this._handleErrors(resposta))
            .then(resposta => resposta.json());
        /*return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();
        }); */
    }

    post(url, dado){
        return fetch(url, {
            headers: {'Content-Type':'application/json'},
            method: 'post',
            body: JSON.stringify(dado)
        }).then(resposta => this._handleErrors(resposta));
        /*return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado));
        }); */
    }
}
