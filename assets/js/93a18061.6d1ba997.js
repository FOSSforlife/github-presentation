"use strict";(self.webpackChunkgithub_presentation=self.webpackChunkgithub_presentation||[]).push([[462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={hide_table_of_contents:!0},o="Pull Requests",i={unversionedId:"pull-requests",id:"pull-requests",title:"Pull Requests",description:"When you're ready to merge your changes into the project, you'll need to make a pull request. When you make a pull request, for example from the feature-1 branch to the develop branch, you are requesting_** for the develop branch to pull_ in changes from feature-1.",source:"@site/docs/pull-requests.md",sourceDirName:".",slug:"/pull-requests",permalink:"/github-presentation/docs/pull-requests",draft:!1,editUrl:"https://github.com/FOSSforlife/github-presentation/blob/main/docs/pull-requests.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Branches",permalink:"/github-presentation/docs/branches"},next:{title:"Pause",permalink:"/github-presentation/docs/pause-after-prs"}},s={},u=[{value:"Mergeability",id:"mergeability",level:2},{value:"Ready to Merge",id:"ready-to-merge",level:3},{value:"Merge Conflicts",id:"merge-conflicts",level:3},{value:"Resolving a Merge Conflict",id:"resolving-a-merge-conflict",level:4},{value:"Example Flow",id:"example-flow",level:2}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pull-requests"},"Pull Requests"),(0,a.kt)("p",null,"When you're ready to merge your changes into the project, you'll need to make a pull request. When you make a pull request, for example from the ",(0,a.kt)("inlineCode",{parentName:"p"},"feature-1")," branch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," branch, you are ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"requesting"))," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," branch to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"pull"))," in changes from ",(0,a.kt)("inlineCode",{parentName:"p"},"feature-1"),"."),(0,a.kt)("p",null,"To do so, the branches must be mergeable."),(0,a.kt)("h2",{id:"mergeability"},"Mergeability"),(0,a.kt)("h3",{id:"ready-to-merge"},"Ready to Merge"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"No Conflicts",src:r(9487).Z,width:"742",height:"258"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the base branch has had no changes, your pull request is mergeable."),(0,a.kt)("li",{parentName:"ul"},"If the base branch has had changes, but they are on different lines or different files than your changes, you must pull the changes into your branch and then your pull request will be mergeable.")),(0,a.kt)("h3",{id:"merge-conflicts"},"Merge Conflicts"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conflicts",src:r(9177).Z,width:"1024",height:"480"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the base branch has had changes in the same places as your changes, you must resolve the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts"},"merge conflicts")," and then your pull request will be mergeable.")),(0,a.kt)("h4",{id:"resolving-a-merge-conflict"},"Resolving a Merge Conflict"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://code.visualstudio.com/assets/docs/editor/versioncontrol/merge-conflict.png",alt:"Resolving merge conflicts in Visual Studio Code"})),(0,a.kt)("h2",{id:"example-flow"},"Example Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start a feature by creating a new branch called ",(0,a.kt)("inlineCode",{parentName:"li"},"feature-1")," off of the ",(0,a.kt)("inlineCode",{parentName:"li"},"develop")," branch."),(0,a.kt)("li",{parentName:"ol"},"Make your code changes inside this ",(0,a.kt)("inlineCode",{parentName:"li"},"feature-1")," branch."),(0,a.kt)("li",{parentName:"ol"},"Prepare for your pull request by making sure the ",(0,a.kt)("inlineCode",{parentName:"li"},"feature-1")," branch is up-to-date and resolving any merge conflicts."),(0,a.kt)("li",{parentName:"ol"},"Once ready, a pull request to merge ",(0,a.kt)("inlineCode",{parentName:"li"},"feature-1")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"develop"),"."),(0,a.kt)("li",{parentName:"ol"},"Once approved, the code owners will merge ",(0,a.kt)("inlineCode",{parentName:"li"},"feature-1")," into ",(0,a.kt)("inlineCode",{parentName:"li"},"develop"),", and delete the ",(0,a.kt)("inlineCode",{parentName:"li"},"feature-1")," branch."),(0,a.kt)("li",{parentName:"ol"},"The code owners will test the new code on the ",(0,a.kt)("inlineCode",{parentName:"li"},"develop")," branch."),(0,a.kt)("li",{parentName:"ol"},"Once they're confident that the code is in good shape, they will merge the changes from ",(0,a.kt)("inlineCode",{parentName:"li"},"develop")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," by making another pull request.")))}p.isMDXComponent=!0},9177:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/conflicts-4a1d43959c35c8baffa7aa02939d43fc.png"},9487:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/no-conflicts-981cde75913483ba8d8a9977f60f162a.png"}}]);