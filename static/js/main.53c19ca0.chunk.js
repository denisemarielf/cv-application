(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pen-to-square-solid.fef2d7b9.svg"},function(e,t,a){e.exports=a.p+"static/media/trash-can-solid.35624c61.svg"},function(e,t,a){e.exports=a.p+"static/media/print-solid.bbc40c50.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/user.6e242cad.jpg"},function(e,t,a){e.exports=a.p+"static/media/add-photo.05b8e5c1.png"},function(e,t,a){e.exports=a.p+"static/media/arrow-back.4cf0f450.svg"},function(e,t,a){e.exports=a(28)},,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),l=a.n(s),r=(a(26),a(11)),o=a(1),c=a(2),u=a(4),m=a(3),d=a(5),p=a(6),h=a(7),E=a.n(h),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t;a.setState((t={},Object(p.a)(t,e.target.name,e.target.value),Object(p.a)(t,"id",E()()),Object(p.a)(t,"key",E()()),t))},a.handleSubmit=function(e){e.preventDefault(),a.props.getGeneralInfo(a.state),a.setState({name:"",surname:"",position:"",aboutMe:"",phone:"",email:"",id:"",key:""})},a.state={name:"",surname:"",position:"",aboutMe:"",phone:"",email:"",id:E()(),key:E()()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("h2",null,"Personal information"),i.a.createElement("label",null,"Name:",i.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.onChange})),i.a.createElement("label",null,"Surname:",i.a.createElement("input",{type:"text",name:"surname",value:this.state.surname,onChange:this.onChange})),i.a.createElement("label",null,"Position:",i.a.createElement("input",{type:"text",name:"position",value:this.state.position,onChange:this.onChange})),i.a.createElement("label",null,"About:",i.a.createElement("textarea",{type:"text",name:"aboutMe",value:this.state.aboutMe,onChange:this.onChange})),i.a.createElement("label",null,"Phone:",i.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:this.onChange})),i.a.createElement("label",null,"Email:",i.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.onChange})),i.a.createElement("button",null,"Add")))}}]),t}(i.a.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t;a.setState((t={},Object(p.a)(t,e.target.name,e.target.value),Object(p.a)(t,"id",E()()),Object(p.a)(t,"key",E()()),t))},a.handleSubmit=function(e){e.preventDefault(),a.props.getEducationInfo(a.state),a.setState({title:"",institution:"",id:"",key:""})},a.state={title:"",institution:"",date:"",id:E()(),key:E()()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("h2",null,"Educational experience"),i.a.createElement("label",null,"Title:",i.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.onChange})),i.a.createElement("label",null,"Institution:",i.a.createElement("input",{type:"text",name:"institution",value:this.state.institution,onChange:this.onChange})),i.a.createElement("label",null,"Date:",i.a.createElement("input",{type:"date",name:"date",value:this.state.date,onChange:this.onChange})),i.a.createElement("button",null,"Add")))}}]),t}(i.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t;"isCurrent"!==e.target.name?a.setState((t={},Object(p.a)(t,e.target.name,e.target.value),Object(p.a)(t,"id",E()()),Object(p.a)(t,"key",E()()),t)):a.setState({isCurrent:e.target.checked})},a.handleSubmit=function(e){e.preventDefault(),a.props.getExperienceInfo(a.state),a.setState({position:"",company:"",dateStart:"",dateFinish:"",isCurrent:!1,task1:"",task2:"",task3:"",id:"",key:""})},a.state={position:"",company:"",dateStart:"",dateFinish:"",isCurrent:!1,task1:"",task2:"",task3:"",id:E()(),key:E()()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("h2",null,"Practical experience"),i.a.createElement("label",null,"Position:",i.a.createElement("input",{type:"text",name:"position",value:this.state.position,onChange:this.onChange})),i.a.createElement("label",null,"Company:",i.a.createElement("input",{type:"text",name:"company",value:this.state.company,onChange:this.onChange})),i.a.createElement("label",{className:"checkbox"},i.a.createElement("input",{type:"checkbox",name:"isCurrent",value:this.state.isCurrent,onChange:this.onChange}),"Are you currently working here?"),i.a.createElement("label",null,"Date start:",i.a.createElement("input",{type:"date",name:"dateStart",value:this.state.dateStart,onChange:this.onChange})),!this.state.isCurrent&&i.a.createElement("label",null,"Date finish:",i.a.createElement("input",{type:"date",name:"dateFinish",value:this.state.dateFinish,onChange:this.onChange})),i.a.createElement("label",null,"Main tasks:"),i.a.createElement("label",null,i.a.createElement("input",{type:"text",name:"task1",value:this.state.task1,onChange:this.onChange})),i.a.createElement("label",null,i.a.createElement("input",{type:"text",name:"task2",value:this.state.task2,onChange:this.onChange})),i.a.createElement("label",null,i.a.createElement("input",{type:"text",name:"task3",value:this.state.task3,onChange:this.onChange})),i.a.createElement("button",null,"Add")))}}]),t}(i.a.Component),k=a(8),y=a.n(k),C=a(9),v=a.n(C),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setIsShown=function(e){a.setState({isShown:e})},a.setEditMode=function(e){a.setState({editMode:e})},a.setNewValues=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.state={isShown:!1,editMode:!1,titleEdit:"",institutionEdit:"",dateEdit:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"education-item",onMouseEnter:function(){return e.setIsShown(!0)},onMouseLeave:function(){return e.setIsShown(!1)},id:this.props.id,key:this.props.key},i.a.createElement("div",{className:"info-container"},!1===this.state.editMode&&i.a.createElement("h6",null,this.props.institution),this.state.editMode&&i.a.createElement("input",{name:"titleEdit",placeholder:"Add new title",onChange:this.setNewValues}),!1===this.state.editMode&&i.a.createElement("p",null,this.props.title,", ",this.props.date.slice(0,4)),this.state.editMode&&i.a.createElement("input",{name:"institutionEdit",placeholder:"Add new institution",onChange:this.setNewValues}),this.state.editMode&&i.a.createElement("input",{name:"dateEdit",type:"date",onChange:this.setNewValues}),!0===this.state.editMode&&i.a.createElement("button",{onClick:function(){e.props.edit(e.props.id,e.state.titleEdit,e.state.institutionEdit,e.state.dateEdit),e.setEditMode(!1)}},"Done")),i.a.createElement("div",{className:"button-container"},this.state.isShown&&!1===this.state.editMode&&i.a.createElement("button",{className:"button-edit",onClick:function(){return e.setEditMode(!0)}},i.a.createElement("img",{alt:"icon-edit",src:y.a})),this.state.isShown&&!1===this.state.editMode&&i.a.createElement("button",{className:"button-delete",onClick:function(){return e.props.delete(e.props.id)}},i.a.createElement("img",{alt:"icon-delete",src:v.a}))))}}]),t}(i.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.education.map(function(t){return i.a.createElement(S,{id:t.id,key:t.key,title:t.title,institution:t.institution,date:t.date,edit:e.props.edit,delete:e.props.delete})});return i.a.createElement(i.a.Fragment,null,t)}}]),t}(i.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setIsShown=function(e){a.setState({isShown:e})},a.setEditMode=function(e){a.setState({editMode:e})},a.setNewValues=function(e){"isCurrentEdit"!==e.target.name?a.setState(Object(p.a)({},e.target.name,e.target.value)):a.setState({isCurrentEdit:e.target.checked})},a.state={isShown:!1,editMode:!1,positionEdit:"",companyEdit:"",dateStartEdit:"",dateFinishEdit:"",isCurrentEdit:!1,task1Edit:"",task2Edit:"",task3Edit:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"experience-item",onMouseEnter:function(){return e.setIsShown(!0)},onMouseLeave:function(){return e.setIsShown(!1)},id:this.props.id,key:this.props.key},i.a.createElement("div",{className:"info-container"},!1===this.state.editMode&&i.a.createElement("h6",null,this.props.position),this.state.editMode&&i.a.createElement("input",{name:"positionEdit",placeholder:"Add new position",onChange:this.setNewValues}),!1===this.state.editMode&&i.a.createElement("p",null,this.props.company,", ",this.props.dateStart.slice(0,4)," - ",this.props.isCurrent?"present":this.props.dateFinish.slice(0,4)),this.state.editMode&&i.a.createElement("input",{name:"companyEdit",placeholder:"Add new company",onChange:this.setNewValues}),this.state.editMode&&i.a.createElement("input",{name:"dateStartEdit",placeholder:"Add new start date",type:"date",onChange:this.setNewValues}),this.state.editMode&&!this.state.isCurrentEdit&&i.a.createElement("input",{name:"dateFinishEdit",placeholder:"Add new finish date",type:"date",onChange:this.setNewValues}),this.state.editMode&&i.a.createElement("label",{className:"checkbox"},i.a.createElement("input",{name:"isCurrentEdit",type:"checkbox",onChange:this.setNewValues}),"Are you currently working here?"),!1===this.state.editMode&&i.a.createElement("ul",null,i.a.createElement("li",null,this.props.task1),i.a.createElement("li",null,this.props.task2),i.a.createElement("li",null,this.props.task3)),this.state.editMode&&i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{placeholder:"Task 1",name:"task1Edit",onChange:this.setNewValues}),i.a.createElement("input",{placeholder:"Task 2",name:"task2Edit",onChange:this.setNewValues}),i.a.createElement("input",{placeholder:"Task 3",name:"task3Edit",onChange:this.setNewValues})),!0===this.state.editMode&&i.a.createElement("button",{onClick:function(){e.props.edit(e.props.id,e.state.positionEdit,e.state.companyEdit,e.state.dateStartEdit,e.state.dateFinishEdit,e.state.isCurrentEdit,e.state.task1Edit,e.state.task2Edit,e.state.task3Edit),e.setEditMode(!1)}},"Done")),i.a.createElement("div",{className:"button-container"},this.state.isShown&&!1===this.state.editMode&&i.a.createElement("button",{className:"button-edit",onClick:function(){return e.setEditMode(!0)}},i.a.createElement("img",{alt:"icon-edit",src:y.a})),this.state.isShown&&!1===this.state.editMode&&i.a.createElement("button",{className:"button-delete",onClick:function(){return e.props.delete(e.props.id)}},i.a.createElement("img",{alt:"icon-delete",src:v.a}))))}}]),t}(i.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.experience.map(function(t){return i.a.createElement(j,{position:t.position,company:t.company,dateStart:t.dateStart,dateFinish:t.dateFinish,isCurrent:t.isCurrent,task1:t.task1,task2:t.task2,task3:t.task3,id:t.id,key:t.key,edit:e.props.edit,delete:e.props.delete})});return i.a.createElement(i.a.Fragment,null,t)}}]),t}(i.a.Component),M=a(15),N=a.n(M),x=a(16),I=a.n(x),A=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onChange=function(t){if(t.target.files&&t.target.files[0]){var a=t.target.files[0];e.setState({img:URL.createObjectURL(a)})}},e.setIsShown=function(){e.setState(function(e){return{isShown:!e.isShown}})},e.changeImage=function(e){e.preventDefault()},e.state={img:N.a,isShown:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"cv-container"},i.a.createElement("section",{className:"image-container",onMouseEnter:this.setIsShown,onMouseLeave:this.setIsShown},i.a.createElement("img",{src:this.state.img,alt:"profile"}),this.state.isShown&&i.a.createElement("form",{onSubmit:this.changeImage},i.a.createElement("input",{onChange:this.onChange,id:"file",type:"file",accept:"image/jpeg, image/png"}),i.a.createElement("label",{htmlFor:"file"},i.a.createElement("img",{id:"upload-img",src:I.a,alt:"icon-upload"})))),i.a.createElement("section",{className:"personal-information-container"},i.a.createElement("div",null,i.a.createElement("h5",null,"ABOUT ME"),this.props.general.aboutMe?i.a.createElement("p",{className:"about-paragraph"},this.props.general.aboutMe):i.a.createElement("p",{className:"about-paragraph"},"Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company\u2019s organizational needs, highlight their core competencies, and further their success.")),i.a.createElement("div",null,i.a.createElement("h5",null,"CONTACT DETAILS"),this.props.general.phone?i.a.createElement("p",null,"Phone: ",this.props.general.phone):i.a.createElement("p",null,"Phone: 123-456-789"),this.props.general.email?i.a.createElement("p",{className:"email"},"Email: ",this.props.general.email):i.a.createElement("p",{className:"email"},"Email: jane@doe.com"))),i.a.createElement("section",{className:"education-container"},i.a.createElement("h5",null,"EDUCATION"),this.props.displayEducation.props.data.education.length?this.props.displayEducation:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"info-container"},i.a.createElement("h6",null,"Amazing college"),i.a.createElement("p",null,"Software engineering, 2018")),i.a.createElement("div",{className:"info-container"},i.a.createElement("h6",null,"Amazing institution"),i.a.createElement("p",null,"Coding bootcamp, 2016")))),i.a.createElement("section",{className:"name-and-position-container"},this.props.general.name?i.a.createElement("h2",{className:"name-surname"},this.props.general.name.toUpperCase()):i.a.createElement("h2",{className:"name-surname"},"JANE"),this.props.general.surname?i.a.createElement("h2",{className:"name-surname"},this.props.general.surname.toUpperCase()):i.a.createElement("h2",{className:"name-surname"},"DOE"),this.props.general.position?i.a.createElement("h3",null,this.props.general.position.toUpperCase()):i.a.createElement("h3",null,"SOFTWARE ENGINEER")),i.a.createElement("section",{className:"experience-container"},i.a.createElement("h5",null,"EXPERIENCE"),this.props.displayExperience.props.data.experience.length?this.props.displayExperience:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"experience-item"},i.a.createElement("div",{className:"info-container"},i.a.createElement("h6",null,"Senior engineer"),i.a.createElement("p",null,"Facebook, 2020 - present"),i.a.createElement("ul",null,i.a.createElement("li",null,"Amazing task"),i.a.createElement("li",null,"Hard task"),i.a.createElement("li",null,"Incredible task")))),i.a.createElement("div",{className:"experience-item"},i.a.createElement("div",{className:"info-container"},i.a.createElement("h6",null,"Semi-senior engineer"),i.a.createElement("p",null,"Google, 2017 - 2020"),i.a.createElement("ul",null,i.a.createElement("li",null,"Amazing task"),i.a.createElement("li",null,"Hard task"),i.a.createElement("li",null,"Incredible task")))),i.a.createElement("div",{className:"experience-item"},i.a.createElement("div",{className:"info-container"},i.a.createElement("h6",null,"Junior engineer"),i.a.createElement("p",null,"Amazon, 2015 - 2017"),i.a.createElement("ul",null,i.a.createElement("li",null,"Amazing task"),i.a.createElement("li",null,"Hard task"),i.a.createElement("li",null,"Incredible task")))))))}}]),t}(i.a.Component),F=a(10),D=a.n(F),V=a(17),P=a.n(V),T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).getGeneralInfo=function(t){var a=t.name,n=t.surname,i=t.position,s=t.aboutMe,l=t.phone,r=t.email,o=t.id;t.key;e.setState(function(e){return{general:{name:a,surname:n,position:i,aboutMe:s,phone:l,email:r,id:o,key:o}}})},e.getEducationInfo=function(t){var a=t.title,n=t.institution,i=t.date,s=t.id;e.setState(function(e){return{education:[].concat(Object(r.a)(e.education),[{title:a,institution:n,date:i,id:s}])}})},e.getExperienceInfo=function(t){var a=t.position,n=t.company,i=t.dateStart,s=t.dateFinish,l=t.isCurrent,o=t.task1,c=t.task2,u=t.task3,m=t.id,d=t.key;e.setState(function(e){return{experience:[].concat(Object(r.a)(e.experience),[{position:a,company:n,dateStart:i,dateFinish:s,isCurrent:l,task1:o,task2:c,task3:u,id:m,key:d}])}})},e.editEducation=function(t,a,n,i){var s=e.state.education.map(function(e){return e.id===t?{title:a,institution:n,date:i,id:e.id}:e});e.setState({education:s})},e.editExperience=function(t,a,n,i,s,l,r,o,c){var u=e.state.experience.map(function(e){return e.id===t?{position:a,company:n,dateStart:i,dateFinish:s,isCurrent:l,task1:r,task2:o,task3:c,id:e.id}:e});e.setState({experience:u})},e.deleteEducationItem=function(t){var a=e.state.education.filter(function(e){return e.id!==t});e.setState({education:a})},e.deleteExperienceItem=function(t){var a=e.state.experience.filter(function(e){return e.id!==t});e.setState({experience:a})},e.setPrintMode=function(){e.setState(function(e){return{printMode:!e.printMode}})},e.setDisplay=function(){e.setState({display:"block"})},e.toggleDisplay=function(t){e.setState({display:t},function(){window.print()}),window.onafterprint=function(){e.setDisplay()}},e.print=function(){e.toggleDisplay("none")},e.state={general:{},education:[],experience:[],printMode:!1,display:"block"},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},!this.state.printMode&&i.a.createElement("header",null,i.a.createElement("h1",null,"Create your CV")),i.a.createElement("main",null,!this.state.printMode&&i.a.createElement("div",{className:"forms-container"},i.a.createElement(g,{getGeneralInfo:this.getGeneralInfo}),i.a.createElement(f,{getEducationInfo:this.getEducationInfo}),i.a.createElement(b,{getExperienceInfo:this.getExperienceInfo})),i.a.createElement(A,{general:this.state.general,displayEducation:i.a.createElement(O,{data:this.state,edit:this.editEducation,delete:this.deleteEducationItem}),displayExperience:i.a.createElement(w,{data:this.state,edit:this.editExperience,delete:this.deleteExperienceItem})}),i.a.createElement("div",{className:"print-button-container"},!this.state.printMode&&i.a.createElement("button",{onClick:this.setPrintMode},i.a.createElement("img",{src:D.a,alt:"print-logo"})),this.state.printMode&&i.a.createElement("button",{style:{display:this.state.display},onClick:this.setPrintMode},i.a.createElement("img",{src:P.a,alt:"return-logo"})),this.state.printMode&&i.a.createElement("button",{style:{display:this.state.display},onClick:function(){return e.print()}},i.a.createElement("img",{src:D.a,alt:"print-logo"})))))}}]),t}(i.a.Component);l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)))}],[[18,2,1]]]);
//# sourceMappingURL=main.53c19ca0.chunk.js.map