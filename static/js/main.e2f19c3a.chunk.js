(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);a(25);var r=a(10),n=a(0),o=a.n(n),i=a(3),c=a(5),s=a.n(c),l=a(1),f={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"District 4",image:"/photo-1515036551567-bf1198cccc35.jpeg",aspect:1.51,text:"Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."},{offset:2,factor:2,header:"Diamond Road",image:"/photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."},{offset:3,factor:2.25,header:"Catalina",image:"/ph1.jpg",aspect:1.5037,text:"The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from \u2014 back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."},{offset:4,factor:2,header:"Building 21",image:"/ph3.jpg",aspect:.665,text:"We\u2019ve found that the people whose EEG doesn\u2019t show any alpha-wave activity when they\u2019re relaxed aren\u2019t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."},{offset:5,factor:1.75,header:"Sector 8",image:"/photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won\u2019t be compelled by one\u2019s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."},{offset:7,factor:1.05,header:"The Factory",image:"/photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"Education and enlightenment."}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:.15,pos:new l.Vector3,scale:.6,factor:1.8},{x:2,offset:1.1,pos:new l.Vector3,scale:.8,factor:2.1},{x:-5,offset:2,pos:new l.Vector3,scale:.8,factor:2.5},{x:0,offset:3.2,pos:new l.Vector3,scale:.8,factor:1.75},{x:0,offset:4,pos:new l.Vector3,scale:.8,factor:2.5},{x:2,offset:5.5,pos:new l.Vector3,scale:1.25,factor:.85},{x:-5,offset:7,pos:new l.Vector3,scale:.8,factor:2},{x:0,offset:8,pos:new l.Vector3,scale:1.5,factor:6}],top:Object(n.createRef)()},u=Object(n.createContext)(0);function m(e){var t=e.children,a=e.offset,c=e.factor,l=Object(r.a)(e,["children","offset","factor"]),m=h(),d=m.offset,p=m.sectionHeight,v=Object(n.useRef)();return a=void 0!==a?a:d,Object(i.d)((function(){var e=v.current.position.y,t=f.top.current;v.current.position.y=s()(e,t/f.zoom*c,.1)})),o.a.createElement(u.Provider,{value:a},o.a.createElement("group",Object.assign({},l,{position:[0,-p*a*c,0]}),o.a.createElement("group",{ref:v},t)))}function h(){var e=f.sections,t=f.pages,a=f.zoom,r=Object(i.f)(),o=r.size,c=r.viewport,s=Object(n.useContext)(u),l=c.width,m=c.height,h=l/a,d=m/a,p=o.width<700;return{viewport:c,offset:s,viewportWidth:l,viewportHeight:m,canvasWidth:h,canvasHeight:d,mobile:p,margin:h*(p?.2:.1),contentMaxWidth:h*(p?.8:.6),sectionHeight:d*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var d=a(17),p=a.n(d);function v(e){var t=e.children,a=e.size,c=void 0===a?1:a,u=e.left,m=e.right,h=e.top,d=e.bottom,v=e.color,g=void 0===v?"white":v,b=e.opacity,y=void 0===b?1:b,w=e.height,x=void 0===w?.01:w,E=(e.layers,e.font),j=void 0===E?"/MOONGET_Heavy.blob":E,O=Object(r.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","font"]),M=Object(i.e)(l.FontLoader,j),N=p()((function(){return new Promise((function(e){return e(new l.TextBufferGeometry(t,{font:M,size:1,height:x,curveSegments:32}))}))}),[t]),k=Object(n.useCallback)((function(e){var t=new l.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=u?0:m?-t.x:-t.x/2,e.position.y=h?0:d?-t.y:-t.y/2}),[u,m,h,d]),_=Object(n.useRef)(),z=f.top.current;return Object(i.d)((function(){_.current.shift=s()(_.current.shift,(f.top.current-z)/100,.1),z=f.top.current})),o.a.createElement("group",Object.assign({},O,{scale:[c,c,.1]}),o.a.createElement("mesh",{geometry:N,onUpdate:k,frustumCulled:!1},o.a.createElement("customMaterial",{ref:_,attach:"material",color:g,transparent:!0,opacity:y})))}var g=function(e){var t=e.text,a=e.size,n=void 0===a?1:a,i=e.lineHeight,c=void 0===i?1:i,s=e.position,l=void 0===s?[0,0,0]:s,f=Object(r.a)(e,["text","size","lineHeight","position"]);return t.split("\n").map((function(e,t){return o.a.createElement(v,Object.assign({key:t,size:n},f,{position:[l[0],l[1]-t*c,l[2]],children:e}))}))},b=a(4),y=a(22),w=a(6),x=a(9),E=a(7),j=a(8),O=function(e){function t(){return Object(w.a)(this,t),Object(x.a)(this,Object(E.a)(t).call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:l.BackSide}))}return Object(j.a)(t,e),t}(l.ShaderMaterial),M=function(e){function t(e){return Object(w.a)(this,t),Object(x.a)(this,Object(E.a)(t).call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}}))}return Object(j.a)(t,e),t}(l.ShaderMaterial),N=new l.Object3D;function k(){var e=Object(i.e)(y.a,"/diamond.glb");Object(n.useMemo)((function(){return e.scene.children[0].geometry.center()}),[]);var t=Object(i.f)(),a=t.size,r=t.gl,c=t.scene,u=t.camera,m=t.clock,d=h(),p=d.contentMaxWidth,v=d.sectionHeight,g=d.mobile,w=Object(n.useRef)(),x=r.getPixelRatio(),E=Object(n.useMemo)((function(){var e=new l.WebGLRenderTarget(a.width*x,a.height*x),t=new l.WebGLRenderTarget(a.width*x,a.height*x);return[e,t,new O,new M({envMap:e.texture,backfaceMap:t.texture,resolution:[a.width*x,a.height*x]})]}),[a,x]),j=Object(b.a)(E,4),k=j[0],_=j[1],z=j[2],D=j[3];return Object(i.d)((function(){f.diamonds.forEach((function(e,t){var a=m.getElapsedTime()/2,r=e.x,n=e.offset,o=e.scale,i=e.factor,c=p/35*o;e.pos.set(g?0:r,s()(e.pos.y,-v*n*i+f.top.current/f.zoom*i,.1),0),N.position.copy(e.pos),t===f.diamonds.length-1?N.rotation.set(0,a,0):N.rotation.set(a,a,a),N.scale.set(c,c,c),N.updateMatrix(),w.current.setMatrixAt(t,N.matrix),w.current.instanceMatrix.needsUpdate=!0})),r.autoClear=!1,u.layers.set(0),r.setRenderTarget(k),r.clearColor(),r.render(c,u),r.clearDepth(),u.layers.set(1),w.current.material=z,r.setRenderTarget(_),r.clearDepth(),r.render(c,u),u.layers.set(0),r.setRenderTarget(null),r.render(c,u),r.clearDepth(),u.layers.set(1),w.current.material=D,r.render(c,u)}),1),o.a.createElement("instancedMesh",{ref:w,layers:1,args:[null,null,f.diamonds.length],position:[0,0,50]},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[1].geometry)))}var _=a(23),z=function(e){function t(){return Object(w.a)(this,t),Object(x.a)(this,Object(E.a)(t).call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 1.5) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new l.Color("white")}}}))}return Object(j.a)(t,e),Object(_.a)(t,[{key:"scale",set:function(e){this.uniforms.scale.value=e},get:function(){return this.uniforms.scale.value}},{key:"shift",set:function(e){this.uniforms.shift.value=e},get:function(){return this.uniforms.shift.value}},{key:"map",set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e},get:function(){return this.uniforms.texture.value}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),t}(l.ShaderMaterial);Object(i.c)({CustomMaterial:z});var D=Object(n.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"white":a,l=e.shift,u=void 0===l?1:l,m=e.opacity,d=void 0===m?1:m,p=e.args,v=e.map,g=Object(r.a)(e,["color","shift","opacity","args","map"]),b=h(),y=b.viewportHeight,w=b.offsetFactor,x=Object(n.useRef)(),E=f.top.current;return Object(i.d)((function(){var e=f.pages,t=f.top;x.current.scale=s()(x.current.scale,w-t.current/((e-1)*y),.1),x.current.shift=s()(x.current.shift,(t.current-E)/u,.1),E=t.current})),o.a.createElement("mesh",Object.assign({ref:t},g),o.a.createElement("planeBufferGeometry",{attach:"geometry",args:p}),o.a.createElement("customMaterial",{ref:x,attach:"material",color:c,map:v,transparent:!0,opacity:d}))})),T=a(12);function S(){var e=Object(n.useRef)();return Object(i.d)((function(){return e.current.material.opacity=s()(e.current.material.opacity,0,.025)})),o.a.createElement(D,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function C(e){var t=e.image,a=e.index,r=e.offset,n=e.factor,c=e.header,s=e.aspect,l=e.text,u=h(),d=u.contentMaxWidth,p=u.canvasWidth,g=u.margin,b=u.mobile,y=s<1&&!b?.65:1,w=(p-d*y-g)/2,x=d*f.zoom*y,E=!(a%2),j=a%2?"#66ff66":"#66ff50";return o.a.createElement(m,{factor:n,offset:r},o.a.createElement("group",{position:[E?-w:w,0,0]},o.a.createElement(D,{map:t,args:[1,1,32,32],shift:75,size:y,aspect:s,scale:[d*y,d*y/s,1],frustumCulled:!1}),o.a.createElement(i.b,{style:{width:x/(b?1:2),textAlign:E?"left":"right"},position:[E||b?-d*y/2:0,-d*y/2/s-.4,1]},o.a.createElement("div",{tabIndex:a},l)),o.a.createElement(v,{left:E,right:!E,size:.04*d,color:j,top:!0,position:[(E?-d:d)*y/2,d*y/s/2+.5,-1]},c),o.a.createElement(m,{factor:.2},o.a.createElement(v,{opacity:.5,size:.1*d,color:"#1A1E2A",position:[(E?d:-d)/2*y,d*y/s/1.5,-10]},"0"+(a+1)))))}function F(){var e=Object(i.e)(l.TextureLoader,f.paragraphs.map((function(e){return e.image})));Object(n.useMemo)((function(){return e.forEach((function(e){return e.minFilter=l.LinearFilter}))}),[e]);var t=h(),a=t.contentMaxWidth,r=t.canvasWidth,c=t.canvasHeight,s=t.mobile;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{factor:1,offset:0},o.a.createElement(m,{factor:1.2},o.a.createElement(v,{left:!0,size:.08*a,position:[-a/3.2,.5,-1],color:"#66ff66"},"INFECTED")),o.a.createElement(m,{factor:1},o.a.createElement(i.b,{position:[-a/3.2,.08*-a+.25,-1]},"It was the year 2076.",s?o.a.createElement("br",null):" ","The substance had arrived."))),o.a.createElement(m,{factor:1.2,offset:5.7},o.a.createElement(g,{top:!0,left:!0,size:.15*a,lineHeight:a/5,position:[-a/3.5,0,-1],color:"#66ff66",text:"four\nzero\nfour"})),f.paragraphs.map((function(t,a){return o.a.createElement(C,Object.assign({key:a,index:a},t,{image:e[a]}))})),f.stripes.map((function(e,t){var a=e.offset,r=e.color,n=e.height;return o.a.createElement(m,{key:t,factor:-1.5,offset:a},o.a.createElement(D,{args:[50,n,32,32],shift:-4,color:r,rotation:[0,0,Math.PI/8],position:[0,0,-10]}))})),o.a.createElement(m,{factor:1.25,offset:8},o.a.createElement(i.b,{className:"bottom-left",position:[-r/2,-c/2,0]},o.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},"Culture is your friend."))))}a.n(T).a.render(o.a.createElement((function(){var e=Object(n.useRef)(),t=function(e){return f.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){t({target:e.current})}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{className:"canvas",concurrent:!0,pixelRatio:1,orthographic:!0,camera:{zoom:f.zoom,position:[0,0,500]}},o.a.createElement(n.Suspense,{fallback:o.a.createElement(i.b,{center:!0,className:"loading",children:"Loading..."})},o.a.createElement(F,null),o.a.createElement(k,null),o.a.createElement(S,null))),o.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},new Array(f.sections).fill().map((function(e,t){return o.a.createElement("div",{key:t,id:"0"+t,style:{height:"".concat(f.pages/f.sections*100,"vh")}})}))),o.a.createElement("div",{className:"frame"},o.a.createElement("h1",{className:"frame__title"},"Parallax Scroll and Fade-in"),o.a.createElement("div",{className:"frame__nav"},o.a.createElement("a",{className:"frame__link",href:"#00",children:"intro"}),o.a.createElement("a",{className:"frame__link",href:"#01",children:"01"}),o.a.createElement("a",{className:"frame__link",href:"#02",children:"02"}),o.a.createElement("a",{className:"frame__link",href:"#03",children:"03"}),o.a.createElement("a",{className:"frame__link",href:"#04",children:"04"}),o.a.createElement("a",{className:"frame__link",href:"#05",children:"05"}),o.a.createElement("a",{className:"frame__link",href:"#07",children:"06"}))))}),null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e2f19c3a.chunk.js.map