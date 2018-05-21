class Adapter {
	constructor(){
		this.baseUrl = "http://localhost:3000";
		this.headers = {
			'Content-Type':'application/json',
			Accept: 'application/json',
		}
	}

	fetchNotes(){
		return fetch(`${this.baseUrl}/notes`).then(res => res.json());
	}

	updateNote(id, body){
		return fetch(`${this.baseUrl}/notes/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(body),
		}).then(res => res.json());
	}

	get(url){
		return fetch(url).then(res=> res.json());
	}
	
	patch(url, body){
		return fetch(url, {
			method: 'PATCH', 
			headers: this.headers,
			body: JSON.stringify(body),
		}).then(res=> res.json());
	}
}
