(()=>{var Mu="169";var w0=0,cd=1,E0=2;var Tc=1,bu=2,xi=3,si=0,Bt=1,$t=2,$i=0,ar=1,ur=2,ld=3,hd=4,T0=5,xs=100,A0=101,R0=102,C0=103,I0=104,P0=200,L0=201,D0=202,N0=203,th=204,nh=205,U0=206,O0=207,z0=208,B0=209,k0=210,F0=211,H0=212,G0=213,V0=214,ih=0,sh=1,rh=2,fr=3,oh=4,ah=5,ch=6,lh=7,Ap=0,W0=1,X0=2,qi=0,$0=1,q0=2,Y0=3,Ac=4,K0=5,Z0=6,J0=7,ud="attached",j0="detached",Rp=300,dr=301,pr=302,hh=303,uh=304,Rc=306,jn=1e3,_i=1001,vo=1002,nn=1003,Su=1004;var nr=1005;var xn=1006,fo=1007;var ii=1008;var Mi=1009,Cp=1010,Ip=1011,Mo=1012,wu=1013,_s=1014,Jn=1015,Uo=1016,Eu=1017,Tu=1018,mr=1020,Pp=35902,Lp=1021,Dp=1022,Un=1023,Np=1024,Up=1025,cr=1026,gr=1027,Au=1028,Ru=1029,Op=1030,Cu=1031;var Iu=1033,ka=33776,Fa=33777,Ha=33778,Ga=33779,fh=35840,dh=35841,ph=35842,mh=35843,gh=36196,xh=37492,yh=37496,_h=37808,vh=37809,Mh=37810,bh=37811,Sh=37812,wh=37813,Eh=37814,Th=37815,Ah=37816,Rh=37817,Ch=37818,Ih=37819,Ph=37820,Lh=37821,Va=36492,Dh=36494,Nh=36495,zp=36283,Uh=36284,Oh=36285,zh=36286,Q0=2200,eg=2201,tg=2202,xr=2300,yr=2301,yl=2302,ir=2400,sr=2401,Xa=2402,Pu=2500,ng=2501,Bp=0,Cc=1,Oo=2,ig=3200,sg=3201;var kp=0,rg=1,Vi="",bt="srgb",Yt="srgb-linear",Lu="display-p3",Ic="display-p3-linear",$a="linear",wt="srgb",qa="rec709",Ya="p3";var zs=7680;var fd=519,og=512,ag=513,cg=514,Fp=515,lg=516,hg=517,ug=518,fg=519,Bh=35044;var dd="300 es",vi=2e3,Ka=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,po=Math.PI/180,_r=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function Du(i,e){return(i%e+e)%e}function dg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function pg(i,e,t){return i!==e?(t-i)/(e-i):0}function mo(i,e,t){return(1-t)*i+t*e}function mg(i,e,t,n){return mo(i,e,1-Math.exp(-t*n))}function gg(i,e=1){return e-Math.abs(Du(i,e*2)-e)}function xg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _g(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vg(i,e){return i+Math.random()*(e-i)}function Mg(i){return i*(.5-Math.random())}function bg(i){i!==void 0&&(pd=i);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sg(i){return i*po}function wg(i){return i*_r}function Eg(i){return(i&i-1)===0&&i!==0}function Tg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ag(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Hp={DEG2RAD:po,RAD2DEG:_r,generateUUID:On,clamp:Xt,euclideanModulo:Du,mapLinear:dg,inverseLerp:pg,lerp:mo,damp:mg,pingpong:gg,smoothstep:xg,smootherstep:yg,randInt:_g,randFloat:vg,randFloatSpread:Mg,seededRandom:bg,degToRad:Sg,radToDeg:wg,isPowerOfTwo:Eg,ceilPowerOfTwo:Tg,floorPowerOfTwo:Ag,setQuaternionFromProperEuler:Rg,normalize:mt,denormalize:Zn},ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],M=s[1],_=s[4],v=s[7],P=s[2],T=s[5],E=s[8];return r[0]=o*x+a*M+c*P,r[3]=o*p+a*_+c*T,r[6]=o*m+a*v+c*E,r[1]=l*x+u*M+f*P,r[4]=l*p+u*_+f*T,r[7]=l*m+u*v+f*E,r[2]=h*x+d*M+g*P,r[5]=h*p+d*_+g*T,r[8]=h*m+d*v+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_l=new Ze;function Gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cg(){let i=bo("canvas");return i.style.display="block",i}var md={};function Wa(i){i in md||(md[i]=!0,console.warn(i))}function Ig(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var gd=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xd=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[Yt]:{transfer:$a,primaries:qa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[bt]:{transfer:wt,primaries:qa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ic]:{transfer:$a,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(xd),fromReference:i=>i.applyMatrix3(gd)},[Lu]:{transfer:wt,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(xd),fromReference:i=>i.applyMatrix3(gd).convertLinearToSRGB()}},Dg=new Set([Yt,Ic]),at={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Dg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Qr[e].toReference,s=Qr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Qr[i].primaries},getTransfer:function(i){return i===Vi?$a:Qr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Qr[e].luminanceCoefficients)}};function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,kh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=bo("canvas")),Bs.width=e.width,Bs.height=e.height;let n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=lr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ng=0,Za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ml(s[o].image)):r.push(Ml(s[o]))}else r=Ml(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ug=0,qt=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_i,s=_i,r=xn,o=ii,a=Un,c=Mi,l=i.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=On(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Rp;qt.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(d+1)/2,P=(m+1)/2,T=(u+h)/4,E=(f+x)/4,I=(g+p)/4;return _>v&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=E/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=E/r,s=I/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fh=class extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ja=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hh=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==h||l!==d||u!==g){let p=1-a,m=c*h+l*d+u*g+f*x,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let P=Math.sqrt(_),T=Math.atan2(P,m*M);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}let v=a*M;if(c=c*p+h*v,l=l*p+d*v,u=u*p+g*v,f=f*p+x*v,p===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=P,l*=P,u*=P,f*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+c*d-l*h,e[t+1]=c*g+u*h+l*f-a*d,e[t+2]=l*g+u*d+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bl=new C,yd=new sn,zn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),aa.subVectors(this.max,eo),ks.subVectors(e.a,eo),Fs.subVectors(e.b,eo),Hs.subVectors(e.c,eo),zi.subVectors(Fs,ks),Bi.subVectors(Hs,Fs),hs.subVectors(ks,Hs);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-hs.z,hs.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,hs.z,0,-hs.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-hs.y,hs.x,0];return!Sl(t,ks,Fs,Hs,aa)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,ks,Fs,Hs,aa))?!1:(ca.crossVectors(zi,Bi),t=[ca.x,ca.y,ca.z],Sl(t,ks,Fs,Hs,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new C,new C,new C,new C,new C,new C,new C,new C],qn=new C,oa=new zn,ks=new C,Fs=new C,Hs=new C,zi=new C,Bi=new C,hs=new C,eo=new C,aa=new C,ca=new C,us=new C;function Sl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Og=new zn,to=new C,wl=new C,Cn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Og.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);let t=to.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(to,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(wl)),this.expandByPoint(to.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new C,El=new C,la=new C,ki=new C,Tl=new C,ha=new C,Al=new C,vr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){El.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(El);let r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=ki.dot(this.direction),c=-ki.dot(la),l=ki.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(El).addScaledVector(la,h),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){Tl.subVectors(t,e),ha.subVectors(n,e),Al.crossVectors(Tl,ha);let o=this.direction.dot(Al),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let c=a*this.direction.dot(ha.crossVectors(ki,ha));if(c<0)return null;let l=a*this.direction.dot(Tl.cross(ki));if(l<0||c+l>o)return null;let u=-a*ki.dot(Al);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class i{constructor(e,t,n,s,r,o,a,c,l,u,f,h,d,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,f,h,d,g,x,p)}set(e,t,n,s,r,o,a,c,l,u,f,h,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=h-x*l,t[9]=-a*c,t[2]=x-h*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;t[0]=h+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;t[0]=h-x*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-d,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+g,t[10]=h-x*f}else if(e.order==="XZY"){let h=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,Bg)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Fi.crossVectors(n,An),Fi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Fi.crossVectors(n,An)),Fi.normalize(),ua.crossVectors(An,Fi),s[0]=Fi.x,s[4]=ua.x,s[8]=An.x,s[1]=Fi.y,s[5]=ua.y,s[9]=An.y,s[2]=Fi.z,s[6]=ua.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],M=n[3],_=n[7],v=n[11],P=n[15],T=s[0],E=s[4],I=s[8],B=s[12],y=s[1],S=s[5],N=s[9],O=s[13],G=s[2],Z=s[6],W=s[10],re=s[14],q=s[3],be=s[7],ve=s[11],Te=s[15];return r[0]=o*T+a*y+c*G+l*q,r[4]=o*E+a*S+c*Z+l*be,r[8]=o*I+a*N+c*W+l*ve,r[12]=o*B+a*O+c*re+l*Te,r[1]=u*T+f*y+h*G+d*q,r[5]=u*E+f*S+h*Z+d*be,r[9]=u*I+f*N+h*W+d*ve,r[13]=u*B+f*O+h*re+d*Te,r[2]=g*T+x*y+p*G+m*q,r[6]=g*E+x*S+p*Z+m*be,r[10]=g*I+x*N+p*W+m*ve,r[14]=g*B+x*O+p*re+m*Te,r[3]=M*T+_*y+v*G+P*q,r[7]=M*E+_*S+v*Z+P*be,r[11]=M*I+_*N+v*W+P*ve,r[15]=M*B+_*O+v*re+P*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*c*f-s*l*f-r*a*h+n*l*h+s*a*d-n*c*d)+x*(+t*c*d-t*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+p*(+t*l*f-t*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+m*(-s*a*u-t*c*f+t*a*h+s*o*f-n*o*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],M=f*p*l-x*h*l+x*c*d-a*p*d-f*c*m+a*h*m,_=g*h*l-u*p*l-g*c*d+o*p*d+u*c*m-o*h*m,v=u*x*l-g*f*l+g*a*d-o*x*d-u*a*m+o*f*m,P=g*f*c-u*x*c-g*a*h+o*x*h+u*a*p-o*f*p,T=t*M+n*_+s*v+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return e[0]=M*E,e[1]=(x*h*r-f*p*r-x*s*d+n*p*d+f*s*m-n*h*m)*E,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*m+n*c*m)*E,e[3]=(f*c*r-a*h*r-f*s*l+n*h*l+a*s*d-n*c*d)*E,e[4]=_*E,e[5]=(u*p*r-g*h*r+g*s*d-t*p*d-u*s*m+t*h*m)*E,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*E,e[7]=(o*h*r-u*c*r+u*s*l-t*h*l-o*s*d+t*c*d)*E,e[8]=v*E,e[9]=(g*f*r-u*x*r-g*n*d+t*x*d+u*n*m-t*f*m)*E,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*m+t*a*m)*E,e[11]=(u*a*r-o*f*r-u*n*l+t*f*l+o*n*d-t*a*d)*E,e[12]=P*E,e[13]=(u*x*s-g*f*s+g*n*h-t*x*h-u*n*p+t*f*p)*E,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*p-t*a*p)*E,e[15]=(o*f*s-u*a*s+u*n*c-t*f*c-o*n*h+t*a*h)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,x=o*u,p=o*f,m=a*f,M=c*l,_=c*u,v=c*f,P=n.x,T=n.y,E=n.z;return s[0]=(1-(x+m))*P,s[1]=(d+v)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(h+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(p-M)*E,s[10]=(1-(h+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Gs.set(s[0],s[1],s[2]).length(),o=Gs.set(s[4],s[5],s[6]).length(),a=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);let l=1/r,u=1/o,f=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=vi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),d,g;if(a===vi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ka)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=vi){let c=this.elements,l=1/(t-e),u=1/(n-s),f=1/(o-r),h=(t+e)*l,d=(n+s)*u,g,x;if(a===vi)g=(o+r)*f,x=-2*f;else if(a===Ka)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gs=new C,Yn=new ke,zg=new C(0,0,0),Bg=new C(1,1,1),Fi=new C,ua=new C,An=new C,_d=new ke,vd=new sn,Bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kg=0,Md=new C,Vs=new sn,di=new ke,fa=new C,no=new C,Fg=new C,Hg=new sn,bd=new C(1,0,0),Sd=new C(0,1,0),wd=new C(0,0,1),Ed={type:"added"},Gg={type:"removed"},Ws={type:"childadded",child:null},Rl={type:"childremoved",child:null},Et=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Bn,n=new sn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ze}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(wd,e)}translateOnAxis(e,t){return Md.copy(e).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(no,fa,this.up):di.lookAt(fa,no,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(di),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new C(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new C,pi=new C,Cl=new C,mi=new C,Xs=new C,$s=new C,Td=new C,Il=new C,Pl=new C,Ll=new C,Dl=new ht,Nl=new ht,Ul=new ht,Wi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),pi.subVectors(n,t),Cl.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(pi),c=Kn.dot(Cl),l=pi.dot(pi),u=pi.dot(Cl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),pi.subVectors(e,t),Kn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Kn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,n),$s.subVectors(r,n),Il.subVectors(e,n);let c=Xs.dot(Il),l=$s.dot(Il);if(c<=0&&l<=0)return t.copy(n);Pl.subVectors(e,s);let u=Xs.dot(Pl),f=$s.dot(Pl);if(u>=0&&f<=u)return t.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Xs,o);Ll.subVectors(e,r);let d=Xs.dot(Ll),g=$s.dot(Ll);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector($s,a);let p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Td.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Td,a);let m=1/(p+x+h);return o=x*m,a=h*m,t.copy(n).addScaledVector(Xs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Du(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ol(o,r,e+1/3),this.g=Ol(o,r,e),this.b=Ol(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=Vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return at.fromWorkingColorSpace(tn.copy(this),e),Math.round(Xt(tn.r*255,0,255))*65536+Math.round(Xt(tn.g*255,0,255))*256+Math.round(Xt(tn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=bt){at.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(da);let n=mo(Hi.h,da.h,t),s=mo(Hi.s,da.s,t),r=mo(Hi.l,da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new he;he.NAMES=Vp;var Vg=0,yn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ar,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==th&&(n.blendSrc=this.blendSrc),this.blendDst!==nh&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pt=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new C,pa=new ye,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}};var Qa=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ec=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wg=0,Nn=new ke,zl=new Et,qs=new C,Rn=new zn,io=new zn,Wt=new C,dt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?ec:Qa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Rn.min,io.min),Rn.expandByPoint(Wt),Wt.addVectors(Rn.max,io.max),Rn.expandByPoint(Wt)):(Rn.expandByPoint(io.min),Rn.expandByPoint(io.max))}Rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(e,l),Wt.add(qs)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new C,c[I]=new C;let l=new C,u=new C,f=new C,h=new ye,d=new ye,g=new ye,x=new C,p=new C;function m(I,B,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,B),f.fromBufferAttribute(n,y),h.fromBufferAttribute(r,I),d.fromBufferAttribute(r,B),g.fromBufferAttribute(r,y),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(S),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(S),a[I].add(x),a[B].add(x),a[y].add(x),c[I].add(p),c[B].add(p),c[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,B=M.length;I<B;++I){let y=M[I],S=y.start,N=y.count;for(let O=S,G=S+N;O<G;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let _=new C,v=new C,P=new C,T=new C;function E(I){P.fromBufferAttribute(s,I),T.copy(P);let B=a[I];_.copy(B),_.sub(P.multiplyScalar(P.dot(B))).normalize(),v.crossVectors(T,B);let S=v.dot(c[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,S)}for(let I=0,B=M.length;I<B;++I){let y=M[I],S=y.start,N=y.count;for(let O=S,G=S+N;O<G;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,f=new C;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let m=0;m<u;m++)h[g++]=l[d++]}return new gt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ad=new ke,fs=new vr,ma=new Cn,Rd=new C,ga=new C,xa=new C,ya=new C,Bl=new C,_a=new C,Cd=new C,va=new C,le=class extends Et{constructor(e=new dt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Bl.fromBufferAttribute(f,e),o?_a.addScaledVector(Bl,u):_a.addScaledVector(Bl.sub(t),u))}t.add(_a)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(ma.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ma,Rd)===null||fs.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Ad),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,P=_;v<P;v+=3){let T=a.getX(v),E=a.getX(v+1),I=a.getX(v+2);s=Ma(this,m,e,n,l,u,f,T,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let M=a.getX(p),_=a.getX(p+1),v=a.getX(p+2);s=Ma(this,o,e,n,l,u,f,M,_,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),_=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,P=_;v<P;v+=3){let T=v,E=v+1,I=v+2;s=Ma(this,m,e,n,l,u,f,T,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let M=p,_=p+1,v=p+2;s=Ma(this,o,e,n,l,u,f,M,_,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Xg(i,e,t,n,s,r,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===si,a),c===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(va);return l<t.near||l>t.far?null:{distance:l,point:va.clone(),object:i}}function Ma(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ga),i.getVertexPosition(c,xa),i.getVertexPosition(l,ya);let u=Xg(i,e,t,n,ga,xa,ya,Cd);if(u){let f=new C;Wi.getBarycoord(Cd,ga,xa,ya,f),s&&(u.uv=Wi.getInterpolatedAttribute(s,a,c,l,f,new ye)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,a,c,l,f,new ye)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,c,l,f,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new C,materialIndex:0};Wi.getNormal(ga,xa,ya,h.normal),u.face=h,u.barycoord=f}return u}var In=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function g(x,p,m,M,_,v,P,T,E,I,B){let y=v/E,S=P/I,N=v/2,O=P/2,G=T/2,Z=E+1,W=I+1,re=0,q=0,be=new C;for(let ve=0;ve<W;ve++){let Te=ve*S-O;for(let Je=0;Je<Z;Je++){let fe=Je*y-N;be[x]=fe*M,be[p]=Te*_,be[m]=G,l.push(be.x,be.y,be.z),be[x]=0,be[p]=0,be[m]=T>0?1:-1,u.push(be.x,be.y,be.z),f.push(Je/E),f.push(1-ve/I),re+=1}}for(let ve=0;ve<I;ve++)for(let Te=0;Te<E;Te++){let Je=h+Te+Z*ve,fe=h+Te+Z*(ve+1),k=h+(Te+1)+Z*(ve+1),J=h+(Te+1)+Z*ve;c.push(Je,fe,J),c.push(fe,k,J),q+=6}a.addGroup(d,q,B),d+=q,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Mr(i[t]);for(let s in n)e[s]=n[s]}return e}function $g(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var qg={clone:Mr,merge:un},Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=$g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},tc=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new C,Id=new ye,Pd=new ye,Ot=class extends tc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Pd),t.subVectors(Pd,Id)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,Ks=1,Gh=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Ys,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Ys,Ks,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Ys,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Ys,Ks,e,t);a.layers=this.layers,this.add(a);let c=new Ot(Ys,Ks,e,t);c.layers=this.layers,this.add(c);let l=new Ot(Ys,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nc=class extends qt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vh=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new In(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:$i});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=xn),new Gh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},kl=new C,Zg=new C,Jg=new Ze,yi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=kl.subVectors(n,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jg.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new Cn,ba=new C,So=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],M=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,h-l,p-d,v-m).normalize(),n[1].setComponents(c+r,h+l,p+d,v+m).normalize(),n[2].setComponents(c+o,h+u,p+g,v+M).normalize(),n[3].setComponents(c-o,h-u,p-g,v-M).normalize(),n[4].setComponents(c-a,h-f,p-x,v-_).normalize(),t===vi)n[5].setComponents(c+a,h+f,p+x,v+_).normalize();else if(t===Ka)n[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jg(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var wi=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=e/a,h=t/c,d=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let M=m*h-o;for(let _=0;_<l;_++){let v=_*f-r;g.push(v,-M,0),x.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let _=M+l*m,v=M+l*(m+1),P=M+1+l*(m+1),T=M+1+l*m;d.push(_,v,T),d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,__=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Qg,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:cx,begin_vertex:lx,beginnormal_vertex:hx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:Mx,common:bx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Tx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Rx,colorspace_fragment:Cx,colorspace_pars_fragment:Ix,envmap_fragment:Px,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Ox,fog_pars_vertex:zx,fog_fragment:Bx,fog_pars_fragment:kx,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Wx,lights_toon_fragment:$x,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:Kx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:jx,lights_fragment_maps:Qx,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:cy,metalnessmap_fragment:ly,metalnessmap_pars_fragment:hy,morphinstance_vertex:uy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:_y,normal_vertex:vy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:wy,iridescence_pars_fragment:Ey,opaque_fragment:Ty,packing:Ay,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Iy,dithering_pars_fragment:Py,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Uy,shadowmap_vertex:Oy,shadowmask_pars_fragment:zy,skinbase_vertex:By,skinning_pars_vertex:ky,skinning_vertex:Fy,skinnormal_vertex:Hy,specularmap_fragment:Gy,specularmap_pars_fragment:Vy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:$y,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:jy,background_frag:Qy,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:c_,equirect_frag:l_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:x_,meshnormal_vert:y_,meshnormal_frag:__,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:b_,meshphysical_frag:S_,meshtoon_vert:w_,meshtoon_frag:E_,points_vert:T_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:I_,sprite_frag:P_},xe={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ni={basic:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new he(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new he(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([xe.points,xe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([xe.common,xe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([xe.sprite,xe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:un([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:un([xe.lights,xe.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Sa={r:0,b:0,g:0},ps=new Bn,L_=new ke;function D_(i,e,t,n,s,r,o){let a=new he(0),c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function x(M){let _=!1,v=g(M);v===null?m(a,c):v&&v.isColor&&(m(v,1),_=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===Rc)?(u===void 0&&(u=new le(new In(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Mr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ps.copy(_.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(ps)),u.material.toneMapped=at.getTransfer(v.colorSpace)!==wt,(f!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new le(new wi(2,2),new Pn({name:"BackgroundMaterial",uniforms:Mr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=at.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,_){M.getRGB(Sa,Wp(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:x,addToRenderList:p}}function N_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(y,S,N,O,G){let Z=!1,W=f(O,N,S);r!==W&&(r=W,l(r.object)),Z=d(y,O,N,G),Z&&g(y,O,N,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(y,S,N,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,S,N){let O=N.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let Z=G[S.id];Z===void 0&&(Z={},G[S.id]=Z);let W=Z[O];return W===void 0&&(W=h(c()),Z[O]=W),W}function h(y){let S=[],N=[],O=[];for(let G=0;G<t;G++)S[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,S,N,O){let G=r.attributes,Z=S.attributes,W=0,re=N.getAttributes();for(let q in re)if(re[q].location>=0){let ve=G[q],Te=Z[q];if(Te===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(y,S,N,O){let G={},Z=S.attributes,W=0,re=N.getAttributes();for(let q in re)if(re[q].location>=0){let ve=Z[q];ve===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));let Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),G[q]=Te,W++}r.attributes=G,r.attributesNum=W,r.index=O}function x(){let y=r.newAttributes;for(let S=0,N=y.length;S<N;S++)y[S]=0}function p(y){m(y,0)}function m(y,S){let N=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;N[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),G[y]!==S&&(i.vertexAttribDivisor(y,S),G[y]=S)}function M(){let y=r.newAttributes,S=r.enabledAttributes;for(let N=0,O=S.length;N<O;N++)S[N]!==y[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function _(y,S,N,O,G,Z,W){W===!0?i.vertexAttribIPointer(y,S,N,G,Z):i.vertexAttribPointer(y,S,N,O,G,Z)}function v(y,S,N,O){x();let G=O.attributes,Z=N.getAttributes(),W=S.defaultAttributeValues;for(let re in Z){let q=Z[re];if(q.location>=0){let be=G[re];if(be===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),be!==void 0){let ve=be.normalized,Te=be.itemSize,Je=e.get(be);if(Je===void 0)continue;let fe=Je.buffer,k=Je.type,J=Je.bytesPerElement,ce=k===i.INT||k===i.UNSIGNED_INT||be.gpuType===wu;if(be.isInterleavedBufferAttribute){let de=be.data,Be=de.stride,Le=be.offset;if(de.isInstancedInterleavedBuffer){for(let Ye=0;Ye<q.locationSize;Ye++)m(q.location+Ye,de.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ye=0;Ye<q.locationSize;Ye++)p(q.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Ye=0;Ye<q.locationSize;Ye++)_(q.location+Ye,Te/q.locationSize,k,ve,Be*J,(Le+Te/q.locationSize*Ye)*J,ce)}else{if(be.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)m(q.location+de,be.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let de=0;de<q.locationSize;de++)p(q.location+de);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let de=0;de<q.locationSize;de++)_(q.location+de,Te/q.locationSize,k,ve,Te*J,Te/q.locationSize*de*J,ce)}}else if(W!==void 0){let ve=W[re];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(q.location,ve);break;case 3:i.vertexAttrib3fv(q.location,ve);break;case 4:i.vertexAttrib4fv(q.location,ve);break;default:i.vertexAttrib1fv(q.location,ve)}}}}M()}function P(){I();for(let y in n){let S=n[y];for(let N in S){let O=S[N];for(let G in O)u(O[G].object),delete O[G];delete S[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let S=n[y.id];for(let N in S){let O=S[N];for(let G in O)u(O[G].object),delete O[G];delete S[N]}delete n[y.id]}function E(y){for(let S in n){let N=n[S];if(N[y.id]===void 0)continue;let O=N[y.id];for(let G in O)u(O[G].object),delete O[G];delete N[y.id]}}function I(){B(),o=!0,r!==s&&(r=s,l(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function U_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function c(l,u,f,h){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<h.length;x++)t.update(g,n,h[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function O_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Mi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Jn&&!I)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function z_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new yi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let M=r?0:n,_=M*4,v=m.clippingState||null;c.value=v,v=u(g,h,_,d);for(let P=0;P!==_;++P)v[P]=t[P];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=d+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function B_(i){let e=new WeakMap;function t(o,a){return a===hh?o.mapping=dr:a===uh&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hh||a===uh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Vh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var br=class extends tc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rr=4,Ld=[.125,.215,.35,.446,.526,.582],ys=20,Fl=new br,Dd=new he,Hl=null,Gl=0,Vl=0,Wl=!1,gs=(1+Math.sqrt(5))/2,Zs=1/gs,Nd=[new C(-gs,Zs,0),new C(gs,Zs,0),new C(-Zs,0,gs),new C(Zs,0,gs),new C(0,gs,-Zs),new C(0,gs,Zs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Hl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Gl,Vl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Uo,format:Un,colorSpace:Yt,depthBuffer:!1},s=Ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=F_(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,s){let a=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Dd),u.toneMapping=qi,u.autoClear=!1;let d=new Pt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new le(new In,d),x=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,x=!0):(d.color.copy(Dd),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;wa(s,M*_,m>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===dr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;wa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Fl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nd[(s-r-1)%Nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new le(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):ys;p>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ys}`);let m=[],M=0;for(let E=0;E<ys;++E){let I=E/x,B=Math.exp(-I*I/2);m.push(B),E===0?M+=B:E<p&&(M+=2*B)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;let v=this._sizeLods[s],P=3*v*(s>_-rr?s-_+rr:0),T=4*(this._cubeSize-v);wa(t,P,T,3*v,2*v),c.setRenderTarget(t),c.render(f,Fl)}};function k_(i){let e=[],t=[],n=[],s=i,r=i-rr+1+Ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-rr?c=Ld[o-i+rr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,p=2,m=1,M=new Float32Array(x*g*d),_=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let T=0;T<d;T++){let E=T%3*2/3-1,I=T>2?0:-1,B=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];M.set(B,x*g*T),_.set(h,p*g*T);let y=[T,T,T,T,T,T];v.set(y,m*g*T)}let P=new dt;P.setAttribute("position",new gt(M,x)),P.setAttribute("uv",new gt(_,p)),P.setAttribute("faceIndex",new gt(v,m)),e.push(P),s>rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ud(i,e,t){let n=new Si(i,e,t);return n.texture.mapping=Rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function F_(i,e,t){let n=new Float32Array(ys),s=new C(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Od(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zd(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===hh||c===uh,u=c===dr||c===pr;if(l||u){let f=e.get(a),h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new vs(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new vs(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function G_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function V_(i,e,t,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let x=h.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){let P=M[_+0],T=M[_+1],E=M[_+2];h.push(P,T,T,E,E,P)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let P=_+0,T=_+1,E=_+2;h.push(P,T,T,E,E,P)}}else return;let p=new(Gp(h)?ec:Qa)(h,1);p.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function W_(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function f(h,d,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,x,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M];for(let M=0;M<x.length;M++)t.update(m,n,x[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function X_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $_(i,e,t){let n=new WeakMap,s=new ht;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let B=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*P*4*f),E=new Ja(T,v,P,f);E.type=Jn,E.needsUpdate=!0;let I=_*4;for(let y=0;y<f;y++){let S=p[y],N=m[y],O=M[y],G=v*P*4*y;for(let Z=0;Z<S.count;Z++){let W=Z*I;d===!0&&(s.fromBufferAttribute(S,Z),T[G+W+0]=s.x,T[G+W+1]=s.y,T[G+W+2]=s.z,T[G+W+3]=0),g===!0&&(s.fromBufferAttribute(N,Z),T[G+W+4]=s.x,T[G+W+5]=s.y,T[G+W+6]=s.z,T[G+W+7]=0),x===!0&&(s.fromBufferAttribute(O,Z),T[G+W+8]=s.x,T[G+W+9]=s.y,T[G+W+10]=s.z,T[G+W+11]=O.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new ye(v,P)},n.set(a,h),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function q_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ic=class extends qt{constructor(e,t,n,s,r,o,a,c,l,u=cr){if(u!==cr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=_s),n===void 0&&u===gr&&(n=mr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$p=new qt,Bd=new ic(1,1),qp=new Ja,Yp=new Hh,Kp=new nc,kd=[],Fd=[],Hd=new Float32Array(16),Gd=new Float32Array(9),Vd=new Float32Array(4);function Nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pc(i,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function j_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),Ft(t,n)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Gd.set(n),i.uniformMatrix3fv(this.addr,!1,Gd),Ft(t,n)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Hd.set(n),i.uniformMatrix4fv(this.addr,!1,Hd),Ft(t,n)}}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bd.compareFunction=Fp,r=Bd):r=$p,t.setTexture2D(e||r,s)}function hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yp,s)}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kp,s)}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qp,s)}function dv(i){switch(i){case 5126:return Y_;case 35664:return K_;case 35665:return Z_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}function pv(i,e){i.uniform1fv(this.addr,e)}function mv(i,e){let t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function gv(i,e){let t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function xv(i,e){let t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){let t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _v(i,e){let t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vv(i,e){let t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mv(i,e){i.uniform1iv(this.addr,e)}function bv(i,e){i.uniform2iv(this.addr,e)}function Sv(i,e){i.uniform3iv(this.addr,e)}function wv(i,e){i.uniform4iv(this.addr,e)}function Ev(i,e){i.uniform1uiv(this.addr,e)}function Tv(i,e){i.uniform2uiv(this.addr,e)}function Av(i,e){i.uniform3uiv(this.addr,e)}function Rv(i,e){i.uniform4uiv(this.addr,e)}function Cv(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$p,r[o])}function Iv(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yp,r[o])}function Pv(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kp,r[o])}function Lv(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qp,r[o])}function Dv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return yv;case 35675:return _v;case 35676:return vv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},$h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function Wd(i,e){i.seq.push(e),i.map[e.id]=e}function Nv(i,e,t){let n=i.name,s=n.length;for(Xl.lastIndex=0;;){let r=Xl.exec(n),o=Xl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wd(t,l===void 0?new Wh(a,i,e):new Xh(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new $h(a),Wd(t,f)),t=f}}}var hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Nv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Uv=37297,Ov=0;function zv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Bv(i){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i),n;switch(e===t?n="":e===Ya&&t===qa?n="LinearDisplayP3ToLinearSRGB":e===qa&&t===Ya&&(n="LinearSRGBToLinearDisplayP3"),i){case Yt:case Ic:return[n,"LinearTransferOETF"];case bt:case Lu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $d(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zv(i.getShaderSource(e),o)}else return s}function kv(i,e){let t=Bv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fv(i,e){let t;switch(e){case $0:t="Linear";break;case q0:t="Reinhard";break;case Y0:t="Cineon";break;case Ac:t="ACESFilmic";break;case Z0:t="AgX";break;case J0:t="Neutral";break;case K0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ea=new C;function Hv(){at.getLuminanceCoefficients(Ea);let i=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function Vv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function uo(i){return i!==""}function qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(Xv,qv)}var $v=new Map;function qv(i,e){let t=Ke[e];if(t===void 0){let n=$v.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qh(t)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(Yv,Kv)}function Kv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case W0:e="ENVMAP_BLENDING_MIX";break;case X0:e="ENVMAP_BLENDING_ADD";break}return e}function eM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Zv(t),l=Jv(t),u=jv(t),f=Qv(t),h=eM(t),d=Gv(t),g=Vv(r),x=s.createProgram(),p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`)):(p=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),m=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==qi?Fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),o=qh(o),o=qd(o,t),o=Yd(o,t),a=qh(a),a=qd(a,t),a=Yd(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+p+o,v=M+m+a,P=Xd(s,s.VERTEX_SHADER,_),T=Xd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(S){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(T).trim(),Z=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,T);else{let re=$d(s,P,"vertex"),q=$d(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+re+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||G==="")&&(W=!1);W&&(S.diagnostics={runnable:Z,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(P),s.deleteShader(T),I=new hr(s,x),B=Wv(s,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let B;this.getAttributes=function(){return B===void 0&&E(this),B};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Uv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var nM=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kh(e),t.set(e,n)),n}},Kh=class{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}};function iM(i,e,t,n,s,r,o){let a=new ja,c=new Yh,l=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,N,O,G){let Z=O.fog,W=G.geometry,re=y.isMeshStandardMaterial?O.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||re),be=q&&q.mapping===Rc?q.image.height:null,ve=x[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let Te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Je=Te!==void 0?Te.length:0,fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let k,J,ce,de;if(ve){let gn=ni[ve];k=gn.vertexShader,J=gn.fragmentShader}else k=y.vertexShader,J=y.fragmentShader,c.update(y),ce=c.getVertexShaderID(y),de=c.getFragmentShaderID(y);let Be=i.getRenderTarget(),Le=G.isInstancedMesh===!0,Ye=G.isBatchedMesh===!0,nt=!!y.map,$e=!!y.matcap,L=!!q,ln=!!y.aoMap,je=!!y.lightMap,st=!!y.bumpMap,Oe=!!y.normalMap,vt=!!y.displacementMap,Fe=!!y.emissiveMap,A=!!y.metalnessMap,b=!!y.roughnessMap,V=y.anisotropy>0,Q=y.clearcoat>0,oe=y.dispersion>0,ee=y.iridescence>0,Ae=y.sheen>0,me=y.transmission>0,Se=V&&!!y.anisotropyMap,Qe=Q&&!!y.clearcoatMap,F=Q&&!!y.clearcoatNormalMap,j=Q&&!!y.clearcoatRoughnessMap,Y=ee&&!!y.iridescenceMap,ie=ee&&!!y.iridescenceThicknessMap,ae=Ae&&!!y.sheenColorMap,Ge=Ae&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,rt=!!y.specularColorMap,D=!!y.specularIntensityMap,we=me&&!!y.transmissionMap,K=me&&!!y.thicknessMap,ne=!!y.gradientMap,ge=!!y.alphaMap,Me=y.alphaTest>0,ot=!!y.alphaHash,Nt=!!y.extensions,mn=qi;y.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(mn=i.toneMapping);let lt={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:J,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Yt,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:$e,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:be,aoMap:ln,lightMap:je,bumpMap:st,normalMap:Oe,displacementMap:d&&vt,emissiveMap:Fe,normalMapObjectSpace:Oe&&y.normalMapType===rg,normalMapTangentSpace:Oe&&y.normalMapType===kp,metalnessMap:A,roughnessMap:b,anisotropy:V,anisotropyMap:Se,clearcoat:Q,clearcoatMap:Qe,clearcoatNormalMap:F,clearcoatRoughnessMap:j,dispersion:oe,iridescence:ee,iridescenceMap:Y,iridescenceThicknessMap:ie,sheen:Ae,sheenColorMap:ae,sheenRoughnessMap:Ge,specularMap:Ce,specularColorMap:rt,specularIntensityMap:D,transmission:me,transmissionMap:we,thicknessMap:K,gradientMap:ne,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:Me,alphaHash:ot,combine:y.combine,mapUv:nt&&p(y.map.channel),aoMapUv:ln&&p(y.aoMap.channel),lightMapUv:je&&p(y.lightMap.channel),bumpMapUv:st&&p(y.bumpMap.channel),normalMapUv:Oe&&p(y.normalMap.channel),displacementMapUv:vt&&p(y.displacementMap.channel),emissiveMapUv:Fe&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:b&&p(y.roughnessMap.channel),anisotropyMapUv:Se&&p(y.anisotropyMap.channel),clearcoatMapUv:Qe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:F&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(y.sheenRoughnessMap.channel),specularMapUv:Ce&&p(y.specularMap.channel),specularColorMapUv:rt&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:we&&p(y.transmissionMap.channel),thicknessMapUv:K&&p(y.thicknessMap.channel),alphaMapUv:ge&&p(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Oe||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(nt||ge),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:mn,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$t,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Nt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&y.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function M(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(S,y),v(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){let S=x[y.type],N;if(S){let O=ni[S];N=qg.clone(O.uniforms)}else N=y.uniforms;return N}function T(y,S){let N;for(let O=0,G=u.length;O<G;O++){let Z=u[O];if(Z.cacheKey===S){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new tM(i,S,y,r),u.push(N)),N}function E(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function I(y){c.remove(y)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:P,acquireProgram:T,releaseProgram:E,releaseShaderCache:I,programs:u,dispose:B}}function sM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,d,g,x,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=p),e++,m}function a(f,h,d,g,x,p){let m=o(f,h,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(f,h,d,g,x,p){let m=o(f,h,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(f,h){t.length>1&&t.sort(f||rM),n.length>1&&n.sort(h||Jd),s.length>1&&s.sort(h||Jd)}function u(){for(let f=e,h=i.length;f<h;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function oM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new jd,i.set(n,[o])):s>=r.length?(o=new jd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function aM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new he};break;case"SpotLight":t={position:new C,direction:new C,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function cM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lM=0;function hM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uM(i){let e=new aM,t=cM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new ke,o=new ke;function a(l){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,M=0,_=0,v=0,P=0,T=0,E=0;l.sort(hM);for(let B=0,y=l.length;B<y;B++){let S=l[B],N=S.color,O=S.intensity,G=S.distance,Z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=N.r*O,f+=N.g*O,h+=N.b*O;else if(S.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(S.sh.coefficients[W],O);E++}else if(S.isDirectionalLight){let W=e.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let re=S.shadow,q=t.get(S);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=S.shadow.matrix,M++}n.directional[d]=W,d++}else if(S.isSpotLight){let W=e.get(S);W.position.setFromMatrixPosition(S.matrixWorld),W.color.copy(N).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(S.angle),W.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),W.decay=S.decay,n.spot[x]=W;let re=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,re.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=re.matrix,S.castShadow){let q=t.get(S);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=Z,v++}x++}else if(S.isRectAreaLight){let W=e.get(S);W.color.copy(N).multiplyScalar(O),W.halfWidth.set(S.width*.5,0,0),W.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=W,p++}else if(S.isPointLight){let W=e.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),W.distance=S.distance,W.decay=S.decay,S.castShadow){let re=S.shadow,q=t.get(S);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=W,g++}else if(S.isHemisphereLight){let W=e.get(S);W.skyColor.copy(S.color).multiplyScalar(O),W.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==M||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=M,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=E,n.version=lM++)}function c(l,u){let f=0,h=0,d=0,g=0,x=0,p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let _=l[m];if(_.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Qd(i){let e=new uM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Qd(i),e.set(s,[a])):r>=o.length?(a=new Qd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Zh=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jh=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mM(i,e,t){let n=new So,s=new ye,r=new ye,o=new ht,a=new Zh({depthPacking:sg}),c=new Jh,l={},u=t.maxTextureSize,f={[si]:Bt,[Bt]:si,[$t]:$t},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:dM,fragmentShader:pM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let m=this.type;this.render=function(T,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let B=i.getRenderTarget(),y=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending($i),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=m!==xi&&this.type===xi,G=m===xi&&this.type!==xi;for(let Z=0,W=T.length;Z<W;Z++){let re=T[Z],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let be=q.getFrameExtents();if(s.multiply(be),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/be.x),s.x=r.x*be.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/be.y),s.y=r.y*be.y,q.mapSize.y=r.y)),q.map===null||O===!0||G===!0){let Te=this.type!==xi?{minFilter:nn,magFilter:nn}:{};q.map!==null&&q.map.dispose(),q.map=new Si(s.x,s.y,Te),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ve=q.getViewportCount();for(let Te=0;Te<ve;Te++){let Je=q.getViewport(Te);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),N.viewport(o),q.updateMatrices(re,Te),n=q.getFrustum(),v(E,I,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===xi&&M(q,I),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(B,y,S)};function M(T,E){let I=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,I,h,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,I,d,x,null)}function _(T,E,I,B){let y=null,S=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)y=S;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=y.uuid,O=E.uuid,G=l[N];G===void 0&&(G={},l[N]=G);let Z=G[O];Z===void 0&&(Z=y.clone(),G[O]=Z,E.addEventListener("dispose",P)),y=Z}if(y.visible=E.visible,y.wireframe=E.wireframe,B===xi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=I}return y}function v(T,E,I,B,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let O=e.update(T),G=T.material;if(Array.isArray(G)){let Z=O.groups;for(let W=0,re=Z.length;W<re;W++){let q=Z[W],be=G[q.materialIndex];if(be&&be.visible){let ve=_(T,be,B,y);T.onBeforeShadow(i,T,E,I,O,ve,q),i.renderBufferDirect(I,null,O,ve,T,q),T.onAfterShadow(i,T,E,I,O,ve,q)}}}else if(G.visible){let Z=_(T,G,B,y);T.onBeforeShadow(i,T,E,I,O,Z,null),i.renderBufferDirect(I,null,O,Z,T,null),T.onAfterShadow(i,T,E,I,O,Z,null)}}let N=T.children;for(let O=0,G=N.length;O<G;O++)v(N[O],E,I,B,y)}function P(T){T.target.removeEventListener("dispose",P);for(let I in l){let B=l[I],y=T.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}var gM={[ih]:sh,[rh]:ch,[oh]:lh,[fr]:ah,[sh]:ih,[ch]:rh,[lh]:oh,[ah]:fr};function xM(i){function e(){let D=!1,we=new ht,K=null,ne=new ht(0,0,0,0);return{setMask:function(ge){K!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Me,ot,Nt,mn){mn===!0&&(ge*=Nt,Me*=Nt,ot*=Nt),we.set(ge,Me,ot,Nt),ne.equals(we)===!1&&(i.clearColor(ge,Me,ot,Nt),ne.copy(we))},reset:function(){D=!1,K=null,ne.set(-1,0,0,0)}}}function t(){let D=!1,we=!1,K=null,ne=null,ge=null;return{setReversed:function(Me){we=Me},setTest:function(Me){Me?ce(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Me){K!==Me&&!D&&(i.depthMask(Me),K=Me)},setFunc:function(Me){if(we&&(Me=gM[Me]),ne!==Me){switch(Me){case ih:i.depthFunc(i.NEVER);break;case sh:i.depthFunc(i.ALWAYS);break;case rh:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case oh:i.depthFunc(i.EQUAL);break;case ah:i.depthFunc(i.GEQUAL);break;case ch:i.depthFunc(i.GREATER);break;case lh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Me}},setLocked:function(Me){D=Me},setClear:function(Me){ge!==Me&&(i.clearDepth(Me),ge=Me)},reset:function(){D=!1,K=null,ne=null,ge=null}}}function n(){let D=!1,we=null,K=null,ne=null,ge=null,Me=null,ot=null,Nt=null,mn=null;return{setTest:function(lt){D||(lt?ce(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(lt){we!==lt&&!D&&(i.stencilMask(lt),we=lt)},setFunc:function(lt,gn,hi){(K!==lt||ne!==gn||ge!==hi)&&(i.stencilFunc(lt,gn,hi),K=lt,ne=gn,ge=hi)},setOp:function(lt,gn,hi){(Me!==lt||ot!==gn||Nt!==hi)&&(i.stencilOp(lt,gn,hi),Me=lt,ot=gn,Nt=hi)},setLocked:function(lt){D=lt},setClear:function(lt){mn!==lt&&(i.clearStencil(lt),mn=lt)},reset:function(){D=!1,we=null,K=null,ne=null,ge=null,Me=null,ot=null,Nt=null,mn=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},u={},f=new WeakMap,h=[],d=null,g=!1,x=null,p=null,m=null,M=null,_=null,v=null,P=null,T=new he(0,0,0),E=0,I=!1,B=null,y=null,S=null,N=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,W=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(re)[1]),Z=W>=1):re.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Z=W>=2);let q=null,be={},ve=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Je=new ht().fromArray(ve),fe=new ht().fromArray(Te);function k(D,we,K,ne){let ge=new Uint8Array(4),Me=i.createTexture();i.bindTexture(D,Me),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<K;ot++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(we+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Me}let J={};J[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),r.setFunc(fr),je(!1),st(cd),ce(i.CULL_FACE),L($i);function ce(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function de(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Be(D,we){return u[D]!==we?(i.bindFramebuffer(D,we),u[D]=we,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Le(D,we){let K=h,ne=!1;if(D){K=f.get(we),K===void 0&&(K=[],f.set(we,K));let ge=D.textures;if(K.length!==ge.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,ot=ge.length;Me<ot;Me++)K[Me]=i.COLOR_ATTACHMENT0+Me;K.length=ge.length,ne=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ne=!0);ne&&i.drawBuffers(K)}function Ye(D){return d!==D?(i.useProgram(D),d=D,!0):!1}let nt={[xs]:i.FUNC_ADD,[A0]:i.FUNC_SUBTRACT,[R0]:i.FUNC_REVERSE_SUBTRACT};nt[C0]=i.MIN,nt[I0]=i.MAX;let $e={[P0]:i.ZERO,[L0]:i.ONE,[D0]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[k0]:i.SRC_ALPHA_SATURATE,[z0]:i.DST_COLOR,[U0]:i.DST_ALPHA,[N0]:i.ONE_MINUS_SRC_COLOR,[nh]:i.ONE_MINUS_SRC_ALPHA,[B0]:i.ONE_MINUS_DST_COLOR,[O0]:i.ONE_MINUS_DST_ALPHA,[F0]:i.CONSTANT_COLOR,[H0]:i.ONE_MINUS_CONSTANT_COLOR,[G0]:i.CONSTANT_ALPHA,[V0]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,we,K,ne,ge,Me,ot,Nt,mn,lt){if(D===$i){g===!0&&(de(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),D!==T0){if(D!==x||lt!==I){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),lt)switch(D){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.ONE,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,M=null,v=null,P=null,T.set(0,0,0),E=0,x=D,I=lt}return}ge=ge||we,Me=Me||K,ot=ot||ne,(we!==p||ge!==_)&&(i.blendEquationSeparate(nt[we],nt[ge]),p=we,_=ge),(K!==m||ne!==M||Me!==v||ot!==P)&&(i.blendFuncSeparate($e[K],$e[ne],$e[Me],$e[ot]),m=K,M=ne,v=Me,P=ot),(Nt.equals(T)===!1||mn!==E)&&(i.blendColor(Nt.r,Nt.g,Nt.b,mn),T.copy(Nt),E=mn),x=D,I=!1}function ln(D,we){D.side===$t?de(i.CULL_FACE):ce(i.CULL_FACE);let K=D.side===Bt;we&&(K=!K),je(K),D.blending===ar&&D.transparent===!1?L($i):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let ne=D.stencilWrite;o.setTest(ne),ne&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function st(D){D!==w0?(ce(i.CULL_FACE),D!==y&&(D===cd?i.cullFace(i.BACK):D===E0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),y=D}function Oe(D){D!==S&&(Z&&i.lineWidth(D),S=D)}function vt(D,we,K){D?(ce(i.POLYGON_OFFSET_FILL),(N!==we||O!==K)&&(i.polygonOffset(we,K),N=we,O=K)):de(i.POLYGON_OFFSET_FILL)}function Fe(D){D?ce(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+G-1),q!==D&&(i.activeTexture(D),q=D)}function b(D,we,K){K===void 0&&(q===null?K=i.TEXTURE0+G-1:K=q);let ne=be[K];ne===void 0&&(ne={type:void 0,texture:void 0},be[K]=ne),(ne.type!==D||ne.texture!==we)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(D,we||J[D]),ne.type=D,ne.texture=we)}function V(){let D=be[q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(D){Je.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function ae(D){fe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function Ge(D,we){let K=c.get(we);K===void 0&&(K=new WeakMap,c.set(we,K));let ne=K.get(D);ne===void 0&&(ne=i.getUniformBlockIndex(we,D.name),K.set(D,ne))}function Ce(D,we){let ne=c.get(we).get(D);a.get(we)!==ne&&(i.uniformBlockBinding(we,ne,D.__bindingPointIndex),a.set(we,ne))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},q=null,be={},u={},f=new WeakMap,h=[],d=null,g=!1,x=null,p=null,m=null,M=null,_=null,v=null,P=null,T=new he(0,0,0),E=0,I=!1,B=null,y=null,S=null,N=null,O=null,Je.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ce,disable:de,bindFramebuffer:Be,drawBuffers:Le,useProgram:Ye,setBlending:L,setMaterial:ln,setFlipSided:je,setCullFace:st,setLineWidth:Oe,setPolygonOffset:vt,setScissorTest:Fe,activeTexture:A,bindTexture:b,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:oe,texImage2D:j,texImage3D:Y,updateUBOMapping:Ge,uniformBlockBinding:Ce,texStorage2D:Qe,texStorage3D:F,texSubImage2D:ee,texSubImage3D:Ae,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:ie,viewport:ae,reset:rt}}function ep(i,e,t,n){let s=yM(n);switch(t){case Lp:return i*e;case Np:return i*e;case Up:return i*e*2;case Au:return i*e/s.components*s.byteLength;case Ru:return i*e/s.components*s.byteLength;case Op:return i*e*2/s.components*s.byteLength;case Cu:return i*e*2/s.components*s.byteLength;case Dp:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Iu:return i*e*4/s.components*s.byteLength;case ka:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dh:case mh:return Math.max(i,16)*Math.max(e,8)/4;case fh:case ph:return Math.max(i,8)*Math.max(e,8)/2;case gh:case xh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Th:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Dh:case Nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zp:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oh:case zh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yM(i){switch(i){case Mi:case Cp:return{byteLength:1,components:1};case Mo:case Ip:case Uo:return{byteLength:2,components:1};case Eu:case Tu:return{byteLength:2,components:4};case _s:case wu:case Jn:return{byteLength:4,components:1};case Pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _M(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,u=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):bo("canvas")}function x(A,b,V){let Q=1,oe=Fe(A);if((oe.width>V||oe.height>V)&&(Q=V/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ee=Math.floor(Q*oe.width),Ae=Math.floor(Q*oe.height);f===void 0&&(f=g(ee,Ae));let me=b?g(ee,Ae):f;return me.width=ee,me.height=Ae,me.getContext("2d").drawImage(A,0,0,ee,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+Ae+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==nn&&A.minFilter!==xn}function m(A){i.generateMipmap(A)}function M(A,b,V,Q,oe=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=b;if(b===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),b===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),b===i.RGBA){let Ae=oe?$a:at.getTransfer(Q);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=Ae===wt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(A,b){let V;return A?b===null||b===_s||b===mr?V=i.DEPTH24_STENCIL8:b===Jn?V=i.DEPTH32F_STENCIL8:b===Mo&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_s||b===mr?V=i.DEPTH_COMPONENT24:b===Jn?V=i.DEPTH_COMPONENT32F:b===Mo&&(V=i.DEPTH_COMPONENT16),V}function v(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function P(A){let b=A.target;b.removeEventListener("dispose",P),E(b),b.isVideoTexture&&u.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),B(b)}function E(A){let b=n.get(A);if(b.__webglInit===void 0)return;let V=A.source,Q=h.get(V);if(Q){let oe=Q[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(A),Object.keys(Q).length===0&&h.delete(V)}n.remove(A)}function I(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let V=A.source,Q=h.get(V);delete Q[b.__cacheKey],o.memory.textures--}function B(A){let b=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let oe=0;oe<b.__webglFramebuffer[Q].length;oe++)i.deleteFramebuffer(b.__webglFramebuffer[Q][oe]);else i.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let V=A.textures;for(let Q=0,oe=V.length;Q<oe;Q++){let ee=n.get(V[Q]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(A)}let y=0;function S(){y=0}function N(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function O(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){let V=n.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(V,A,b);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function Z(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){fe(V,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function W(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){fe(V,A,b);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function re(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){k(V,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let q={[jn]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},be={[nn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},ve={[og]:i.NEVER,[fg]:i.ALWAYS,[ag]:i.LESS,[Fp]:i.LEQUAL,[cg]:i.EQUAL,[ug]:i.GEQUAL,[lg]:i.GREATER,[hg]:i.NOTEQUAL};function Te(A,b){if(b.type===Jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===fo||b.magFilter===nr||b.magFilter===ii||b.minFilter===xn||b.minFilter===fo||b.minFilter===nr||b.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,q[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,be[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==nr&&b.minFilter!==ii||b.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Je(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",P));let Q=b.source,oe=h.get(Q);oe===void 0&&(oe={},h.set(Q,oe));let ee=O(b);if(ee!==A.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),oe[ee].usedTimes++;let Ae=oe[A.__cacheKey];Ae!==void 0&&(oe[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(b)),A.__cacheKey=ee,A.__webglTexture=oe[ee].texture}return V}function fe(A,b,V){let Q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=i.TEXTURE_3D);let oe=Je(A,b),ee=b.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+V);let Ae=n.get(ee);if(ee.version!==Ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+V);let me=at.getPrimaries(at.workingColorSpace),Se=b.colorSpace===Vi?null:at.getPrimaries(b.colorSpace),Qe=b.colorSpace===Vi||me===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let F=x(b.image,!1,s.maxTextureSize);F=vt(b,F);let j=r.convert(b.format,b.colorSpace),Y=r.convert(b.type),ie=M(b.internalFormat,j,Y,b.colorSpace,b.isVideoTexture);Te(Q,b);let ae,Ge=b.mipmaps,Ce=b.isVideoTexture!==!0,rt=Ae.__version===void 0||oe===!0,D=ee.dataReady,we=v(b,F);if(b.isDepthTexture)ie=_(b.format===gr,b.type),rt&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,ie,F.width,F.height):t.texImage2D(i.TEXTURE_2D,0,ie,F.width,F.height,0,j,Y,null));else if(b.isDataTexture)if(Ge.length>0){Ce&&rt&&t.texStorage2D(i.TEXTURE_2D,we,ie,Ge[0].width,Ge[0].height);for(let K=0,ne=Ge.length;K<ne;K++)ae=Ge[K],Ce?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,j,Y,ae.data):t.texImage2D(i.TEXTURE_2D,K,ie,ae.width,ae.height,0,j,Y,ae.data);b.generateMipmaps=!1}else Ce?(rt&&t.texStorage2D(i.TEXTURE_2D,we,ie,F.width,F.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,j,Y,F.data)):t.texImage2D(i.TEXTURE_2D,0,ie,F.width,F.height,0,j,Y,F.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ce&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ie,Ge[0].width,Ge[0].height,F.depth);for(let K=0,ne=Ge.length;K<ne;K++)if(ae=Ge[K],b.format!==Un)if(j!==null)if(Ce){if(D)if(b.layerUpdates.size>0){let ge=ep(ae.width,ae.height,b.format,b.type);for(let Me of b.layerUpdates){let ot=ae.data.subarray(Me*ge/ae.data.BYTES_PER_ELEMENT,(Me+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Me,ae.width,ae.height,1,j,ot,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,F.depth,j,ae.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ie,ae.width,ae.height,F.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,F.depth,j,Y,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ie,ae.width,ae.height,F.depth,0,j,Y,ae.data)}else{Ce&&rt&&t.texStorage2D(i.TEXTURE_2D,we,ie,Ge[0].width,Ge[0].height);for(let K=0,ne=Ge.length;K<ne;K++)ae=Ge[K],b.format!==Un?j!==null?Ce?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,j,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,j,Y,ae.data):t.texImage2D(i.TEXTURE_2D,K,ie,ae.width,ae.height,0,j,Y,ae.data)}else if(b.isDataArrayTexture)if(Ce){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ie,F.width,F.height,F.depth),D)if(b.layerUpdates.size>0){let K=ep(F.width,F.height,b.format,b.type);for(let ne of b.layerUpdates){let ge=F.data.subarray(ne*K/F.data.BYTES_PER_ELEMENT,(ne+1)*K/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,F.width,F.height,1,j,Y,ge)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,j,Y,F.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,F.width,F.height,F.depth,0,j,Y,F.data);else if(b.isData3DTexture)Ce?(rt&&t.texStorage3D(i.TEXTURE_3D,we,ie,F.width,F.height,F.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,j,Y,F.data)):t.texImage3D(i.TEXTURE_3D,0,ie,F.width,F.height,F.depth,0,j,Y,F.data);else if(b.isFramebufferTexture){if(rt)if(Ce)t.texStorage2D(i.TEXTURE_2D,we,ie,F.width,F.height);else{let K=F.width,ne=F.height;for(let ge=0;ge<we;ge++)t.texImage2D(i.TEXTURE_2D,ge,ie,K,ne,0,j,Y,null),K>>=1,ne>>=1}}else if(Ge.length>0){if(Ce&&rt){let K=Fe(Ge[0]);t.texStorage2D(i.TEXTURE_2D,we,ie,K.width,K.height)}for(let K=0,ne=Ge.length;K<ne;K++)ae=Ge[K],Ce?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,j,Y,ae):t.texImage2D(i.TEXTURE_2D,K,ie,j,Y,ae);b.generateMipmaps=!1}else if(Ce){if(rt){let K=Fe(F);t.texStorage2D(i.TEXTURE_2D,we,ie,K.width,K.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j,Y,F)}else t.texImage2D(i.TEXTURE_2D,0,ie,j,Y,F);p(b)&&m(Q),Ae.__version=ee.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function k(A,b,V){if(b.image.length!==6)return;let Q=Je(A,b),oe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let ee=n.get(oe);if(oe.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);let Ae=at.getPrimaries(at.workingColorSpace),me=b.colorSpace===Vi?null:at.getPrimaries(b.colorSpace),Se=b.colorSpace===Vi||Ae===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Qe=b.isCompressedTexture||b.image[0].isCompressedTexture,F=b.image[0]&&b.image[0].isDataTexture,j=[];for(let ne=0;ne<6;ne++)!Qe&&!F?j[ne]=x(b.image[ne],!0,s.maxCubemapSize):j[ne]=F?b.image[ne].image:b.image[ne],j[ne]=vt(b,j[ne]);let Y=j[0],ie=r.convert(b.format,b.colorSpace),ae=r.convert(b.type),Ge=M(b.internalFormat,ie,ae,b.colorSpace),Ce=b.isVideoTexture!==!0,rt=ee.__version===void 0||Q===!0,D=oe.dataReady,we=v(b,Y);Te(i.TEXTURE_CUBE_MAP,b);let K;if(Qe){Ce&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ge,Y.width,Y.height);for(let ne=0;ne<6;ne++){K=j[ne].mipmaps;for(let ge=0;ge<K.length;ge++){let Me=K[ge];b.format!==Un?ie!==null?Ce?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,0,0,Me.width,Me.height,ie,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,Ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,0,0,Me.width,Me.height,ie,ae,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,Ge,Me.width,Me.height,0,ie,ae,Me.data)}}}else{if(K=b.mipmaps,Ce&&rt){K.length>0&&we++;let ne=Fe(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(F){Ce?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,j[ne].width,j[ne].height,ie,ae,j[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,j[ne].width,j[ne].height,0,ie,ae,j[ne].data);for(let ge=0;ge<K.length;ge++){let ot=K[ge].image[ne].image;Ce?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,0,0,ot.width,ot.height,ie,ae,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,Ge,ot.width,ot.height,0,ie,ae,ot.data)}}else{Ce?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ie,ae,j[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,ie,ae,j[ne]);for(let ge=0;ge<K.length;ge++){let Me=K[ge];Ce?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,0,0,ie,ae,Me.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,Ge,ie,ae,Me.image[ne])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),ee.__version=oe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function J(A,b,V,Q,oe,ee){let Ae=r.convert(V.format,V.colorSpace),me=r.convert(V.type),Se=M(V.internalFormat,Ae,me,V.colorSpace);if(!n.get(b).__hasExternalTextures){let F=Math.max(1,b.width>>ee),j=Math.max(1,b.height>>ee);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,Se,F,j,b.depth,0,Ae,me,null):t.texImage2D(oe,ee,Se,F,j,0,Ae,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),st(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,oe,n.get(V).__webglTexture,0,je(b)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,oe,n.get(V).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(A,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let Q=b.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,ee=_(b.stencilBuffer,oe),Ae=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=je(b);st(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ee,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,A)}else{let Q=b.textures;for(let oe=0;oe<Q.length;oe++){let ee=Q[oe],Ae=r.convert(ee.format,ee.colorSpace),me=r.convert(ee.type),Se=M(ee.internalFormat,Ae,me,ee.colorSpace),Qe=je(b);V&&st(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Se,b.width,b.height):st(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let Q=n.get(b.depthTexture).__webglTexture,oe=je(b);if(b.depthTexture.format===cr)st(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===gr)st(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Be(A){let b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=Q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");de(b.__webglFramebuffer,A)}else if(V){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=i.createRenderbuffer(),ce(b.__webglDepthbuffer[Q],A,!1);else{let oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ce(b.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(A,b,V){let Q=n.get(A);b!==void 0&&J(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Be(A)}function Ye(A){let b=A.texture,V=n.get(A),Q=n.get(b);A.addEventListener("dispose",T);let oe=A.textures,ee=A.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=b.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let Se=0;Se<b.mipmaps.length;Se++)V.__webglFramebuffer[me][Se]=i.createFramebuffer()}else V.__webglFramebuffer[me]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)V.__webglFramebuffer[me]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let me=0,Se=oe.length;me<Se;me++){let Qe=n.get(oe[me]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&st(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){let Se=oe[me];V.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[me]);let Qe=r.convert(Se.format,Se.colorSpace),F=r.convert(Se.type),j=M(Se.internalFormat,Qe,F,Se.colorSpace,A.isXRRenderTarget===!0),Y=je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,V.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Te(i.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)J(V.__webglFramebuffer[me][Se],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else J(V.__webglFramebuffer[me],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let me=0,Se=oe.length;me<Se;me++){let Qe=oe[me],F=n.get(Qe);t.bindTexture(i.TEXTURE_2D,F.__webglTexture),Te(i.TEXTURE_2D,Qe),J(V.__webglFramebuffer,A,Qe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),p(Qe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),Te(me,b),b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)J(V.__webglFramebuffer[Se],A,b,i.COLOR_ATTACHMENT0,me,Se);else J(V.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,me,0);p(b)&&m(me),t.unbindTexture()}A.depthBuffer&&Be(A)}function nt(A){let b=A.textures;for(let V=0,Q=b.length;V<Q;V++){let oe=b[V];if(p(oe)){let ee=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(oe).__webglTexture;t.bindTexture(ee,Ae),m(ee),t.unbindTexture()}}}let $e=[],L=[];function ln(A){if(A.samples>0){if(st(A)===!1){let b=A.textures,V=A.width,Q=A.height,oe=i.COLOR_BUFFER_BIT,ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(A),me=b.length>1;if(me)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);let Qe=n.get(b[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,oe,i.NEAREST),c===!0&&($e.length=0,L.length=0,$e.push(i.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&($e.push(ee),L.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);let Qe=n.get(b[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function je(A){return Math.min(s.maxSamples,A.samples)}function st(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(A){let b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function vt(A,b){let V=A.colorSpace,Q=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Yt&&V!==Vi&&(at.getTransfer(V)===wt?(Q!==Un||oe!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=re,this.rebindTextures=Le,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=st}function vM(i,e){function t(n,s=Vi){let r,o=at.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===Eu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cp)return i.BYTE;if(n===Ip)return i.SHORT;if(n===Mo)return i.UNSIGNED_SHORT;if(n===wu)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Uo)return i.HALF_FLOAT;if(n===Lp)return i.ALPHA;if(n===Dp)return i.RGB;if(n===Un)return i.RGBA;if(n===Np)return i.LUMINANCE;if(n===Up)return i.LUMINANCE_ALPHA;if(n===cr)return i.DEPTH_COMPONENT;if(n===gr)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===Ru)return i.RED_INTEGER;if(n===Op)return i.RG;if(n===Cu)return i.RG_INTEGER;if(n===Iu)return i.RGBA_INTEGER;if(n===ka||n===Fa||n===Ha||n===Ga)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===dh||n===ph||n===mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===xh||n===yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gh||n===xh)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_h||n===vh||n===Mh||n===bh||n===Sh||n===wh||n===Eh||n===Th||n===Ah||n===Rh||n===Ch||n===Ih||n===Ph||n===Lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_h)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ah)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ch)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Dh||n===Nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===Uh||n===Oh||n===zh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jh=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},MM={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pn({vertexShader:bM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=new Qh,p=t.getContextAttributes(),m=null,M=null,_=[],v=[],P=new ye,T=null,E=new Ot;E.layers.enable(1),E.viewport=new ht;let I=new Ot;I.layers.enable(2),I.viewport=new ht;let B=[E,I],y=new jh;y.layers.enable(1),y.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=_[k];return J===void 0&&(J=new go,_[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=_[k];return J===void 0&&(J=new go,_[k]=J),J.getGripSpace()},this.getHand=function(k){let J=_[k];return J===void 0&&(J=new go,_[k]=J),J.getHandSpace()};function O(k){let J=v.indexOf(k.inputSource);if(J===-1)return;let ce=_[J];ce!==void 0&&(ce.update(k.inputSource,k.frame,l||o),ce.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let k=0;k<_.length;k++){let J=v[k];J!==null&&(v[k]=null,_[k].disconnect(J))}S=null,N=null,x.reset(),e.setRenderTarget(m),d=null,h=null,f=null,s=null,M=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Si(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ce=null,de=null;p.depth&&(de=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?gr:cr,ce=p.stencil?mr:_s);let Be={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Si(h.textureWidth,h.textureHeight,{format:Un,type:Mi,depthTexture:new ic(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(k){for(let J=0;J<k.removed.length;J++){let ce=k.removed[J],de=v.indexOf(ce);de>=0&&(v[de]=null,_[de].disconnect(ce))}for(let J=0;J<k.added.length;J++){let ce=k.added[J],de=v.indexOf(ce);if(de===-1){for(let Le=0;Le<_.length;Le++)if(Le>=v.length){v.push(ce),de=Le;break}else if(v[Le]===null){v[Le]=ce,de=Le;break}if(de===-1)break}let Be=_[de];Be&&Be.connect(ce)}}let W=new C,re=new C;function q(k,J,ce){W.setFromMatrixPosition(J.matrixWorld),re.setFromMatrixPosition(ce.matrixWorld);let de=W.distanceTo(re),Be=J.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Ye=Be[14]/(Be[10]-1),nt=Be[14]/(Be[10]+1),$e=(Be[9]+1)/Be[5],L=(Be[9]-1)/Be[5],ln=(Be[8]-1)/Be[0],je=(Le[8]+1)/Le[0],st=Ye*ln,Oe=Ye*je,vt=de/(-ln+je),Fe=vt*-ln;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Fe),k.translateZ(vt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Be[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let A=Ye+vt,b=nt+vt,V=st-Fe,Q=Oe+(de-Fe),oe=$e*nt/b*A,ee=L*nt/b*A;k.projectionMatrix.makePerspective(V,Q,oe,ee,A,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function be(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let J=k.near,ce=k.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),y.near=I.near=E.near=J,y.far=I.far=E.far=ce,(S!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,N=y.far);let de=k.parent,Be=y.cameras;be(y,de);for(let Le=0;Le<Be.length;Le++)be(Be[Le],de);Be.length===2?q(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),ve(k,y,de)};function ve(k,J,ce){ce===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(ce.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=_r*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(k){c=k,h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Te=null;function Je(k,J){if(u=J.getViewerPose(l||o),g=J,u!==null){let ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let de=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Le=0;Le<ce.length;Le++){let Ye=ce[Le],nt=null;if(d!==null)nt=d.getViewport(Ye);else{let L=f.getViewSubImage(h,Ye);nt=L.viewport,Le===0&&(e.setRenderTargetTextures(M,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let $e=B[Le];$e===void 0&&($e=new Ot,$e.layers.enable(Le),$e.viewport=new ht,B[Le]=$e),$e.matrix.fromArray(Ye.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ye.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push($e)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){let Le=f.getDepthInformation(ce[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,s.renderState)}}for(let ce=0;ce<_.length;ce++){let de=v[ce],Be=_[ce];de!==null&&Be!==void 0&&Be.update(de,J,l||o)}Te&&Te(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let fe=new Xp;fe.setAnimationLoop(Je),this.setAnimationLoop=function(k){Te=k},this.dispose=function(){}}},ms=new Bn,wM=new ke;function EM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Wp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Bt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Bt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),_=M.envMap,v=M.envMapRotation;_&&(p.envMap.value=_,ms.copy(v),ms.x*=-1,ms.y*=-1,ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),p.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(ms)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=s[M.id];v===void 0&&(g(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",p));let P=_.program;n.updateUBOMapping(M,P);let T=e.render.frame;r[M.id]!==T&&(h(M),r[M.id]=T)}function u(M){let _=f();M.__bindingPointIndex=_;let v=i.createBuffer(),P=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let _=s[M.id],v=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,E=v.length;T<E;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let B=0,y=I.length;B<y;B++){let S=I[B];if(d(S,T,B,P)===!0){let N=S.__offset,O=Array.isArray(S.value)?S.value:[S.value],G=0;for(let Z=0;Z<O.length;Z++){let W=O[Z],re=x(W);typeof W=="number"||typeof W=="boolean"?(S.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,N+G,S.__data)):W.isMatrix3?(S.__data[0]=W.elements[0],S.__data[1]=W.elements[1],S.__data[2]=W.elements[2],S.__data[3]=0,S.__data[4]=W.elements[3],S.__data[5]=W.elements[4],S.__data[6]=W.elements[5],S.__data[7]=0,S.__data[8]=W.elements[6],S.__data[9]=W.elements[7],S.__data[10]=W.elements[8],S.__data[11]=0):(W.toArray(S.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,v,P){let T=M.value,E=_+"_"+v;if(P[E]===void 0)return typeof T=="number"||typeof T=="boolean"?P[E]=T:P[E]=T.clone(),!0;{let I=P[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return P[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(M){let _=M.uniforms,v=0,P=16;for(let E=0,I=_.length;E<I;E++){let B=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,S=B.length;y<S;y++){let N=B[y],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,Z=O.length;G<Z;G++){let W=O[G],re=x(W),q=v%P,be=q%re.boundary,ve=q+be;v+=be,ve!==0&&P-ve<re.storage&&(v+=P-ve),N.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=re.storage}}}let T=v%P;return T>0&&(v+=P-T),M.__size=v,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){let _=M.target;_.removeEventListener("dispose",p);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var wo=class{constructor(e={}){let{canvas:t=Cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=qi,this.toneMappingExposure=1;let _=this,v=!1,P=0,T=0,E=null,I=-1,B=null,y=new ht,S=new ht,N=null,O=new he(0),G=0,Z=t.width,W=t.height,re=1,q=null,be=null,ve=new ht(0,0,Z,W),Te=new ht(0,0,Z,W),Je=!1,fe=new So,k=!1,J=!1,ce=new ke,de=new ke,Be=new C,Le=new ht,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function $e(){return E===null?re:1}let L=n;function ln(w,U){return t.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mu}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Me,!1),L===null){let U="webgl2";if(L=ln(U,w),L===null)throw ln(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,st,Oe,vt,Fe,A,b,V,Q,oe,ee,Ae,me,Se,Qe,F,j,Y,ie,ae,Ge,Ce,rt,D;function we(){je=new G_(L),je.init(),Ce=new vM(L,je),st=new O_(L,je,e,Ce),Oe=new xM(L),st.reverseDepthBuffer&&Oe.buffers.depth.setReversed(!0),vt=new X_(L),Fe=new sM,A=new _M(L,je,Oe,Fe,st,Ce,vt),b=new B_(_),V=new H_(_),Q=new jg(L),rt=new N_(L,Q),oe=new V_(L,Q,vt,rt),ee=new q_(L,oe,Q,vt),ie=new $_(L,st,A),F=new z_(Fe),Ae=new iM(_,b,V,je,st,rt,F),me=new EM(_,Fe),Se=new oM,Qe=new fM(je),Y=new D_(_,b,V,Oe,ee,h,c),j=new mM(_,ee,st),D=new TM(L,vt,st,Oe),ae=new U_(L,je,vt),Ge=new W_(L,je,vt),vt.programs=Ae.programs,_.capabilities=st,_.extensions=je,_.properties=Fe,_.renderLists=Se,_.shadowMap=j,_.state=Oe,_.info=vt}we();let K=new eu(_,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(Z,W,!1))},this.getSize=function(w){return w.set(Z,W)},this.setSize=function(w,U,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,W=U,t.width=Math.floor(w*re),t.height=Math.floor(U*re),X===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Z*re,W*re).floor()},this.setDrawingBufferSize=function(w,U,X){Z=w,W=U,re=X,t.width=Math.floor(w*X),t.height=Math.floor(U*X),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(ve)},this.setViewport=function(w,U,X,$){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,U,X,$),Oe.viewport(y.copy(ve).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(Te)},this.setScissor=function(w,U,X,$){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,U,X,$),Oe.scissor(S.copy(Te).multiplyScalar(re).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(w){Oe.setScissorTest(Je=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){be=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,U=!0,X=!0){let $=0;if(w){let z=!1;if(E!==null){let ue=E.texture.format;z=ue===Iu||ue===Cu||ue===Ru}if(z){let ue=E.texture.type,Ee=ue===Mi||ue===_s||ue===Mo||ue===mr||ue===Eu||ue===Tu,Re=Y.getClearColor(),Ie=Y.getClearAlpha(),He=Re.r,Ve=Re.g,De=Re.b;Ee?(d[0]=He,d[1]=Ve,d[2]=De,d[3]=Ie,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=He,g[1]=Ve,g[2]=De,g[3]=Ie,L.clearBufferiv(L.COLOR,0,g))}else $|=L.COLOR_BUFFER_BIT}U&&($|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Se.dispose(),Qe.dispose(),Fe.dispose(),b.dispose(),V.dispose(),ee.dispose(),rt.dispose(),D.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",ed),K.removeEventListener("sessionend",td),ls.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let w=vt.autoReset,U=j.enabled,X=j.autoUpdate,$=j.needsUpdate,z=j.type;we(),vt.autoReset=w,j.enabled=U,j.autoUpdate=X,j.needsUpdate=$,j.type=z}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){let U=w.target;U.removeEventListener("dispose",ot),Nt(U)}function Nt(w){mn(w),Fe.remove(w)}function mn(w){let U=Fe.get(w).programs;U!==void 0&&(U.forEach(function(X){Ae.releaseProgram(X)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,X,$,z,ue){U===null&&(U=Ye);let Ee=z.isMesh&&z.matrixWorld.determinant()<0,Re=v0(w,U,X,$,z);Oe.setMaterial($,Ee);let Ie=X.index,He=1;if($.wireframe===!0){if(Ie=oe.getWireframeAttribute(X),Ie===void 0)return;He=2}let Ve=X.drawRange,De=X.attributes.position,pt=Ve.start*He,St=(Ve.start+Ve.count)*He;ue!==null&&(pt=Math.max(pt,ue.start*He),St=Math.min(St,(ue.start+ue.count)*He)),Ie!==null?(pt=Math.max(pt,0),St=Math.min(St,Ie.count)):De!=null&&(pt=Math.max(pt,0),St=Math.min(St,De.count));let Rt=St-pt;if(Rt<0||Rt===1/0)return;rt.setup(z,$,Re,X,Ie);let En,ut=ae;if(Ie!==null&&(En=Q.get(Ie),ut=Ge,ut.setIndex(En)),z.isMesh)$.wireframe===!0?(Oe.setLineWidth($.wireframeLinewidth*$e()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(z.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),Oe.setLineWidth(Ue*$e()),z.isLineSegments?ut.setMode(L.LINES):z.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else z.isPoints?ut.setMode(L.POINTS):z.isSprite&&ut.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ue=z._multiDrawStarts,Kt=z._multiDrawCounts,ft=z._multiDrawCount,$n=Ie?Q.get(Ie).bytesPerElement:1,Os=Fe.get($).currentProgram.getUniforms();for(let Tn=0;Tn<ft;Tn++)Os.setValue(L,"_gl_DrawID",Tn),ut.render(Ue[Tn]/$n,Kt[Tn])}else if(z.isInstancedMesh)ut.renderInstances(pt,Rt,z.count);else if(X.isInstancedBufferGeometry){let Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Kt=Math.min(X.instanceCount,Ue);ut.renderInstances(pt,Rt,Kt)}else ut.render(pt,Rt)};function lt(w,U,X){w.transparent===!0&&w.side===$t&&w.forceSinglePass===!1?(w.side=Bt,w.needsUpdate=!0,ra(w,U,X),w.side=si,w.needsUpdate=!0,ra(w,U,X),w.side=$t):ra(w,U,X)}this.compile=function(w,U,X=null){X===null&&(X=w),p=Qe.get(X),p.init(U),M.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==X&&w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let $=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){let Re=ue[Ee];lt(Re,X,z),$.add(Re)}else lt(ue,X,z),$.add(ue)}),M.pop(),p=null,$},this.compileAsync=function(w,U,X=null){let $=this.compile(w,U,X);return new Promise(z=>{function ue(){if($.forEach(function(Ee){Fe.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){z(w);return}setTimeout(ue,10)}je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let gn=null;function hi(w){gn&&gn(w)}function ed(){ls.stop()}function td(){ls.start()}let ls=new Xp;ls.setAnimationLoop(hi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(w){gn=w,K.setAnimationLoop(w),w===null?ls.stop():ls.start()},K.addEventListener("sessionstart",ed),K.addEventListener("sessionend",td),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,E),p=Qe.get(w,M.length),p.init(U),M.push(p),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),fe.setFromProjectionMatrix(de),J=this.localClippingEnabled,k=F.init(this.clippingPlanes,J),x=Se.get(w,m.length),x.init(),m.push(x),K.enabled===!0&&K.isPresenting===!0){let ue=_.xr.getDepthSensingMesh();ue!==null&&pl(ue,U,-1/0,_.sortObjects)}pl(w,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,be),nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,nt&&Y.addToRenderList(x,w),this.info.render.frame++,k===!0&&F.beginShadows();let X=p.state.shadowsArray;j.render(X,w,U),k===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=x.opaque,z=x.transmissive;if(p.setupLights(),U.isArrayCamera){let ue=U.cameras;if(z.length>0)for(let Ee=0,Re=ue.length;Ee<Re;Ee++){let Ie=ue[Ee];id($,z,w,Ie)}nt&&Y.render(w);for(let Ee=0,Re=ue.length;Ee<Re;Ee++){let Ie=ue[Ee];nd(x,w,Ie,Ie.viewport)}}else z.length>0&&id($,z,w,U),nt&&Y.render(w),nd(x,w,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(_,w,U),rt.resetDefaultState(),I=-1,B=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&F.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function pl(w,U,X,$){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){$&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);let Ee=ee.update(w),Re=w.material;Re.visible&&x.push(w,Ee,Re,X,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){let Ee=ee.update(w),Re=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Le.copy(Ee.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(Re)){let Ie=Ee.groups;for(let He=0,Ve=Ie.length;He<Ve;He++){let De=Ie[He],pt=Re[De.materialIndex];pt&&pt.visible&&x.push(w,Ee,pt,X,Le.z,De)}}else Re.visible&&x.push(w,Ee,Re,X,Le.z,null)}}let ue=w.children;for(let Ee=0,Re=ue.length;Ee<Re;Ee++)pl(ue[Ee],U,X,$)}function nd(w,U,X,$){let z=w.opaque,ue=w.transmissive,Ee=w.transparent;p.setupLightsView(X),k===!0&&F.setGlobalState(_.clippingPlanes,X),$&&Oe.viewport(y.copy($)),z.length>0&&sa(z,U,X),ue.length>0&&sa(ue,U,X),Ee.length>0&&sa(Ee,U,X),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function id(w,U,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Si(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Uo:Mi,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ue=p.state.transmissionRenderTarget[$.id],Ee=$.viewport||y;ue.setSize(Ee.z,Ee.w);let Re=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(O),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Y.render(X);let Ie=_.toneMapping;_.toneMapping=qi;let He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),k===!0&&F.setGlobalState(_.clippingPlanes,$),sa(w,X,$),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let De=0,pt=U.length;De<pt;De++){let St=U[De],Rt=St.object,En=St.geometry,ut=St.material,Ue=St.group;if(ut.side===$t&&Rt.layers.test($.layers)){let Kt=ut.side;ut.side=Bt,ut.needsUpdate=!0,sd(Rt,X,$,En,ut,Ue),ut.side=Kt,ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}_.setRenderTarget(Re),_.setClearColor(O,G),He!==void 0&&($.viewport=He),_.toneMapping=Ie}function sa(w,U,X){let $=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ue=w.length;z<ue;z++){let Ee=w[z],Re=Ee.object,Ie=Ee.geometry,He=$===null?Ee.material:$,Ve=Ee.group;Re.layers.test(X.layers)&&sd(Re,U,X,Ie,He,Ve)}}function sd(w,U,X,$,z,ue){w.onBeforeRender(_,U,X,$,z,ue),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(_,U,X,$,w,ue),z.transparent===!0&&z.side===$t&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,_.renderBufferDirect(X,U,$,z,w,ue),z.side=si,z.needsUpdate=!0,_.renderBufferDirect(X,U,$,z,w,ue),z.side=$t):_.renderBufferDirect(X,U,$,z,w,ue),w.onAfterRender(_,U,X,$,z,ue)}function ra(w,U,X){U.isScene!==!0&&(U=Ye);let $=Fe.get(w),z=p.state.lights,ue=p.state.shadowsArray,Ee=z.state.version,Re=Ae.getParameters(w,z.state,ue,U,X),Ie=Ae.getProgramCacheKey(Re),He=$.programs;$.environment=w.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",ot),He=new Map,$.programs=He);let Ve=He.get(Ie);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ee)return od(w,Re),Ve}else Re.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Re,_),Ve=Ae.acquireProgram(Re,Ie),He.set(Ie,Ve),$.uniforms=Re.uniforms;let De=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=F.uniform),od(w,Re),$.needsLights=b0(w),$.lightsStateVersion=Ee,$.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function rd(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=hr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function od(w,U){let X=Fe.get(w);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function v0(w,U,X,$,z){U.isScene!==!0&&(U=Ye),A.resetTextureUnits();let ue=U.fog,Ee=$.isMeshStandardMaterial?U.environment:null,Re=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yt,Ie=($.isMeshStandardMaterial?V:b).get($.envMap||Ee),He=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,St=!!X.morphAttributes.color,Rt=qi;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Rt=_.toneMapping);let En=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=En!==void 0?En.length:0,Ue=Fe.get($),Kt=p.state.lights;if(k===!0&&(J===!0||w!==B)){let Dn=w===B&&$.id===I;F.setState($,w,Dn)}let ft=!1;$.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Kt.state.version||Ue.outputColorSpace!==Re||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==Ie||$.fog===!0&&Ue.fog!==ue||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==F.numPlanes||Ue.numIntersection!==F.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Ve||Ue.morphTargets!==De||Ue.morphNormals!==pt||Ue.morphColors!==St||Ue.toneMapping!==Rt||Ue.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Ue.__version=$.version);let $n=Ue.currentProgram;ft===!0&&($n=ra($,U,z));let Os=!1,Tn=!1,ml=!1,It=$n.getUniforms(),Oi=Ue.uniforms;if(Oe.useProgram($n.program)&&(Os=!0,Tn=!0,ml=!0),$.id!==I&&(I=$.id,Tn=!0),Os||B!==w){st.reverseDepthBuffer?(ce.copy(w.projectionMatrix),Pg(ce),Lg(ce),It.setValue(L,"projectionMatrix",ce)):It.setValue(L,"projectionMatrix",w.projectionMatrix),It.setValue(L,"viewMatrix",w.matrixWorldInverse);let Dn=It.map.cameraPosition;Dn!==void 0&&Dn.setValue(L,Be.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&It.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,Tn=!0,ml=!0)}if(z.isSkinnedMesh){It.setOptional(L,z,"bindMatrix"),It.setOptional(L,z,"bindMatrixInverse");let Dn=z.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),It.setValue(L,"boneTexture",Dn.boneTexture,A))}z.isBatchedMesh&&(It.setOptional(L,z,"batchingTexture"),It.setValue(L,"batchingTexture",z._matricesTexture,A),It.setOptional(L,z,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",z._indirectTexture,A),It.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",z._colorsTexture,A));let gl=X.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0)&&ie.update(z,X,$n),(Tn||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,It.setValue(L,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Oi.envMap.value=Ie,Oi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(Oi.envMapIntensity.value=U.environmentIntensity),Tn&&(It.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&M0(Oi,ml),ue&&$.fog===!0&&me.refreshFogUniforms(Oi,ue),me.refreshMaterialUniforms(Oi,$,re,W,p.state.transmissionRenderTarget[w.id]),hr.upload(L,rd(Ue),Oi,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hr.upload(L,rd(Ue),Oi,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&It.setValue(L,"center",z.center),It.setValue(L,"modelViewMatrix",z.modelViewMatrix),It.setValue(L,"normalMatrix",z.normalMatrix),It.setValue(L,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Dn=$.uniformsGroups;for(let xl=0,S0=Dn.length;xl<S0;xl++){let ad=Dn[xl];D.update(ad,$n),D.bind(ad,$n)}}return $n}function M0(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function b0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,U,X){Fe.get(w.texture).__webglTexture=U,Fe.get(w.depthTexture).__webglTexture=X;let $=Fe.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let X=Fe.get(w);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,X=0){E=w,P=U,T=X;let $=!0,z=null,ue=!1,Ee=!1;if(w){let Ie=Fe.get(w);if(Ie.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ie.__hasExternalTextures)A.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let De=w.depthTexture;if(Ie.__boundDepthTexture!==De){if(De!==null&&Fe.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ee=!0);let Ve=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?z=Ve[U][X]:z=Ve[U],ue=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?z=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[X]:z=Ve,y.copy(w.viewport),S.copy(w.scissor),N=w.scissorTest}else y.copy(ve).multiplyScalar(re).floor(),S.copy(Te).multiplyScalar(re).floor(),N=Je;if(Oe.bindFramebuffer(L.FRAMEBUFFER,z)&&$&&Oe.drawBuffers(w,z),Oe.viewport(y),Oe.scissor(S),Oe.setScissorTest(N),ue){let Ie=Fe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,X)}else if(Ee){let Ie=Fe.get(w.texture),He=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,He)}I=-1},this.readRenderTargetPixels=function(w,U,X,$,z,ue,Ee){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Oe.bindFramebuffer(L.FRAMEBUFFER,Re);try{let Ie=w.texture,He=Ie.format,Ve=Ie.type;if(!st.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-$&&X>=0&&X<=w.height-z&&L.readPixels(U,X,$,z,Ce.convert(He),Ce.convert(Ve),ue)}finally{let Ie=E!==null?Fe.get(E).__webglFramebuffer:null;Oe.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,U,X,$,z,ue,Ee){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){let Ie=w.texture,He=Ie.format,Ve=Ie.type;if(!st.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-$&&X>=0&&X<=w.height-z){Oe.bindFramebuffer(L.FRAMEBUFFER,Re);let De=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(U,X,$,z,Ce.convert(He),Ce.convert(Ve),0);let pt=E!==null?Fe.get(E).__webglFramebuffer:null;Oe.bindFramebuffer(L.FRAMEBUFFER,pt);let St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ig(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(De),L.deleteSync(St),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,X=0){w.isTexture!==!0&&(Wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-X),z=Math.floor(w.image.width*$),ue=Math.floor(w.image.height*$),Ee=U!==null?U.x:0,Re=U!==null?U.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Ee,Re,z,ue),Oe.unbindTexture()},this.copyTextureToTexture=function(w,U,X=null,$=null,z=0){w.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],U=arguments[2],z=arguments[3]||0,X=null);let ue,Ee,Re,Ie,He,Ve;X!==null?(ue=X.max.x-X.min.x,Ee=X.max.y-X.min.y,Re=X.min.x,Ie=X.min.y):(ue=w.image.width,Ee=w.image.height,Re=0,Ie=0),$!==null?(He=$.x,Ve=$.y):(He=0,Ve=0);let De=Ce.convert(U.format),pt=Ce.convert(U.type);A.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let St=L.getParameter(L.UNPACK_ROW_LENGTH),Rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),En=L.getParameter(L.UNPACK_SKIP_PIXELS),ut=L.getParameter(L.UNPACK_SKIP_ROWS),Ue=L.getParameter(L.UNPACK_SKIP_IMAGES),Kt=w.isCompressedTexture?w.mipmaps[z]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,z,He,Ve,ue,Ee,De,pt,Kt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,z,He,Ve,Kt.width,Kt.height,De,Kt.data):L.texSubImage2D(L.TEXTURE_2D,z,He,Ve,ue,Ee,De,pt,Kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,St),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,En),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue),z===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(w,U,X=null,$=null,z=0){w.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,w=arguments[2],U=arguments[3],z=arguments[4]||0);let ue,Ee,Re,Ie,He,Ve,De,pt,St,Rt=w.isCompressedTexture?w.mipmaps[z]:w.image;X!==null?(ue=X.max.x-X.min.x,Ee=X.max.y-X.min.y,Re=X.max.z-X.min.z,Ie=X.min.x,He=X.min.y,Ve=X.min.z):(ue=Rt.width,Ee=Rt.height,Re=Rt.depth,Ie=0,He=0,Ve=0),$!==null?(De=$.x,pt=$.y,St=$.z):(De=0,pt=0,St=0);let En=Ce.convert(U.format),ut=Ce.convert(U.type),Ue;if(U.isData3DTexture)A.setTexture3D(U,0),Ue=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Ue=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Kt=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$n=L.getParameter(L.UNPACK_SKIP_PIXELS),Os=L.getParameter(L.UNPACK_SKIP_ROWS),Tn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ue,z,De,pt,St,ue,Ee,Re,En,ut,Rt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ue,z,De,pt,St,ue,Ee,Re,En,Rt.data):L.texSubImage3D(Ue,z,De,pt,St,ue,Ee,Re,En,ut,Rt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$n),L.pixelStorei(L.UNPACK_SKIP_ROWS,Os),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Tn),z===0&&U.generateMipmaps&&L.generateMipmap(Ue),Oe.unbindTexture()},this.initRenderTarget=function(w){Fe.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Oe.unbindTexture()},this.resetState=function(){P=0,T=0,E=null,Oe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Lu?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Ic?"display-p3":"srgb"}};var sc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ms=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new C,bs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ss=class extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Js,so=new C,js=new C,Qs=new C,er=new ye,ro=new ye,Zp=new ke,Ta=new C,oo=new C,Aa=new C,tp=new ye,$l=new ye,np=new ye,wr=class extends Et{constructor(e=new Ss){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sr(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new bs(n,3,0,!1)),Js.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=Js,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ra(Ta.set(-.5,-.5,0),Qs,o,js,s,r),Ra(oo.set(.5,-.5,0),Qs,o,js,s,r),Ra(Aa.set(.5,.5,0),Qs,o,js,s,r),tp.set(0,0),$l.set(1,0),np.set(1,1);let a=e.ray.intersectTriangle(Ta,oo,Aa,!1,so);if(a===null&&(Ra(oo.set(-.5,.5,0),Qs,o,js,s,r),$l.set(0,1),a=e.ray.intersectTriangle(Ta,Aa,oo,!1,so),a===null))return;let c=e.ray.origin.distanceTo(so);c<e.near||c>e.far||t.push({distance:c,point:so.clone(),uv:Wi.getInterpolation(so,Ta,oo,Aa,tp,$l,np,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ra(i,e,t,n,s,r){er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ro.x=r*er.x-s*er.y,ro.y=s*er.x+r*er.y):ro.copy(er),i.copy(e),i.x+=ro.x,i.y+=ro.y,i.applyMatrix4(Zp)}var ip=new C,sp=new ht,rp=new ht,AM=new C,op=new ke,Ca=new C,ql=new Cn,ap=new ke,Yl=new vr,rc=class extends le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ud,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(s),e.ray.intersectsSphere(ql)!==!1&&(ap.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&Yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ud?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===j0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;sp.fromBufferAttribute(s.attributes.skinIndex,e),rp.fromBufferAttribute(s.attributes.skinWeight,e),ip.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=rp.getComponent(r);if(o!==0){let a=sp.getComponent(r);op.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(AM.copy(ip).applyMatrix4(op),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Eo=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},oc=class extends qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,u=nn,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cp=new ke,RM=new ke,ac=class i{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:RM;cp.multiplyMatrices(a,t[r]),cp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new oc(t,e,e,Un,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Eo),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ws=class extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},tr=new ke,lp=new ke,Ia=[],hp=new zn,CM=new ke,ao=new le,co=new Cn,Er=class extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,CM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),hp.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),co.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(n),e.ray.intersectsSphere(co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),lp.multiplyMatrices(n,tr),ao.matrixWorld=lp,ao.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){let c=Ia[o];c.instanceId=r,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(s*this.count),s,this.count,Au,Jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var To=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cc=new C,lc=new C,up=new ke,lo=new vr,Pa=new Cn,Kl=new C,fp=new C,Tr=class extends Et{constructor(e=new dt,t=new To){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)cc.fromBufferAttribute(t,s-1),lc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=cc.distanceTo(lc);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;up.copy(s).invert(),lo.copy(e.ray).applyMatrix4(up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=l){let m=u.getX(x),M=u.getX(x+1),_=La(this,e,lo,c,m,M);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(d),m=La(this,e,lo,c,x,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=l){let m=La(this,e,lo,c,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=La(this,e,lo,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function La(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(cc.fromBufferAttribute(o,s),lc.fromBufferAttribute(o,r),t.distanceSqToSegment(cc,lc,Kl,fp)>n)return;Kl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kl);if(!(c<e.near||c>e.far))return{distance:c,point:fp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var dp=new C,pp=new C,hc=class extends Tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dp.fromBufferAttribute(t,s),pp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dp.distanceTo(pp);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uc=class extends Tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ln=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mp=new ke,tu=new vr,Da=new Cn,Na=new C,kn=class extends Et{constructor(e=new dt,t=new Ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;mp.copy(s).invert(),tu.copy(e.ray).applyMatrix4(mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let p=l.getX(g);Na.fromBufferAttribute(f,p),gp(Na,p,c,s,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)Na.fromBufferAttribute(f,g),gp(Na,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gp(i,e,t,n,s,r,o){let a=tu.distanceSqToPoint(i);if(a<t){let c=new C;tu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fn=class extends qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,c=new ke;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Xt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Xt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ao=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nu=class extends Ao{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ua=new C,Zl=new Uu,Jl=new Uu,jl=new Uu,Ro=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),l=Ua);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Zl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,p),Jl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,p),jl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Jl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),jl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Zl.calc(c),Jl.calc(c),jl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function IM(i,e){let t=1-i;return t*t*e}function PM(i,e){return 2*(1-i)*i*e}function LM(i,e){return i*i*e}function xo(i,e,t,n){return IM(i,e)+PM(i,t)+LM(i,n)}function DM(i,e){let t=1-i;return t*t*t*e}function NM(i,e){let t=1-i;return 3*t*t*i*e}function UM(i,e){return 3*(1-i)*i*i*e}function OM(i,e){return i*i*i*e}function yo(i,e,t,n,s){return DM(i,e)+NM(i,t)+UM(i,n)+OM(i,s)}var fc=class extends Hn{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},iu=class extends Hn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y),yo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dc=class extends Hn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends Hn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pc=class extends Hn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,s.x,r.x,o.x),xo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ru=class extends Hn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,s.x,r.x,o.x),xo(e,s.y,r.y,o.y),xo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mc=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(xp(a,c.x,l.x,u.x,f.x),xp(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},yp=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:Ro,CubicBezierCurve:fc,CubicBezierCurve3:iu,EllipseCurve:Ao,LineCurve:dc,LineCurve3:su,QuadraticBezierCurve:pc,QuadraticBezierCurve3:ru,SplineCurve:mc}),ou=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yp[s.type]().fromJSON(s))}return this}},gc=class extends ou{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new dc(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new pc(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new fc(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Ao(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var xc=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,u=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xt=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],p=n/2,m=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function M(){let v=new C,P=new C,T=0,E=(t-e)/n;for(let I=0;I<=r;I++){let B=[],y=I/r,S=y*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,G=O*c+a,Z=Math.sin(G),W=Math.cos(G);P.x=S*Z,P.y=-y*n+p,P.z=S*W,f.push(P.x,P.y,P.z),v.set(Z,E,W).normalize(),h.push(v.x,v.y,v.z),d.push(O,1-y),B.push(g++)}x.push(B)}for(let I=0;I<s;I++)for(let B=0;B<r;B++){let y=x[B][I],S=x[B+1][I],N=x[B+1][I+1],O=x[B][I+1];e>0&&(u.push(y,S,O),T+=3),t>0&&(u.push(S,N,O),T+=3)}l.addGroup(m,T,0),m+=T}function _(v){let P=g,T=new ye,E=new C,I=0,B=v===!0?e:t,y=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*y,0),h.push(0,y,0),d.push(.5,.5),g++;let S=g;for(let N=0;N<=s;N++){let G=N/s*c+a,Z=Math.cos(G),W=Math.sin(G);E.x=B*W,E.y=p*y,E.z=B*Z,f.push(E.x,E.y,E.z),h.push(0,y,0),T.x=Z*.5+.5,T.y=W*.5*y+.5,d.push(T.x,T.y),g++}for(let N=0;N<s;N++){let O=P+N,G=S+N;v===!0?u.push(G,G+1,O):u.push(G+1,G,O),I+=3}l.addGroup(m,I,v===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qn=class i extends xt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},au=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new C,v=new C,P=new C;for(let T=0;T<t.length;T+=3)d(t[T+0],_),d(t[T+1],v),d(t[T+2],P),c(_,v,P,M)}function c(M,_,v,P){let T=P+1,E=[];for(let I=0;I<=T;I++){E[I]=[];let B=M.clone().lerp(v,I/T),y=_.clone().lerp(v,I/T),S=T-I;for(let N=0;N<=S;N++)N===0&&I===T?E[I][N]=B:E[I][N]=B.clone().lerp(y,N/S)}for(let I=0;I<T;I++)for(let B=0;B<2*(T-I)-1;B++){let y=Math.floor(B/2);B%2===0?(h(E[I][y+1]),h(E[I+1][y]),h(E[I][y])):(h(E[I][y+1]),h(E[I+1][y+1]),h(E[I+1][y]))}}function l(M){let _=new C;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let v=p(M)/2/Math.PI+.5,P=m(M)/Math.PI+.5;o.push(v,1-P)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){let _=o[M+0],v=o[M+2],P=o[M+4],T=Math.max(_,v,P),E=Math.min(_,v,P);T>.9&&E<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,_){let v=M*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){let M=new C,_=new C,v=new C,P=new C,T=new ye,E=new ye,I=new ye;for(let B=0,y=0;B<r.length;B+=9,y+=6){M.set(r[B+0],r[B+1],r[B+2]),_.set(r[B+3],r[B+4],r[B+5]),v.set(r[B+6],r[B+7],r[B+8]),T.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),P.copy(M).add(_).add(v).divideScalar(3);let S=p(P);x(T,y+0,M,S),x(E,y+2,_,S),x(I,y+4,v,S)}}function x(M,_,v,P){P<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=P/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Es=class extends gc{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new gc().fromJSON(s))}return this}},zM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,d;if(n&&(r=GM(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)f=i[g],h=i[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Co(r,o,t,a,c,d,0),o}};function Jp(i,e,t,n,s){let r,o;if(s===QM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=_p(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=_p(r,i[r],i[r+1],o);return o&&Lc(o,o.next)&&(Po(o),o=o.next),o}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Lc(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Po(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Co(i,e,t,n,s,r,o){if(!i)return;!o&&r&&qM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?kM(i,n,s,r):BM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Po(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=FM(Ts(i),e,t),Co(i,e,t,n,s,r,2)):o===2&&HM(i,e,t,n,s,r):Co(Ts(i),e,t,n,s,r,1);break}}}function BM(i){let e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&or(s,a,r,c,o,l,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,x=a>c?a>l?a:l:c>l?c:l,p=u>f?u>h?u:h:f>h?f:h,m=cu(d,g,e,t,n),M=cu(x,p,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&or(a,u,c,f,l,h,_.x,_.y)&&Tt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,u,c,f,l,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&or(a,u,c,f,l,h,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,u,c,f,l,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function FM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Lc(s,r)&&jp(s,n,n.next,r)&&Io(s,r)&&Io(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Po(n),Po(n.next),n=i=r),n=n.next}while(n!==i);return Ts(n)}function HM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ZM(o,a)){let c=Qp(o,a);o=Ts(o,o.next),c=Ts(c,c.next),Co(o,e,t,n,s,r,0),Co(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function GM(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Jp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(KM(l));for(s.sort(VM),r=0;r<s.length;r++)t=WM(s[r],t);return t}function VM(i,e){return i.x-e.x}function WM(i,e){let t=XM(i,e);if(!t)return e;let n=Qp(t,i);return Ts(n,n.next),Ts(t,t.next)}function XM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&or(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Io(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&$M(s,t)))&&(s=t,u=f)),t=t.next;while(t!==a);return s}function $M(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function qM(i,e,t,n){let s=i;do s.z===0&&(s.z=cu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,YM(s)}function YM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function cu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function KM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function or(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ZM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!JM(i,e)&&(Io(i,e)&&Io(e,i)&&jM(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||Lc(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Lc(i,e){return i.x===e.x&&i.y===e.y}function jp(i,e,t,n){let s=za(Tt(i,e,t)),r=za(Tt(i,e,n)),o=za(Tt(t,n,i)),a=za(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&Oa(i,t,e)||r===0&&Oa(i,n,e)||o===0&&Oa(t,i,n)||a===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function za(i){return i>0?1:i<0?-1:0}function JM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Io(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function jM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qp(i,e){let t=new lu(i.i,i.x,i.y),n=new lu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _p(i,e,t,n){let s=new lu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var _o=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];vp(e),Mp(n,e);let o=e.length;t.forEach(vp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Mp(n,t[c]);let a=zM.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function vp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Mp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ar=class i extends au{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Rr=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=e,h=(t-e)/s,d=new C,g=new ye;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let M=m+p,_=M,v=M+n+1,P=M+n+2,T=M+1;a.push(_,v,T),a.push(v,P,T)}}this.setIndex(a),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Cr=class i extends dt{constructor(e=new Es([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(o,2));function l(u){let f=s.length/3,h=u.extractPoints(t),d=h.shape,g=h.holes;_o.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let M=g[p];_o.isClockWise(M)===!0&&(g[p]=M.reverse())}let x=_o.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){let M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=x.length;p<m;p++){let M=x[p],_=M[0]+f,v=M[1]+f,P=M[2]+f;n.push(_,v,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return eb(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function eb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var zt=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new C,h=new C,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let M=[],_=m/n,v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let T=P/t;f.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(T+v,1-_),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=u[m][M+1],v=u[m][M],P=u[m+1][M],T=u[m+1][M+1];(m!==0||o>0)&&d.push(_,v,T),(m!==n-1||c<Math.PI)&&d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yc=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new C,f=new C,h=new C;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,p=d/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(x,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Pe=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kp,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends Pe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function bp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function em(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hu=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sr:r=e,a=2*t-n;break;case Xa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sr:o=e,c=2*n-t;break;case Xa:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,M=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-d)*p+(1.5+d)*x+.5*g,v=d*p-d*x;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+M*o[l+P]+_*o[c+P]+v*o[f+P];return r}},_c=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},uu=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&tb(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[h+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=yr;var Ki=class extends Gn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=xr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends Gn{};vc.prototype.ValueTypeName="color";var Ei=class extends Gn{};Ei.prototype.ValueTypeName="number";var fu=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ti=class extends Gn{InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=xr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Gn{};Ai.prototype.ValueTypeName="vector";var Ir=class{constructor(e="",t=-1,n=[],s=Pu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sb(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=nb(c);c=bp(c,1,u),l=bp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ei(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let f=u[1],h=s[f];h||(s[f]=h=[]),h.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,h,d,g,x){if(d.length!==0){let p=[],m=[];em(d,p,m,g),p.length!==0&&x.push(new f(h,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let f=0;f<l.length;f++){let h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let d={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let x=0;x<h[g].morphTargets.length;x++)d[h[g].morphTargets[x]]=-1;for(let x in d){let p=[],m=[];for(let M=0;M!==h[g].morphTargets.length;++M){let _=h[g];p.push(_.time),m.push(_.morphTarget===x?1:0)}s.push(new Ei(".morphTargetInfluence["+x+"]",p,m))}c=d.length*o}else{let d=".bones["+t[f].name+"]";n(Ai,d+".position",h,"pos",s),n(Ti,d+".quaternion",h,"rot",s),n(Ai,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ib(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return vc;case"quaternion":return Ti;case"bool":case"boolean":return Ki;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function sb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ib(i.type);if(i.times===void 0){let t=[],n=[];em(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Lo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},rb=new Lo,Ri=class{constructor(e){this.manager=e!==void 0?e:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},du=class extends Error{constructor(e,t){super(e),this.response=t}},Do=class extends Ri{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=gi[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0,x=0,p=new ReadableStream({start(m){M();function M(){f.read().then(({done:_,value:v})=>{if(_)m.close();else{x+=v.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,E=u.length;T<E;T++){let I=u[T];I.onProgress&&I.onProgress(P)}m.enqueue(v),M()}},_=>{m.error(_)})}}});return new Response(p)}else throw new du(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Xi.add(e,l);let u=gi[e];delete gi[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=gi[e];if(u===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var pu=class extends Ri{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=bo("img");function c(){u(),Xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Mc=class extends Ri{constructor(e){super(e)}load(e,t,n,s){let r=new qt,o=new pu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Pr=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Lr=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ql=new ke,Sp=new C,wp=new C,No=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sp),wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wp),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mu=class extends No{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bc=class extends Pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ep=new ke,ho=new C,eh=new C,gu=class extends No{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(ho),eh.copy(n.position),eh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eh),n.updateMatrixWorld(),s.makeTranslation(-ho.x,-ho.y,-ho.z),Ep.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep)}},Dr=class extends Pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xu=class extends No{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new xu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ji=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Sc=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(e,c),r.manager.itemStart(e)}};var wc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tp(){return performance.now()}var yu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){sn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;sn.multiplyQuaternionsFlat(e,o,e,t,e,n),sn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Ou="\\[\\]\\.:\\/",ob=new RegExp("["+Ou+"]","g"),zu="[^"+Ou+"]",ab="[^"+Ou.replace("\\.","")+"]",cb=/((?:WC+[\/:])*)/.source.replace("WC",zu),lb=/(WCOD+)?/.source.replace("WCOD",ab),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),fb=new RegExp("^"+cb+lb+hb+ub+"$"),db=["material","materials","bones","map"],_u=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ob,"")}static parseTrackName(e){let t=fb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);db.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=_u;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vu=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ir,endingEnd:ir};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=eg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ng:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Pu:default:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===tg;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Q0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=sr,s.endingEnd=sr):(e?s.endingStart=this.zeroSlopeAtStart?sr:ir:s.endingStart=Xa,t?s.endingEnd=this.zeroSlopeAtEnd?sr:ir:s.endingEnd=Xa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},pb=new Float32Array(1),Ec=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let f=0;f!==r;++f){let h=s[f],d=h.name,g=u[d];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let x=t&&t._propertyBindings[f].binding.parsedPath;g=new yu(Mt.create(n,d,x),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new _c(new Float32Array(2),new Float32Array(2),1,pb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Ir.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Pu),c!==void 0){let f=c.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new vu(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Ir.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,f=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);function nm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new dt,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=tm(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let g=tm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function tm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new gt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){let x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function ku(i,e){if(e===Bp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Oo||e===Cc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Oo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Bo=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $u(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ji.extractUrlBase(e);o=ji.resolveURL(l,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Do(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===am){try{o[et.KHR_BINARY_GLTF]=new cf(e)}catch(f){s&&s(f);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new mf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case et.KHR_MATERIALS_UNLIT:o[f]=new Wu;break;case et.KHR_DRACO_MESH_COMPRESSION:o[f]=new lf(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[f]=new hf;break;case et.KHR_MESH_QUANTIZATION:o[f]=new uf;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function mb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vu=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new he(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ji(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Dr(u),l.distance=f;break;case"spot":l=new bc(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Wu=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let s=[];e.color=new he(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},Xu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Zu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},sf=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},rf=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},of=class{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}},af=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Vn.TRIANGLES&&l.mode!==Vn.TRIANGLE_STRIP&&l.mode!==Vn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,d=[];for(let g of f){let x=new ke,p=new C,m=new sn,M=new C(1,1,1),_=new Er(g.geometry,g.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,x.compose(p,m,M));for(let v in c)if(v==="_COLOR_0"){let P=c[v];_.instanceColor=new ws(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Et.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},am="glTF",zo=12,im={JSON:1313821514,BIN:5130562},cf=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-zo,r=new DataView(e,zo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===im.JSON){let l=new Uint8Array(e,zo+o,a);this.content=n.decode(l)}else if(c===im.BIN){let l=zo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},lf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let f=df[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=df[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=Ur[h.componentType];l[f]=d.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}f(d)},a,l,Yt,h)})})}},hf=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},uf=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},Dc=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,f=(n-t)/u,h=f*f,d=h*f,g=e*l,x=g-l,p=-2*d+3*h,m=d-h,M=1-p,_=m-h+f;for(let v=0;v!==a;v++){let P=o[x+v+a],T=o[x+v+c]*u,E=o[g+v+a],I=o[g+v]*u;r[v]=M*P+_*T+p*E+m*I}return r}},gb=new sn,ff=class extends Dc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return gb.fromArray(r).normalize().toArray(r),r}},Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sm={9728:nn,9729:xn,9984:Su,9985:fo,9986:nr,9987:ii},rm={33071:_i,33648:vo,10497:jn},Fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},df={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xb={CUBICSPLINE:void 0,LINEAR:yr,STEP:xr},Hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function As(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _b(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let f=e[l];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],f=l[1],h=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function vb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mb(i){let e,t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gu(t.attributes):e=i.indices+":"+Gu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Gu(i.targets[n]);return e}function Gu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function pf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Sb=new ke,mf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Mc(this.options.manager):this.textureLoader=new Sc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Do(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),Ci(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Fu[s.type],a=Ur[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new gt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Fu[s.type],l=Ur[s.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(d&&d!==f){let m=Math.floor(h/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(M);_||(x=new l(a,m*d,s.count*d/u),_=new Sr(x,d/u),t.cache.add(M,_)),p=new bs(_,c,h%d/u,g)}else a===null?x=new l(s.count*c):x=new l(a,h,s.count*c),p=new gt(x,c,g);if(s.sparse!==void 0){let m=Fu.SCALAR,M=Ur[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,P=new M(o[1],_,s.sparse.count*m),T=new l(o[2],v,s.sparse.count*c);a!==null&&(p=new gt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,I=P.length;E<I;E++){let B=P[E];if(p.setX(B,T[E*c]),c>=2&&p.setY(B,T[E*c+1]),c>=3&&p.setZ(B,T[E*c+2]),c>=4&&p.setW(B,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=sm[h.magFilter]||xn,u.minFilter=sm[h.minFilter]||ii,u.wrapS=rm[h.wrapS]||jn,u.wrapT=rm[h.wrapT]||jn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let h=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(x){let p=new qt(x);p.needsUpdate=!0,h(p)}),t.load(ji.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),Ci(f,o),f.userData.mimeType=o.mimeType||bb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ln,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new To,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Pe}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[et.KHR_MATERIALS_UNLIT]){let f=s[et.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new he(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Yt),a.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,bt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=$t);let u=r.alphaMode||Hu.OPAQUE;if(u===Hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Hu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pt){let f=r.emissiveFactor;a.emissive=new he().setRGB(f[0],f[1],f[2],Yt)}return r.emissiveTexture!==void 0&&o!==Pt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Ci(f,r),t.associations.set(f,{materials:e}),r.extensions&&As(s,f,r),f})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return om(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=Mb(l),f=s[u];if(f)o.push(f.promise);else{let h;l.extensions&&l.extensions[et.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=om(new dt,l,t),s[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?yb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],p=o[d],m,M=l[d];if(p.mode===Vn.TRIANGLES||p.mode===Vn.TRIANGLE_STRIP||p.mode===Vn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new rc(x,M):new le(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Vn.TRIANGLE_STRIP?m.geometry=ku(m.geometry,Cc):p.mode===Vn.TRIANGLE_FAN&&(m.geometry=ku(m.geometry,Oo));else if(p.mode===Vn.LINES)m=new hc(x,M);else if(p.mode===Vn.LINE_STRIP)m=new Tr(x,M);else if(p.mode===Vn.LINE_LOOP)m=new uc(x,M);else if(p.mode===Vn.POINTS)m=new kn(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&vb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ci(m,r),p.extensions&&As(s,m,p),t.assignFinalMaterial(m),f.push(m)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&As(s,f[0],r),f[0];let h=new ct;r.extensions&&As(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Hp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new br(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let f=o[l];if(f){a.push(f);let h=new ke;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ac(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){let d=s.channels[f],g=s.samplers[d.sampler],x=d.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],g=f[2],x=f[3],p=f[4],m=[];for(let M=0,_=h.length;M<_;M++){let v=h[M],P=d[M],T=g[M],E=x[M],I=p[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let B=n._createAnimationTracks(v,P,T,E,I);if(B)for(let y=0;y<B.length;y++)m.push(B[y])}return new Ir(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Sb)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Eo:l.length>1?u=new ct:l.length===1?u=l[0]:u=new Et,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Ci(u,r),r.extensions&&As(n,u,r),r.matrix!==void 0){let f=new ke;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),Ci(r,n),n.extensions&&As(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,f=c.length;u<f;u++)r.add(c[u]);let l=u=>{let f=new Map;for(let[h,d]of s.associations)(h instanceof yn||h instanceof qt)&&f.set(h,d);return u.traverse(h=>{let d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Qi[r.path]===Qi.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(Qi[r.path]){case Qi.weights:l=Ei;break;case Qi.rotation:l=Ti;break;case Qi.position:case Qi.scale:l=Ai;break;default:switch(n.itemSize){case 1:l=Ei;break;case 2:case 3:default:l=Ai;break}break}let u=s.interpolation!==void 0?xb[s.interpolation]:yr,f=this._getArrayFromAccessor(n);for(let h=0,d=c.length;h<d;h++){let g=new l(c[h]+"."+Qi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=pf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?ff:Dc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wb(i,e,t){let n=e.attributes,s=new zn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let u=pf(Ur[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){let f=r[l];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){let x=pf(Ur[h.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Cn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function om(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=df[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return at.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Ci(i,e),wb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_b(i,e.targets,t):i})}function cm(i){let e=new Map,t=new Map,n=i.clone();return lm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function lm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)lm(i.children[n],e.children[n],t)}var ko=class extends Ms{constructor(){super();let e=new In;e.deleteAttribute("uv");let t=new Pe({side:Bt}),n=new Pe,s=new Dr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new le(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new le(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new le(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new le(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let u=new le(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new le(e,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let h=new le(e,Or(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let d=new le(e,Or(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new le(e,Or(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new le(e,Or(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new le(e,Or(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new le(e,Or(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Or(i){let e=new Pt;return e.color.setScalar(i),e}var ri=[{id:"common",name:"Common",color:"#c9d1d9",weight:55,size:1},{id:"uncommon",name:"Uncommon",color:"#62e06a",weight:25,size:1.06},{id:"rare",name:"Rare",color:"#46a6ff",weight:12.5,size:1.13},{id:"epic",name:"Epic",color:"#b36bff",weight:5,size:1.22},{id:"legendary",name:"Legendary",color:"#ffb52e",weight:1.9,size:1.32},{id:"mythic",name:"Mythic",color:"#ff4d8d",weight:.5,size:1.42},{id:"secret",name:"Secret",color:"#ffffff",weight:.1,size:1.55}],Ht=[{id:"none",name:"",mult:1,chance:0,color:"#ffffff"},{id:"gold",name:"Gold",mult:2,chance:.05,color:"#ffd23a"},{id:"diamond",name:"Diamond",mult:3,chance:.02,color:"#9eefff"},{id:"neon",name:"Neon",mult:5,chance:.012,color:"#5bff9d"},{id:"rainbow",name:"Rainbow",mult:8,chance:.005,color:"rainbow"},{id:"cosmic",name:"Cosmic",mult:15,chance:.0015,color:"#c38bff"}],Cs=[{id:"pebble",name:"Pebble Beetle",r:0,inc:1,L:1,W:.82,H:.42,horn:"none",pat:"speck",c1:"#6f6a64",c2:"#a59d92",leg:"#3b3733",irid:0,metal:.1,rough:.45},{id:"leafback",name:"Leafback",r:0,inc:2,L:1,W:.76,H:.4,horn:"none",pat:"stripes",c1:"#3f8a35",c2:"#86cf5c",leg:"#28401f",irid:.1,metal:.1,rough:.35},{id:"button",name:"Button Bug",r:0,inc:3,L:.85,W:.86,H:.5,horn:"none",pat:"dot",c1:"#e98a2a",c2:"#3a2414",leg:"#2b1d12",irid:0,metal:.05,rough:.3},{id:"dusty",name:"Dusty Roller",r:0,inc:4,L:1,W:.9,H:.45,horn:"shovel",pat:"solid",c1:"#5b4232",c2:"#7d5c43",leg:"#2e2119",irid:0,metal:.2,rough:.5},{id:"acorn",name:"Acorn Weevil",r:0,inc:6,L:.9,W:.7,H:.5,horn:"weevil",pat:"grad",c1:"#8a5a2b",c2:"#d29a5e",leg:"#4a2f17",irid:0,metal:.1,rough:.4},{id:"ladybird",name:"Ladybird",r:1,inc:10,L:.85,W:.88,H:.52,horn:"none",pat:"spots",c1:"#e3241f",c2:"#141414",leg:"#141414",irid:0,metal:.05,rough:.15},{id:"mint",name:"Mint Leaf Beetle",r:1,inc:14,L:1,W:.78,H:.44,horn:"none",pat:"solid",c1:"#21d19a",c2:"#9bffe0",leg:"#0f5e46",irid:.7,metal:.6,rough:.2},{id:"tiger",name:"Tiger Stripe",r:1,inc:18,L:1.05,W:.74,H:.4,horn:"none",pat:"bands",c1:"#f4a312",c2:"#1b1b1b",leg:"#1b1b1b",irid:0,metal:.15,rough:.3},{id:"copper",name:"Copper Scarab",r:1,inc:24,L:1,W:.86,H:.46,horn:"shovel",pat:"solid",c1:"#c06a2c",c2:"#ffb27a",leg:"#5b2e12",irid:.2,metal:.95,rough:.22},{id:"bumble",name:"Bumblehorn",r:1,inc:30,L:1,W:.84,H:.48,horn:"rhino",pat:"bands",c1:"#ffd23a",c2:"#202020",leg:"#202020",irid:0,metal:.1,rough:.3,hornS:.6},{id:"ruby",name:"Ruby Scarab",r:2,inc:60,L:1,W:.88,H:.47,horn:"shovel",pat:"solid",c1:"#d0103a",c2:"#ff6d8a",leg:"#4a0614",irid:.5,metal:.75,rough:.15},{id:"sapphire",name:"Sapphire Jewel",r:2,inc:85,L:1.05,W:.74,H:.42,horn:"none",pat:"grad",c1:"#1a3dff",c2:"#1ee0ff",leg:"#0b1b66",irid:1,metal:.6,rough:.12},{id:"stag",name:"Stag Knight",r:2,inc:110,L:1.05,W:.76,H:.4,horn:"stag",pat:"solid",c1:"#4a2b1a",c2:"#8a5634",leg:"#24140b",irid:.15,metal:.3,rough:.2},{id:"limerhino",name:"Lime Rhino",r:2,inc:150,L:1,W:.86,H:.5,horn:"rhino",pat:"solid",c1:"#84e035",c2:"#d4ff8f",leg:"#2f5a10",irid:.35,metal:.4,rough:.2},{id:"candy",name:"Candy Shell",r:2,inc:200,L:.95,W:.86,H:.5,horn:"none",pat:"zig",c1:"#ff6ec4",c2:"#fff2fa",leg:"#a12a6e",irid:.3,metal:.05,rough:.15},{id:"hercules",name:"Hercules Titan",r:3,inc:400,L:1.1,W:.82,H:.48,horn:"herc",pat:"spots",c1:"#d4bf5f",c2:"#262218",leg:"#14120c",irid:.1,metal:.25,rough:.25},{id:"emerald",name:"Emerald Prince",r:3,inc:550,L:1,W:.8,H:.46,horn:"crown",pat:"solid",c1:"#05c86c",c2:"#7dffb9",leg:"#03502b",irid:1,metal:.85,rough:.1},{id:"lava",name:"Lava Crawler",r:3,inc:750,L:1.05,W:.84,H:.46,horn:"rhino",pat:"flame",c1:"#1c0f0b",c2:"#ff5a14",leg:"#120806",irid:0,metal:.3,rough:.35,glow:!0},{id:"frost",name:"Frost Shell",r:3,inc:950,L:1,W:.84,H:.5,horn:"none",pat:"speck",c1:"#9ad8ff",c2:"#ffffff",leg:"#3f7fa8",irid:.9,metal:.3,rough:.08,spikes:!0},{id:"trident",name:"Royal Trident",r:3,inc:1200,L:1.05,W:.82,H:.46,horn:"trident",pat:"grad",c1:"#4b1d8f",c2:"#d29bff",leg:"#22093f",irid:.7,metal:.6,rough:.15},{id:"sunburst",name:"Sunburst Scarab",r:4,inc:3e3,L:1,W:.9,H:.5,horn:"crown",pat:"sun",c1:"#ff7a00",c2:"#ffe14a",leg:"#6b2a00",irid:.3,metal:.85,rough:.15},{id:"galaxy",name:"Galaxy Rhino",r:4,inc:4500,L:1.05,W:.88,H:.52,horn:"rhino",pat:"galaxy",c1:"#120a33",c2:"#7d5cff",leg:"#0a0620",irid:.5,metal:.3,rough:.15,glow:!0,hornS:1.25},{id:"crystal",name:"Crystal Stag",r:4,inc:6500,L:1.1,W:.76,H:.42,horn:"stag",pat:"speck",c1:"#8be9ff",c2:"#ffffff",leg:"#3aa0c4",irid:1,metal:.4,rough:.04,hornS:1.25},{id:"thunder",name:"Thunderback",r:4,inc:9e3,L:1.1,W:.84,H:.48,horn:"herc",pat:"bolt",c1:"#1b2a63",c2:"#ffe93d",leg:"#0b1230",irid:.4,metal:.5,rough:.15,glow:!0},{id:"phoenix",name:"Phoenix Beetle",r:5,inc:25e3,L:1,W:.86,H:.48,horn:"crown",pat:"flame",c1:"#ff2a00",c2:"#ffd000",leg:"#5c0d00",irid:.4,metal:.5,rough:.15,glow:!0,wings:"#ff8a1e"},{id:"celestial",name:"Celestial Crown",r:5,inc:45e3,L:1.05,W:.88,H:.5,horn:"crown",pat:"sun",c1:"#f4f0ff",c2:"#ffcf4a",leg:"#8b6a1e",irid:1,metal:.7,rough:.08,hornS:1.4},{id:"abyss",name:"Abyss Emperor",r:5,inc:8e4,L:1.15,W:.86,H:.5,horn:"herc",pat:"veins",c1:"#07020f",c2:"#22e6ff",leg:"#05010a",irid:.6,metal:.4,rough:.12,glow:!0,eyeGlow:"#22e6ff"},{id:"pharaoh",name:"Pharaoh Scarab",r:6,inc:25e4,L:1,W:.92,H:.52,horn:"crown",pat:"bands",c1:"#ffcf2e",c2:"#1d3fb8",leg:"#6b4d00",irid:.3,metal:1,rough:.12,eyeGlow:"#5ad1ff"},{id:"dragon",name:"Dragonhorn",r:6,inc:5e5,L:1.1,W:.86,H:.5,horn:"trident",pat:"flame",c1:"#06301a",c2:"#3dff7f",leg:"#021a0c",irid:.5,metal:.5,rough:.15,glow:!0,wings:"#3dff7f",spikes:!0,hornS:1.3,eyeGlow:"#ffe14a"},{id:"void",name:"Void King",r:6,inc:1e6,L:1.15,W:.9,H:.52,horn:"herc",pat:"galaxy",c1:"#000000",c2:"#ff3df2",leg:"#000000",irid:1,metal:.5,rough:.1,glow:!0,eyeGlow:"#ff3df2",hornS:1.2},{id:"chimera",name:"Chimera Beetle",r:3,inc:1600,L:1.05,W:.86,H:.48,horn:"stag",pat:"zig",c1:"#ff3df2",c2:"#3dfff2",leg:"#3a0a40",irid:1,metal:.5,rough:.12,fuse:!0},{id:"mecha",name:"Mecha Scarab",r:4,inc:13e3,L:1.05,W:.9,H:.5,horn:"trident",pat:"bolt",c1:"#8a93a8",c2:"#3df2ff",leg:"#2a2f3a",irid:.2,metal:1,rough:.2,glow:!0,fuse:!0},{id:"prism",name:"Prism Titan",r:5,inc:13e4,L:1.1,W:.9,H:.52,horn:"herc",pat:"speck",c1:"#ffffff",c2:"#ff9df5",leg:"#c9c2ff",irid:1,metal:.3,rough:.02,glow:!0,hornS:1.3,fuse:!0},{id:"omega",name:"Omega Beetle",r:6,inc:22e5,L:1.15,W:.92,H:.54,horn:"crown",pat:"galaxy",c1:"#1a0033",c2:"#ffd700",leg:"#120022",irid:1,metal:.6,rough:.1,glow:!0,wings:"#ffd700",hornS:1.4,eyeGlow:"#ffd700",fuse:!0}],zc=Object.fromEntries(Cs.map(i=>[i.id,i])),vf=i=>i.replace(/^King /,""),hm=i=>vf(i).split(" ")[0],um=i=>{let e=vf(i).split(" ");return e[e.length-1]},Mf=(i,e)=>`hy(${i},${e})`;function Eb(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t];if(n==="(")e++;else if(n===")")e--;else if(n===","&&e===0)return[i.slice(0,t),i.slice(t+1)]}return null}function fm(i,e){let t=hm(e.name)+" "+um(i.name);return hm(e.name)===um(i.name)&&(t=vf(e.name)),i.id===e.id&&(t=i.name),{id:Mf(i.id,e.id),name:t,hybrid:!0,parents:[i.id,e.id],r:Math.min(6,Math.max(i.r,e.r)+(i.r===e.r&&i.r<5?1:0)),inc:Math.round((i.inc+e.inc)*1.35),L:(i.L+e.L)/2,W:(i.W+e.W)/2,H:(i.H+e.H)/2,horn:i.horn,hornS:i.hornS,spikes:i.spikes||e.spikes,pat:e.pat,c1:e.c1,c2:e.c2,leg:e.leg,irid:Math.max(i.irid,e.irid),metal:(i.metal+e.metal)/2,rough:Math.min(i.rough,e.rough),glow:i.glow||e.glow,wings:e.wings||i.wings,eyeGlow:e.eyeGlow||i.eyeGlow}}function Tb(i){return{...i,id:`king:${i.id}`,name:"King "+i.name,king:!0,base:i.id,r:Math.min(6,i.r+1),inc:Math.round(i.inc*4.5),horn:"crown",hornS:1.7,irid:Math.max(i.irid,.6),glow:!0,fuse:!1}}function _n(i){if(zc[i])return zc[i];let e=null;if(i.startsWith("hy(")&&i.endsWith(")")){let t=Eb(i.slice(3,-1));if(t){let n=_n(t[0]),s=_n(t[1]);n&&s&&(e=fm(n,s),e.id=i)}}else if(i.startsWith("hy:")){let[t,n]=i.slice(3).split("+"),s=_n(t),r=_n(n);s&&r&&(e=fm(s,r),e.id=i)}else if(i.startsWith("king:")){let t=_n(i.slice(5));t&&(e=Tb(t))}return e&&(zc[i]=e),e}function mm(i,e){return Ab(i.inc*Ht[e].mult*60)}function gm(i,e){return i.inc*Ht[e].mult}function Ab(i){if(i<100)return Math.round(i/5)*5||5;let e=Math.pow(10,Math.floor(Math.log10(i))-1);return Math.round(i/e)*e}var zr=new Map;function xm(i){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function ym(i){let e=2166136261;for(let t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function _m(i,e){let s=document.createElement("canvas");s.width=256,s.height=512;let r=s.getContext("2d"),o=xm(ym(i.id)),a=e?"#000":i.c1,c=i.c2;if(r.fillStyle=a,r.fillRect(0,0,256,512),!e){let f=r.createLinearGradient(0,0,256,0);f.addColorStop(0,"rgba(0,0,0,0.25)"),f.addColorStop(.6,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(255,255,255,0.08)"),r.fillStyle=f,r.fillRect(0,0,256,512)}let l=!e||i.glow;switch(r.fillStyle=c,r.strokeStyle=c,i.pat){case"speck":if(l)for(let f=0;f<260;f++)r.globalAlpha=.35+o()*.6,r.beginPath(),r.arc(o()*256,o()*512,1.5+o()*4,0,7),r.fill();break;case"stripes":if(l)for(let f=0;f<4;f++){let h=20+f*62;r.fillRect(h,0,18,512)}break;case"dot":l&&(r.beginPath(),r.ellipse(256*.72,512*.55,60,90,0,0,7),r.fill());break;case"spots":if(l){let f=[[.75,.25],[.45,.45],[.8,.62],[.35,.78],[.65,.88],[.25,.2]];for(let[h,d]of f)r.beginPath(),r.ellipse(h*256,d*512,26+o()*8,34+o()*10,0,0,7),r.fill()}break;case"bands":if(l)for(let f=0;f<4;f++)r.fillRect(0,70+f*115,256,48);break;case"grad":{let f=r.createLinearGradient(0,0,76.8,512);f.addColorStop(0,e?"#000":c),f.addColorStop(1,e?"#000":i.c1),r.fillStyle=f,r.fillRect(0,0,256,512);let h=r.createLinearGradient(0,0,256,0);h.addColorStop(0,"rgba(0,0,0,0.3)"),h.addColorStop(1,"rgba(255,255,255,0.1)"),e||(r.fillStyle=h,r.fillRect(0,0,256,512));break}case"zig":if(l){r.lineWidth=22;for(let f=0;f<6;f++){r.beginPath();for(let h=-40;h<552;h+=40)r.lineTo(f*48+(h/40%2?18:-18),h);r.stroke()}}break;case"flame":if(l){for(let h=0;h<70;h++){let d=o()*256,g=512*(.25+o()*.8);r.globalAlpha=.5+o()*.5,r.beginPath(),r.moveTo(d-14,g),r.quadraticCurveTo(d-6,g-50-o()*60,d+o()*10-5,g-90-o()*80),r.quadraticCurveTo(d+8,g-40,d+14,g),r.fill()}r.globalAlpha=1;let f=r.createLinearGradient(0,512,0,512*.5);f.addColorStop(0,c),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.fillRect(0,512*.5,256,512*.5)}break;case"sun":if(l){for(let d=0;d<14;d++){let g=d/14*Math.PI*2;r.beginPath(),r.moveTo(256,215.04),r.lineTo(256+Math.cos(g-.1)*600,215.04+Math.sin(g-.1)*600),r.lineTo(256+Math.cos(g+.1)*600,215.04+Math.sin(g+.1)*600),r.fill()}r.beginPath(),r.arc(256,215.04,70,0,7),r.fill()}break;case"galaxy":{if(!e){let f=r.createRadialGradient(153.6,256,10,153.6,256,300);f.addColorStop(0,i.c2),f.addColorStop(.5,"rgba(60,20,120,0.5)"),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.fillRect(0,0,256,512)}r.fillStyle="#fff";for(let f=0;f<220;f++){r.globalAlpha=.4+o()*.6;let h=o()<.08?3:1.2;r.beginPath(),r.arc(o()*256,o()*512,h,0,7),r.fill()}break}case"bolt":if(l){r.lineWidth=14,r.lineJoin="round";for(let f=0;f<3;f++){r.beginPath();let h=40+f*80;r.moveTo(h,0);for(let d=0;d<512;d+=60)h+=(o()-.5)*70,r.lineTo(h,d);r.stroke()}}break;case"veins":if(l){r.lineWidth=3;for(let f=0;f<18;f++){r.beginPath();let h=o()*256,d=o()*512;r.moveTo(h,d);for(let g=0;g<8;g++)h+=(o()-.5)*60,d+=(o()-.3)*60,r.lineTo(h,d);r.stroke()}}break;default:break}r.globalAlpha=1,e||(r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(251,0,5,512));let u=new Fn(s);return u.colorSpace=bt,u.anisotropy=4,u}function _f(i,e=!1){let t=i.id+(e?":e":"");return zr.has(t)||zr.set(t,_m(i,e)),zr.get(t)}function Fo(i){let e=i.id+":l";if(zr.has(e))return zr.get(e);let t=_f(i).image,n=document.createElement("canvas");n.width=t.width,n.height=t.height;let s=n.getContext("2d");s.drawImage(t,0,0);let r=s.getImageData(0,0,n.width,n.height),o=r.data,a=255,c=0;for(let f=0;f<o.length;f+=4){let h=o[f]*.3+o[f+1]*.59+o[f+2]*.11;a=Math.min(a,h),c=Math.max(c,h)}let l=Math.max(1,c-a);for(let f=0;f<o.length;f+=4){let d=255*(.5+.5*((o[f]*.3+o[f+1]*.59+o[f+2]*.11-a)/l));o[f]=o[f+1]=o[f+2]=d}s.putImageData(r,0,0);let u=new Fn(n);return u.colorSpace=bt,zr.set(e,u),u}var Nc=null;function dm(){return Nc||(Nc=_m({id:"cosmic",pat:"galaxy",c1:"#14062e",c2:"#b06bff"},!1),Nc)}var Rb=(()=>{let i=new zt(1,28,20,Math.PI-.38,Math.PI/2+.38,0,Math.PI);return i.rotateX(Math.PI/2),i})(),Rs=new zt(1,20,14),bf=new xt(1,.8,1,7,1);bf.translate(0,.5,0);bf.rotateX(Math.PI/2);var Bc=new Qn(1,1,8);Bc.translate(0,.5,0);function es(i,e,t,n=14,s=8){let r=new Ro(i.map(h=>new C(...h))),o=r.computeFrenetFrames(n,!1),a=[],c=[];for(let h=0;h<=n;h++){let d=h/n,g=r.getPointAt(d),x=e+(t-e)*d,p=o.normals[h],m=o.binormals[h];for(let M=0;M<s;M++){let _=M/s*Math.PI*2;a.push(g.x+x*(Math.cos(_)*p.x+Math.sin(_)*m.x),g.y+x*(Math.cos(_)*p.y+Math.sin(_)*m.y),g.z+x*(Math.cos(_)*p.z+Math.sin(_)*m.z))}}for(let h=0;h<n;h++)for(let d=0;d<s;d++){let g=h*s+d,x=h*s+(d+1)%s,p=(h+1)*s+d,m=(h+1)*s+(d+1)%s;c.push(g,p,x,x,p,m)}let l=r.getPointAt(1),u=a.length/3;a.push(l.x,l.y,l.z);for(let h=0;h<s;h++)c.push(n*s+h,u,n*s+(h+1)%s);let f=new dt;return f.setAttribute("position",new tt(a,3)),f.setAttribute("uv",new tt(new Float32Array(a.length/3*2),2)),f.setIndex(c),f.computeVertexNormals(),f}function pm(i,e,t,n){let s=new C(...i),r=new C(...e),o=new le(bf,n);return o.position.copy(s),o.scale.set(t,t,s.distanceTo(r)),o.lookAt(r),o.castShadow=!0,o}var gf=new Map;function ts(i,e){return gf.has(i)||gf.set(i,e()),gf.get(i)}var xf=new Map,Sf=[];function vm(i){for(let e of Sf)e.color.setHSL((i*.15+(e.userData.hOff||0))%1,.85,.55)}var Mm=!1;function bm(i){Mm=i}function Uc(i){if(Mm){let e={...i};return delete e.iridescence,delete e.clearcoat,delete e.clearcoatRoughness,delete e.iridescenceIOR,delete e.sheen,new Pe(e)}return new Zt(i)}function Cb(i,e){let t=i.id+":"+e;if(xf.has(t))return xf.get(t);let n=Ht[e].id,s,r,o,a,c={clearcoat:1,clearcoatRoughness:.08},l=i.glow?_f(i,!0):null;if(s=Uc({map:_f(i),metalness:i.metal,roughness:i.rough,iridescence:i.irid,iridescenceIOR:1.5,...c,emissiveMap:l,emissive:l?new he(i.c2):new he(0),emissiveIntensity:l?1.4:0}),r=Uc({color:new he(i.c1).lerp(new he(i.c2),i.pat==="solid"||i.pat==="grad"?.15:0).multiplyScalar(.92),metalness:i.metal,roughness:i.rough+.05,iridescence:i.irid,...c}),o=Uc({color:i.leg,metalness:.2,roughness:.35,...c}),a=Uc({color:"#050505",roughness:.05,metalness:.2,...c,emissive:i.eyeGlow?new he(i.eyeGlow):new he(0),emissiveIntensity:i.eyeGlow?2:0}),n==="gold"){for(let h of[s,r,o])h.color=new he("#ffc53a"),h.metalness=1,h.roughness=.18,h.iridescence!==void 0&&(h.iridescence=.15);s.color=new he("#ffd76a"),s.map=Fo(i),s.emissiveMap=null,s.emissiveIntensity=0}else if(n==="diamond"){for(let h of[s,r,o])h.color=new he("#b8f1ff"),h.metalness=.5,h.roughness=.02,h.iridescence!==void 0&&(h.iridescence=1,h.iridescenceThicknessRange=[300,900]),h.emissive=new he("#3fb7e0"),h.emissiveIntensity=.45;s.emissiveMap=null,s.map=Fo(i)}else if(n==="neon"){let h=new he().setHSL((new he(i.c1).getHSL({}).h+.5)%1,1,.55);s.map=Fo(i),s.color=h.clone().multiplyScalar(.6),s.emissive=h,s.emissiveMap=Fo(i),s.emissiveIntensity=.9,r.color=h.clone().multiplyScalar(.5),r.emissive=h,r.emissiveIntensity=.7,o.emissive=new he(i.c1),o.emissiveIntensity=.6}else if(n==="rainbow"){for(let[h,d]of[s,r,o].entries())d.map=null,d.metalness=.6,d.roughness=.12,d.iridescence!==void 0&&(d.iridescence=1),d.userData.hOff=h*.12,Sf.push(d),d.emissive=new he(2236962),d.emissiveIntensity=1;s.map=Fo(i),s.emissiveMap=null}else if(n==="cosmic"){s.map=dm(),s.emissiveMap=dm(),s.emissive=new he("#ffffff"),s.emissiveIntensity=.9,s.metalness=.3,s.roughness=.15,s.color=new he("#ffffff");for(let h of[r,o])h.color=new he("#1a0838"),h.emissive=new he("#6b2cff"),h.emissiveIntensity=.5}let u=i.wings?new Pe({color:i.wings,emissive:i.wings,emissiveIntensity:.6,transparent:!0,opacity:.55,side:$t,depthWrite:!1}):null;s.side=$t;let f={shell:s,part:r,leg:o,eye:a,wing:u};return xf.set(t,f),f}var Ib=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="#fff",e.fillRect(30,4,4,56),e.fillRect(4,30,56,4),new Fn(i)})(),Pb=(()=>{let e=new Float32Array(66),t=new Float32Array(22);for(let s=0;s<22;s++){let r=Math.random()*Math.PI*2,o=.55+Math.random()*.35;e[s*3]=Math.cos(r)*o,e[s*3+1]=.1+Math.random()*.8,e[s*3+2]=Math.sin(r)*o*1.2}let n=new dt;return n.setAttribute("position",new gt(e,3)),n})(),Oc={};function Lb(i){if(!Oc[i]){let e={gold:"#ffd84a",diamond:"#bff6ff",neon:"#6bffa8",rainbow:"#ffffff",cosmic:"#c38bff",secret:"#ffffff"}[i]||"#fff";Oc[i]=new Ln({map:Ib,color:e,size:.22,transparent:!0,depthWrite:!1,blending:ur}),i==="rainbow"&&Sf.push(Oc[i])}return Oc[i]}var Db=new Pt({color:"#ffffff"});function Nb(i){let e={shell:{role:"shell"},part:{role:"part"},leg:{role:"leg"},eye:{role:"eye"},wing:i.wings?{role:"wing"}:null};for(let T in e)e[T]&&(e[T]=Object.assign(new Pt,{userData:{role:T}}));let t=Object.assign(new Pt,{userData:{role:"hl"}}),n=new ct,s=new ct;n.add(s);let{L:r,W:o,H:a}=i,c=.2;s.position.y=c;let l=r*.4,u=[];for(let T of[1,-1]){let E=new ct;E.position.set(0,.03,-.1*r+l*.95);let I=new le(Rb,e.shell);I.scale.set(T*o*.5,a,l),I.position.set(0,0,-l*.95),I.castShadow=!0,E.add(I),s.add(E),u.push(E)}let f=new le(Rs,e.leg);f.scale.set(o*.44,a*.35,l*.95),f.position.set(0,0,-.1*r),s.add(f);let h=new le(Rs,e.part);h.scale.set(o*.38,a*.62,r*.17),h.position.set(0,.02,.32*r),h.castShadow=!0,s.add(h);let d=new ct;d.position.set(0,-.01,.47*r),s.add(d);let g=new le(Rs,e.part);g.scale.set(o*.22,a*.36,r*.11),g.castShadow=!0,d.add(g);for(let T of[1,-1]){let E=new le(Rs,e.eye);E.scale.setScalar(.06*(o/.8)),E.position.set(T*o*.17,.045,.05),d.add(E);let I=new le(Rs,t);I.scale.setScalar(.018*(o/.8)),I.position.set(T*o*.17+T*.012,.075,.095),d.add(I)}let x=[];for(let T of[1,-1]){let E=new ct;E.position.set(T*o*.12,.06,r*.08),d.add(E);let I=ts("ant",()=>es([[0,0,0],[.06,.12,.12],[.16,.2,.2],[.24,.24,.28]],.012,.01,8,5)),B=new le(I,e.leg);B.scale.x=T,E.add(B);let y=new le(Rs,e.leg);y.scale.set(.03,.03,.05),y.position.set(T*.24,.24,.28),E.add(y),x.push(E)}let p=(i.hornS||1)*1.35,m=e.part,M=(T,E,I=[0,0,0],B=1)=>{let y=new le(T,m);return y.position.set(...I),y.scale.set(B*p,p,p),y.castShadow=!0,E.add(y),y};if(i.horn==="rhino"&&M(ts("rhino",()=>es([[0,.02,.02],[0,.18,.14],[0,.42,.2],[0,.55,.12]],.07,.008)),d),i.horn==="shovel"){let T=new le(Rs,m);T.scale.set(o*.3,.025,.12),T.position.set(0,-.02,.1),d.add(T)}if(i.horn==="weevil"&&M(ts("weevil",()=>es([[0,0,0],[0,-.03,.15],[0,-.1,.3],[0,-.16,.36]],.045,.03)),d),i.horn==="herc"&&(M(ts("hercL",()=>es([[0,0,.02],[0,.02,.25],[0,.1,.48],[0,.22,.58]],.045,.01)),d),M(ts("hercU",()=>es([[0,.05,-.05],[0,.24,.12],[0,.3,.42],[0,.18,.66]],.065,.012)),h,[0,0,0]).scale.multiplyScalar(1)),i.horn==="stag")for(let T of[1,-1])M(ts("stag",()=>es([[.05,0,.05],[.16,.03,.2],[.18,.06,.36],[.06,.08,.46]],.045,.01)),d,[0,0,0],T);if(i.horn==="trident"){M(ts("triC",()=>es([[0,.05,0],[0,.25,.1],[0,.42,.22],[0,.5,.36]],.06,.01)),h,[0,0,.05]);for(let T of[1,-1])M(ts("triS",()=>es([[.08,.04,0],[.16,.2,.08],[.22,.32,.2]],.045,.008)),h,[0,0,.05],T)}if(i.horn==="crown")for(let E=0;E<5;E++){let I=(E/4-.5)*1.6,B=new le(Bc,m),y=(E===2?.3:.17)*p;B.scale.set(.04*p,y,.04*p),B.position.set(Math.sin(I)*o*.3,a*.45,r*.03+Math.cos(I)*.04),B.rotation.z=-I*.5,B.rotation.x=.35,h.add(B),B.scale.set(B.scale.x/h.scale.x,B.scale.y/h.scale.y,B.scale.z/h.scale.z),B.position.set(B.position.x/h.scale.x,B.position.y/h.scale.y,B.position.z/h.scale.z)}for(let T of h.children)T.geometry!==Bc&&T.scale.set(T.scale.x/h.scale.x,T.scale.y/h.scale.y,T.scale.z/h.scale.z);if(i.spikes){let T=xm(ym(i.id+"sp"));for(let E=0;E<9;E++){let I=new le(Bc,e.part),B=-.1*r+(T()-.5)*l*1.4,y=(T()-.5)*o*.6,S=a*Math.sqrt(Math.max(.05,1-(y/(o*.5))**2-(B+.1*r)**2/l**2))+.02;I.position.set(y,S,B),I.scale.set(.03,.12,.03),I.rotation.x=-.3,I.castShadow=!0,s.add(I)}}let _=null;if(e.wing){_=[];for(let T of[1,-1]){let E=new Es;E.moveTo(0,0),E.bezierCurveTo(.35,.05,.6,-.15,.62,-.55),E.bezierCurveTo(.45,-.75,.15,-.6,0,-.1);let I=new le(new Cr(E,10),e.wing);I.rotation.x=Math.PI/2-.2,I.scale.setScalar(.62);let B=new ct;B.position.set(T*.05,a*.75,.15*r),B.add(I),B.scale.x=T,s.add(B),_.push(B)}u[0].rotation.z=-.35,u[1].rotation.z=.35,u[0].rotation.y=.25,u[1].rotation.y=-.25}let v=[],P=[.24,.04,-.18];for(let T of[1,-1])P.forEach((E,I)=>{let B=new ct;B.position.set(T*o*.3,-.02,E*r),s.add(B);let y=[.35,0,-.4][I],S=T*.26,N=.08,O=Math.sin(y)*.22,G=T*.4,Z=-c+0,W=Math.sin(y)*.38;B.add(pm([0,0,0],[S,N,O],.035,e.leg)),B.add(pm([S,N,O],[G,Z,W],.025,e.leg)),B.userData.phase=I%2===(T>0?0:1)?0:Math.PI,v.push(B)});return Ub(s,[...v,...x,..._||[]]),v.forEach((T,E)=>T.name="leg"+E),x.forEach((T,E)=>T.name="ant"+E),_&&_.forEach((T,E)=>T.name="wing"+E),n.userData.lift=c,n}var yf=new Map;function wf(i,e=0){let t=typeof i=="string"?zc[i]:i;yf.has(t.id)||yf.set(t.id,Nb(t));let n=yf.get(t.id),s=n.clone(!0),r=Cb(t,e);s.traverse(p=>{if(p.isMesh){let m=p.material.userData.role;p.material=m==="hl"?Db:r[m]}});let o=s.children[0],a=[],c=[],l=[];s.traverse(p=>{p.name.startsWith("leg")?a.push(p):p.name.startsWith("ant")?c.push(p):p.name.startsWith("wing")&&l.push(p)}),a.forEach((p,m)=>p.userData.phase=n.getObjectByName("leg"+m).userData.phase);let u=n.userData.lift,f=null,h=Ht[e].id;(h!=="none"||t.r===6)&&(f=new kn(Pb,Lb(h==="none"?"secret":h)),f.scale.set(t.W*1.1,.7,t.L*.9),s.add(f));let d=ri[t.r].size*1.75;s.scale.setScalar(d);let g=Math.random()*10,x=Math.random()*10;return s.userData={sp:t,mut:e,legs:a,antennas:c,wings:l.length?l:null,aura:f,body:o,scale:d,update(p,m){x+=p,m>.01&&(g+=p*m*9);let M=Math.min(1,m*1.6);for(let _ of a){let v=g+_.userData.phase;_.rotation.y=Math.sin(v)*.35*M,_.rotation.z=Math.max(0,Math.cos(v))*.25*M*Math.sign(_.position.x)}o.position.y=u+Math.abs(Math.sin(g))*.015*M+Math.sin(x*2)*.004;for(let[_,v]of c.entries())v.rotation.x=Math.sin(x*2.3+_)*.15,v.rotation.y=Math.sin(x*1.7+_*2)*.12;if(l.length)for(let[_,v]of l.entries())v.rotation.z=(_?-1:1)*(Math.sin(x*9)*.25);f&&(f.rotation.y+=p*.6,f.position.y=Math.sin(x*1.5)*.05)}},s}function Ub(i,e){let t=new Set(e);i.updateMatrixWorld(!0);let n=new ke().copy(i.matrixWorld).invert(),s={},r=[];i.traverse(o=>{if(!o.isMesh)return;let a=o;for(;a&&a!==i;){if(t.has(a))return;a=a.parent}let c=o.geometry.clone().applyMatrix4(new ke().multiplyMatrices(n,o.matrixWorld));if(o.matrixWorld.determinant()<0){let u=c.index.array;for(let f=0;f<u.length;f+=3){let h=u[f];u[f]=u[f+2],u[f+2]=h}}let l=o.material.userData.role;(s[l]=s[l]||{mat:o.material,geos:[]}).geos.push(c),r.push(o)});for(let o of r)o.parent.remove(o);for(let o of[...i.children])!t.has(o)&&o.children.length===0&&!o.isMesh&&i.remove(o);for(let o in s){let{mat:a,geos:c}=s[o];for(let u of c)for(let f of Object.keys(u.attributes))["position","normal","uv"].includes(f)||u.deleteAttribute(f);let l=new le(nm(c),a);l.castShadow=o==="shell"||o==="part",i.add(l)}}var Lt={z0:-47,z1:47,w:5},rn={x0:-33,x1:33,z0:-52,z1:52},Ob=[{owner:"player",name:"YOUR BASE",side:-1,z:15,color:"#3fb5ff"},{owner:0,name:"MOSS'S BASE",side:-1,z:-15,color:"#6ad04a"},{owner:1,name:"PIP'S BASE",side:1,z:-15,color:"#ff8a3d"},{owner:2,name:"BRAMBLE'S BASE",side:1,z:15,color:"#c070ff"}],Ho=18;function zb(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Ii(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Fn(n);return s.colorSpace=bt,s}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(i,e,t,n){this.rect(i,e,t,n)});function Sm(i,e){let t=zb(1234),n=[],s=[],r=[],o={top:{value:new he("#5fb6ff")},bot:{value:new he("#d9f3ff")},night:{value:0}},a=new le(new zt(400,32,16),new Pn({side:Bt,depthWrite:!1,uniforms:o,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 bot; uniform float night; varying vec3 vP;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
      void main(){ float y = clamp(vP.y*1.6+0.15,0.,1.); vec3 c = mix(bot, top, y);
        vec3 q = floor(vP*220.); float s = step(0.9975, h(q)) * night * y; gl_FragColor = vec4(c + s, 1.); }`}));a.renderOrder=-10,i.add(a),i.fog=new sc("#cdeeff",70,190);let c=new Lr("#eaf6ff","#6c9a4a",1);i.add(c);let l=new Ji("#fff4dc",2.4);l.castShadow=!0,l.shadow.mapSize.set(2048,2048);let u=l.shadow.camera;u.left=-34,u.right=34,u.top=34,u.bottom=-34,u.near=1,u.far=120,l.shadow.bias=-6e-4,l.shadow.normalBias=.03,i.add(l),i.add(l.target);let f=Ii(512,512,(F,j,Y)=>{F.fillStyle="#7cc35a",F.fillRect(0,0,j,Y);for(let ie=0;ie<3e3;ie++){let ae=t();F.fillStyle=ae<.5?"rgba(60,130,40,0.25)":"rgba(170,220,110,0.25)",F.fillRect(t()*j,t()*Y,2+t()*6,2+t()*6)}});f.wrapS=f.wrapT=jn,f.repeat.set(30,30);let h=new le(new wi(500,500),new Pe({map:f,roughness:.95}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,i.add(h);let d=Ii(256,1024,(F,j,Y)=>{F.fillStyle="#c99a63",F.fillRect(0,0,j,Y);for(let ae=0;ae<2500;ae++)F.fillStyle=t()<.5?"rgba(120,80,40,0.3)":"rgba(240,200,150,0.3)",F.beginPath(),F.arc(t()*j,t()*Y,1+t()*3,0,7),F.fill();let ie=F.createLinearGradient(0,0,j,0);ie.addColorStop(0,"rgba(124,195,90,1)"),ie.addColorStop(.1,"rgba(124,195,90,0)"),ie.addColorStop(.9,"rgba(124,195,90,0)"),ie.addColorStop(1,"rgba(124,195,90,1)"),F.fillStyle=ie,F.fillRect(0,0,j,Y)}),g=new le(new wi(Lt.w+2,Lt.z1-Lt.z0+6),new Pe({map:d,roughness:1,transparent:!1}));g.rotation.x=-Math.PI/2,g.position.y=.02,g.receiveShadow=!0,i.add(g);let x=new ct;x.position.set(0,0,Lt.z0-3);let p=new le(new zt(4,24,12,0,Math.PI*2,0,Math.PI/2),new Pe({color:"#8a5a33",roughness:1}));p.scale.set(1.2,.6,.9),p.castShadow=!0,p.receiveShadow=!0,x.add(p);let m=new le(new xc(1.9,24),new Pt({color:"#1a0e06"}));m.position.set(0,1,2.6),m.rotation.x=-.6,x.add(m),i.add(x),s.push({x:0,z:Lt.z0-3.5,r:4.2});let M=new Pe({color:"#7a5032",roughness:.9}),_=new ct;_.position.set(0,1.6,Lt.z1+4.5);let v=new le(new xt(2.3,2.3,7,20,1,!0),M);v.rotation.x=Math.PI/2,v.castShadow=!0,_.add(v);let P=new le(new xt(1.9,1.9,7.02,20,1,!0),new Pe({color:"#3a2416",side:Bt}));P.rotation.x=Math.PI/2,_.add(P);let T=new le(new Rr(1.9,2.3,20),new Pe({color:"#d9b07a"}));T.position.z=-3.5,T.rotation.y=Math.PI,_.add(T),i.add(_),n.push({x0:-2.4,x1:-1.8,z0:Lt.z1+1,z1:Lt.z1+8},{x0:1.8,x1:2.4,z0:Lt.z1+1,z1:Lt.z1+8});let E=Ii(512,160,(F,j,Y)=>{F.fillStyle="#6b4226",F.fillRect(0,0,j,Y),F.fillStyle="#8b5a36",F.fillRect(8,8,j-16,Y-16),F.fillStyle="#fff6dc",F.font="bold 76px sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("BUG TRAIL",j/2,Y/2+4)}),I=kb(E,5,1.6);I.position.set(-4.2,0,Lt.z0+1),I.rotation.y=.5,i.add(I);let B=Ob.map((F,j)=>Fb(i,F,j,n,r)),y=(F,j)=>Math.abs(F)>27.5&&Math.abs(F)<49&&Math.abs(j)<32;n.push({x0:rn.x0-5,x1:rn.x0,z0:-200,z1:200},{x0:rn.x1,x1:rn.x1+5,z0:-200,z1:200},{x0:-200,x1:200,z0:rn.z0-5,z1:rn.z0},{x0:-200,x1:200,z0:rn.z1,z1:rn.z1+5});let S=(F,j,Y=0)=>{if(Math.abs(F)<9&&j>Lt.z0-8&&j<Lt.z1+9)return!0;for(let ie of B)if(F>ie.x0-3-Y&&F<ie.x1+3+Y&&j>ie.z0-3-Y&&j<ie.z1+3+Y)return!0;return!1},N=new Qn(.35,1,4,1);N.translate(0,.5,0),N.scale(1,1,.35);let O=new Pe({color:"#ffffff",roughness:.8}),G=2600,Z=new Er(N,O,G),W=new ke,re=new sn,q=new Bn,be=new he,ve=0;for(let F=0;F<4e4&&ve<G;F++){let j=(t()-.5)*150,Y=(t()-.5)*190,ie=j>rn.x0&&j<rn.x1&&Y>rn.z0&&Y<rn.z1;if(ie&&(S(j,Y)||t()<.75)||y(j,Y))continue;let ae=ie?.6+t()*1.2:2+t()*6;q.set((t()-.5)*.5,t()*6.28,(t()-.5)*.5),re.setFromEuler(q),W.compose(new C(j,0,Y),re,new C(1+t()*.8,ae,1)),Z.setMatrixAt(ve,W),be.setHSL(.24+t()*.07,.55+t()*.2,.32+t()*.18),Z.setColorAt(ve,be),ve++}Z.count=ve,Z.castShadow=!1,Z.receiveShadow=!0,i.add(Z);let Te=new zt(1,12,8),Je=new xt(.25,.35,1,8);Je.translate(0,.5,0);let fe=new Pe({color:"#4f9a3a"}),k=new zt(1,10,6),J=["#ff6fa8","#ffd23f","#ffffff","#b47dff","#ff8a3d","#5fc8ff"],ce=(F,j,Y)=>{let ie=new ct;ie.position.set(F,0,j);let ae=(6+t()*8)*Y,Ge=new le(Je,fe);Ge.scale.set(Y,ae,Y),Ge.castShadow=!0,ie.add(Ge);let Ce=new ct;Ce.position.y=ae,Ce.rotation.set((t()-.5)*.6,t()*6,(t()-.5)*.6),ie.add(Ce);let rt=new Pe({color:J[Math.floor(t()*J.length)],roughness:.6}),D=6+Math.floor(t()*3);for(let ne=0;ne<D;ne++){let ge=ne/D*Math.PI*2,Me=new le(Te,rt);Me.scale.set(2.2*Y,.25*Y,1.1*Y),Me.position.set(Math.cos(ge)*2*Y,0,Math.sin(ge)*2*Y),Me.rotation.y=-ge,Me.castShadow=!0,Ce.add(Me)}let we=new le(Te,new Pe({color:"#ffcc33",roughness:.9}));we.scale.set(1.1*Y,.6*Y,1.1*Y),Ce.add(we);let K=new le(k,fe);K.scale.set(2.2*Y,.15*Y,.9*Y),K.position.set(1.8*Y,ae*.35,0),K.rotation.z=.4,ie.add(K),i.add(ie),s.push({x:F,z:j,r:.6*Y}),r.push((ne,ge)=>{Ce.rotation.z=Math.sin(ge*.7+F)*.05})},de=new zt(1,20,10,0,Math.PI*2,0,Math.PI/2),Be=Ii(256,128,(F,j,Y)=>{F.fillStyle="#e8413a",F.fillRect(0,0,j,Y),F.fillStyle="#fff6ee";for(let ie=0;ie<16;ie++)F.beginPath(),F.arc(t()*j,t()*Y*.8,6+t()*10,0,7),F.fill()}),Le=new Pe({map:Be,roughness:.5}),Ye=new Pe({color:"#e0a35a",roughness:.6}),nt=new Pe({color:"#f5ead6"}),$e=(F,j,Y,ie=!0)=>{let ae=new ct;ae.position.set(F,0,j);let Ge=new le(Je,nt);Ge.scale.set(Y*1.1,Y*3,Y*1.1),Ge.castShadow=!0,ae.add(Ge);let Ce=new le(de,ie?Le:Ye);Ce.scale.set(Y*3,Y*2,Y*3),Ce.position.y=Y*2.8,Ce.castShadow=!0,ae.add(Ce),i.add(ae),s.push({x:F,z:j,r:.5*Y+.3})},L=new Ar(1,1),ln=new Pe({color:"#a7a39c",roughness:.85,flatShading:!0}),je=(F,j,Y)=>{let ie=new le(L,ln);ie.scale.set(Y*(1+t()*.5),Y*.6,Y),ie.position.set(F,Y*.2,j),ie.rotation.y=t()*6,ie.castShadow=!0,ie.receiveShadow=!0,i.add(ie),s.push({x:F,z:j,r:Y*1.05})},st=new Pe({color:"#4fae3b",roughness:.7,side:$t}),Oe=new Es;Oe.moveTo(0,0),Oe.bezierCurveTo(-.2,.6,-1.1,.9,-1,1.6),Oe.bezierCurveTo(-.9,2.1,-.2,2.1,0,1.6),Oe.bezierCurveTo(.2,2.1,.9,2.1,1,1.6),Oe.bezierCurveTo(1.1,.9,.2,.6,0,0);let vt=new Cr(Oe,8),Fe=(F,j,Y)=>{let ie=new ct;ie.position.set(F,0,j);let ae=new le(Je,fe);ae.scale.set(.12*Y,2.2*Y,.12*Y),ie.add(ae);for(let Ge=0;Ge<3;Ge++){let Ce=new le(vt,st);Ce.scale.setScalar(Y),Ce.position.y=2.2*Y,Ce.rotation.set(-Math.PI/2+.25,0,0);let rt=new ct;rt.rotation.y=Ge/3*Math.PI*2+t(),rt.add(Ce),rt.position.y=0,ie.add(rt),Ce.castShadow=!0}i.add(ie)};for(let F=0;F<70;F++){let j=Math.floor(t()*4),Y,ie;if(j===0?(Y=rn.x0-3-t()*30,ie=(t()-.5)*140):j===1?(Y=rn.x1+3+t()*30,ie=(t()-.5)*140):j===2?(Y=(t()-.5)*120,ie=rn.z0-4-t()*30):(Y=(t()-.5)*120,ie=rn.z1+4+t()*30),y(Y,ie))continue;let ae=t();ae<.45?ce(Y,ie,.8+t()*.9):ae<.7?$e(Y,ie,1+t()*1.4,t()<.6):ae<.85?Fe(Y,ie,1.5+t()*1.5):je(Y,ie,1.5+t()*2.5)}let A=[[-28,0],[28,0],[-30,-38],[30,-38],[-30,38],[30,38],[-12,-42],[12,-42],[-12,42],[12,42],[-26,-46],[26,46]];for(let[F,j]of A){let Y=t();Y<.35?$e(F,j,.6+t()*.5,t()<.5):Y<.65?je(F,j,.8+t()*.8):Y<.85?Fe(F,j,.8+t()*.5):ce(F,j,.45)}let b=300,V=new Float32Array(b*3);for(let F=0;F<b;F++)V[F*3]=(t()-.5)*90,V[F*3+1]=t()*12,V[F*3+2]=(t()-.5)*110;let Q=new dt;Q.setAttribute("position",new gt(V,3));let oe=new kn(Q,new Ln({color:"#fffbd0",size:.12,transparent:!0,opacity:.8,depthWrite:!1}));i.add(oe),r.push((F,j)=>{let Y=Q.attributes.position.array;for(let ie=0;ie<b;ie++)Y[ie*3+1]+=Math.sin(j+ie)*.003,Y[ie*3]+=Math.cos(j*.3+ie)*.004;Q.attributes.position.needsUpdate=!0});let ee=1500,Ae=new Float32Array(ee*3);for(let F=0;F<ee;F++)Ae[F*3]=(t()-.5)*80,Ae[F*3+1]=t()*30,Ae[F*3+2]=(t()-.5)*80;let me=new dt;me.setAttribute("position",new gt(Ae,3));let Se=new kn(me,new Ln({color:"#cfe8ff",size:.18,transparent:!0,opacity:.7,depthWrite:!1}));Se.visible=!1,i.add(Se);let Qe={deck:null,buildDeck:F=>(Qe.deck||(Qe.deck=Bb(i,F,n)),Qe.deck),scene:i,sun:l,hemi:c,skyU:o,bases:B,colliders:n,circles:s,rain:Se,update(F,j,Y){l.position.set(Y.x+18,40,Y.z+22),l.target.position.set(Y.x,0,Y.z);for(let ie of r)ie(F,j);if(Se.visible){let ie=me.attributes.position.array;for(let ae=0;ae<ee;ae++)ie[ae*3+1]-=F*28,ie[ae*3+1]<0&&(ie[ae*3+1]+=30);me.attributes.position.needsUpdate=!0,Se.position.set(Y.x,0,Y.z)}}};return Qe}var vn=3;function Bb(i,e,t){let n=e.side,s=n<0?e.x0-1.2:e.x1+1.2,r=n<0?e.x0-15:e.x1+15,o=Math.min(s,r),a=Math.max(s,r),c=e.z0,l=e.z1,u=e.cz,f=vn,h=new ct;h.visible=!1,i.add(h);let d=Ii(256,256,(S,N,O)=>{S.fillStyle="#b07a48",S.fillRect(0,0,N,O);for(let G=0;G<O;G+=32)S.fillStyle=G%64?"#a46e3e":"#ba8552",S.fillRect(0,G,N,30),S.fillStyle="rgba(60,30,10,0.35)",S.fillRect(0,G+30,N,2)});d.wrapS=d.wrapT=jn,d.repeat.set(3,5);let g=new le(new In(a-o,.5,l-c),[new Pe({color:"#8a5a35"}),new Pe({color:"#8a5a35"}),new Pe({map:d}),new Pe({color:"#6b4226"}),new Pe({color:"#8a5a35"}),new Pe({color:"#8a5a35"})]);g.position.set((o+a)/2,f-.25,u),g.castShadow=!0,g.receiveShadow=!0,h.add(g);let x=new Pe({color:"#6b4226",roughness:.9});for(let S of[o+.6,(o+a)/2,a-.6])for(let N of[c+.6,u,l-.6]){let O=new le(new xt(.35,.4,f,8),x);O.position.set(S,f/2,N),O.castShadow=!0,h.add(O)}let p=new Pe({color:"#8a5a35"}),m=e.capMat,M=new xt(.3,.3,1,8);M.rotateZ(Math.PI/2);let _=(S,N,O,G)=>{let Z=Math.hypot(O-S,G-N),W=Math.atan2(G-N,O-S);for(let re=0;re<2;re++){let q=new le(M,re?m:p);q.scale.set(Z,1,1),q.position.set((S+O)/2,f+.35+re*.6,(N+G)/2),q.rotation.y=-W,q.castShadow=!0,h.add(q)}t.push({x0:Math.min(S,O)-.4,x1:Math.max(S,O)+.4,z0:Math.min(N,G)-.4,z1:Math.max(N,G)+.4,floor:1})};_(o,c,a,c),_(o,l,a,l),_(o,c,o,l),_(a,c,a,l);let v=(S,N)=>Ii(256,256,(O,G,Z)=>{O.fillStyle=N,O.beginPath(),O.arc(128,128,124,0,7),O.fill(),O.fillStyle="#fff",O.font="900 50px sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(S,128,132)}),P=(S,N,O,G)=>{let Z=new le(new xt(.85,.85,.14,24),[new Pe({color:"#2f8fd8"}),new Pe({map:v(G,"#3fb5ff"),emissive:"#3fb5ff",emissiveIntensity:.35}),new Pe({color:"#2f8fd8"})]);return Z.position.set(S,N+.08,O),Z.rotation.y=n<0?Math.PI/2:-Math.PI/2,i.add(Z),Z.visible=!1,Z},T={x:e.x0+1.4*(n<0?1:-1)*-1*-1,z:u};T.x=n<0?e.x0+1.3:e.x1-1.3;let E={x0:o,x1:a,z0:c,z1:l,cz:u,g:h,H:f,upPad:T,upLand:{x:n<0?a-2.8:o+2.8,z:u},downPad:{x:n<0?a-1.6:o+1.6,z:u-3.6},downLand:{x:T.x-n*1.6,z:u-3.4},slots:[],meshes:[]};E.meshes.push(P(T.x,0,T.z,"\u2B06 UP"),P(E.downPad.x,f,E.downPad.z,"\u2B07 DOWN"));let I=[new Pe({color:"#8a5a35"}),new Pe({color:"#e2b77c"}),new Pe({color:"#8a5a35"})],B=new xt(1.45,1.6,.4,22),y=new In(1,.12,1.7);for(let S of[n<0?o+2.4:a-2.4,n<0?o+7.6:a-7.6])for(let N of[-8.4,-5.04,-1.68,1.68,5.04,8.4]){let O=S,G=u+N,Z=new le(B,I);Z.position.set(O,f+.2,G),Z.castShadow=!0,Z.receiveShadow=!0,i.add(Z);let W=new Pe({color:"#3fbf58",emissive:"#1d7a2c",emissiveIntensity:0,roughness:.4}),re=O-n*2.35,q=new le(y,W);q.position.set(re,f+.08,G),i.add(q),Z.visible=q.visible=!1,E.slots.push({x:O,z:G,padX:re,padZ:G,ped:Z,pad:q,padMat:W,beetle:null,floor:1})}return E.setVisible=S=>{h.visible=S;for(let N of E.meshes)N.visible=S},E.onDeck=(S,N)=>S>o&&S<a&&N>c&&N<l,E}function kb(i,e,t){let n=new ct,s=new le(new xt(.12,.15,2.6,6),new Pe({color:"#5a3820"}));s.position.y=1.3,s.castShadow=!0,n.add(s);let r=new le(new wi(e,t),new Pe({map:i,side:$t}));return r.position.y=2.6+t/2-.3,r.castShadow=!0,n.add(r),n}function Fb(i,e,t,n,s){let r=e.side,o=r*11,a=r*29,c=Math.min(o,a),l=Math.max(o,a),u=e.z-11,f=e.z+11,h=new ct;i.add(h);let d=new he(e.color),g=Ii(256,256,(fe,k,J)=>{fe.fillStyle="#b9895a",fe.fillRect(0,0,k,J);for(let ce=0;ce<900;ce++)fe.fillStyle=Math.random()<.5?"rgba(90,60,30,0.25)":"rgba(230,190,140,0.25)",fe.fillRect(Math.random()*k,Math.random()*J,3,3)});g.wrapS=g.wrapT=jn,g.repeat.set(3,4);let x=new le(new wi(l-c,f-u),new Pe({map:g,roughness:1}));x.rotation.x=-Math.PI/2,x.position.set((c+l)/2,.03,e.z),x.receiveShadow=!0,h.add(x);let p=new Pe({color:"#8a5a35",roughness:.85}),m=new Pe({color:d,roughness:.5}),M=new xt(.4,.4,1,10);M.rotateZ(Math.PI/2);let _=(fe,k,J,ce)=>{let de=Math.hypot(J-fe,ce-k),Be=(fe+J)/2,Le=(k+ce)/2,Ye=Math.atan2(ce-k,J-fe);for(let $e=0;$e<2;$e++){let L=new le(M,$e?m:p);L.scale.set(de,1,1),L.position.set(Be,.4+$e*.75,Le),L.rotation.y=-Ye,L.castShadow=!0,L.receiveShadow=!0,h.add(L)}let nt=.45;n.push({x0:Math.min(fe,J)-nt,x1:Math.max(fe,J)+nt,z0:Math.min(k,ce)-nt,z1:Math.max(k,ce)+nt})},v=3;_(a,u,a,f),_(o,u,a,u),_(o,f,a,f),_(o,u,o,e.z-v),_(o,e.z+v,o,f);for(let[fe,k]of[[o,u],[o,f],[a,u],[a,f],[o,e.z-v],[o,e.z+v]]){let J=new le(new xt(.55,.6,2.2,10),p);J.position.set(fe,1.1,k),J.castShadow=!0,h.add(J);let ce=new le(new zt(.55,10,8),m);ce.position.set(fe,2.25,k),h.add(ce)}let P=document.createElement("canvas");P.width=1024,P.height=192;let T=new Fn(P);T.colorSpace=bt;let E=fe=>{let k=P.getContext("2d"),J=1024,ce=192;k.clearRect(0,0,J,ce),k.fillStyle=e.color,k.beginPath(),k.roundRect(4,4,J-8,ce-8,40),k.fill(),k.lineWidth=10,k.strokeStyle="rgba(0,0,0,0.25)",k.stroke();let de=104;for(k.font=`900 ${de}px Lilita, sans-serif`;k.measureText(fe).width>J-60&&de>40;)de-=6,k.font=`900 ${de}px Lilita, sans-serif`;k.fillStyle="#fff",k.textAlign="center",k.textBaseline="middle",k.lineWidth=14,k.strokeStyle="rgba(0,0,0,0.35)",k.strokeText(fe,J/2,ce/2+6),k.fillText(fe,J/2,ce/2+6),T.needsUpdate=!0};E(e.name);let I=new wr(new Ss({map:T,transparent:!0}));I.scale.set(8,1.5,1),I.position.set(o,4.2,e.z),h.add(I);for(let fe of[e.z-v,e.z+v]){let k=new le(new xt(.22,.22,3.4,8),p);k.position.set(o,1.7,fe),h.add(k)}let B=new Pn({transparent:!0,depthWrite:!1,side:$t,uniforms:{t:{value:0},c:{value:d.clone()},a:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float t; uniform vec3 c; uniform float a; varying vec2 vU;
      void main(){ vec2 p = vU*vec2(40.,14.); vec2 h = abs(fract(p + vec2(0., floor(p.x)*0.5)) - 0.5); float hex = smoothstep(0.42,0.48,max(h.x,h.y));
        float scan = 0.5+0.5*sin(vU.y*30. - t*4.); float edge = smoothstep(0.85,1.,abs(vU.x*2.-1.));
        gl_FragColor = vec4(mix(c, vec3(1.), hex*0.6), a*(0.12 + hex*0.35 + scan*0.06 + edge*0.15)); }`}),y=new le(new zt(1,40,16,0,Math.PI*2,0,Math.PI/2),B);y.scale.set((l-c)/2+.6,7,(f-u)/2+.6),y.position.set((c+l)/2,0,e.z),y.visible=!1,y.renderOrder=5,h.add(y);let S={x0:o-.4,x1:o+.4,z0:e.z-v,z1:e.z+v,gate:null};n.push(S);let N=[],O=[r*25.8,r*21.2,r*16.6],G=[-8.4,-5.04,-1.68,1.68,5.04,8.4],Z=Ii(256,256,(fe,k,J)=>{fe.fillStyle="#e2b77c",fe.fillRect(0,0,k,J),fe.strokeStyle="rgba(140,90,45,0.55)";for(let ce=12;ce<128;ce+=14)fe.lineWidth=3+Math.random()*3,fe.beginPath(),fe.arc(128+Math.random()*4,128+Math.random()*4,ce,0,7),fe.stroke();fe.strokeStyle="#7a4a24",fe.lineWidth=14,fe.beginPath(),fe.arc(128,128,121,0,7),fe.stroke()}),W=[new Pe({color:"#8a5a35",roughness:.9}),new Pe({map:Z,roughness:.8}),new Pe({color:"#8a5a35"})],re=new xt(1.45,1.6,.4,22),q=new In(1,.12,1.7);for(let fe=0;fe<3;fe++)for(let k of G){let J=O[fe],ce=e.z+k,de=new le(re,W);de.position.set(J,.2,ce),de.receiveShadow=!0,de.castShadow=!0,h.add(de);let Be=new Pe({color:"#3fbf58",emissive:"#1d7a2c",emissiveIntensity:0,roughness:.4}),Le=new le(q,Be),Ye=J-r*2.35;Le.position.set(Ye,.08,ce),Le.receiveShadow=!0,h.add(Le),N.push({x:J,z:ce,padX:Ye,padZ:ce,ped:de,pad:Le,padMat:Be,beetle:null,row:fe}),de.visible=Le.visible=!1}let be=o+r*1.4,ve=e.z+9.4,Te=null;{let fe=Ii(256,256,(k,J,ce)=>{k.fillStyle="#ffcc33",k.beginPath(),k.arc(128,128,124,0,7),k.fill(),k.fillStyle="#7a4b00",k.font="900 64px sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText("LOCK",128,132)});Te=new le(new xt(1.1,1.1,.16,24),[new Pe({color:"#d9a21f"}),new Pe({map:fe,emissive:"#ffcc33",emissiveIntensity:.25}),new Pe({color:"#d9a21f"})]),Te.position.set(be,.09,ve),Te.rotation.y=r<0?Math.PI/2:-Math.PI/2,h.add(Te)}let Je={idx:t,owner:e.owner,name:e.name,color:e.color,side:r,cz:e.z,x0:c,x1:l,z0:u,z1:f,xin:o,entranceOut:{x:o+-r*2.5,z:e.z},entranceIn:{x:o+r*2.2,z:e.z},banner:I,setBanner:E,capMat:m,slots:N,gate:y,gateMat:B,gateCol:S,lockUntil:0,lockPos:{x:be,z:ve},lockPad:Te,inside(fe,k,J=0){return fe>c+J&&fe<l-J&&k>u+J&&k<f-J},setSlotCount(fe){N.forEach((k,J)=>{k.ped.visible=k.pad.visible=J<fe}),this.slotCount=fe},slotCount:0};return S.gate=Je,s.push((fe,k)=>{B.uniforms.t.value=k}),Je}var wm=window.BEETLE_PLATFORM||"preview",Is={crazygames:!1,gd:!1,web:!1,preview:!1}[wm]??!1,Br="beetle-tycoon-save-v1",yt=null,_t={ready:!1,muted:!1,onMute:null,async init(){if(wm==="crazygames"&&window.CrazyGames&&window.CrazyGames.SDK)try{yt=window.CrazyGames.SDK,await yt.init(),this.ready=!0;try{this.muted=!!yt.game.settings.muteAudio,yt.game.addSettingsChangeListener(i=>{this.muted=!!i.muteAudio,this.onMute&&this.onMute(this.muted)})}catch{}}catch(i){console.warn("CG init failed",i),yt=null}},async username(){try{if(yt&&yt.user){let i=await yt.user.getUser();return i&&i.username}}catch{}return null},loadingStart(){try{yt&&yt.game.loadingStart()}catch{}},loadingStop(){try{yt&&yt.game.loadingStop()}catch{}},_playing:!1,gameplayStart(){if(!this._playing){this._playing=!0;try{yt&&yt.game.gameplayStart()}catch{}}},gameplayStop(){if(this._playing){this._playing=!1;try{yt&&yt.game.gameplayStop()}catch{}}},happytime(){try{yt&&yt.game.happytime()}catch{}},rewarded(){return new Promise(i=>{if(!Is||!yt)return i(!1);try{yt.ad.requestAd("rewarded",{adStarted:()=>this.onAdStart&&this.onAdStart(),adFinished:()=>{this.onAdEnd&&this.onAdEnd(),i(!0)},adError:()=>{this.onAdEnd&&this.onAdEnd(),i(!1)}})}catch{i(!1)}})},load(){try{let i=yt&&yt.data?yt.data.getItem(Br):localStorage.getItem(Br);return i?JSON.parse(i):null}catch{return null}},save(i){let e=JSON.stringify(i);try{yt&&yt.data?yt.data.setItem(Br,e):localStorage.setItem(Br,e)}catch{}},clear(){try{yt&&yt.data&&yt.data.removeItem(Br),localStorage.removeItem(Br)}catch{}}};var Ct=null,Go=null,Li=null,Pi=null,_e={sfxOn:!0,musicOn:!0,sdkMuted:!1,ensure(){if(Ct){Ct.state==="suspended"&&Ct.resume();return}try{Ct=new(window.AudioContext||window.webkitAudioContext)}catch{return}Go=Ct.createGain(),Go.connect(Ct.destination),Li=Ct.createGain(),Li.connect(Go),Pi=Ct.createGain(),Pi.gain.value=.32,Pi.connect(Go),this.apply(),Gb()},apply(){Ct&&(Go.gain.value=this.sdkMuted?0:1,Li.gain.value=this.sfxOn?.9:0,Pi.gain.setTargetAtTime(this.musicOn?.32:0,Ct.currentTime,.2))},play(i,e=0){if(!Ct||!this.sfxOn)return;let t=Hb[i];t&&t(Ct.currentTime,e)}};function At(i,e,t,n="sine",s=.3,r=Li,o=0,a=.005){let c=Ct.createOscillator(),l=Ct.createGain();c.type=n,c.frequency.setValueAtTime(e,i),o&&c.frequency.exponentialRampToValueAtTime(Math.max(30,e*o),i+t),l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(s,i+a),l.gain.exponentialRampToValueAtTime(8e-4,i+t),c.connect(l),l.connect(r),c.start(i),c.stop(i+t+.05)}function Ef(i,e,t=.2,n=1200,s=1,r="bandpass",o=Li){let a=Ct.sampleRate*e,c=Ct.createBuffer(1,a,Ct.sampleRate),l=c.getChannelData(0);for(let d=0;d<a;d++)l[d]=Math.random()*2-1;let u=Ct.createBufferSource();u.buffer=c;let f=Ct.createBiquadFilter();f.type=r,f.frequency.value=n,f.Q.value=s;let h=Ct.createGain();h.gain.setValueAtTime(t,i),h.gain.exponentialRampToValueAtTime(.001,i+e),u.connect(f),f.connect(h),h.connect(o),u.start(i)}var Hb={coin(i,e){let t=880*Math.pow(2,Math.min(e,12)/12);At(i,t,.12,"triangle",.25),At(i+.05,t*1.5,.18,"sine",.2)},buy(i){[523,659,784,1047].forEach((e,t)=>At(i+t*.06,e,.25,"triangle",.22))},rare(i){[523,659,784,1047,1319,1568].forEach((e,t)=>{At(i+t*.07,e,.5,"triangle",.2),At(i+t*.07,e*2,.3,"sine",.06)})},grab(i){At(i,300,.25,"sine",.3,Li,2.6),Ef(i,.15,.12,2500,.8)},place(i){At(i,660,.12,"triangle",.25),At(i+.08,990,.2,"triangle",.22)},alarm(i){for(let e=0;e<3;e++)At(i+e*.3,880,.14,"square",.1),At(i+e*.3+.15,660,.14,"square",.1)},bonk(i){At(i,220,.25,"square",.18,Li,.4),Ef(i,.08,.25,600,1)},deny(i){At(i,200,.15,"sawtooth",.12),At(i+.12,150,.2,"sawtooth",.12)},click(i){At(i,1200,.05,"triangle",.15)},event(i){[784,988,1175,1568].forEach((e,t)=>At(i+t*.12,e,.8,"sine",.16))},lock(i){At(i,400,.3,"sine",.25,Li,2),At(i+.1,800,.4,"triangle",.12)},jump(i){At(i,330,.18,"sine",.18,Li,1.8)},rebirth(i){for(let e=0;e<8;e++)At(i+e*.08,392*Math.pow(2,e/4),.7,"triangle",.16)}};function Gb(){let e=.32608695652173914,t=[[57,60,64,67],[53,57,60,64],[55,59,62,65],[52,55,59,62]],n=c=>440*Math.pow(2,(c-69)/12),s=Ct.currentTime+.2,r=0,o=[0,2,1,3,2,1,3,2];function a(c,l,u){At(c,l,.5,"sine",u,Pi),At(c,l*4,.08,"sine",u*.25,Pi)}setInterval(()=>{for(;s<Ct.currentTime+.5;){let c=Math.floor(r/8)%4,l=t[c],u=r%8;u===0&&At(s,n(l[0]-24),e*7,"triangle",.22,Pi,0,.02),u===4&&At(s,n(l[0]-17),e*3,"triangle",.14,Pi,0,.02),a(s,n(l[o[u]]+12),u%2?.07:.1),r%32>16&&u%3===0&&a(s+e*.5,n(l[(u+2)%4]+24),.04),(u===2||u===6)&&Ef(s,.04,.03,8e3,.7,"highpass",Pi),s+=e,r++}},120)}var pe={online:!1,seat:0,host:0,room:null,members:{},ws:null,handlers:{},sent:0,get isHost(){return!this.online||this.host===this.seat},on(i,e){this.handlers[i]=e},send(i){if(!(!this.online||!this.ws||this.ws.readyState!==1))try{this.ws.send(JSON.stringify(i)),this.sent++}catch{}},humans(){return Object.keys(this.members).map(Number)},connect(i,e,t=3500){return new Promise(n=>{if(!i)return n(!1);let s=!1,r=c=>{s||(s=!0,n(c))},o;try{o=new WebSocket(i.replace(/^http/,"ws").replace(/\/$/,"")+"/play?name="+encodeURIComponent(e||"Player"))}catch{return r(!1)}let a=setTimeout(()=>{try{o.close()}catch{}r(!1)},t);o.onmessage=c=>{let l;try{l=JSON.parse(c.data)}catch{return}if(l.t==="welcome"){clearTimeout(a),this.ws=o,this.online=!0,this.seat=l.seat,this.host=l.host,this.room=l.room,this.members={};for(let f of l.members)this.members[f.seat]={name:f.name};r(!0);return}if(l.t==="full"){clearTimeout(a),r(!1);return}l.t==="join"&&(this.members[l.seat]={name:l.name},this.host=l.host),l.t==="leave"&&(delete this.members[l.seat],this.host=l.host);let u=this.handlers[l.t];if(u)try{u(l)}catch(f){console.error("net handler",l.t,f)}},o.onclose=()=>{clearTimeout(a);let c=this.online;this.online=!1,this.ws=null,r(!1),c&&this.handlers.disconnect&&this.handlers.disconnect()},o.onerror=()=>{}})}};var te=i=>document.getElementById(i),Vb=/beetledebug/.test(location.search),Ps=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Ps&&document.body.classList.add("touch");var Em=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc"];function Xe(i){if(i=Math.floor(i),i<1e3)return""+i;let e=Math.min(Em.length-1,Math.floor(Math.log10(i)/3)),t=i/Math.pow(1e3,e),n=t>=100?t.toFixed(0):t>=10?t.toFixed(1):t.toFixed(2);return n.includes(".")&&(n=n.replace(/0+$/,"").replace(/\.$/,"")),n+Em[e]}var Wn={slots:{name:"Bigger Base",icon:"\u{1F3E0}",desc:"+1 beetle spot",max:12,cost:i=>Math.round(1500*Math.pow(3.1,i))},speed:{name:"Running Shoes",icon:"\u{1F45F}",desc:"Run faster (great for stealing!)",max:1/0,cost:i=>Math.round(400*Math.pow(2.2,i))},lock:{name:"Stronger Lock",icon:"\u{1F512}",desc:"+5 seconds of lock time",max:5,cost:i=>2e3*Math.pow(8,i)},luck:{name:"Lucky Clover",icon:"\u{1F340}",desc:"More rare beetles & mutations",max:5,cost:i=>6e4*Math.pow(11,i)},floor2:{name:"Upstairs Spot",icon:"\u{1F3D7}\uFE0F",desc:"+1 spot on your second floor",max:12,cost:i=>Math.round(4e6*Math.pow(2.4,i)),needReb:1},auto:{name:"Auto-Collector",icon:"\u{1F9F2}",desc:"Grab all cash as soon as you enter your base",max:1,cost:()=>25e5}},Df=i=>6e7*Math.pow(10,i),kr=()=>({v:1,v2:!0,name:"",skin:{color:"classic",hat:"none",base:"default"},steals:0,buys:0,play:0,money:50,rebirths:0,upg:{slots:0,speed:0,lock:0,luck:0,auto:0,floor2:0},base:[],book:{},t:Date.now(),tut:0,set:{music:!0,sfx:!0,hq:!Ps},earned:0,first:!0,seenNew:!1,nextLeg:300,nextMyth:900,daily:{last:"",streak:0},tasks:[]}),R=kr(),Ym=te("c"),ti=new wo({canvas:Ym,antialias:!0,powerPreference:"high-performance"});ti.toneMapping=Ac;ti.toneMappingExposure=1.05;ti.outputColorSpace=bt;var Dt=new Ms,ci=new Ot(48,1,.5,600),ze,Wb=new wc,Ne=0;function Xb(){let i=R.set.hq;ti.setPixelRatio(Math.min(window.devicePixelRatio||1,i?2:1.25)),ti.shadowMap.enabled=!0,ti.shadowMap.type=i?bu:Tc,ze&&ze.sun.shadow.mapSize.set(i?2048:1024,i?2048:1024)}function Tm(){let i=window.innerWidth,e=window.innerHeight;ti.setSize(i,e,!1),ci.aspect=i/e,ci.fov=i/e<1?56:48,ci.updateProjectionMatrix()}var rs=class{constructor(e=512,t=256,n=5.6){this.cv=document.createElement("canvas"),this.cv.width=e,this.cv.height=t,this.g=this.cv.getContext("2d"),this.tex=new Fn(this.cv),this.tex.colorSpace=bt,this.sprite=new wr(new Ss({map:this.tex,transparent:!0,depthWrite:!1,depthTest:!1})),this.sprite.center.set(.5,0),this.sprite.scale.set(n,n*t/e,1),this.sprite.renderOrder=10,this.key="",Dt.add(this.sprite)}draw(e,t){if(t===this.key)return;this.key=t;let n=this.g,s=this.cv.width,r=this.cv.height;n.clearRect(0,0,s,r);let o=r-6;n.textAlign="center",n.textBaseline="bottom",n.lineJoin="round";for(let a=e.length-1;a>=0;a--){let c=e[a];if(!c)continue;n.font=`${c.font||"400"} ${c.size}px Lilita, Nunito, sans-serif`,n.lineWidth=c.size*.22,n.strokeStyle="rgba(15,20,35,0.9)";let l=c.segs||[{t:c.text,c:c.color}],u=l.reduce((h,d)=>h+n.measureText(d.t).width,0);if(u>s-16){let h=(s-16)/u;n.font=`${c.font||"400"} ${Math.floor(c.size*h)}px Lilita, Nunito, sans-serif`,n.lineWidth=c.size*h*.22,u=l.reduce((d,g)=>d+n.measureText(g.t).width,0)}let f=s/2-u/2;n.textAlign="left";for(let h of l){if(n.strokeText(h.t,f,o),h.c==="rainbow"){let d=n.createLinearGradient(f,0,f+n.measureText(h.t).width,0);["#ff4d4d","#ffb84d","#fff04d","#5bff7a","#4dc9ff","#b36bff"].forEach((g,x)=>d.addColorStop(x/5,g)),n.fillStyle=d}else n.fillStyle=h.c;n.fillText(h.t,f,o),f+=n.measureText(h.t).width}o-=c.size*1.02}this.tex.needsUpdate=!0}dispose(){Dt.remove(this.sprite),this.tex.dispose(),this.sprite.material.dispose()}},$b=1,Qt=new Set,jt=[{id:"none",name:"",mult:1,chance:0},{id:"giant",name:"Giant",mult:1.5,chance:.04,color:"#ffb36b",scale:1.35},{id:"wet",name:"Wet",mult:1.5,chance:.025,color:"#6bc8ff",ev:"rain",evx:8},{id:"shiny",name:"Shiny",mult:2,chance:.015,color:"#fff3a0"},{id:"fiery",name:"Fiery",mult:2.5,chance:.008,color:"#ff6a3d",ev:"meteor",evx:8},{id:"lucky",name:"Lucky",mult:3,chance:.004,color:"#5bff7a",ev:"lucky",evx:10}];function Km(i=1){for(let e=jt.length-1;e>=1;e--){let t=jt[e];if(Math.random()<t.chance*i*(1+.3*R.upg.luck)*(it&&t.ev===it.id?t.evx:1))return e}return 0}var qb=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"#fff"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new Fn(i)})();function Yb(i){let e=jt[i.trait];if(!e||!e.color||e.scale)return;let t=14,n=new Float32Array(t*3);for(let o=0;o<t;o++){let a=o/t*Math.PI*2;n[o*3]=Math.cos(a)*.75,n[o*3+1]=.15+o%3*.25,n[o*3+2]=Math.sin(a)*.85}let s=new dt;s.setAttribute("position",new gt(n,3));let r=new kn(s,new Ln({map:qb,color:e.color,size:.3,transparent:!0,depthWrite:!1,blending:ur}));i.obj.add(r),i.traitFx=r}var wn=class{constructor(e,t,n=0){this.id=$b++,this.sp=_n(e),this.mut=t,this.trait=jt[n]?n:0,this.obj=wf(this.sp,t),Dt.add(this.obj),jt[this.trait].scale&&(this.obj.scale.multiplyScalar(jt[this.trait].scale),this.obj.userData.scale*=jt[this.trait].scale),Yb(this),this.x=0,this.z=0,this.y=0,this.yaw=0,this.speed=0,this.state="trail",this.path=[],this.base=null,this.slot=-1,this.carrier=null,this.wanted=null,this.label=new rs(512,160,4.6),this.h=(.2+this.sp.H+.35)*this.obj.userData.scale+.25,Qt.add(this)}get inc(){return gm(this.sp,this.mut)*jt[this.trait].mult}get price(){return Math.round(mm(this.sp,this.mut)*jt[this.trait].mult)}get rar(){return ri[this.sp.r]}follow(e,t){if(!this.path.length)return this.speed=0,!0;let n=this.path[0],s=n.x-this.x,r=n.z-this.z,o=Math.hypot(s,r),a=t*e;if(o<=a){if(this.x=n.x,this.z=n.z,this.path.shift(),n.tp!==void 0&&(Qc(this,n.tp),this.y=this.floor*vn),!this.path.length)return this.speed=0,!0}else this.x+=s/o*a,this.z+=r/o*a,this.turnTo(Math.atan2(s,r),e);return this.speed=t/3,!1}turnTo(e,t){let n=e-this.yaw;n=Math.atan2(Math.sin(n),Math.cos(n)),this.yaw+=n*Math.min(1,t*8)}sync(e){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.yaw,this.obj.userData.update(e,this.speed),this.traitFx&&(this.traitFx.rotation.y+=e*1.2)}remove(){Dt.remove(this.obj),this.label.dispose(),Qt.delete(this)}};function Kb(i,e){let t=[],n=Ht[i.mut],s=jt[i.trait],r=[];i.trait&&r.push({t:s.name.toUpperCase(),c:s.color}),i.mut&&r.push({t:(r.length?" \xB7 ":"")+n.name.toUpperCase(),c:n.color==="rainbow"?"rainbow":n.color}),r.length&&t.push({segs:r,size:34}),t.push({text:i.sp.name,color:i.sp.r===6?"rainbow":i.sp.r===0?"#ffffff":i.rar.color,size:46});let o={t:"$"+Xe(i.inc*os())+"/s",c:"#7dff8d"};return t.push({segs:[{t:"Earns ",c:"#c8f7cf"},o],size:34}),e==="trail"&&t.push({segs:[{t:"Price ",c:"#ffe9a8"},{t:"$"+Xe(i.price),c:R.money>=i.price?"#ffd84a":"#ff7a7a"}],size:42}),e==="wanted"&&t.push({text:i.wanted.info.name+" wants it!",color:"#ffb0b0",size:28}),i.wasMine&&i.state==="rival"&&t.unshift({text:"\u26A0 YOURS! Steal it back",color:"#ff8a8a",size:30}),t}var qc=null,Yo=class{constructor(e,t){this.obj=cm(qc.scene),this.obj.scale.setScalar(1.55),this.obj.traverse(n=>{n.isMesh&&(n.castShadow=!0,e&&(n.material=n.material.clone(),n.material.color=new he(e).lerp(new he("#ffffff"),.25)))}),Dt.add(this.obj),this.mixer=new Ec(this.obj),this.acts={};for(let n of qc.animations)this.acts[n.name]=this.mixer.clipAction(n);this.cur=null,this.play("idle"),this.x=0,this.z=0,this.y=0,this.vy=0,this.jy=0,this.floor=0,this.yaw=0,this.moving=!1,this.carry=null,this.name=t}play(e){if(this.cur===e||!this.acts[e])return;this.acts[e].reset().fadeIn(.15).play(),this.cur&&this.acts[this.cur].fadeOut(.15),this.cur=e}turnTo(e,t,n=12){let s=e-this.yaw;s=Math.atan2(Math.sin(s),Math.cos(s)),this.yaw+=s*Math.min(1,t*n)}sync(e){if(this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.y=this.yaw,e>0&&(this.vx=(this.x-(this.px??this.x))/e,this.vz=(this.z-(this.pz??this.z))/e),this.px=this.x,this.pz=this.z,this.play(this.y-this.floor*vn>.05?"jump":this.moving?"walk":"idle"),this.acts.walk&&(this.acts.walk.timeScale=1.6),this.mixer.update(e),this.carry){let t=this.carry;t.x=this.x,t.z=this.z,t.y=this.y+2,t.floor=this.floor,t.yaw=this.yaw,t.speed=.6}}},qr=[{id:"classic",name:"Classic",c:null,sw:"#f4f4f8"},{id:"mint",name:"Mint",c:"#7dffc4"},{id:"sky",name:"Sky",c:"#7cc8ff"},{id:"sunset",name:"Sunset",c:"#ffb36b"},{id:"grape",name:"Grape",c:"#c49bff"},{id:"bubble",name:"Bubblegum",c:"#ff9bd2"},{id:"night",name:"Midnight",c:"#5b6b99"},{id:"gold",name:"Golden",c:"#ffcf3a",metal:!0,req:{book:12},how:"Find 12 beetles in your Bug Book"},{id:"rainbow",name:"Rainbow",c:"rainbow",sw:"conic-gradient(red,orange,yellow,lime,cyan,blue,violet,red)",req:{reb:2},how:"Rebirth 2 times"}],Yc=[{id:"none",name:"None",e:"\u{1F6AB}"},{id:"leaf",name:"Leaf Cap",e:"\u{1F343}",req:{buys:5},how:"Buy 5 beetles from the trail"},{id:"flower",name:"Flower",e:"\u{1F338}",req:{earned:2500},how:"Earn $2,500 in total"},{id:"horns",name:"Beetle Horns",e:"\u{1F98C}",req:{book:6},how:"Find 6 different beetles"},{id:"tophat",name:"Top Hat",e:"\u{1F3A9}",req:{earned:1e5},how:"Earn $100K in total"},{id:"crown",name:"Crown",e:"\u{1F451}",req:{reb:1},how:"Rebirth once"},{id:"halo",name:"Halo",e:"\u{1F607}",req:{steals:10},how:"Steal 10 beetles from rivals"}];function Kc(i){let e=i.req;return e?e.book?[na(),e.book]:e.reb?[R.rebirths,e.reb]:e.earned?[Math.floor(R.earned||0),e.earned]:e.steals?[R.steals||0,e.steals]:e.buys?[R.buys||0,e.buys]:null:null}function Ko(i){let e=Kc(i);return!e||e[0]>=e[1]}var Am=["Shiny","Sneaky","Golden","Turbo","Lucky","Mighty","Sparkly","Tiny","Cosmic","Speedy","Fuzzy","Royal"],Rm=["Beetle","Scarab","Stag","Ladybug","Weevil","Bug","Hopper","Roller","Horn","Muncher","Crawler"];function Zm(){return Am[Math.floor(Math.random()*Am.length)]+Rm[Math.floor(Math.random()*Rm.length)]+(Math.random()<.5?Math.floor(Math.random()*99):"")}function sl(i){return(i||"").replace(/[^\p{L}\p{N} _\-]/gu,"").replace(/\s+/g," ").trim().slice(0,16)}function Zb(i){let e=new ct,t=(s,r={})=>new Pe({color:s,roughness:.45,...r}),n=(s,r,o,a,c,l=0,u=0,f=0,h=1,d=1,g=1)=>{let x=new le(s,r);return x.position.set(o,a,c),x.rotation.set(l,u,f),x.scale.set(h,d,g),x.castShadow=!0,e.add(x),x};if(i==="leaf"){let s=t("#4fbf3a");n(new zt(.2,16,10),s,0,.04,.02,.15,0,.2,1.4,.25,1.1),n(new xt(.015,.02,.12,6),t("#2f7a24"),.02,.13,.03,0,0,-.4)}if(i==="flower"){let s=t("#ff7ab8");for(let r=0;r<6;r++){let o=r/6*Math.PI*2;n(new zt(.06,10,8),s,Math.cos(o)*.08,.04,Math.sin(o)*.08,0,0,0,1,.5,1)}n(new zt(.05,10,8),t("#ffd23f"),0,.06,0)}if(i==="tophat"){let s=t("#1b1b22",{roughness:.3});n(new xt(.24,.24,.025,24),s,0,.012,0),n(new xt(.14,.15,.24,24),s,0,.14,0),n(new xt(.152,.152,.045,24),t("#e8413a"),0,.05,0)}if(i==="horns"){let s=t("#5a3018",{roughness:.2,metalness:.2});for(let r of[1,-1])n(new Qn(.045,.3,10),s,r*.12,.12,.03,.25,0,-r*.45);n(new Qn(.06,.38,10),s,0,.17,.08,.5,0,0)}if(i==="crown"){let s=t("#ffc93a",{metalness:.9,roughness:.2});n(new xt(.17,.17,.08,24,1,!0),s,0,.04,0);for(let r=0;r<6;r++){let o=r/6*Math.PI*2;n(new Qn(.035,.1,8),s,Math.cos(o)*.16,.12,Math.sin(o)*.16)}n(new zt(.03,8,6),t("#e8413a"),0,.05,.172)}return i==="halo"&&n(new yc(.16,.025,10,32),t("#ffe27a",{emissive:"#ffcf3a",emissiveIntensity:.9}),0,.2,0,Math.PI/2),e}function Xf(i,e=R.skin){i._mats||(i._mats=[],i.obj.traverse(r=>{r.isMesh&&(r.material=r.material.clone(),i._mats.push(r.material))}));let t=qr.find(r=>r.id===e.color)||qr[0];for(let r of i._mats)r.metalness=t.metal?.85:0,r.roughness=t.metal?.25:1,r.color.set(t.c&&t.c!=="rainbow"?new he(t.c).lerp(new he("#ffffff"),t.metal?0:.12):"#ffffff");i.rainbow=t.c==="rainbow";let n=i.obj.getObjectByName("torso"),s=i.obj.getObjectByName("antenna");i.hat&&(i.hat.parent&&i.hat.parent.remove(i.hat),i.hat=null),e.hat!=="none"&&n&&(i.hat=Zb(e.hat),i.hat.position.set(0,.6,0),n.add(i.hat)),s&&(s.visible=e.hat==="none"||e.hat==="halo")}var Zc=!1,Nf=null,Jt=!1,Zo=0,Wr=null,Vo=null;function Jm(){return{x:se.entranceOut.x+2.5,z:se.cz+5}}function jm(){Jt=!0,bn=!1,document.body.classList.add("inmenu"),te("menu").hidden=!1,pn(),_t.gameplayStop(),H.carry&&a0();let i=Jm();H.x=i.x,H.z=i.z,H.floor=0,H.jy=0,H.y=0,H.moving=!1,Zo=0,te("nameIn").value=R.name||"",$f()}function Qm(){let i=sl(te("nameIn").value)||R.name||Zm();R.name=i,te("nameIn").value=i,Jt=!1,document.body.classList.remove("inmenu"),te("menu").hidden=!0,H.yaw=Math.PI/2,Vt(),_e.ensure(),_e.play("buy"),_t.gameplayStart(),!bn&&Nf&&Nf()}function $f(){te("mStats").innerHTML=`<div>Money<b>$${Xe(R.money)}</b></div><div>Beetles<b>${Zc?se.slots.filter(i=>i.beetle).length:(R.base||[]).filter(Boolean).length}/${6+R.upg.slots+(hl()&&R.upg.floor2||0)}</b></div><div>Bug Book<b>${na()}/${Cs.length}</b></div><div>Rebirths<b>${R.rebirths}</b></div>`,te("mPlay").textContent=R.first&&!R.earned?"\u25B6 PLAY":"\u25B6 CONTINUE",te("colorGrid").innerHTML=qr.map(i=>`<button class="sw ${R.skin.color===i.id?"on":""} ${Ko(i)?"":"lock"}" data-c="${i.id}" title="${i.how||i.name}"><i style="background:${i.sw||i.c}"></i>${i.name}</button>`).join(""),te("baseGrid").innerHTML=Yr.map(i=>`<button class="sw ${(R.skin.base||"default")===i.id?"on":""} ${zf(i)?"":"lock"}" data-b="${i.id}" title="${i.ix?"Complete the "+i.name+" Index":i.name}"><i style="background:${i.color==="rainbow"?"conic-gradient(red,orange,yellow,lime,cyan,blue,violet,red)":i.color}"></i>${i.name}</button>`).join(""),te("baseGrid").querySelectorAll("[data-b]").forEach(i=>i.onclick=()=>{let e=Yr.find(t=>t.id===i.dataset.b);if(_e.ensure(),!zf(e)){te("unlockTip").textContent=`\u{1F512} ${e.name} base: complete the ${e.name} Index in your Bug Book (${Math.min(cl(e.ix.m),e.ix.need)}/${e.ix.need})`,_e.play("deny");return}R.skin.base=e.id,n0(),_e.play("click"),te("unlockTip").textContent=`\u2728 ${e.name} base equipped`,$f(),Vt()}),te("hatGrid").innerHTML=Yc.map(i=>`<button class="hat ${R.skin.hat===i.id?"on":""} ${Ko(i)?"":"lock"}" data-h="${i.id}" title="${i.how?i.how+" ("+Xe(Math.min(...Kc(i)))+"/"+Xe(Kc(i)[1])+")":i.name}"><span class="e">${i.e}</span>${i.name}</button>`).join(""),te("colorGrid").querySelectorAll("[data-c]").forEach(i=>i.onclick=()=>Cm(qr.find(e=>e.id===i.dataset.c),"color")),te("hatGrid").querySelectorAll("[data-h]").forEach(i=>i.onclick=()=>Cm(Yc.find(e=>e.id===i.dataset.h),"hat"))}function Cm(i,e){if(_e.ensure(),!Ko(i)){let t=Kc(i);te("unlockTip").textContent=`\u{1F512} ${i.name}: ${i.how} (${Xe(Math.min(t[0],t[1]))}/${Xe(t[1])})`,_e.play("deny");return}R.skin[e]=i.id,te("unlockTip").textContent=`\u2728 ${i.name} equipped`,_e.play("click"),Xf(H),$f(),Vt()}document.querySelectorAll("[data-mtab]").forEach(i=>i.onclick=()=>{document.querySelectorAll("[data-mtab]").forEach(e=>e.classList.toggle("on",e===i)),Wf||(te("lobPublicSub").textContent="Offline build \u2014 you vs. Moss, Pip & Bramble",te("lobPublicTag").textContent="Bots only"),te("tabSkins").hidden=i.dataset.mtab!=="skins",te("tabLobbies").hidden=i.dataset.mtab!=="lobbies",_e.ensure(),_e.play("click")});te("nameDice").onclick=()=>{te("nameIn").value=Zm(),_e.ensure(),_e.play("click")};te("nameIn").addEventListener("keydown",i=>{i.stopPropagation(),i.key==="Enter"&&Qm()});te("nameIn").addEventListener("input",()=>{let i=sl(te("nameIn").value);i!==te("nameIn").value.trim().slice(0,16)&&(te("nameIn").value=i)});te("mPlay").onclick=()=>Qm();Ym.addEventListener("pointerdown",i=>{Jt&&(Wr={x:i.clientX,yaw:Zo})});addEventListener("pointermove",i=>{Jt&&Wr&&(Zo=Wr.yaw+(i.clientX-Wr.x)*.012)});addEventListener("pointerup",()=>{Wr=null});var Di=.5;function Uf(i,e,t){let n=i.floor||0;for(let s of ze.colliders){if((s.floor||0)!==n)continue;if(s.gate){let u=s.gate;if(!(u.lockUntil>Ne)||u===t||u.inside(i.x,i.z))continue}let r=Math.max(s.x0,Math.min(i.x,s.x1)),o=Math.max(s.z0,Math.min(i.z,s.z1)),a=i.x-r,c=i.z-o,l=a*a+c*c;if(l<Di*Di){if(l>1e-6){let u=Math.sqrt(l);i.x=r+a/u*Di,i.z=o+c/u*Di}else{let u=i.x-s.x0,f=s.x1-i.x,h=i.z-s.z0,d=s.z1-i.z,g=Math.min(u,f,h,d);g===u?i.x=s.x0-Di:g===f?i.x=s.x1+Di:g===h?i.z=s.z0-Di:i.z=s.z1+Di}s.gate&&e&&!i._gateMsg&&(i._gateMsg=1,We("\u{1F512} That base is locked!"),setTimeout(()=>i._gateMsg=0,2500))}}if(!n)for(let s of ze.circles){let r=i.x-s.x,o=i.z-s.z,a=Math.hypot(r,o),c=s.r+Di;a<c&&a>1e-4&&(i.x=s.x+r/a*c,i.z=s.z+o/a*c)}}var H,qe=[],se,Jc=[{name:"Clover",color:"#3fb5ff",p:{bold:.7,greed:.8,defense:.6,react:.5,evade:.7}},{name:"Moss",color:"#6ad04a",p:{bold:.45,greed:.8,defense:.9,react:.7,evade:.6}},{name:"Pip",color:"#ff8a3d",p:{bold:.95,greed:.6,defense:.4,react:.35,evade:.95}},{name:"Bramble",color:"#c070ff",p:{bold:.65,greed:1,defense:.6,react:.5,evade:.75}}],Jb=["#3fb5ff","#6ad04a","#ff8a3d","#c070ff"],ei=0,Jo=0,Xr=0,it=null,Of=90,Xo=0,Hc=null,$o=[{id:"rain",name:"\u{1F327}\uFE0F Rain Shower",desc:"Mutations are 3\xD7 more common!",mut:[1,3,3,3,3,3],sky:["#7d93ad","#c6d4e0"],light:.55},{id:"golden",name:"\u{1F305} Golden Hour",desc:"Gold beetles are 10\xD7 more common!",mut:[1,10,1,1,1,1],sky:["#ff9d5c","#ffe2a8"],light:.9},{id:"meteor",name:"\u2604\uFE0F Meteor Night",desc:"Cosmic & Rainbow beetles are falling!",mut:[1,1,2,3,6,25],sky:["#0b1033","#3b2a6e"],light:.35,night:1},{id:"lucky",name:"\u{1F340} Lucky Breeze",desc:"Rare beetles are 3\xD7 more common!",luck:3,mut:[1,1.5,1.5,1.5,1.5,1.5],sky:["#59c9ff","#e5ffd9"],light:1}],jb=["#5fb6ff","#d9f3ff"];function Ds(i){return i<18?i<6+R.upg.slots:hl()&&i<18+(R.upg.floor2||0)}function rl(){for(let i=0;i<se.slots.length;i++)if(Ds(i)&&!se.slots[i].beetle)return i;return-1}function ol(){se.slots.forEach((i,e)=>{i.ped.visible=i.pad.visible=Ds(e)}),ze.deck&&ze.deck.setVisible(hl())}function ta(i,e){return qf({x:i.x,z:i.z,floor:i.floor||0},{x:e.x,z:e.z,floor:e.floor||0})}function na(){return Object.keys(R.book).length}function os(){return(1+.5*R.rebirths)*(1+.05*na()+tS()+Math.min(.15,Object.keys(R.made||{}).length*.005))*(Jo>Ne?2:1)}function Ui(){let i=0;for(let e of se.slots)e.beetle&&e.beetle.state==="slot"&&(i+=e.beetle.inc);return i*os()}function ss(i=R.upg.speed){return 1+.1*i}function e0(){return 7.5*ss()}function jc(i=R.upg.lock){return 20+i*5}function Qb(){return(1+.3*R.upg.luck)*(it&&it.luck?it.luck:1)*(1+.1*R.rebirths)}function eS(i){return(1+.3*R.upg.luck)*(it?it.mut[i]:1)}var al=[{m:1,name:"Gold",need:8,color:"#ffc93a"},{m:2,name:"Diamond",need:6,color:"#9eefff"},{m:3,name:"Neon",need:5,color:"#5bff9d"},{m:4,name:"Rainbow",need:4,color:"rainbow"},{m:5,name:"Cosmic",need:3,color:"#a46bff"}];function cl(i){let e=0;for(let t in R.book)R.book[t]&1<<i&&e++;return e}function t0(i){return cl(i.m)>=i.need}function tS(){return al.filter(t0).length*.1}var Yr=[{id:"default",name:"Sky Blue",color:"#3fb5ff"},...al.map(i=>({id:i.name.toLowerCase(),name:i.name,color:i.color,ix:i}))];function zf(i){return!i.ix||t0(i.ix)}function n0(){let i=Yr.find(e=>e.id===R.skin.base)||Yr[0];se.rainbowTheme=i.color==="rainbow",se.rainbowTheme||se.capMat.color.set(i.color),se.capMat.metalness=i.id==="default"?0:.5,se.capMat.roughness=i.id==="default"?.5:.3,se.capMat.emissive=new he(i.id==="neon"||i.id==="cosmic"?i.color:"#000"),se.capMat.emissiveIntensity=.35}function ll(i){if(i.sp.hybrid||i.sp.king){R.made=R.made||{},R.made[i.sp.id]||(R.made[i.sp.id]=1,We(`\u{1F9EC} New fusion discovered: ${i.sp.name}! (+0.5% income)`));return}let e=R.book[i.sp.id],t=e===void 0;R.book[i.sp.id]=(e||0)|1<<i.mut,(t||!((e||0)&1<<i.mut))&&(te("bookBadge").hidden=!1),t&&We(`\u{1F4D6} New in your Bug Book: ${i.sp.name}! (+5% income)`);for(let n of al)i.mut===n.m&&!((e||0)&1<<i.mut)&&cl(n.m)===n.need&&(We(`\u{1F3C6} ${n.name} Index complete! +10% income & a ${n.name} base color`,!0),_e.play("rebirth"),_t.happytime());typeof Xn=="function"&&t&&Xn("discover",1)}function nS(i=0){let e=ri.map((s,r)=>r<i?0:s.weight*(r>=2?Math.pow(Qb(),r/3):1)),t=e.reduce((s,r)=>s+r,0),n=Math.random()*t;for(let s=0;s<e.length;s++)if(n-=e[s],n<=0)return s;return 0}function i0(i=1){for(let e=Ht.length-1;e>=1;e--)if(Math.random()<Ht[e].chance*eS(e)*i)return e;return 0}function iS(i){let e=Cs.filter(t=>t.r===i&&!t.fuse);return e[Math.floor(Math.random()*e.length)].id}var Tf=0;function qo(i,e){let t=i??nS(Xr>0?3:0);Xr>0&&i==null&&Xr--,i==null&&R.money<400&&R.rebirths===0&&t>1&&Math.random()<.5&&(t=Math.random()<.7?0:1);let n=new wn(iS(t),i0(),Km());return n.x=(Math.random()-.5)*2.2,n.z=Lt.z0,n.yaw=0,n.state="trail",n.lane=n.x,n.netId=r0++,pe.online&&pe.send({t:"tspawn",d:[n.netId,...as(n),+n.x.toFixed(2),n.z]}),n.sp.r>=4&&!e&&(We(`${n.sp.r>=5?"\u{1F31F}":"\u2728"} A ${n.rar.name} ${n.sp.name} is on the trail!`,n.sp.r>=5),_e.play("event")),n}function s0(i,e){for(let t=0;t<e;t++)if(!i.slots[t].beetle)return t;return-1}function Us(i,e,t,n){let s=e.slots[t];s.beetle=i,i.base=e,i.slot=t,i.carrier=null,n?(i.x=s.x,i.z=s.z,i.floor=s.floor||0,i.y=.35+i.floor*vn,i.state=e===se?"slot":"rival",i.yaw=e.side<0?Math.PI/2:-Math.PI/2):(i.state="toSlot",i.path=ta(i,s)),s.stash==null&&(s.stash=0)}function Bf(i,e){for(let t of ze.bases)if(t.inside(i,e))return t;return null}function hl(){return R.rebirths>=1}function Qc(i,e){let t=ze.deck;e===1?(i.x=t.upLand.x,i.z=t.upLand.z,i.floor=1):(i.x=t.downLand.x,i.z=t.downLand.z,i.floor=0),i.jy!==void 0&&(i.jy=0)}function qf(i,e){let t=i.floor||0,n=e.floor||0;if(t!==n){let c=ze.deck;if(t===1)return[{...c.downPad,tp:0}];let l=qf({x:i.x,z:i.z},{x:c.upPad.x,z:c.upPad.z});return l[l.length-1].tp=1,l}if(t===1)return[{x:e.x,z:e.z}];let s=[],r=Bf(i.x,i.z),o=Bf(e.x,e.z),a=(c,l)=>Math.abs(l.z-c.cz)<2.2&&Math.abs(l.x-c.xin)<3.6;if(r&&r!==o&&(a(r,i)||s.push({...r.entranceIn}),s.push({...r.entranceOut})),o&&o!==r){let c=s.length?s[s.length-1]:i;(!a(o,c)||s.length)&&s.push({...o.entranceOut}),s.push({...o.entranceIn})}return s.push({x:e.x,z:e.z}),s}var is={};function sS(i){for(let e in is)is[e]=Math.max(0,is[e]-i/90)}function Fr(){return Math.min(1.25,Math.max(0,(R.play-120)/420)+.12*R.rebirths)}var Im=(i,e,t)=>i+(e-i)*Math.min(1,t),jo=class{constructor(e){let t=e;this.i=e,this.info=Jc[e],this.base=ze.bases[e],this.c=new Yo(this.info.color,this.info.name),this.c.x=this.base.entranceIn.x+this.base.side*3,this.c.z=this.base.cz,this.state="idle",this.t=2+Math.random()*3,this.goal=null,this.target=null,this.react=0,this.tag=new rs(512,192,4.4),this.upg={slots:0,speed:0,lock:0},this.stun=0,this.chaseT=0,this.lockCD=0,this.pushCD=0,this.nextRaid=150+t*25+Math.random()*30,this.nextRRaid=80+t*45+Math.random()*30,this.stuckT=0,this.lastX=0,this.lastZ=0,this.side=null,this.money=100,this.grudge={},this.fear={}}get speed(){let e=7.5*ss(this.upg.speed);return this.c.carry?e*.72:this.state==="idle"?Math.min(e,2.4):e}step(e,t){let n=this.c;if(!this.goal)return n.moving=!1,!0;let s=qf(n,this.goal),r=s[0];this.side&&this.side.t>0&&(this.side.t-=e,r={x:n.x+this.side.x,z:n.z+this.side.z});let o=r.x-n.x,a=r.z-n.z,c=Math.hypot(o,a);if(r.tp!==void 0&&c<.75)return Qc(n,r.tp),!1;if(s.length===1&&c<.45)return n.moving=!1,!0;let l=o/(c||1),u=a/(c||1);if(n.carry&&(this.state==="escape"||this.state==="rescape"||this.state==="carryHome")){let h=[H],d=qe.find(M=>M!==this&&M.base===n.carry.homeBase);d&&h.push(d.c);let g=!!Bf(n.x,n.z),x=10,p=this.info.p.evade;for(let M of h){let _=n.x-M.x,v=n.z-M.z,P=Math.hypot(_,v);if(P>x||P<.01)continue;let T=Math.pow((x-P)/x,2)*2.4*p*(g?.3:1);if(l+=_/P*T,u+=v/P*T,P<3.5&&!g){let E=this.i%2?1:-1;l+=-v/P*E*.8*p,u+=_/P*E*.8*p}}let m=Math.hypot(l,u)||1;if(l/=m,u/=m,l*o/(c||1)+u*a/(c||1)<-.3){l=l*.5+o/(c||1)*.5,u=u*.5+a/(c||1)*.5;let M=Math.hypot(l,u)||1;l/=M,u/=M}}let f=Math.min(c,t*e);if(n.x+=l*f,n.z+=u*f,n.turnTo(Math.atan2(l,u),e),n.moving=!0,Uf(n,!1,this.base),this.stuckT+=e,this.stuckT>.8){if(Math.hypot(n.x-this.lastX,n.z-this.lastZ)<t*.8*.25&&(!this.side||this.side.t<=0)){let d=Math.random()<.5?1:-1;this.side={x:-a/(c||1)*3*d,z:o/(c||1)*3*d,t:.5}}this.stuckT=0,this.lastX=n.x,this.lastZ=n.z}return!1}worst(){let e=null;for(let t=0;t<Ho;t++){let n=this.base.slots[t].beetle;n&&n.state==="rival"&&(!e||n.inc<e.inc)&&(e=n)}return e}count(){return this.base.slots.filter(e=>e.beetle).length}homeSpot(){return{x:this.base.entranceIn.x+this.base.side*(2+Math.random()*9),z:this.base.cz+(Math.random()-.5)*15}}goHome(e="return"){this.goal=this.homeSpot(),this.state=e,this.target=null}lock(e,t=null){return this.base.lockUntil>Ne||this.state==="goLock"||this.c.carry||!(this.base.inside(this.c.x,this.c.z)||Math.hypot(this.c.x-this.base.entranceOut.x,this.c.z-this.base.entranceOut.z)<10)||Math.random()>=e?!1:(this.after=t,this.state="goLock",this.goal={...this.base.lockPos},!0)}cap(){return 6+this.upg.slots}bestBug(){let e=null;for(let t of this.base.slots)t.beetle&&t.beetle.state==="rival"&&(!e||t.beetle.inc>e.inc)&&(e=t.beetle);return e}showSlots(){this.base.slots.forEach((e,t)=>{e.ped.visible=t<this.cap()||!!e.beetle,e.pad.visible=t<this.cap()})}shop(){let e=this.count()>=this.cap(),t=Wn.slots.cost(this.upg.slots),n=Wn.speed.cost(this.upg.speed),s=Wn.lock.cost(this.upg.lock);return e&&this.upg.slots<Wn.slots.max&&this.money>=t?(this.money-=t,this.upg.slots++,this.showSlots(),this.bragged("\u2B06\uFE0F +1 spot"),!0):this.upg.speed<R.upg.speed+(Fr()>.8?1:0)&&this.money*.3>=n?(this.money-=n,this.upg.speed++,this.bragged(`\u{1F45F} ${ss(this.upg.speed).toFixed(1)}\xD7`),!0):this.upg.lock<Wn.lock.max&&this.money*.25>=s?(this.money-=s,this.upg.lock++,this.bragged("\u{1F512} lock+"),!0):!1}bragged(e){Math.hypot(H.x-this.c.x,H.z-this.c.z)<30&&Jr({x:this.c.x,z:this.c.z,h:3.2},e,this.info.color)}update(e){let t=this.c,n=Fr();if(t.y=t.floor*vn,this.lockCD-=e,this.pushCD-=e,this.giftT=(this.giftT??120+this.i*40)-e,this.giftT<=0){this.giftT=150+Math.random()*120;let r=Math.max(50,Math.round($r(this)*(12+Math.random()*16)));this.money+=r,Math.hypot(H.x-t.x,H.z-t.z)<30&&Jr({x:t.x,z:t.z,h:3.4},"\u{1F381} +$"+Xe(r),this.info.color)}for(let r in this.grudge)this.grudge[r]=Math.max(0,this.grudge[r]-e/120);for(let r in this.fear)this.fear[r]=Math.max(0,this.fear[r]-e/90);{let r=new Set;for(let a of this.base.slots)a.beetle&&a.beetle.state==="rival"&&r.add(a.beetle.sp.id);let o=(1+.5*R.rebirths)*(1+.05*r.size);for(let a=0;a<Ho;a++){let c=this.base.slots[a];c.beetle&&c.beetle.state==="rival"&&(c.stash=(c.stash||0)+c.beetle.inc*o*e)}}if(this.count()<2&&this.money<30&&(this.money+=2*e),this.stun>0){this.stun-=e,t.moving=!1,t.yaw+=e*10,this.stun<=0&&this.goHome(),this.tagUpdate();return}let s=this.base.inside(H.x,H.z);if(!t.carry&&this.state!=="pursue"){let r=this.findMyThief();r&&(this.state!=="nap"||Math.random()<e*1.2)&&(this.target&&this.target.wanted===this&&(this.target.wanted=null),this.state="pursue",this.react=(.25+.45*this.info.p.react)*(1-.4*Math.min(1,n)),this.target=null,fn(this,"\u2757"),r.isPlayer&&We(`\u2757 ${this.info.name} is coming for their ${H.carry.sp.name}! RUN!`))}switch(this.state){case"idle":{if(s&&!H.carry&&n>.2&&this.base.inside(t.x,t.z)){this.state="guard",fn(this,"\u{1F620}");break}if(n>.3&&!s&&Math.hypot(H.x-this.base.entranceOut.x,H.z-this.base.entranceOut.z)<9&&this.base.inside(t.x,t.z)&&this.lock(.02+.05*n),(qe.some(o=>o!==this&&o.state==="rraid"&&o.victim===this)||!s&&Math.hypot(H.x-this.base.entranceOut.x,H.z-this.base.entranceOut.z)<9&&n>.3)&&this.base.inside(t.x,t.z)&&Math.random()<e*this.info.p.defense*1.5&&this.lock(1),this.state!=="idle")break;this.step(e,this.speed),this.t-=e,this.t<=0&&this.decide();break}case"collect":{if(!this.runList){let a=this.stashTotal();this.runList=this.base.slots.filter(c=>(c.stash||0)>=Math.max(1,a*.04))}let r=null,o=1e9;for(let a of this.runList){let c=Math.hypot(a.padX-t.x,a.padZ-t.z);c<o&&(o=c,r=a)}if(!r){this.runList=null,this.state="idle",this.t=.4+Math.random()*.6;break}this.goal={x:r.padX,z:r.padZ},this.step(e,this.speed),o<.9&&(this.money+=Math.floor(r.stash||0),r.stash=0,this.runList=this.runList.filter(a=>a!==r));break}case"guard":{if(!s||H.carry){this.goHome("idle"),this.t=1;break}if(this.goal={x:H.x,z:H.z},this.step(e,this.speed),Math.hypot(H.x-t.x,H.z-t.z)<1.3&&this.pushCD<=0){this.pushCD=1.6;let r=this.base.entranceOut.x-H.x,o=this.base.entranceOut.z-H.z,a=Math.hypot(r,o)||1;H.kx=r/a*16,H.kz=o/a*16,H.vy=6,H.stun=.35,_e.play("bonk"),fn(this,"\u{1F6E1}\uFE0F")}break}case"nap":this.t-=e,t.moving=!1,(this.t<=0||s&&Math.random()<e*n)&&(this.state="idle",this.t=.5);break;case"buy":{let r=this.target;if(!r||r.state!=="trail"){r&&r.wanted===this&&(r.wanted=null),this.goHome();break}if(this.goal={x:r.x,z:r.z},this.step(e,this.speed),Math.hypot(r.x-t.x,r.z-t.z)<1.8){if(this.money<r.price){r.wanted=null,this.goHome();break}this.money-=r.price,pe.send({t:"tgone",id:r.netId}),r.state="carried",r.carrier=t,r.wanted=null,t.carry=r,this.goHome("carryHome")}break}case"carryHome":case"escape":case"rescape":{if(!t.carry){this.goHome();break}if(this.step(e,this.speed)){if(!this.base.inside(t.x,t.z)){this.goal=this.homeSpot();break}let r=t.carry;if(t.carry=null,!r){this.state="idle",this.t=.5;break}let o=r.homeBase;if(r.homeBase=this.base,this.state==="rescape"&&o){let c=Mn(ze.bases.indexOf(o));c&&c.human&&pe.send({t:"escaped",to:c.i,name:this.info.name,sp:r.sp.name})}let a=this.count()<this.cap()?s0(this.base,this.cap()):-1;if(a<0){let c=this.worst();c&&(c.inc<r.inc||this.state==="escape"||this.state==="rescape")&&(a=c.slot,this.base.slots[a].beetle=null,this.money+=c.price*.3,c.remove())}a>=0?Us(r,this.base,a,!1):r.remove(),this.state==="escape"&&(r.wasMine=!0,We(`\u{1F631} ${this.info.name} got away with your ${r.sp.name}! Steal it back!`),jr(),this.lock(.3+.5*n)),this.state!=="goLock"&&(this.state="idle",this.t=Im(3,1,n))}break}case"raid":{if(se.lockUntil>Ne&&!se.inside(t.x,t.z)&&Math.hypot(t.x-se.entranceOut.x,t.z-se.entranceOut.z)<4){if(n>.5&&se.lockUntil-Ne<14){this.state="lurk",fn(this,"\u{1F440}");break}fn(this,"\u{1F624}"),this.goHome();break}if(!this.target||this.target.state!=="slot"){let o=Pm();if(!o){this.goHome();break}this.target=o}if(this.goal={x:this.target.x,z:this.target.z,floor:this.target.floor||0},this.step(e,this.speed),Math.hypot(this.target.x-t.x,this.target.z-t.z)<1.9&&(this.target.floor||0)===t.floor){let o=this.target,a=se.slots[o.slot];a.beetle=null,o.state="carried",o.carrier=t,o.fromSlot=o.slot,t.carry=o,m0(`\u{1F6A8} ${this.info.name} is stealing your ${o.sp.name}! Bump into them!`),_e.play("alarm"),this.goal=this.homeSpot(),this.state="escape"}break}case"rraid":{let r=this.victim&&this.victim.base;if(!r||r.lockUntil>Ne&&!r.inside(t.x,t.z)&&Math.hypot(t.x-r.entranceOut.x,t.z-r.entranceOut.z)<4){fn(this,"\u{1F624}"),this.goHome();break}if(!this.target||this.target.state!=="rival"||this.target.base!==r){let o=this.victim.bestBug();if(!o){this.goHome();break}this.target=o}if(this.victim.base.inside(this.victim.c.x,this.victim.c.z)&&this.victim.state!=="nap"&&Math.random()<e*(1-this.info.p.bold)){fn(this,"\u{1F62C}"),this.goHome();break}if(this.goal={x:this.target.x,z:this.target.z},this.step(e,this.speed),Math.hypot(this.target.x-t.x,this.target.z-t.z)<1.9&&this.victim.human){(!this.waitTake||Ne-this.waitTake>3)&&(this.waitTake=Ne,pe.send({t:"take",to:this.victim.i,seat:this.victim.i,slot:this.target.slot,by:this.i})),t.moving=!1;break}if(Math.hypot(this.target.x-t.x,this.target.z-t.z)<1.9){let o=this.target;r.slots[o.slot].beetle=null,o.state="carried",o.carrier=t,t.carry=o,o.homeBase=r,this.victim.grudge[this.i]=Math.min(2,(this.victim.grudge[this.i]||0)+1),We(`\u{1F9B9} ${this.info.name} stole ${this.victim.info.name}'s ${o.sp.name}!`),this.goal=this.homeSpot(),this.state="rescape"}break}case"goLock":{if(this.goal={...this.base.lockPos},this.step(e,this.speed),Math.hypot(t.x-this.base.lockPos.x,t.z-this.base.lockPos.z)<1.1){this.base.lockUntil>Ne||(this.base.lockUntil=Ne+jc(this.upg.lock),fn(this,"\u{1F512}"),Math.hypot(H.x-t.x,H.z-t.z)<30&&_e.play("lock"));let r=this.after;this.after=null,r?this.act(r):(this.state="idle",this.t=.4,this.goal=this.homeSpot())}break}case"pursue":{let r=this.findMyThief();if(!r){this.goHome();break}if(this.react>0){this.react-=e,t.moving=!1,t.turnTo(Math.atan2(r.c.x-t.x,r.c.z-t.z),e);break}let o=Math.hypot(r.c.x-t.x,r.c.z-t.z),a=Math.min(1.2,o/this.speed);if(this.goal=o<2.5||r.c.floor!==t.floor?{x:r.c.x,z:r.c.z,floor:r.c.floor}:{x:r.c.x+(r.c.vx||0)*a,z:r.c.z+(r.c.vz||0)*a,floor:r.c.floor},this.step(e,this.speed),Math.hypot(r.c.x-t.x,r.c.z-t.z)<1.25&&r.c.floor===t.floor)if(r.isPlayer)Um(this);else if(r.r.isPuppet){let c=r.r,l=c.c.carry;c.c.carry=null,c.carryKey="",c.noCarryUntil=Ne+2,l.x=c.c.x,l.z=c.c.z,Ls(l),pe.send({t:"drop",to:Qo(c.i),thief:c.i,by:this.i}),this.grudge[c.i]=Math.min(2,(this.grudge[c.i]||0)+.5),_e.play("bonk"),fn(this,"\u{1F4AA}"),this.goHome()}else{let c=r.r,l=c.c.carry;c.c.carry=null,c.stun=2,c.state="return",l.x=c.c.x,l.z=c.c.z,Ls(l),this.grudge[c.i]=Math.min(2,(this.grudge[c.i]||0)+.5),c.fear[this.i]=Math.min(2,(c.fear[this.i]||0)+1),_e.play("bonk"),fn(this,"\u{1F4AA}"),this.goHome()}break}case"defend":{let r=this.thief;if(this.chaseT+=e,!r||r.state!=="rescape"||!r.c.carry||r.c.carry.homeBase!==this.base||r.stun>0||this.chaseT>12){this.goHome();break}if(this.goal={x:r.c.x,z:r.c.z},this.step(e,this.speed),Math.hypot(r.c.x-t.x,r.c.z-t.z)<1.3){let o=r.c.carry;r.c.carry=null,r.stun=2,r.state="return",this.grudge[r.i]=Math.min(2,(this.grudge[r.i]||0)+.5),r.fear[this.i]=Math.min(2,(r.fear[this.i]||0)+1),o.x=r.c.x,o.z=r.c.z,Ls(o),_e.play("bonk"),fn(this,"\u{1F4AA}"),this.goHome()}break}case"lurk":{this.goal={x:se.entranceOut.x-se.side*2,z:se.cz+3},this.step(e,3),se.lockUntil>Ne?se.lockUntil-Ne>20&&this.goHome():(this.state="raid",this.target=null,fn(this,"\u{1F9B9}"));break}case"chase":{if(this.chaseT+=e,this.react>0){this.react-=e,t.moving=!1,t.turnTo(Math.atan2(H.x-t.x,H.z-t.z),e);break}let r=H.carry&&H.carry.homeBase===this.base;if(!r||this.chaseT>10+6*Math.min(1,n)||se.inside(H.x,H.z)){r&&fn(this,"\u{1F624}"),this.goHome();break}this.goal={x:H.x,z:H.z},this.step(e,this.speed),Math.hypot(H.x-t.x,H.z-t.z)<1.25&&Um(this);break}case"return":this.step(e,this.speed)&&(this.state="idle",this.t=Im(2,.6,n)+Math.random()*2);break}this.tagUpdate()}decide(){let e=Fr(),t=this.info.p,n=this.c,s=Math.max(1,$r(this)),r=this.count()>=this.cap(),o=this.worst(),a=()=>.8+Math.random()*.4,c=(x,p)=>Math.hypot(x-n.x,p-n.z),l=[],u=this.stashTotal();u>=1&&l.push({k:"collect",s:Math.min(1.6,u/(s*25+40))*(this.money<50?1.5:1)}),r&&this.upg.slots<Wn.slots.max&&this.money>=Wn.slots.cost(this.upg.slots)?l.push({k:"upgrade",s:1.3}):this.money*.3>=Wn.speed.cost(this.upg.speed)&&this.upg.speed<R.upg.speed+(e>.8?1:0)?l.push({k:"upgrade",s:.7}):this.upg.lock<Wn.lock.max&&this.money*.25>=Wn.lock.cost(this.upg.lock)&&l.push({k:"upgrade",s:.4});for(let x of Qt){if(x.state!=="trail"||x.wanted||x.price>this.money||x.z<Lt.z0+6||x.z>Lt.z1-10)continue;let p=r?o?o.inc:1/0:0;if(x.inc<=p*1.2)continue;let m=Math.min(3,(x.inc-p)/s),M=c(x.x,x.z),_=M/this.speed;if((Lt.z1-x.z)/1.75<_+2)continue;let v=(.35+m)*t.greed-M/120;Math.hypot(H.x-x.x,H.z-x.z)<6&&R.money>=x.price&&(v*=t.bold>.7?1.2:.6),l.push({k:"buy",b:x,s:v})}let f=7.5*.72*ss(this.upg.speed),h=(x,p,m,M,_,v,P,T,E)=>{if(!m)return;let I=p.lockUntil-Ne;if(I>0&&!(E&&I<8&&e>.5))return;let B=r?o?o.inc:1/0:0;if(m.inc<=B)return;let y=Math.min(2.5,(m.inc-B)/s),S=Math.hypot(M-p.entranceOut.x,_-p.entranceOut.z),N=P?.2:v?Math.max(.1,.7-S/40):.93;f>T*1.05&&(N*=.6),I>0&&(N+=.2);let O=this.grudge[E?"player":x.i]||0,G=c(m.x,m.z),Z=(.3+y)*(1-N)*t.bold*(E?Math.min(1,e*1.4):.4+.6*Math.min(1,e))+O*.4-G/220-(this.fear[E?"player":x.i]||0)*.5-(is[E?"player":x.i]||0)*.35;l.push({k:E?"raid":"rraid",victim:x,b:m,s:Z})};if(!qe.some(x=>x!==this&&(x.state==="raid"||x.state==="escape"||x.state==="lurk"))){let x=!se.inside(H.x,H.z)&&Math.hypot(H.x-se.entranceOut.x,H.z-se.entranceOut.z)>8;se.slots.filter(p=>p.beetle&&p.beetle.state==="slot").length>=2&&h(null,se,Pm(),H.x,H.z,x,!1,e0(),!0)}for(let x of qe)if(x!==this&&!qe.some(p=>p!==this&&p.state==="rraid"&&p.victim===x)){let p=!x.base.inside(x.c.x,x.c.z)&&Math.hypot(x.c.x-x.base.entranceOut.x,x.c.z-x.base.entranceOut.z)>8;h(x,x.base,x.bestBug(),x.c.x,x.c.z,p,x.state==="nap",x.speedChase(),!1)}let d=this.bestBug();l.push({k:"guardHome",s:.15+(d?Math.min(.6,d.inc/s)*t.defense*.5:0)}),l.push({k:"afk",s:.03+(e<.3?.05:0)});let g=l[0];for(let x of l)x.s*=a(),x.s>g.s&&(g=x);this.act(g)}act(e){let t=Fr();switch(e.k){case"collect":this.state="collect",this.goal=null,this.runList=null;break;case"upgrade":this.shop(),this.t=.6+Math.random(),this.goal=this.homeSpot();break;case"buy":if(!e.locked&&this.leaving(e)){e.b.wanted=this;break}if(e.b.state!=="trail"||e.b.wanted&&e.b.wanted!==this){this.goHome("idle");break}e.b.wanted=this,this.target=e.b,this.goal={x:e.b.x,z:e.b.z},this.state="buy";break;case"raid":if(!e.locked&&this.leaving(e))break;is.player=(is.player||0)+1,this.target=e.b,this.goal={x:e.b.x,z:e.b.z,floor:e.b.floor||0},this.state="raid",fn(this,"\u{1F9B9}");break;case"rraid":if(!e.locked&&this.leaving(e))break;is[e.victim.i]=(is[e.victim.i]||0)+1,this.victim=e.victim,this.target=e.b,this.goal={x:e.b.x,z:e.b.z},this.state="rraid",fn(this,"\u{1F9B9}");break;case"afk":this.state="nap",this.t=6+Math.random()*14;break;default:this.goal=this.homeSpot(),this.t=.6+Math.random()*1.4*(1-.5*Math.min(1,t))}}leaving(e){let t=this.bestBug();return!!(t&&t.inc>$r(this)*.25&&this.lock(.2+.6*this.info.p.defense*Math.max(.3,Math.min(1,Fr())),{...e,locked:!0}))}netGrabbed(e){this.waitTake=0;let t=ze.bases[e.seat],n=new wn(e.d[0],e.d[1],e.d[2]);n.state="carried",n.carrier=this.c,n.homeBase=t,this.c.carry=n,this.target&&this.target.base===t&&t.slots[this.target.slot]&&t.slots[this.target.slot].beetle===this.target&&(t.slots[this.target.slot].beetle=null,this.target.remove()),this.target=null,this.goal=this.homeSpot(),this.state="rescape"}findMyThief(){if(H.carry&&H.carry.homeBase===this.base)return{c:H,isPlayer:!0};for(let e of qe)if(e!==this&&e.c.carry&&e.c.carry.homeBase===this.base)return{c:e.c,r:e};return null}stashTotal(){let e=0;for(let t=0;t<Ho;t++)e+=this.base.slots[t].stash||0;return e}speedChase(){return 7.5*ss(this.upg.speed)}tagUpdate(){let e=this.stun>0?"\u{1F4AB}":this.state==="nap"?"\u{1F4A4}":this.state==="chase"||this.state==="defend"||this.state==="pursue"?"\u2757":this.state==="guard"?"\u{1F620}":this.state==="raid"||this.state==="escape"||this.state==="lurk"||this.state==="rraid"||this.state==="rescape"?"\u{1F9B9}":this.state==="goLock"?"\u{1F512}":this.state==="buy"?"\u{1F6D2}":"",t="$"+Xe(this.money);this.tag.draw([{text:(e?e+" ":"")+this.info.name,color:this.info.color,size:60},{text:"Bank "+t,color:"#ffd84a",size:40}],e+this.info.name+t),this.tag.sprite.position.set(this.c.x,this.c.y+(this.c.carry?4.6:2.4),this.c.z)}};function $r(i){if(i.isPuppet)return i.inc||0;let e=0,t=new Set;for(let n of i.base.slots)n.beetle&&n.beetle.state==="rival"&&(e+=n.beetle.inc,t.add(n.beetle.sp.id));return e*(1+.5*R.rebirths)*(1+.05*t.size)}function Pm(){let i=null;for(let e of se.slots)e.beetle&&e.beetle.state==="slot"&&(!i||e.beetle.inc>i.inc)&&(i=e.beetle);return i}var Lm=["pebble","leafback","button"];function ia(i){i.money=50*(R.rebirths+1),i.upg={slots:0,speed:0,lock:0},i.showSlots();let e=new wn(Lm[i.i%Lm.length],0);e.homeBase=i.base,Us(e,i.base,0,!0)}function rS(i,e){i.money=e.money||0,i.upg=Object.assign({slots:0,speed:0,lock:0},e.upg||{}),(e.base||[]).forEach((t,n)=>{if(t&&_n(t.s)){let s=new wn(t.s,t.m,t.t||0);s.homeBase=i.base,s.wasMine=!!t.w,Us(s,i.base,n,!0)}}),i.count()||ia(i),i.showSlots()}function fn(i,e){i._em=e,SS(i.c,e,1.2)}var as=i=>[i.sp.id,i.mut,i.trait],Kr=class{constructor(e,t,n){this.i=e,this.isPuppet=!0,this.human=t,this.base=ze.bases[e],this.info=t?{name:n||"Player",color:Jb[e],p:Jc[e].p}:Jc[e],this.c=new Yo(this.info.color,this.info.name),this.c.x=this.base.entranceIn.x+this.base.side*3,this.c.z=this.base.cz,this.nx=this.c.x,this.nz=this.c.z,this.nyaw=0,this.state="idle",this.stun=0,this.money=0,this.inc=0,this.capN=6,this.upg={slots:0,speed:0,lock:0},this.grudge={},this.fear={},this.tag=new rs(512,192,4.4),this.st="",this.noCarryUntil=0,this.carryKey=""}setName(e){this.info={...this.info,name:e}}applyAvatar(e){this.nx=e.x,this.nz=e.z,this.nyaw=e.y,this.c.moving=!!e.mv,this.c.floor=e.f||0,this.st=e.st||"",this.stun=e.sn||0,e.money!=null&&(this.money=e.money),e.lk!=null&&(this.base.lockUntil=e.lk>0?Ne+e.lk:0),Math.hypot(this.nx-this.c.x,this.nz-this.c.z)>12&&(this.c.x=this.nx,this.c.z=this.nz),this.setCarry(e.c)}setCarry(e){let t=e?e.join(","):"";if(t!==this.carryKey&&!(e&&Ne<this.noCarryUntil)&&(this.c.carry&&(this.c.carry.remove(),this.c.carry=null),this.carryKey=t,e)){let n=new wn(e[0],e[1],e[2]);n.state="carried",n.carrier=this.c,n.homeBase=ze.bases[e[3]],this.c.carry=n}}applyBase(e){e.name&&this.human&&this.setName(e.name),e.cap!=null&&(this.capN=e.cap),e.inc!=null&&(this.inc=e.inc),e.money!=null&&(this.money=e.money),e.skin&&this.human&&Xf(this.c,e.skin);let t=new Map(e.sl.map(n=>[n[0],n]));this.base.slots.forEach((n,s)=>{let r=t.get(s),o=n.beetle;if(o&&(!r||o.sp.id!==r[1]||o.mut!==r[2]||o.trait!==(r[3]||0))&&(n.beetle=null,o.remove()),r&&!n.beetle&&_n(r[1])){let a=new wn(r[1],r[2],r[3]||0);a.homeBase=this.base,Us(a,this.base,s,!0)}}),this.showSlots(),this.base.setBanner(this.info.name.toUpperCase()+"'S BASE")}update(e){let t=this.c,n=Math.min(1,e*12);t.x+=(this.nx-t.x)*n,t.z+=(this.nz-t.z)*n,t.turnTo(this.nyaw,e,10),t.y=t.floor*vn,this.state=this.st==="nap"?"nap":this.st||"idle",this.tagUpdate()}tagUpdate(){let e=this.stun>0?"\u{1F4AB}":this.st==="nap"?"\u{1F4A4}":this.c.carry?"\u{1F9B9}":"",t="$"+Xe(this.money);this.tag.draw([{text:(e?e+" ":"")+this.info.name+(this.human?" \u{1F310}":""),color:this.info.color,size:60},{text:"Bank "+t,color:"#ffd84a",size:40}],e+this.info.name+t+this.human),this.tag.sprite.position.set(this.c.x,this.c.y+(this.c.carry?4.6:2.4),this.c.z),this.tag.sprite.visible=!Jt}count(){return this.base.slots.filter(e=>e.beetle).length}cap(){return this.capN}bestBug(){let e=null;for(let t of this.base.slots)t.beetle&&t.beetle.state==="rival"&&(!e||t.beetle.inc>e.inc)&&(e=t.beetle);return e}worst(){let e=null;for(let t of this.base.slots){let n=t.beetle;n&&n.state==="rival"&&(!e||n.inc<e.inc)&&(e=n)}return e}stashTotal(){return 0}speedChase(){return 7.5*ss(this.upg.speed)}showSlots(){this.base.slots.forEach((e,t)=>{e.ped.visible=t<Math.max(this.capN,6)||!!e.beetle,e.pad.visible=!1})}dispose(){this.c.carry&&this.c.carry.remove(),Dt.remove(this.c.obj),this.tag.dispose();for(let e of this.base.slots)e.beetle&&(e.beetle.remove(),e.beetle=null)}};function Qo(i){return pe.members[i]?i:pe.host}function Mn(i){return qe.find(e=>e.i===i)}var oS=0;var Zr={},r0=1,ns=null,Hr=null;function aS(){let i=[];return se.slots.forEach((e,t)=>{e.beetle&&(e.beetle.state==="slot"||e.beetle.state==="toBase")&&i.push([t,...as(e.beetle)])}),{t:"base",seat:ei,sl:i,cap:6+R.upg.slots,inc:Math.round(Ui()),money:Math.round(R.money),name:R.name||"Player",skin:R.skin}}function cS(i){let e=[];return i.base.slots.forEach((t,n)=>{t.beetle&&(t.beetle.state==="rival"||t.beetle.state==="toSlot"||t.beetle.state==="toSlotRival")&&e.push([n,...as(t.beetle)])}),{t:"base",seat:i.i,sl:e,cap:i.cap(),inc:Math.round($r(i)),money:Math.round(i.money)}}function el(i){let e=[aS()];if(pe.isHost)for(let t of qe)t.isPuppet||e.push(cS(t));for(let t of e){let n=JSON.stringify(t.sl)+t.cap+(i?Math.random():"")+Math.round(t.inc/10);Zr[t.seat]!==n&&(Zr[t.seat]=n,pe.send(t))}}function lS(i){let e=[];for(let t of Qt)t.state==="trail"&&e.push([t.netId,...as(t),+t.x.toFixed(2),+t.z.toFixed(2)]);pe.send({t:"trail",to:i,list:e})}function hS(i){if(!pe.online)return;let e=H,t=e.carry?[...as(e.carry),ze.bases.indexOf(e.carry.homeBase)]:null;if(pe.send({t:"me",x:+e.x.toFixed(2),z:+e.z.toFixed(2),f:e.floor,y:+e.yaw.toFixed(2),mv:e.moving?1:0,c:t,lk:se.lockUntil>Ne?+(se.lockUntil-Ne).toFixed(1):0,sn:e.stun>0?1:0,money:Math.round(R.money)}),pe.isHost&&Object.keys(pe.members).length>1){let n=qe.filter(r=>!r.isPuppet).map(r=>[r.i,+r.c.x.toFixed(2),+r.c.z.toFixed(2),r.c.floor,+r.c.yaw.toFixed(2),r.c.moving?1:0,r.c.carry?[...as(r.c.carry),ze.bases.indexOf(r.c.carry.homeBase)]:null,r.state,Math.round(r.money),r.base.lockUntil>Ne?+(r.base.lockUntil-Ne).toFixed(1):0,r.stun>0?1:0]),s=[];for(let r of Qt)r.state==="trail"&&s.push([r.netId,+r.x.toFixed(2),+r.z.toFixed(2)]);pe.send({t:"snap",b:n,tr:s,ev:it?[$o.indexOf(it),+(Xo-Ne).toFixed(1)]:null})}++oS%4===0&&el(!1)}function uS(){pe.on("join",i=>{let e=Mn(i.seat);e&&(e.isPuppet?e.dispose():fS(e),qe.splice(qe.indexOf(e),1)),qe.push(new Kr(i.seat,!0,i.name)),We(`\u{1F310} ${i.name} joined the garden!`),Zr={},el(!0),pe.isHost&&lS(i.seat)}),pe.on("leave",i=>{let e=Mn(i.seat),t=e?e.info.name:"A player";if(e&&(e.dispose(),qe.splice(qe.indexOf(e),1)),We(`\u{1F44B} ${t} left. A bot took their spot.`),Nm(),pe.isHost){let n=new jo(i.seat);qe.push(n),ia(n)}else qe.push(new Kr(i.seat,!1))}),pe.on("disconnect",()=>{We("\u{1F4F4} Lost connection \u2014 playing with bots now."),pe.host=ei,Nm(!0)}),pe.on("me",i=>{let e=Mn(i.from);e&&e.isPuppet&&e.applyAvatar(i)}),pe.on("base",i=>{let e=Mn(i.seat);e&&e.isPuppet&&e.applyBase(i)}),pe.on("snap",i=>{if(pe.isHost)return;for(let t of i.b){let n=Mn(t[0]);n&&n.isPuppet&&!n.human&&n.applyAvatar({x:t[1],z:t[2],f:t[3],y:t[4],mv:t[5],c:t[6],st:t[7],money:t[8],lk:t[9],sn:t[10]})}let e=new Set;for(let[t,n,s]of i.tr){e.add(t);let r=Gc(t);r&&(r.nx=n,r.nz=s)}for(let t of[...Qt])t.state==="trail"&&!e.has(t.netId)&&t!==ns&&t.remove();if(i.ev){let t=$o[i.ev[0]];it!==t&&(it=t,We(it.name+"!",!0),ze.rain.visible=it.id==="rain"),Xo=Ne+i.ev[1]}else it&&(it=null,ze.rain.visible=!1)}),pe.on("trail",i=>{if(!pe.isHost){for(let e of[...Qt])e.state==="trail"&&e.remove();for(let e of i.list)Dm(e)}}),pe.on("tspawn",i=>{pe.isHost||Dm(i.d)}),pe.on("tgone",i=>{if(pe.isHost)return;let e=Gc(i.id);e&&e!==ns&&e.remove()}),pe.on("buy",i=>{if(!pe.isHost)return;let e=Gc(i.id);e&&e.state==="trail"?(e.remove(),pe.send({t:"tgone",id:i.id}),pe.send({t:"buyok",to:i.from,id:i.id})):pe.send({t:"buyno",to:i.from,id:i.id})}),pe.on("buyok",i=>{let e=ns;ns=null,e&&e.netId===i.id&&(e.state="trail",Yf(e,!0),e.state==="trail"&&e.remove())}),pe.on("buyno",()=>{ns&&(ns.pending=!1,ns=null),We("Someone else got that beetle first!"),_e.play("deny")}),pe.on("take",i=>{let e=ze.bases[i.seat],t=e.slots[i.slot],n=t&&t.beetle;if(!(n&&(n.state==="slot"||n.state==="rival"))){pe.send({t:"takeno",to:Qo(i.by),by:i.by});return}let r=as(n);if(t.beetle=null,n.remove(),e===se){let o=Mn(i.by);m0(`\u{1F6A8} ${o?o.info.name:"Someone"} is stealing your ${_n(r[0]).name}! Bump into them!`),_e.play("alarm")}else{let o=Mn(i.seat);o&&!o.isPuppet&&(o.grudge[i.by]=Math.min(2,(o.grudge[i.by]||0)+1))}pe.send({t:"takeok",to:Qo(i.by),by:i.by,seat:i.seat,d:r}),Zr={},el(!1)}),pe.on("takeok",i=>{if(i.by===ei){let e=Hr;Hr=null,e&&e.remove();let t=new wn(i.d[0],i.d[1],i.d[2]);t.homeBase=ze.bases[i.seat],t.state="carried",t.carrier=H,H.carry=t,t.x=H.x,t.z=H.z,_e.play("grab")}else{let e=Mn(i.by);e&&!e.isPuppet&&e.netGrabbed(i)}}),pe.on("takeno",i=>{if(i.by===ei)Hr&&(Hr.pending=!1),Hr=null,We("Too late \u2014 it's gone!");else{let e=Mn(i.by);e&&!e.isPuppet&&(e.waitTake=0,e.goHome())}}),pe.on("drop",i=>{if(i.thief===ei){H.carry&&(H.carry.remove(),H.carry=null),_e.play("bonk"),We(`\u{1F4A5} ${i.by!=null&&Mn(i.by)?Mn(i.by).info.name:"They"} got their beetle back!`),H.kx=(Math.random()-.5)*20,H.kz=(Math.random()-.5)*20,H.stun=.7,H.vy=7;return}let e=Mn(i.thief);e&&!e.isPuppet&&e.c.carry&&(e.c.carry.remove(),e.c.carry=null,e.stun=2,e.state="return",e.fear[i.by]=Math.min(2,(e.fear[i.by]||0)+1))}),pe.on("escaped",i=>{We(`\u{1F631} ${i.name} got away with your ${i.sp}! Steal it back!`),jr()}),pe.on("shove",i=>{H.kx=i.kx,H.kz=i.kz,H.vy=6,H.stun=.35,_e.play("bonk")})}function Gc(i){for(let e of Qt)if(e.netId===i&&e.state==="trail")return e;return null}function Dm(i){if(Gc(i[0]))return;let e=new wn(i[1],i[2],i[3]);e.netId=i[0],e.state="trail",e.x=e.nx=i[4],e.z=e.nz=i[5],e.lane=e.x}function fS(i){i.c.carry&&i.c.carry.remove(),Dt.remove(i.c.obj),i.tag.dispose();for(let e of i.base.slots)e.beetle&&(e.beetle.remove(),e.beetle=null)}function Nm(i){if(!(!pe.isHost&&!i)){for(let e of[...qe]){if(!e.isPuppet||e.human&&!i)continue;let t=new jo(e.i);t.c.x=e.c.x,t.c.z=e.c.z,t.money=e.money||50,e.base.slots.forEach((n,s)=>{if(n.beetle){let r=as(n.beetle);n.beetle.remove(),n.beetle=null;let o=new wn(r[0],r[1],r[2]);o.homeBase=e.base,Us(o,e.base,s,!0)}}),e.c.carry&&e.c.carry.remove(),e.c.carry=null,Dt.remove(e.c.obj),e.tag.dispose(),qe[qe.indexOf(e)]=t,t.showSlots(),t.count()||ia(t)}for(let e of Qt)e.state==="trail"&&(e.netId||(e.netId=r0++),e.lane=e.x)}}var cn=null,Gr=null;function Yf(i,e){if(i.pending&&!e)return;if(R.money<i.price){bS(`${i.sp.name} costs $${Xe(i.price)}. You need $${Xe(i.price-R.money)} more!`),_e.play("deny");return}let t=rl();if(t<0){We("\u{1F3E0} Your base is full! Sell a beetle or buy a Bigger Base."),_e.play("deny");return}if(!pe.isHost&&!e){i.pending=!0,ns=i,pe.send({t:"buy",to:pe.host,id:i.netId});return}pe.isHost&&pe.send({t:"tgone",id:i.netId}),i.pending=!1,R.money-=i.price,R.buys=(R.buys||0)+1,Xn("buy"),i.mut&&Xn("mutant"),i.state="toBase",i.wanted=null,se.slots[t].beetle=i,se.slots[t].stash=se.slots[t].stash||0,i.base=se,i.slot=t,i.path=ta(i,se.slots[t]),ll(i),_e.play(i.sp.r>=3||i.mut>=2?"rare":"buy"),(i.sp.r>=3||i.mut>=3)&&(_t.happytime(),cs(i.x,i.h,i.z)),Jr(i,"-$"+Xe(i.price),"#ffd84a"),R.tut===0&&Jf(1),Vt()}function dS(i){let e=Math.floor(i.price*.3);if(Gr!==i){Gr=i,setTimeout(()=>{Gr===i&&(Gr=null)},2500),_e.play("click");return}Gr=null;let t=se.slots[i.slot];R.money+=e+(t.stash||0),t.stash=0,t.beetle=null,Jr(i,"+$"+Xe(e),"#7dff8d"),_e.play("coin",6),jf(i.x,1,i.z),i.remove(),Vt()}function o0(i){let e=ze.bases.indexOf(i.base),t=Qo(e);if(pe.online&&t!==ei){if(i.pending)return;i.pending=!0,Hr=i,pe.send({t:"take",to:t,seat:e,slot:i.slot,by:ei});return}let n=qe.find(r=>r.base===i.base),s=i.base.slots[i.slot];if(s.beetle=null,i.homeBase=i.base,i.fromSlot=i.slot,i.state="carried",i.carrier=H,H.carry=i,_e.play("grab"),n){let r=Fr(),o=n.base.inside(n.c.x,n.c.z)||Math.hypot(n.c.x-H.x,n.c.z-H.z)<10+8*Math.min(1,r),a=n.c.carry||n.state==="escape"}}function a0(){let i=H.carry;i&&(H.carry=null,Ls(i))}function Ls(i){let e=i.homeBase||i.base,t=e===se?rl():s0(e,Ho);if(i.carrier=null,i.y=(i.floor||0)*vn,t<0){jf(i.x,1,i.z),i.remove();return}e.slots[t].beetle=i,i.base=e,i.slot=t,i.state=e===se?"toBase":"toSlotRival",i.path=ta(i,e.slots[t])}function Um(i){let e=H.carry;H.carry=null,_e.play("bonk"),We(`\u{1F4A5} ${i.info.name} caught you!`),e.x=H.x,e.z=H.z,Ls(e);let t=H.x-i.c.x,n=H.z-i.c.z,s=Math.hypot(t,n)||1;H.kx=t/s*14,H.kz=n/s*14,H.stun=.7,H.vy=7,i.goHome()}function pS(){for(let i of qe)if(i.isPuppet&&i.c.carry&&i.c.carry.homeBase===se&&Math.hypot(i.c.x-H.x,i.c.z-H.z)<1.5&&i.c.floor===H.floor){let e=i.c.carry;i.c.carry=null,i.carryKey="",i.noCarryUntil=Ne+2,_e.play("bonk"),jr(),We(`\u{1F4AA} You got your ${e.sp.name} back!`),Xn("bump"),e.homeBase=se,e.x=i.c.x,e.z=i.c.z,Ls(e),pe.send({t:"drop",to:Qo(i.i),thief:i.i,by:ei}),Zr={}}for(let i of qe)if(i.state==="escape"&&i.c.carry&&Math.hypot(i.c.x-H.x,i.c.z-H.z)<1.5&&i.c.floor===H.floor&&i.stun<=0){let e=i.c.carry;i.c.carry=null,i.stun=2.2,i.fear.player=Math.min(2,(i.fear.player||0)+1),_e.play("bonk"),jr(),We(`\u{1F4AA} You got your ${e.sp.name} back!`),Xn("bump"),e.homeBase=se,e.x=i.c.x,e.z=i.c.z,Ls(e)}}function mS(){let i=H.carry,e=rl();if(e<0){H._fullMsg||(We("\u{1F3E0} Base full! Sell a beetle to make room."),H._fullMsg=1,setTimeout(()=>H._fullMsg=0,3e3));return}H.carry=null;let t=se.slots[e];t.beetle=i,t.stash=t.stash||0,i.base=se,i.slot=e,i.homeBase=se,i.state="toBase",i.floor=H.floor,i.y=H.floor*vn,i.x=H.x,i.z=H.z,i.path=ta(i,t),R.steals=(R.steals||0)+1,Xn("steal"),i.mut&&Xn("mutant"),ll(i),_e.play("rare"),cs(H.x,2.5,H.z),_t.happytime(),We(`\u{1F389} Stole a ${Ht[i.mut].name?Ht[i.mut].name+" ":""}${i.sp.name}!`,!0);let n=qe.find(s=>s.base===i.base);n&&(n.grudge.player=Math.min(2,(n.grudge.player||0)+1)),R.tut===2&&Jf(3),Vt()}function Kf(){if(!cn)return;_e.ensure();let{kind:i,b:e}=cn;if(i==="fuse"){R.fuse&&Ns()<=0?h0():Hf();return}i==="buy"?Yf(e):i==="sell"?dS(e):i==="steal"?o0(e):i==="drop"&&a0()}var Om=(i=new Date)=>`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`;function Af(i){return Math.max(100*i,Math.round(Ui()*20*i))}function gS(){let i=Om(),e=new Date;if(e.setDate(e.getDate()-1),R.daily.last===i)return!1;let t=R.daily.last===Om(e)?R.daily.streak%7+1:1;te("dailySub").innerHTML=t>1?`\u{1F525} ${t} day streak! Come back tomorrow for a bigger reward.`:"Come back every day for bigger rewards. Day 7 includes Lucky Spawns!",te("dailyDays").innerHTML=[1,2,3,4,5,6,7].map(o=>`<div class="day ${o<t?"got":""} ${o===t?"today":""}"><span class="e">${o===7?"\u{1F3B0}":"\u{1F4B0}"}</span><b>Day ${o}</b>$${Xe(Af(o))}</div>`).join("");let n=o=>{let a=Af(t)*o;R.money+=a,R.daily={last:i,streak:t},t===7&&(Xr+=3),pn(),_e.play("rare"),We(`\u{1F5D3}\uFE0F Day ${t} reward: +$${Xe(a)}${t===7?" + Lucky Spawns!":""}`,!0),Vt()},s=te("dailyBtns");s.innerHTML="";let r=(o,a,c)=>{let l=document.createElement("button");l.className="btn "+(c||""),l.textContent=o,l.onclick=a,s.appendChild(l)};return r(`Claim $${Xe(Af(t))}`,()=>n(1)),Is&&r("\u{1F4FA} Claim 2\xD7",async()=>{await _t.rewarded()?n(2):We("No video available right now")},"purple"),li("mDaily"),!0}var Wo=[120,300,600,900,1200,1800],Vc=0,ea=0;function tl(){return Vc<Wo.length?Wo[Vc]:Wo[Wo.length-1]+(Vc-Wo.length+1)*600}function Rf(i=1){if(!(ea<tl())){if(Vc++,_e.play("rare"),cs(H.x,3,H.z),Math.random()<.25){Xr+=1;let e=Math.max(30,Math.round(Ui()*6))*i;R.money+=e,We(`\u{1F381} Gift: 1 Lucky Spawn + $${Xe(e)}!`,!0)}else{let e=Math.max(50,Math.round(Ui()*15))*i;R.money+=e,We(`\u{1F381} Gift: +$${Xe(e)}!`,!0)}Vt()}}te("giftPill").onclick=()=>{if(ea<tl()){We(`\u{1F381} Next gift in ${Math.ceil(tl()-ea)}s`);return}Is?dl("\u{1F381} Gift ready!","Open your gift now, or watch a short video to double it.",[["Open",()=>{pn(),Rf(1)}],["\u{1F4FA} Double it",async()=>{pn(),Rf(await _t.rewarded()?2:1)},"purple"]]):Rf(1)};var kf={buy:{t:i=>`Buy ${i} beetles from the trail`,n:[3,5,8],k:1},collect:{t:i=>`Collect $${Xe(i)} from your pads`,scale:!0,k:1},steal:{t:i=>`Steal ${i} beetle${i>1?"s":""} from rivals`,n:[1,2,3],k:2},bump:{t:i=>`Stop ${i} thief${i>1?"s":""} by bumping into them`,n:[1,2],k:2},discover:{t:i=>`Find ${i} new beetle species`,n:[1,2],k:1.5},mutant:{t:i=>`Get ${i} beetle${i>1?"s":""} with a mutation`,n:[1,2],k:2},lock:{t:i=>`Lock your base ${i} times`,n:[2,3],k:.8},upgrade:{t:i=>`Buy ${i} shop upgrade${i>1?"s":""}`,n:[1,2,3],k:1},fuse:{t:i=>"Use the Fuse Machine",n:[1],k:2}};function c0(){let i=new Set(R.tasks.map(r=>r.k)),e=Object.keys(kf).filter(r=>!i.has(r)&&!(r==="discover"&&na()>=Cs.length)),t=e[Math.floor(Math.random()*e.length)],n=kf[t],s=n.scale?Math.max(200,Math.round(Ui()*(60+Math.random()*120)/10)*10):n.n[Math.floor(Math.random()*n.n.length)];return{k:t,n:s,p:0,m:n.k*(n.scale?1:.7+s*.3)}}function zm(i){return Math.max(Math.round(100*i.m),Math.round(Ui()*20*i.m))}function Xn(i,e=1){if(!R.tasks)return;let t=!1;for(let n of R.tasks)n.k===i&&n.p<n.n&&(n.p=Math.min(n.n,n.p+e),n.p>=n.n&&(t=!0));t&&(We("\u{1F4CB} Task complete! Claim it in Tasks",!1),_e.play("event"))}function l0(){te("taskList").innerHTML=R.tasks.map((i,e)=>{let t=i.p>=i.n;return`<div class="task"><div class="t"><b>${kf[i.k].t(i.n)}</b><span>${Xe(i.p)} / ${Xe(i.n)} \xB7 Reward $${Xe(zm(i))}</span><div class="bar"><i style="width:${Math.min(100,i.p/i.n*100)}%"></i></div></div><button class="btn ${t?"":"off"}" data-claim="${e}">${t?"Claim":"\u2026"}</button></div>`}).join(""),te("taskList").querySelectorAll("[data-claim]").forEach(i=>i.onclick=()=>{let e=+i.dataset.claim,t=R.tasks[e];if(t.p<t.n)return;let n=zm(t);R.money+=n,_e.play("rare"),We(`\u{1F4CB} +$${Xe(n)}`,!0),R.tasks[e]=c0(),Vt(),l0()})}te("bTasks").onclick=()=>{l0(),li("mTasks")};var Sn={x:-7,z:35},Bm=[30,45,60,90,150,240,300],Vr=null,nl=null,Gt=[];function xS(){let i=new ct;i.position.set(Sn.x,0,Sn.z);let e=(r,o={})=>new Pe({color:r,roughness:.4,...o}),t=(r,o,a,c,l)=>{let u=new le(r,o);return u.position.set(a,c,l),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u};t(new xt(2.2,2.5,.6,28),e("#5b6478",{metalness:.6}),0,.3,0),t(new xt(1.5,1.8,1.6,24),e("#8a93a8",{metalness:.8,roughness:.25}),0,1.4,0);let n=t(new zt(1.45,28,16,0,Math.PI*2,0,Math.PI/2),new Zt({color:"#bff6ff",transparent:!0,opacity:.35,roughness:.05,metalness:0,clearcoat:1,depthWrite:!1}),0,2.2,0),s=t(new Ar(.5,1),e("#b36bff",{emissive:"#b36bff",emissiveIntensity:1.2,flatShading:!0}),0,2.8,0);for(let r=0;r<4;r++){let o=r/4*Math.PI*2+Math.PI/4;t(new xt(.28,.28,2.2,12),e("#ffc93a",{metalness:.7,roughness:.3}),Math.cos(o)*1.9,1.1,Math.sin(o)*1.9);let a=t(new zt(.22,12,8),e("#5bff7a",{emissive:"#5bff7a",emissiveIntensity:1}),Math.cos(o)*1.9,2.3,Math.sin(o)*1.9);a.userData.light=r}Dt.add(i),ze.circles.push({x:Sn.x,z:Sn.z,r:2.4}),Vr={g:i,core:s,dome:n},nl=new rs(512,160,5),nl.sprite.position.set(Sn.x,4.4,Sn.z)}function Ns(){return R.fuse?Math.max(0,(R.fuse.end-Date.now())/1e3):0}function yS(i){if(!Vr)return;let e=!!R.fuse,t=e&&Ns()<=0;Vr.core.rotation.y+=i*(e?4:.6),Vr.core.rotation.x+=i*(e?2.5:.3),Vr.core.material.emissive.set(t?"#5bff7a":e?"#ff6bd8":"#b36bff"),Vr.core.scale.setScalar(1+(e?.15*Math.sin(Ne*8):0));let n=Ns(),s=`${Math.floor(n/60)}:${String(Math.ceil(n%60)%60).padStart(2,"0")}`;nl.draw([{text:"FUSE MACHINE",color:"#ffd84a",size:54},{text:t?"\u2705 READY! Claim it":e?`Fusing\u2026 ${s}`:"Combine 4 beetles",color:t?"#7dff8d":"#ffffff",size:40}],t?"r":e?s:"i"),nl.sprite.visible=!Jt&&Math.hypot(H.x-Sn.x,H.z-Sn.z)<40}var Ff=[{id:"omega",name:"Omega Beetle",hint:"4 Mythic-or-better beetles",test:i=>i.every(e=>e.sp.r>=5)},{id:"prism",name:"Prism Titan",hint:"2+ Diamond beetles, all Epic or better",test:i=>i.every(e=>e.sp.r>=3)&&i.filter(e=>e.mut===2).length>=2},{id:"mecha",name:"Mecha Scarab",hint:"3+ metallic beetles (Copper, Ruby, Emerald, Sunburst\u2026), all Rare or better",test:i=>i.every(e=>e.sp.r>=2)&&i.filter(e=>e.sp.metal>=.7).length>=3},{id:"king",name:"King ___",hint:"4 of the same species",test:i=>!i[0].sp.king&&i.every(e=>e.sp.id===i[0].sp.id)},{id:"chimera",name:"Chimera Beetle",hint:"4 different horn types, all Rare or better",test:i=>i.every(e=>e.sp.r>=2)&&new Set(i.map(e=>e.sp.horn)).size>=4}];function km(i){let e={};for(let s of i)s&&(e[s]=(e[s]||0)+1);let t=0,n=0;for(let s in e)(e[s]>n||e[s]===n&&+s>t)&&(t=+s,n=e[s]);return n>=2?t:0}function Zf(i){let e=[...i].sort((a,c)=>c.inc-a.inc),t=e[0],n=_n(Mf(e[0].sp.id,e[1].sp.id)),s={s:n.id,kind:"hybrid",label:`Hybrid of ${e[0].sp.name} \xD7 ${e[1].sp.name}`};for(let a of Ff)if(a.test(i)){let c=a.id==="king"?`king:${i[0].sp.id}`:a.id;if(_n(c).inc>n.inc*.9){s={s:c,kind:"recipe",recipe:a.id,label:`Recipe: ${a.name.replace("___",i[0].sp.name)} (${a.hint})`};break}}let r=km(i.map(a=>a.mut)),o=km(i.map(a=>a.trait));return s.mutShared=r,s.traitShared=o,s.sp=_n(s.s),s.minInc=s.sp.inc*Ht[r].mult*jt[o].mult,s}function _S(i){let e=Zf(i),t=Math.max(...i.map(r=>r.mut)),n=e.mutShared||(Math.random()<.4?t:i0(3)),s=e.traitShared||Km(3);return e.recipe&&(R.recipes=R.recipes||{},R.recipes[e.recipe]=1),{s:e.s,m:n,t:s,r:e.sp.r}}function Hf(){let i=te("fuseBody");if(R.fuse){let c=Ns();c<=0?i.innerHTML='<p style="font-size:17px">Your fused beetle is ready! \u{1F389}</p><div style="text-align:center"><button class="btn big" id="fuseClaim">Claim</button></div>':i.innerHTML=`<p style="font-size:17px">Fusing\u2026 <b>${Math.floor(c/60)}:${String(Math.ceil(c%60)%60).padStart(2,"0")}</b> left. It keeps fusing while you play (or even while you're away).</p>${Is?'<div style="text-align:center"><button class="btn purple" id="fuseSkip">\u{1F4FA} Finish now</button></div>':""}`,te("fuseClaim")&&(te("fuseClaim").onclick=h0),te("fuseSkip")&&(te("fuseSkip").onclick=async()=>{await _t.rewarded()?(R.fuse.end=Date.now(),Hf()):We("No video available right now")}),li("mFuse");return}let e=se.slots.filter(c=>c.beetle&&c.beetle.state==="slot").map(c=>c.beetle);Gt=Gt.filter(c=>e.includes(c));let t=Math.round(Gt.reduce((c,l)=>c+l.price,0)*.3),n=null;try{n=Gt.length===4?Zf(Gt):null}catch(c){console.warn("fuse plan failed",c)}let s=n?n.sp.r:0,o=n?`<div class="fusePrev"><div class="big" style="color:${(c=>ri[c].color==="#ffffff"?"#d05bff":ri[c].color==="#c9d1d9"?"#6b7488":ri[c].color)(s)}">${n.kind==="recipe"?"\u2B50 ":"\u{1F9EC} "}${n.mutShared?Ht[n.mutShared].name+" ":""}${n.traitShared?jt[n.traitShared].name+" ":""}${n.sp.name}</div><div>${ri[s].name} \xB7 at least <b style="color:#1f9a3a">$${Xe(n.minInc*os())}/s</b>${R.made&&R.made[n.s]?"":n.sp.hybrid||n.sp.king?" \xB7 <b>NEW!</b>":""}</div><small>${n.label}${n.mutShared?` \xB7 2+ ${Ht[n.mutShared].name} \u2192 keeps ${Ht[n.mutShared].name}`:""}${n.traitShared?` \xB7 2+ ${jt[n.traitShared].name} \u2192 keeps ${jt[n.traitShared].name}`:""}</small></div>`:"",a=`<details class="recipes"><summary>\u{1F4DC} Special recipes (${Object.keys(R.recipes||{}).length}/${Ff.length} found) \xB7 Fusions made: ${Object.keys(R.made||{}).length}</summary>${Ff.map(c=>`<div>${(R.recipes||{})[c.id]?"\u2705":"\u2754"} <b>${c.name}</b>: ${c.hint}</div>`).join("")}<div style="margin-top:6px">Anything else makes a <b>hybrid</b> of your two best beetles. Each new fusion adds +0.5% income (up to +15%).</div></details>`;i.innerHTML=`<p class="sub">Pick 4 beetles. What you get depends on which ones you use \u2014 try different combos!</p>
    <div class="fuseGrid">${e.map((c,l)=>`<button class="fz ${Gt.includes(c)?"on":""}" data-i="${l}"><b style="color:${c.sp.r?ri[c.sp.r].color:"#24304a"}">${c.trait?jt[c.trait].name+" ":""}${c.mut?Ht[c.mut].name+" ":""}${c.sp.name}</b><span>$${Xe(c.inc*os())}/s</span></button>`).join("")||"<p>You need beetles in your base first.</p>"}</div>
    ${o}<div class="fuseSum">${Gt.length}/4 picked${Gt.length===4?` \xB7 Cost <b>$${Xe(t)}</b> \xB7 Time <b>${Bm[s]}s</b>`:""}</div>${a}
    <div style="text-align:center"><button class="btn big ${Gt.length===4&&R.money>=t?"purple":"off"}" id="fuseGo">${Gt.length<4?"Pick 4 beetles":R.money<t?"Need $"+Xe(t-R.money)+" more":"FUSE! \u2697\uFE0F"}</button></div>`,i.querySelectorAll("[data-i]").forEach(c=>c.onclick=()=>{let l=e[+c.dataset.i];Gt.includes(l)?Gt=Gt.filter(u=>u!==l):Gt.length<4&&Gt.push(l),_e.play("click"),Hf()}),te("fuseGo").onclick=()=>{if(Gt.length!==4||R.money<t){_e.play("deny");return}let c=_S(Gt);R.money-=t;for(let l of Gt){let u=se.slots[l.slot];R.money+=Math.floor(u.stash||0),u.stash=0,u.beetle=null,jf(l.x,1,l.z),l.remove()}Gt=[],R.fuse={...c,end:Date.now()+Bm[c.r]*1e3},Xn("fuse"),_e.play("rebirth"),pn(),We("\u2697\uFE0F Fusing started! Come back when it's done.",!0),Vt()},li("mFuse")}function h0(){if(!R.fuse||Ns()>0)return;let i=rl();if(i<0){We("\u{1F3E0} Your base is full! Sell a beetle first."),_e.play("deny");return}let e=R.fuse;R.fuse=null;let t=new wn(e.s,e.m,e.t);t.x=Sn.x+2.5,t.z=Sn.z,t.homeBase=se;let n=se.slots[i];n.beetle=t,n.stash=n.stash||0,t.base=se,t.slot=i,t.state="toBase",t.path=ta(t,n),ll(t),pn(),cs(t.x,2.5,t.z),cs(t.x,2.5,t.z),_e.play("rare"),_t.happytime(),We(`\u2697\uFE0F You fused a ${t.trait?jt[t.trait].name+" ":""}${t.mut?Ht[t.mut].name+" ":""}${t.sp.name}!${t.sp.fuse?" (Fusion only!)":t.sp.hybrid?" (Hybrid!)":t.sp.king?" (Royal!)":""}`,!0),Vt()}var dn=new Set,an={x:0,y:0,id:null,cx:0,cy:0};addEventListener("keydown",i=>{if(!Jt){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(i.key)&&i.preventDefault(),ul()){i.key==="Escape"&&pn();return}dn.add(i.key.toLowerCase()),(i.key==="e"||i.key==="E"||i.key==="f"||i.key==="Enter")&&!i.repeat&&Kf(),i.key===" "&&!i.repeat&&u0(),_e.ensure(),bn&&_t.gameplayStart()}});addEventListener("keyup",i=>dn.delete(i.key.toLowerCase()));addEventListener("blur",()=>dn.clear());var il=1;addEventListener("wheel",i=>{ul()||(il=Math.max(.6,Math.min(1.6,il*(i.deltaY>0?1.08:.93))))},{passive:!0});function u0(){H&&H.jy<=.01&&!H.stun&&(H.vy=10.5,_e.play("jump"))}addEventListener("pointerdown",()=>{_e.ensure(),bn&&_t.gameplayStart()});function vS(){if(!Ps)return;te("joy").hidden=!1,te("jumpBtn").hidden=!1;let i=te("joy"),e=te("joyBase"),t=te("joyKnob");i.addEventListener("touchstart",s=>{let r=s.changedTouches[0];an.id=r.identifier,an.cx=r.clientX,an.cy=r.clientY,e.hidden=t.hidden=!1,e.style.left=t.style.left=r.clientX+"px",e.style.top=t.style.top=r.clientY+"px",_e.ensure(),_t.gameplayStart(),s.preventDefault()},{passive:!1}),i.addEventListener("touchmove",s=>{for(let r of s.changedTouches)if(r.identifier===an.id){let o=r.clientX-an.cx,a=r.clientY-an.cy,c=Math.hypot(o,a),l=55;c>l&&(o=o/c*l,a=a/c*l),an.x=o/l,an.y=a/l,t.style.left=an.cx+o+"px",t.style.top=an.cy+a+"px"}s.preventDefault()},{passive:!1});let n=s=>{for(let r of s.changedTouches)r.identifier===an.id&&(an.id=null,an.x=an.y=0,e.hidden=t.hidden=!0)};i.addEventListener("touchend",n),i.addEventListener("touchcancel",n),te("jumpBtn").addEventListener("touchstart",s=>{u0(),s.preventDefault()},{passive:!1})}function MS(i){let e=H,t=0,n=0;(dn.has("w")||dn.has("arrowup")||dn.has("z"))&&(n-=1),(dn.has("s")||dn.has("arrowdown"))&&(n+=1),(dn.has("a")||dn.has("arrowleft")||dn.has("q"))&&(t-=1),(dn.has("d")||dn.has("arrowright"))&&(t+=1),t+=an.x,n+=an.y;let s=Math.hypot(t,n);s>1&&(t/=s,n/=s),e.stun>0&&(e.stun-=i,t=n=0);let r=e0()*(e.carry?.72:1),o=t*r*i+(e.kx||0)*i,a=n*r*i+(e.kz||0)*i,c=Math.max(1,Math.ceil(Math.hypot(o,a)/.3));for(let h=0;h<c;h++)e.x+=o/c,e.z+=a/c,Uf(e,!0,se);if(e.kx=(e.kx||0)*Math.pow(.02,i),e.kz=(e.kz||0)*Math.pow(.02,i),e.moving=s>.15,e.moving&&e.turnTo(Math.atan2(t,n),i),e.vy-=30*i,e.jy=Math.max(0,e.jy+e.vy*i),e.jy===0&&(e.vy=0),e.y=e.floor*vn+e.jy,Uf(e,!0,se),hl()){let h=ze.deck;e.floor===0&&Math.hypot(e.x-h.upPad.x,e.z-h.upPad.z)<.85?(Qc(e,1),_e.play("jump")):e.floor===1&&Math.hypot(e.x-h.downPad.x,e.z-h.downPad.z)<.85&&(Qc(e,0),_e.play("jump"))}let l=e.floor===1||se.inside(e.x,e.z);for(let h=0;h<se.slots.length;h++){if(!Ds(h))continue;let d=se.slots[h],g=(d.floor||0)===e.floor&&Math.abs(e.x-d.padX)<1.05&&Math.abs(e.z-d.padZ)<.75;d.stash>=1&&!d.wasOn&&(g||R.upg.auto&&l&&Ne-(d.lastAuto||0)>3)&&(f0(d),d.lastAuto=Ne),d.wasOn=g}e.floor===0&&Math.hypot(e.x-se.lockPos.x,e.z-se.lockPos.z)<1.2&&!(se.lockUntil>Ne)&&(se.lockUntil=Ne+jc(),Xn("lock"),_e.play("lock"),We(`\u{1F512} Base locked for ${jc()}s!`)),e.carry&&(e.floor===1||se.inside(e.x,e.z,1))&&mS(),pS(),cn=null;let u=1e9,f=(h,d,g)=>{g<u&&(u=g,cn={kind:h,b:d})};if(!e.carry)for(let h of Qt){let d=Math.hypot(h.x-e.x,h.z-e.z);(h.floor||0)===e.floor&&(h.pending||(h.state==="trail"&&d<3.2?f("buy",h,d):h.state==="slot"&&d<2.4&&l?f("sell",h,d+.5):h.state==="rival"&&d<2.6&&h.base.inside(e.x,e.z)&&f("steal",h,d)))}if(!e.carry&&e.floor===0){let h=Math.hypot(e.x-Sn.x,e.z-Sn.z);h<3.8&&f("fuse",null,h-1)}e.carry&&!l&&(cn={kind:"drop",b:e.carry})}var Cf=0,Fm=0;function f0(i){let e=Math.floor(i.stash);e<1||(R.money+=e,R.earned+=e,i.stash-=e,Xn("collect",e),Ne-Fm>1.2&&(Cf=0),Cf++,Fm=Ne,_e.play("coin",Cf),Jr({x:i.padX,z:i.padZ,h:.8},"+$"+Xe(e),"#7dff8d"),R.tut===1&&Jf(2))}var Hm="",Gm=-9;function bS(i){i===Hm&&Ne-Gm<2||(Hm=i,Gm=Ne,We(i))}function We(i,e){let t=document.createElement("div");t.className="toast"+(e?" big":""),t.textContent=i;let n=te("toasts");for(n.appendChild(t);n.children.length>3;)n.firstChild.remove();setTimeout(()=>{t.style.transition="opacity .4s",t.style.opacity=0,setTimeout(()=>t.remove(),400)},e?2600:2200)}var kc=new C;function d0(i,e,t){return kc.set(i,e,t).project(ci),{x:(kc.x+1)/2*innerWidth,y:(1-kc.y)/2*innerHeight,vis:kc.z<1}}function Jr(i,e,t){let n=d0(i.x,(i.h||1)+.5,i.z);if(!n.vis)return;let s=document.createElement("div");s.className="fl",s.textContent=e,s.style.left=n.x+"px",s.style.top=n.y+"px",s.style.color=t,te("floats").appendChild(s),setTimeout(()=>s.remove(),1100)}function SS(i,e){Jr({x:i.x,z:i.z,h:3},e,"#fff")}var p0=0;function m0(i){let e=te("alert");e.textContent=i,e.hidden=!1,p0=Ne}function jr(){te("alert").hidden=!0}var Vm=["\u{1F463} Walk to the <b>Bug Trail</b> in the middle and buy a beetle! (<b>E</b>)","\u{1F4B0} Your beetle makes money. Step on its <b>green pad</b> to collect!","\u{1F9B9} Rivals have beetles too\u2026 sneak into their base and <b>steal</b> one!","\u{1F512} Watch out for raids! Bump into thieves, or step on <b>LOCK</b> to protect your base."];function Jf(i){R.tut=i,Gf(),i===3&&setTimeout(()=>{R.tut===3&&(R.tut=4,Gf())},12e3)}function Gf(){let i=te("tut");R.tut<Vm.length?(i.innerHTML=Vm[R.tut].replace("(<b>E</b>)",Ps?"":"(<b>E</b>)"),i.hidden=!1):i.hidden=!0}var Wc;function wS(){let i=new ct,e=new Pe({color:"#ffd23a",emissive:"#ffb000",emissiveIntensity:.6}),t=new le(new Qn(.55,1.1,4),e);t.rotation.x=Math.PI,i.add(t);let n=new le(new In(.4,.9,.4),e);return n.position.y=.9,i.add(n),Dt.add(i),i}function ES(){if(R.tut===0){let i=null;for(let e of Qt)e.state==="trail"&&e.price<=R.money&&e.z>Lt.z0+4&&(!i||Math.abs(e.z-H.z)<Math.abs(i.z-H.z))&&(i=e);return i?{x:i.x,y:i.h+1.6,z:i.z}:null}if(R.tut===1){for(let i of se.slots)if(i.beetle&&i.beetle.state==="slot"&&i.stash>=2)return{x:i.padX,y:1.2,z:i.padZ};return null}if(R.tut===2){if(H.carry)return{x:se.entranceIn.x,y:1.5,z:se.cz};let i=null,e=1e9;for(let t of qe)for(let n of t.base.slots)if(n.beetle&&n.beetle.state==="rival"){let s=Math.hypot(n.x-H.x,n.z-H.z);s<e&&(e=s,i=n.beetle)}return i?{x:i.x,y:i.h+1.6,z:i.z}:null}for(let i of qe)if(i.state==="escape")return{x:i.c.x,y:5.5,z:i.c.z};return null}var Xc=[];function cs(i,e,t){let s=new Float32Array(180),r=new Float32Array(60*3),o=[],a=["#ff4d6d","#ffd23a","#5bff7a","#4dc9ff","#b36bff","#ffffff"].map(u=>new he(u));for(let u=0;u<60;u++){s[u*3]=i,s[u*3+1]=e,s[u*3+2]=t;let f=a[u%a.length];r.set([f.r,f.g,f.b],u*3),o.push([(Math.random()-.5)*9,6+Math.random()*8,(Math.random()-.5)*9])}let c=new dt;c.setAttribute("position",new gt(s,3)),c.setAttribute("color",new gt(r,3));let l=new kn(c,new Ln({size:.3,vertexColors:!0,transparent:!0}));Dt.add(l),Xc.push({p:l,vel:o,t:0,life:1.6})}function jf(i,e,t){cs(i,e,t)}function TS(i){for(let e=Xc.length-1;e>=0;e--){let t=Xc[e];t.t+=i;let n=t.p.geometry.attributes.position.array;for(let s=0;s<t.vel.length;s++){let r=t.vel[s];r[1]-=18*i,n[s*3]+=r[0]*i,n[s*3+1]=Math.max(.05,n[s*3+1]+r[1]*i),n[s*3+2]+=r[2]*i}t.p.geometry.attributes.position.needsUpdate=!0,t.p.material.opacity=1-t.t/t.life,t.t>t.life&&(Dt.remove(t.p),t.p.geometry.dispose(),t.p.material.dispose(),Xc.splice(e,1))}}var $c=[];function AS(){let i=new le(new xt(.05,.25,6,6),new Pt({color:"#d8b6ff",transparent:!0,opacity:.9}));i.position.set(H.x+(Math.random()-.3)*60,50,H.z-30-Math.random()*30),i.rotation.z=.8,i.rotation.x=-.3,Dt.add(i),$c.push({m:i,t:0})}var Wm=new he,Xm=new he;function RS(i){!it&&Ne>Of&&pe.isHost&&(it=Hc!=null?$o[Hc]:$o[Math.floor(Math.random()*$o.length)],Hc=null,Xo=Ne+60,We(it.name+"!",!0),_e.play("event"),ze.rain.visible=it.id==="rain"),it&&Ne>Xo&&pe.isHost&&(it=null,Of=Ne+150+Math.random()*70,ze.rain.visible=!1);let e=it?it.sky:jb;Wm.set(e[0]),Xm.set(e[1]);let t=Math.min(1,i*1.5);ze.skyU.top.value.lerp(Wm,t),ze.skyU.bot.value.lerp(Xm,t),ze.skyU.night.value+=((it&&it.night?1:0)-ze.skyU.night.value)*t;let n=it?it.light:1;ze.sun.intensity+=(2.4*n-ze.sun.intensity)*t,ze.hemi.intensity+=(.5+.5*n-ze.hemi.intensity)*t,Dt.fog.color.copy(ze.skyU.bot.value),it&&it.id==="golden"?ze.sun.color.lerp(new he("#ffc27a"),t):ze.sun.color.lerp(new he("#fff4dc"),t);let s=te("event");it?(s.hidden=!1,s.innerHTML=`${it.name} <span style="opacity:.8">${Math.ceil(Xo-Ne)}s</span><small>${it.desc}</small>`):s.hidden=!0,it&&it.id==="meteor"&&Math.random()<i*1.5&&AS();for(let r=$c.length-1;r>=0;r--){let o=$c[r];o.t+=i,o.m.position.x-=i*40,o.m.position.y-=i*40,o.t>1.3&&(Dt.remove(o.m),$c.splice(r,1))}}var If=0;var Vf=!1;te("lb").onclick=()=>{Vf=!Vf};function CS(){te("moneyV").textContent=Xe(R.money),te("income").textContent=`+$${Xe(Ui())}/s`;let i=os(),e=te("mult");i>1.001?(e.hidden=!1,e.textContent=`\u2728 \xD7${i.toFixed(2).replace(/\.?0+$/,"")} income`+(Jo>Ne?` (2\xD7 boost ${Math.ceil(Jo-Ne)}s)`:"")):e.hidden=!0;let t=a=>(a=Math.max(0,Math.ceil(a)),Math.floor(a/60)+":"+String(a%60).padStart(2,"0"));te("spawnPill").innerHTML=`\u2B50 Legendary ${t(R.nextLeg-R.play)} \xB7 \u{1F31F} Mythic ${t(R.nextMyth-R.play)}`;let n=[{n:R.name||"You",v:Ui(),me:!0},...qe.map(a=>({n:a.info.name,v:$r(a),c:a.info.color}))].sort((a,c)=>c.v-a.v);te("lbRows").innerHTML=n.map((a,c)=>`<div class="r ${a.me?"me":""}"><span>${["\u{1F947}","\u{1F948}","\u{1F949}","4."][c]}</span><span class="n" style="${a.c?"color:"+a.c:""}">${a.n}</span><span class="v">$${Xe(a.v)}/s</span></div>`).join(""),Ps&&(innerWidth<innerHeight||innerHeight<560)&&!Vf?(te("lb").classList.add("min"),te("lb").querySelector("h5").textContent=`\u{1F3C6} You're #${n.findIndex(a=>a.me)+1}`):(te("lb").classList.remove("min"),te("lb").querySelector("h5").textContent="\u{1F3C6} TOP EARNERS");{let a=te("giftPill"),c=tl()-ea;a.className="pill"+(c<=0?" ready":""),a.textContent=c<=0?"\u{1F381} OPEN GIFT!":`\u{1F381} Gift in ${Math.floor(c/60)}:${String(Math.ceil(c%60)%60).padStart(2,"0")}`}te("taskBadge").hidden=!R.tasks.some(a=>a.p>=a.n);let s=te("lockPill");se.lockUntil>Ne?(s.className="pill on",s.textContent=`\u{1F512} Locked ${Math.ceil(se.lockUntil-Ne)}s`):(s.className="pill",s.textContent="\u{1F513} Base unlocked");let r=te("bReb");r.querySelector(".badge")?.remove(),R.money>=Df(R.rebirths)&&r.insertAdjacentHTML("beforeend",'<span class="badge">!</span>');let o=te("prompt");if(cn&&!ul()){let{kind:a,b:c}=cn;if(o.hidden=!1,o.className=a+(a==="buy"&&c&&R.money<c.price?" no":""),te("pKey").textContent=Ps?"\u{1F446}":"E",a==="fuse"){o.className="buy",te("pKey").textContent=Ps?"\u{1F446}":"E",te("pText").innerHTML=R.fuse?Ns()<=0?"Claim fused beetle \u2697\uFE0F":`Fusing\u2026 ${Math.ceil(Ns())}s`:"Use Fuse Machine \u2697\uFE0F";return}let l=(c.trait?jt[c.trait].name+" ":"")+(Ht[c.mut].name?Ht[c.mut].name+" ":"");te("pText").innerHTML=a==="buy"?`Buy ${l}${c.sp.name} <span class="price">$${Xe(c.price)}</span>`:a==="sell"?Gr===c?`Tap again to sell for <span class="price">$${Xe(c.price*.3)}</span>`:`Sell ${c.sp.name} <span class="price">$${Xe(c.price*.3)}</span>`:a==="steal"?`Steal ${l}${c.sp.name}!`:`Drop ${c.sp.name}`}else o.hidden=!0}te("prompt").addEventListener("click",()=>Kf());var ai=document.createElement("div");ai.className="arrowInd";ai.innerHTML='<svg viewBox="0 0 46 46"><circle cx="23" cy="23" r="21" fill="#ff3d5a" stroke="#fff" stroke-width="3"/><path d="M15 23h14m-6-7 7 7-7 7" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></svg>';ai.hidden=!0;te("ui").appendChild(ai);function IS(){let i=qe.find(l=>l.state==="escape"||l.state==="raid");if(!i||i.state!=="escape"){ai.hidden=!0;return}let e=d0(i.c.x,1,i.c.z),t=40;if(e.vis&&e.x>t&&e.x<innerWidth-t&&e.y>t&&e.y<innerHeight-t){ai.hidden=!0;return}let n=innerWidth/2,s=innerHeight/2,r=e.x-n,o=e.y-s;e.vis||(r=-r,o=-o);let a=Math.atan2(o,r),c=Math.min((n-t)/Math.abs(Math.cos(a)||.001),(s-t)/Math.abs(Math.sin(a)||.001));ai.hidden=!1,ai.style.left=n+Math.cos(a)*c+"px",ai.style.top=s+Math.sin(a)*c+"px",ai.style.transform=`rotate(${a}rad)`}function ul(){return[...document.querySelectorAll(".modal")].some(i=>!i.hidden)}function li(i){pn(),te(i).hidden=!1,_e.play("click"),_t.gameplayStop(),dn.clear()}function pn(){document.querySelectorAll(".modal").forEach(i=>i.hidden=!0),_t.gameplayStart()}document.querySelectorAll(".modal").forEach(i=>i.addEventListener("click",e=>{(e.target===i||e.target.closest("[data-close]"))&&(pn(),_e.play("click"))}));te("bShop").onclick=()=>{x0(),li("mShop")};te("bBook").onclick=()=>{LS(),li("mBook"),te("bookBadge").hidden=!0};te("bReb").onclick=()=>{DS(),li("mReb")};te("bSet").onclick=()=>{fl(),li("mSet")};te("sHow").onclick=()=>li("mHow");te("sMenu").onclick=()=>jm();var g0=!1;te("sReset").onclick=()=>dl("\u{1F5D1}\uFE0F Reset progress?","This deletes your money, beetles, upgrades, rebirths and Bug Book. It can't be undone.",[["Yes, reset",()=>{g0=!0,_t.clear(),location.reload()},"off"],["Cancel",pn]]);function x0(){let i=te("shopBody"),e="";Is&&(e+=`<div class="upg"><div class="ic">\u{1F4FA}</div><div class="t"><b>2\xD7 Money (3 min)</b><span>Watch a short video</span></div><button class="btn purple" data-ad="boost">Watch \u25B6</button></div>
    <div class="upg"><div class="ic">\u{1F3B0}</div><div class="t"><b>Lucky Spawns</b><span>Next 3 trail beetles are Epic or better</span></div><button class="btn purple" data-ad="lucky">Watch \u25B6</button></div>`);for(let[t,n]of Object.entries(Wn)){if(n.needReb&&R.rebirths<n.needReb){e+=`<div class="upg" style="opacity:.6"><div class="ic">${n.icon}</div><div class="t"><b>Second Floor \u{1F512}</b><span>Unlocks after your first rebirth: 12 more spots upstairs</span></div><button class="btn off">Locked</button></div>`;continue}let s=R.upg[t]||0,r=s>=n.max,o=r?0:n.cost(s),a=t==="slots"?` (${6+R.upg.slots} \u2192 ${7+R.upg.slots} spots)`:t==="floor2"?` (${s} \u2192 ${s+1} upstairs)`:t==="speed"?` (${ss(s).toFixed(1)}\xD7 \u2192 ${ss(s+1).toFixed(1)}\xD7)`:t==="lock"?` (${jc()}s)`:t==="luck"?` (Lv ${s})`:"";e+=`<div class="upg"><div class="ic">${n.icon}</div><div class="t"><b>${n.name}${r?"":a}</b><span>${n.desc}</span>${n.max===1/0?"":`<div class="bar"><i style="width:${s/n.max*100}%"></i></div>`}</div>
      <button class="btn ${r?"max":R.money>=o?"":"off"}" data-upg="${t}">${r?"MAX":"$"+Xe(o)}</button></div>`}i.innerHTML=e,i.querySelectorAll("[data-upg]").forEach(t=>t.onclick=()=>{let n=t.dataset.upg,s=Wn[n],r=R.upg[n];if(r>=s.max)return;let o=s.cost(r);if(R.money<o){_e.play("deny");return}R.money-=o,R.upg[n]++,Xn("upgrade"),_e.play("buy"),(n==="slots"||n==="floor2")&&ol(),Vt(),x0()}),i.querySelectorAll("[data-ad]").forEach(t=>t.onclick=async()=>{if(!await _t.rewarded()){We("No video available right now");return}t.dataset.ad==="boost"?(Jo=Math.max(Ne,Jo)+180,We("\u{1F4B8} 2\xD7 money for 3 minutes!",!0)):(Xr=3,We("\u{1F3B0} Lucky spawns incoming!",!0)),pn()})}var on=null,Fc={};function PS(i,e){let t=i+":"+e;if(Fc[t])return Fc[t];if(!on){on={r:new wo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),s:new Ms,c:new Ot(30,4/3,.1,50)},on.r.setSize(240,180),on.r.toneMapping=Ac,on.r.outputColorSpace=bt;let r=new vs(on.r);on.s.environment=r.fromScene(new ko,.04).texture;let o=new Ji("#fff",2.2);o.position.set(3,5,4),on.s.add(o,new Lr("#fff","#888",.8))}let n=wf(i,e);n.rotation.y=-.75,on.s.add(n),n.userData.update(.016,0);let s=n.userData.scale;return on.c.position.set(0,3.2*s,4.4*s),on.c.lookAt(0,.35*s,.1*s),on.r.render(on.s,on.c),Fc[t]=on.r.domElement.toDataURL(),on.s.remove(n),Fc[t]}function LS(){let i=na();te("bookSub").innerHTML=`Found <b>${i}/${Cs.length}</b> beetles \xB7 Bonus: <b style="color:#1f9a3a">+${i*5}% income</b> \xB7 Dots = mutations collected`,te("bookSub").innerHTML+='<div class="ixRow">'+al.map(t=>{let n=cl(t.m),s=n>=t.need;return`<div class="ix ${s?"done":""}"><b style="color:${t.color==="rainbow"?"#d05bff":t.color}">${t.name} Index</b><span>${Math.min(n,t.need)}/${t.need} species</span><div class="bar"><i style="width:${Math.min(100,n/t.need*100)}%;background:${t.color==="rainbow"?"linear-gradient(90deg,red,orange,yellow,lime,cyan,violet)":t.color}"></i></div><small>${s?"\u2705 +10% income \xB7 base color":"Reward: +10% income + base color"}</small></div>`}).join("")+"</div>";let e="";for(let t of Cs){let n=R.book[t.id],s=ri[t.r],r=t.r===6?"#ff3df2":s.color;if(n===void 0){e+=`<div class="bk" style="border-color:${r}55"><div class="q">${t.fuse?"\u2697\uFE0F":"?"}</div><b>${t.fuse?"Fusion only":"???"}</b><div class="r" style="color:${r}">${s.name}</div></div>`;continue}let o=0;for(let c=5;c>=0;c--)if(n&1<<c){o=c;break}let a=Ht.slice(1).map((c,l)=>`<i style="${n&1<<l+1?"background:"+(c.color==="rainbow"?"linear-gradient(90deg,red,yellow,lime,cyan,violet)":c.color):""}" title="${c.name}"></i>`).join("");e+=`<div class="bk" style="border-color:${r}"><img src="${PS(t.id,o)}" alt=""><b>${t.name}</b><div class="r" style="color:${r==="#c9d1d9"?"#8a93a3":r}">${s.name} \xB7 $${Xe(t.inc)}/s</div><div class="dots">${a}</div></div>`}te("bookGrid").innerHTML=e}function DS(){let i=Df(R.rebirths),e=R.money>=i;te("rebBody").innerHTML=`<p style="font-size:17px;margin:4px 0 12px">Start over with a <b>permanent bonus</b>:</p>
    <div class="upg"><div class="ic">\u{1F4B0}</div><div class="t"><b>+50% income forever</b><span>Now \xD7${(1+.5*R.rebirths).toFixed(1)} \u2192 \xD7${(1+.5*(R.rebirths+1)).toFixed(1)}</span></div></div>
    <div class="upg"><div class="ic">\u{1F340}</div><div class="t"><b>+10% luck</b><span>Rarer beetles on the trail</span></div></div>
    <div class="upg"><div class="ic">\u{1F3C6}</div><div class="t"><b>Richer rivals</b><span>Better beetles to steal</span></div></div>
    <p class="sub">Resets your money, beetles, Bigger Base, Shoes and Lock. Keeps your Bug Book, Lucky Clover and Auto-Collector.</p>
    <div style="text-align:center"><button class="btn big ${e?"purple":"off"}" id="doReb">${e?"REBIRTH \u2728":"Need $"+Xe(i)}</button>
    <div class="bar" style="margin-top:12px"><i style="width:${Math.min(100,R.money/i*100)}%;background:#9b5cff"></i></div></div>`,te("doReb").onclick=()=>{if(R.money<Df(R.rebirths)){_e.play("deny");return}y0()}}function y0(){R.rebirths++,R.money=50*(R.rebirths+1),R.upg.slots=0,R.upg.speed=0,R.upg.lock=0,R.upg.floor2=0;let i=R.rebirths===1;H.carry&&(H.carry.remove(),H.carry=null);for(let e of[...Qt])(e.base===se||e.state==="toBase")&&e.remove();for(let e of se.slots)e.beetle=null,e.stash=0;ol(),i&&setTimeout(()=>We("\u{1F3D7}\uFE0F Second floor unlocked! Buy spots upstairs in the Shop.",!0),2800);for(let e of qe){e.c.carry&&(e.c.carry.remove(),e.c.carry=null);for(let t of e.base.slots)t.beetle&&t.beetle.remove(),t.beetle=null;e.state="idle",e.goal=null,ia(e)}jr(),pn(),_e.play("rebirth"),cs(H.x,3,H.z),cs(H.x,3,H.z),We(`\u2728 REBIRTH ${R.rebirths}! Income \xD7${1+.5*R.rebirths}`,!0),_t.happytime(),Vt()}function fl(){te("tMusic").classList.toggle("on",R.set.music),te("tSfx").classList.toggle("on",R.set.sfx),te("tHQ").classList.toggle("on",R.set.hq)}te("tMusic").onclick=()=>{R.set.music=!R.set.music,_e.musicOn=R.set.music,_e.ensure(),_e.apply(),fl(),Vt()};te("tSfx").onclick=()=>{R.set.sfx=!R.set.sfx,_e.sfxOn=R.set.sfx,_e.apply(),fl(),Vt()};te("tHQ").onclick=()=>{R.set.hq=!R.set.hq,Vt(),fl(),dl("\u2728 Graphics","The new graphics setting will apply after a reload.",[["Reload now",()=>location.reload()],["Later",pn]])};function dl(i,e,t){te("msgT").textContent=i,te("msgB").innerHTML=`<div style="font-size:17px;margin-bottom:14px">${e}</div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"></div>`;let n=te("msgB").lastChild;for(let[s,r,o]of t){let a=document.createElement("button");a.className="btn "+(o||""),a.textContent=s,a.onclick=()=>{_e.play("click"),r()},n.appendChild(a)}li("mMsg")}function Vt(){if(!(g0||!Zc)){if(R.t=Date.now(),R.base=se.slots.map(i=>i.beetle&&(i.beetle.state==="slot"||i.beetle.state==="toBase")?{s:i.beetle.sp.id,m:i.beetle.mut,t:i.beetle.trait,c:Math.floor(i.stash||0)}:null),H&&H.carry&&H.carry.homeBase===se){let i=R.base.findIndex(e=>!e);i>=0&&(R.base[i]={s:H.carry.sp.id,m:H.carry.mut,t:H.carry.trait,c:0})}for(let i of qe)if(i.c.carry&&i.c.carry.homeBase===se&&(i.state==="escape"||i.isPuppet)){let e=R.base.findIndex(t=>!t);e>=0&&(R.base[e]={s:i.c.carry.sp.id,m:i.c.carry.mut,t:i.c.carry.trait,c:0})}if(pe.online||ei!==0){_t.save(R);return}R.rivals=qe.map(i=>({money:Math.floor(i.money),upg:i.upg,base:i.base.slots.map(e=>e.beetle&&(e.beetle.state==="rival"||e.beetle.state==="toSlot"||e.beetle.state==="toSlotRival")?{s:e.beetle.sp.id,m:e.beetle.mut,t:e.beetle.trait,w:e.beetle.wasMine?1:0}:null)})),qe.forEach((i,e)=>{let t=i.c.carry;if(t&&i.state==="rescape"){let n=qe.findIndex(s=>s.base===t.homeBase);if(n>=0){let s=R.rivals[n].base.findIndex(r=>!r);s>=0&&(R.rivals[n].base[s]={s:t.sp.id,m:t.mut,t:t.trait})}}if(t&&i.state==="carryHome"){let n=R.rivals[e].base.findIndex(s=>!s);n>=0&&(R.rivals[e].base[n]={s:t.sp.id,m:t.mut,t:t.trait})}}),_t.save(R)}}function NS(){let i=_t.load();i&&i.v===1&&(R=Object.assign(kr(),i),R.upg=Object.assign(kr().upg,i.upg||{}),R.set=Object.assign(kr().set,i.set||{}),R.skin=Object.assign(kr().skin,i.skin||{}),R.daily=Object.assign(kr().daily,i.daily||{}),R.tasks=i.tasks||[],R.buys=R.buys||0,R.first=!1,i.v2||(R.upg.slots=Math.min(12,(R.upg.slots||0)*3),R.v2=!0))}var Ni=null,oi=new C,bn=!1,Pf=0,Lf=0;var $m=performance.now();setInterval(()=>{bn&&pe.online&&hS(.125)},125);setInterval(()=>{let i=performance.now(),e=Math.min(1,(i-$m)/1e3);if($m=i,!(!document.hidden||!bn||!pe.online))for(let t=0;t<e;t+=.05)Qf(.05,!1)},250);function _0(){requestAnimationFrame(_0);let i=Math.min(.05,Wb.getDelta());Qf(i,!0),ti.render(Dt,ci)}function Qf(i,e){if(Ne+=i,bn&&(R.play+=i,ea+=i),vm(Ne),bn&&MS(i),bn&&pe.isHost){if(R.play>=R.nextLeg){R.nextLeg=R.play+300;let h=qo(4,!0);We(`\u2B50 GUARANTEED LEGENDARY: ${h.sp.name} is on the trail!`,!0)}if(R.play>=R.nextMyth){R.nextMyth=R.play+900;let h=qo(5,!0);We(`\u{1F31F} GUARANTEED MYTHIC: ${h.sp.name} is on the trail!`,!0)}}pe.isHost&&(Tf-=i,Tf<=0&&(Tf=2.3+Math.random()*.8,qo()));let t=os();for(let h=0;h<se.slots.length;h++){let d=se.slots[h];Ds(h)&&d.beetle&&d.beetle.state==="slot"&&(d.stash=(d.stash||0)+d.beetle.inc*t*i)}for(let h of Qt){if(h.state==="trail"&&!pe.isHost){let d=Math.min(1,i*10);h.x+=((h.nx??h.x)-h.x)*d,h.z+=((h.nz??h.z)-h.z)*d,h.speed=.6}else if(h.state==="trail"){if(h.z+=1.75*i,h.x=h.lane+Math.sin(h.z*.25+h.id)*.35,h.yaw=Math.atan2(Math.cos(h.z*.25+h.id)*.35*.25,1),h.speed=.6,h.z>Lt.z1+4){h.wanted&&(h.wanted.target=null),pe.send({t:"tgone",id:h.netId}),h.remove();continue}}else if(h.state==="toBase"||h.state==="toSlot"||h.state==="toSlotRival")h.y=Math.max((h.floor||0)*vn,h.y-i*6),h.follow(i,h.state==="toBase"?6:5)&&(h.state=h.base===se?"slot":"rival",h.y=.35+(h.floor||0)*vn,_e.play("place"));else if(h.state==="slot"||h.state==="rival"){h.speed=0;let d=h.base.side<0?Math.PI/2:-Math.PI/2;h.turnTo(d,i)}h.sync(i)}bn&&sS(i);for(let h of qe)bn&&h.update(i),h.c.sync(i);H&&H.sync(i),TS(i),yS(i),RS(i),Lf-=i;let n=Lf<=0;n&&(Lf=.2);let s=null,r=4.2;for(let h of Qt)if(h.state==="slot"||h.state==="rival"){let d=Math.hypot(h.x-H.x,h.z-H.z);d<r&&(r=d,s=h)}for(let h of Qt){let d=Math.hypot(h.x-H.x,h.z-H.z),g=h.state==="slot"||h.state==="rival"||h.state==="toSlot"||h.state==="toSlotRival",x=!Jt&&((g?h===s:d<26&&h.state!=="carried")||h===(cn&&cn.b));if(h.label.sprite.visible=x,!!x&&(h.label.sprite.position.set(h.x,h.y+h.h,h.z),n)){let p=h.state==="trail"?h.wanted?"wanted":"trail":"slot";h.wasMine&&h.state!=="rival"&&(h.wasMine=!1);let m=h.state==="slot"?se.slots[h.slot]:null,M=Kb(h,p);h.label.draw(M,p+(p==="trail"?R.money>=h.price:"")+os().toFixed(2)+(h.wanted?"w":"")+(h.wasMine?"m":""))}}n&&US();for(let h of ze.bases){let d=h.lockUntil>Ne;h.gate.visible=d||h.gateMat.uniforms.a.value>.02,h.gateMat.uniforms.a.value+=((d?1:0)-h.gateMat.uniforms.a.value)*Math.min(1,i*6)}Ni||(Ni=new le(new Rr(.85,1.05,40),new Pt({color:"#ffd23a",transparent:!0,opacity:.9,depthWrite:!1})),Ni.rotation.x=-Math.PI/2,Ni.renderOrder=4,Dt.add(Ni));let o=cn&&cn.kind!=="drop"&&cn.kind!=="fuse"?cn.b:null;if(Ni.visible=!!o,o){let h=o.sp.W*o.obj.userData.scale*.75+.3;Ni.position.set(o.x,(o.y||0)+.06,o.z),Ni.scale.setScalar(h*(1+.06*Math.sin(Ne*8))),Ni.material.color.set(cn.kind==="buy"?R.money>=o.price?"#5bff7a":"#ff6b6b":cn.kind==="steal"?"#ff4d6d":"#ffb13a")}let a=bn?ES():null;if(Wc.visible=!!a,a&&(Wc.position.set(a.x,a.y+Math.abs(Math.sin(Ne*4))*.6,a.z),Wc.rotation.y+=i*2),se.rainbowTheme&&se.capMat.color.setHSL(Ne*.15%1,.8,.55),H.rainbow&&H._mats){let h=new he().setHSL(Ne*.2%1,.8,.65);for(let d of H._mats)d.color.copy(h)}Vo||(Vo=new rs(512,192,4.4)),Vo.sprite.visible=!!R.name||Jt;{let h=(Jt?sl(te("nameIn").value):R.name)||"You",d="$"+Xe(R.money);Vo.draw(Jt?[{text:h,color:"#ffffff",size:64}]:[{text:h,color:"#ffffff",size:60},{text:"Bank "+d,color:"#ffd84a",size:40}],"n"+h+Jt+(Jt?"":d))}Vo.sprite.position.set(H.x,H.y+(H.carry?4.6:2.4),H.z);for(let h of ze.bases)h.banner.visible=!Jt;for(let h of qe)h.tag.sprite.visible=!Jt;if(Jt){let h=Jm();H.x=h.x,H.z=h.z,Wr||(Zo+=i*.35),H.yaw=Zo;let d=innerWidth<innerHeight;ci.position.set(h.x,d?2.6:2.3,h.z+(d?8.5:6.6)),ci.lookAt(h.x,d?1.6:1.25,h.z),oi.set(h.x,0,h.z),ze.update(i,Ne,oi);return}let c=H.x,l=H.z;oi.lerp(new C(c,H.floor*vn,l),Math.min(1,i*6));let f=(innerWidth<innerHeight?1.1:1)*il;ci.position.set(oi.x,oi.y+20*f,oi.z+16.5*f),ci.lookAt(oi.x,oi.y+.8,oi.z-1),ze.update(i,Ne,oi),bn&&(If-=i,If<=0&&(If=.1,CS(),IS()),Pf+=i,Pf>8&&(Pf=0,Vt())),!te("alert").hidden&&Ne-p0>20&&jr()}var qm=[];function US(){let i=os();for(let e=0;e<se.slots.length;e++){let t=se.slots[e],n=qm[e];n||(n=qm[e]=new rs(256,112,2.3),n.sprite.position.set(t.padX,.2+(t.floor||0)*vn,t.padZ),n.sprite.material.depthTest=!0);let s=t.beetle&&(t.beetle.state==="slot"||t.beetle.state==="toBase")?t.beetle:null,r=Math.floor(t.stash||0),o=Ds(e)&&r>=1;if(n.sprite.visible=!Jt&&Ds(e)&&(o||!!s),t.padMat.emissiveIntensity=o?.5+.3*Math.sin(Ne*5):0,!n.sprite.visible)continue;let a=s?"+$"+Xe(s.inc*i)+"/s":"",c=[];o&&c.push({text:"$"+Xe(r),color:"#7dff8d",size:54}),a&&c.push({text:a,color:o?"#e6ffe9":"#c8f7cf",size:o?32:38}),n.draw(c,(o?Xe(r):"")+"|"+a)}}var Wf=new URLSearchParams(location.search).get("server")||window.BEETLE_SERVER||"";function OS(i){ei=i,se=ze.bases[i],ze.buildDeck(se),se.slots.push(...ze.deck.slots),Sn.x=se.side<0?-7:7,Sn.z=se.cz+(se.cz>0?20:-20),xS(),ol(),(R.base||[]).forEach((e,t)=>{if(e&&_n(e.s)&&t<se.slots.length&&Ds(t)){let n=new wn(e.s,e.m,e.t||0);n.homeBase=se,Us(n,se,t,!0),se.slots[t].stash=e.c||0,R.first&&ll(n)}}),te("bookBadge").hidden=!0,H.x=se.entranceIn.x+se.side*1,H.z=se.cz+2,H.yaw=se.side<0?Math.PI/2:-Math.PI/2,H.floor=0,qe=[];for(let e=0;e<4;e++)if(e!==i)if(pe.online&&pe.members[e])qe.push(new Kr(e,!0,pe.members[e].name));else if(pe.isHost){let t=new jo(e);qe.push(t);let n=!pe.online&&i===0&&R.rivals&&R.rivals[e-1];n?rS(t,n):ia(t)}else qe.push(new Kr(e,!1));for(let e of ze.bases)e.setBanner(e===se?"YOUR BASE":((Mn(ze.bases.indexOf(e))||{}).info||Jc[ze.bases.indexOf(e)]).name.toUpperCase()+"'S BASE");if(n0(),pe.online){if(uS(),!pe.isHost)for(let e of[...Qt])e.state==="trail"&&e.remove();Zr={},el(!0)}}async function zS(){_t.loadingStart(),await _t.init();try{await Promise.race([Promise.all(["400 40px Lilita",'400 40px "Lilita One"',"800 20px Nunito"].map(r=>document.fonts.load(r))),new Promise(r=>setTimeout(r,3e3))])}catch{}NS(),R.set.hq===!1&&bm(!0),_e.sfxOn=R.set.sfx,_e.musicOn=R.set.music,_e.sdkMuted=_t.muted,_t.onMute=r=>{_e.sdkMuted=r,_e.apply()},ze=Sm(Dt,ti);let i=new vs(ti);if(Dt.environment=i.fromScene(new ko,.04).texture,Dt.environmentIntensity=.8,Xb(),Tm(),addEventListener("resize",Tm),window.BEETLE_GLB){let r=Uint8Array.from(atob(window.BEETLE_GLB),a=>a.charCodeAt(0)),o=new Lo;window.BEETLE_TEX&&o.setURLModifier(a=>/colormap\.png$/.test(a)?window.BEETLE_TEX:a),qc=await new Bo(o).parseAsync(r.buffer,"models/")}else qc=await new Bo().loadAsync("models/character.glb");se=ze.bases[0],H=new Yo(null,"You"),H.x=se.entranceIn.x-1,H.z=se.cz+2,H.yaw=Math.PI/2,H.stun=0,Wc=wS();for(let r of ze.bases)r.slots.forEach(o=>{o.ped.visible=!0,o.pad.visible=!1});R.first&&(R.base=[{s:"pebble",m:0,c:0}]);for(let r=0;r<16;r++){let o=qo(r<3?0:void 0);o.z=Lt.z0+4+r*5.6}Gf(),vS(),te("loading").hidden=!0,_t.loadingStop(),_0();let e=!1,t=!1,n=0,s=async()=>{if(!Zc){let r=!1;Wf&&(te("loading").hidden=!1,te("loading").textContent="Finding a garden\u2026",r=await pe.connect(Wf,R.name||"Player"),te("loading").hidden=!0),OS(r?pe.seat:0),Zc=!0;let o=(Date.now()-(R.t||Date.now()))/1e3;n=!R.first&&o>60?Math.floor(Ui()*Math.min(o,7200)*.5):0,r&&We(`\u{1F310} Online! ${Object.keys(pe.members).length} player${Object.keys(pe.members).length>1?"s":""} in this garden \u2014 bots fill the rest`,!0)}for(bn=!0;(R.tasks||(R.tasks=[])).length<3;)R.tasks.push(c0());t||(t=!0,setTimeout(()=>{ul()||gS()},n>0?2500:600)),te("start").hidden=!0,n>0&&!e&&(e=!0,R.money+=n,dl("\u{1F44B} Welcome back!",`Your beetles earned <b style="color:#1f9a3a">$${Xe(n)}</b> while you were away!`,[["Collect \u{1F4B0}",()=>{pn(),_e.play("coin",8)}],...Is?[["\u{1F4FA} Collect 2\xD7",async()=>{await _t.rewarded()&&(R.money+=n),pn(),_e.play("coin",8)},"purple"]]:[]]))};if(Ko(Yc.find(r=>r.id===R.skin.hat)||Yc[0])||(R.skin.hat="none"),Ko(qr.find(r=>r.id===R.skin.color)||qr[0])||(R.skin.color="classic"),zf(Yr.find(r=>r.id===R.skin.base)||Yr[0])||(R.skin.base="default"),Xf(H),!R.name){let r=await _t.username();r&&(R.name=sl(r))}jm(),Nf=s,addEventListener("visibilitychange",()=>{document.hidden&&Vt()}),addEventListener("pagehide",Vt),Vb&&(window.__bt={S:R,bugs:Qt,get rivals(){return qe},get player(){return H},get playerBase(){return se},NET:pe,get mySeat(){return ei},world:ze,spawnTrail:qo,setEvent:r=>{Of=0,it=null,Hc=r},T:()=>Ne,setT:r=>Ne=r,camera:ci,renderer:ti,scene:Dt,sim:r=>{for(let o=0;o<r*20;o++)Qf(.05,!1)},interact:()=>cn,doInteract:Kf,refreshSlots:ol,fusePlan:Zf,mkBug:(r,o,a)=>new wn(r,o,a),rivalsInfo:()=>qe.map(r=>[r.info.name,r.state,Math.round(r.c.x),Math.round(r.c.z),r.c.carry&&r.c.carry.sp.id]),rivalSummary:()=>qe.map(r=>({n:r.info.name,upg:{...r.upg},money:Math.round(r.money),inc:Math.round($r(r)),best:Math.max(-1,...r.base.slots.filter(o=>o.beetle).map(o=>o.beetle.sp.r)),count:r.count()})),collect:f0,buy:Yf,steal:o0,placeInSlot:Us,keys:dn,zoom:r=>il=r,doRebirth:y0})}zS().catch(i=>{console.error(i),te("loading").textContent="Oops \u2014 failed to load. Please refresh."});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
