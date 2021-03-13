install: # установить зависимости
	npm install
brain-games: # запустить brain-games.js
	node bin/brain-games.js
publish: # публикация
	npm publish --dry-run
