---
publish: false
---

```dataviewjs
dv.taskList(dv.pages().file.tasks.where(t => !t.completed));
``` 

This page was last modified at `$= dv.current().file.mtime`.
