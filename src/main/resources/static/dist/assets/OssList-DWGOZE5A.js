import{_ as q,a as R}from"./Tabulator.vue_vue_type_style_index_0_lang-D66nk68K.js";import{g as M,d as A,o as G,r as E,u as W,a as j,b as z,c as H,e as J}from"./oss-Drlwn8LI.js";import{d as U,u as I,c as K,w as $,o as D,r as m,a as r,b as s,t as S,e as b,v as Q,F as X,f as Y,g as w,h as u,i as O}from"./index-B5uLtbLQ.js";import"./request-xUpt38tu.js";const Z={class:"modal",id:"ossForm",tabindex:"-1"},ss={class:"modal-dialog modal-lg",role:"document"},es={class:"modal-content"},ts=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),os={class:"modal-body text-left py-4"},as={class:"mb-5"},ls={class:"mb-3"},ns=s("label",{class:"form-label required"},"OSS 타입",-1),cs={class:"grid gap-0 column-gap-3"},ds=s("option",{value:0},"OSS 타입을 선택하세요.",-1),is=["value"],rs={class:"row mb-3"},us=s("label",{class:"form-label required"},"OSS 명",-1),ms={class:"grid gap-0 column-gap-3"},vs={class:"mb-3"},ps=s("label",{class:"form-label required"},"OSS 설명",-1),_s={class:"mb-3"},bs=s("label",{class:"form-label required"},"URL",-1),fs={class:"row"},gs={class:"col"},hs=s("label",{class:"form-label required"},"OSS ID",-1),ws={class:"col"},ys=s("label",{class:"form-label required"},"OSS PW",-1),Os={class:"col mt-4"},Ss={key:1,class:"btn btn-success",style:{margin:"3px"}},xs={key:3,class:"btn btn-success"},ks={class:"modal-footer"},Cs=U({__name:"ossForm",props:{mode:{},ossIdx:{}},emits:["get-oss-list"],setup(y,{emit:f}){const l=I(),n=y,v=f,p=K(()=>n.ossIdx);$(p,async()=>{await i()}),$(()=>n.mode,async()=>{await g(n.mode)}),D(async()=>{await i()});const e=m({}),i=async()=>{if(n.mode==="new")e.value.ossTypeIdx=0,e.value.ossName="",e.value.ossDesc="",e.value.ossUrl="",e.value.ossUsername="",e.value.ossPassword="",c.value=!1,d.value=!1;else{const{data:o}=await M(n.ossIdx);e.value=o,e.value.ossPassword=V(e.value.ossPassword),c.value=!0,d.value=!0}},_=m([]),g=async o=>{try{if(o==="new"){const{data:t}=await j();_.value=t}else{const{data:t}=await z();_.value=t}}catch(t){console.log(t)}},x=()=>{e.value.ossPassword="",d.value=!1},c=m(!1),h=async()=>{const o={ossName:e.value.ossName,ossUrl:e.value.ossUrl,ossUsername:e.value.ossUsername},{data:t}=await A(o);t?l.error("이미 사용중인 이름입니다."):(l.success("사용 가능한 이름입니다."),c.value=!0)},d=m(!1),k=async()=>{const o={ossUrl:e.value.ossUrl,ossUsername:e.value.ossUsername,ossPassword:N(e.value.ossPassword),ossTypeIdx:e.value.ossTypeIdx},{data:t}=await G(o);t?(l.success("사용 가능한 OSS입니다."),d.value=!0):l.error("사용 불가능한 OSS입니다.")},L=()=>{c.value=!1},C=()=>{d.value=!1},P=async()=>{e.value.ossPassword=N(e.value.ossPassword),n.mode==="new"?await F().then(()=>{v("get-oss-list")}):await T().then(()=>{v("get-oss-list")}),i()},F=async()=>{const{data:o}=await E(e.value);o?l.success("등록되었습니다."):l.error("등록 할 수 없습니다.")},T=async()=>{const{data:o}=await W(e.value);o?l.success("등록되었습니다."):l.error("등록 할 수 없습니다.")},N=o=>btoa(o),V=o=>atob(o);return(o,t)=>(u(),r("div",Z,[s("div",ss,[s("div",es,[ts,s("div",os,[s("h3",as," OSS "+S(n.mode==="new"?"생성":"수정"),1),s("div",null,[s("div",ls,[ns,s("div",cs,[b(s("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.ossTypeIdx=a),class:"form-select p-2 g-col-12"},[ds,(u(!0),r(X,null,Y(_.value,(a,B)=>(u(),r("option",{value:a.ossTypeIdx,key:B},S(a.ossTypeName),9,is))),128))],512),[[Q,e.value.ossTypeIdx]])])]),s("div",rs,[us,s("div",ms,[b(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"OSS 명을 입력하세요","onUpdate:modelValue":t[1]||(t[1]=a=>e.value.ossName=a),onChange:L},null,544),[[w,e.value.ossName]])])]),s("div",vs,[ps,b(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"OSS 설명을 입력하세요","onUpdate:modelValue":t[2]||(t[2]=a=>e.value.ossDesc=a)},null,512),[[w,e.value.ossDesc]])]),s("div",_s,[bs,b(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"서버 URL을 입력하세요","onUpdate:modelValue":t[3]||(t[3]=a=>e.value.ossUrl=a),onFocus:C},null,544),[[w,e.value.ossUrl]])]),s("div",fs,[s("div",gs,[hs,b(s("input",{type:"text",class:"form-control p-2 g-col-11",placeholder:"OSS 아이디를 입력하세요","onUpdate:modelValue":t[4]||(t[4]=a=>e.value.ossUsername=a),onFocus:C},null,544),[[w,e.value.ossUsername]])]),s("div",ws,[ys,b(s("input",{type:"password",class:"form-control p-2 g-col-11",placeholder:"OSS 비밀번호를 입력하세요","onUpdate:modelValue":t[5]||(t[5]=a=>e.value.ossPassword=a),onClick:x,onFocus:C},null,544),[[w,e.value.ossPassword]])]),s("div",Os,[c.value?(u(),r("button",Ss,"중복 체크")):(u(),r("button",{key:0,class:"btn btn-primary chk",onClick:h,style:{margin:"3px"}},"중복 체크")),d.value?(u(),r("button",xs,"연결 확인")):(u(),r("button",{key:2,class:"btn btn-primary",onClick:k},"연결 확인"))])])])]),s("div",ks,[s("a",{href:"#",class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:t[6]||(t[6]=a=>i())}," Cancel "),s("a",{href:"#",class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:t[7]||(t[7]=a=>P())},S(n.mode==="new"?"생성":"수정"),1)])])])]))}}),Us={class:"modal",id:"deleteOss",tabindex:"-1"},Is={class:"modal-dialog modal-lg",role:"document"},Ns={class:"modal-content"},$s=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ds=s("div",{class:"modal-status bg-danger"},null,-1),Ls={class:"modal-body text-left py-4"},Ps=s("h3",{class:"mb-5"}," OSS 삭제 ",-1),Fs={class:"modal-footer"},Ts=s("a",{href:"#",class:"btn btn-link link-secondary","data-bs-dismiss":"modal"}," Cancel ",-1),Vs=U({__name:"deleteOss",props:{ossName:{},ossIdx:{}},emits:["get-oss-list"],setup(y,{emit:f}){const l=I(),n=y,v=f,p=async()=>{const{data:e}=await H(n.ossIdx);e?l.success("삭제되었습니다."):l.error("삭제하지 못했습니다."),v("get-oss-list")};return(e,i)=>(u(),r("div",Us,[s("div",Is,[s("div",Ns,[$s,Ds,s("div",Ls,[Ps,s("h4",null,S(n.ossName)+"을(를) 정말 삭제하시겠습니까?",1)]),s("div",Fs,[Ts,s("a",{href:"#",class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:i[0]||(i[0]=_=>p())}," 삭제 ")])])])]))}}),Bs={class:"card card-flush w-100"},Gs=U({__name:"OssList",setup(y){const f=I(),l=m([]),n=m([]);D(async()=>{i(),await v()});const v=async()=>{try{const{data:c}=await J();l.value=c}catch(c){console.log(c),f.error("데이터를 가져올 수 없습니다.")}},p=m(0),e=m(""),i=()=>{n.value=[{title:"OSS Name",field:"ossName",width:400},{title:"OSS Desc",field:"ossDesc",width:500},{title:"URL",field:"ossUrl",width:600},{title:"Action",width:400,formatter:_,cellClick:function(c,h){const d=c.target,k=d==null?void 0:d.getAttribute("id");p.value=h.getRow().getData().ossIdx,k==="edit-btn"?g.value="edit":e.value=h.getRow().getData().ossName}}]},_=()=>`
  <div>
    <button
      class='btn btn-primary d-none d-sm-inline-block mr-5'
      id='edit-btn'
      data-bs-toggle='modal' 
      data-bs-target='#ossForm'>
      수정
    </button>
    <button
      class='btn btn-danger d-none d-sm-inline-block'
      id='delete-btn'
      data-bs-toggle='modal' 
      data-bs-target='#deleteOss'>
      삭제
    </button>
  </div>`,g=m("new"),x=()=>{p.value=0,g.value="new"};return(c,h)=>(u(),r("div",Bs,[O(R,{"header-title":"OSS","new-btn-title":"New OSS","popup-flag":!0,"popup-target":"#ossForm",onClickNewBtn:x}),O(q,{columns:n.value,"table-data":l.value},null,8,["columns","table-data"]),O(Cs,{mode:g.value,"oss-idx":p.value,onGetOssList:v},null,8,["mode","oss-idx"]),O(Vs,{"oss-name":e.value,"oss-idx":p.value,onGetOssList:v},null,8,["oss-name","oss-idx"])]))}});export{Gs as default};
