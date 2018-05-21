document.addEventListener('DOMContentLoaded', () => {
	const app = new App();
  app.attachEventListeners();
	app.adapter.fetchNotes().then(json => {
	json.forEach(note=>{
		document.querySelector('#notes-list').innerHTML += new Note(note).renderListItem();
		})
	})
});
