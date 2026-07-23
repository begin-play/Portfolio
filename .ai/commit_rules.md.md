## Git Standard Branch Commit Message Conventions

---
#### Syntax:
 
```
<type>(<optional scope>): <description>
empty line as separator
<optional body>
empty line as separator
<optional footer>
```
---
#### type:
Must be one of the following:

* build: Changes that affect the build system or external dependencies.
* ci: Changes to our CI configuration files.
* docs: Documentation only changes.
* feat: A new feature.
* fix: A bug fix.
* perf: A code change that improves performance.
* refactor: A code change that is more legible.
* style: more life prettifying.
* test: Adding missing tests or correcting existing tests.
* chore: Other changes that don't modify src or test files.

---
#### footer:
footer can contain a BREAKING CHANGE and references to issues that this commit closes.
```
BREAKING CHANGE: <description of breaking change>
```
```
TESTING: <how to test the change>
```
```
closes: #<issue-number>
```

```
fixes: #<issue-number>
```
```
ref: <JIRA issue or something else this refers to>
```
```
addresses: <comment or issue number>
```
---

```
Tested-by: Name <email>
```
```
Acked-by: Name <email>
```
```
Signed-off-by: Name <email>
```
```
Co-authored-by: Name <email>
```

---
#### misc:

- ! : to mark important breaking changes anywhere in the commit message.
> eg: feat(core)!: remove deprecated code
