# Знакомство с разметкой md
## Основные команды
- `git init` - cоздание git-repository
- `git status` -общая информация о добавленных, измененных и удаленных файлах
- `git help` - подробная информация о команде
## Git add и что это 
`git add` - добавляет файлы в индекс в системе контроля версий Git
- `git add .` - добавляет в index все изменения из каталога
- `git add -f <path>` - добавляет файл в index игнорируя .gitignore
- `git add -p <path` - позволяет пройтись по каждому измененному фрагменту в файле
## Кто такой автор и коммитер
- `Автор` - это кто ,тот придумал данные изменение
- `Коммитер` - это ктотот создал коммит в repository
## Коммит
`git commit` - добавляет файлы из index в repository
- `git commit -m "название"` - позволяет указать сообщение без вызова редактора
- `git commit -a/git commit <path>` - атоматически добавляет файлы в index(если ранее они уже были добавлены в index) и repository
## Удаление и переименование файлов в Git
- `git rm <path>` - удаляет файл из WD и добавляет в index
  - `параметр -f для git rm` - применяется для отключения проверки безопасности, с помощью которой Git обеспечивает соответствие файлов в указателе HEAD текущему содержимому раздела проиндексированных файлов и рабочего каталога.
  - `параметр --cached для git rm` - удаляет но не добавляет в index
  - `параметр -r для git rm` - это сокращение от слова recursive. При выполнении команды git rm в рекурсивном режиме она удаляет не только каталог назначения, но и всё содержимое его вложенных каталогов.
- `git mv <old name> <new name>` -  переименовывает файл и добавляет его в index