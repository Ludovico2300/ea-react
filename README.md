# What is this project?

This is a academy project for Develhope, realized for didactic purpose. it's a replica of Electronic Arts website, developed in an agile environment with a team of 5 student using React with Typescript.

Components name have every word capitalized and not separated by anything so for example TextWrap.tsx

We are partially using git naming convention so for commit is groupType(optionalScope): small description for branch is groupType/small-description

commit example:
- add: ...
- fix: ...
- dev: ...

Workflow

There is 1 person that manage the project assigning tasks to the other member of the group, and everything that is made, changed or deleted, is comunicated to this manager so that the manager is the one worrying about the organization and that everything is running smoothly and do code review and apply eventual fixes meanwhile the other member continue with whatever task get assigned this way there is zero risk of running into conflict and no one depends on the work of someone else, this makes us agile.

We also have a Discord group for comunicating important thing and we usually meet on discord every while
About the structure

We have an src folder where all the components are written, inside of it there is an index.css importing tailwind, an index.tsx that initialize a root for react and render browserRouter and inside of it a Routing component in which will be inserted all routes of the pages for the website. outside of the Routing we insert all components that doesn't need to get rerendered because they are always present (for example the footer and the top navbar)

Then we have a components folder inside of which there are 3 folder, config core and shared. into core goes components that are used for part of the pages that are outside the routing (like footer), into shared goes component that are reused multiple times from different components and into config goes all config file (and interfaces) that are used to define the content of a page this same logic (less config) is used into contexts and hooks folder also.

Now returning to src we have a pages folder, into this folder goes folders that contains all the components of a single page and his subpages. for example src/pages/homepage inside of it Homepage.tsx HeaderSection.tsx etc...

If you want to save and use an image locally we are saving those into the public/assets folder, inside there are core, global and pages folder. into core goes images relative to core components. into global goes images usable by everyone and into pages goes images specific to a single page.
Some good practice

when writing a component for props define an interface called Props and use it to type props
never push changes directly into develop or master branch but rather do a new branch and then make a pull request to develop
always use tailwind classes as much as possible. so, unless you necessarily need to write normal css, always use tailwind
comment your code to make it more readable, also use prettier extension for VSC to format your code
