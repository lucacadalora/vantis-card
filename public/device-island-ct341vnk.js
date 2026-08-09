var IW=Object.create;var{getPrototypeOf:AW,defineProperty:Y8,getOwnPropertyNames:i6,getOwnPropertyDescriptor:CW}=Object,d7=Object.prototype.hasOwnProperty;function u7(J){return this[J]}var Wq=(J,Q,$)=>{var Z=i6(Q);for(let K of Z)if(!d7.call(J,K)&&K!=="default")Y8(J,K,{get:u7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!d7.call($,K)&&K!=="default")Y8($,K,{get:u7.bind(Q,K),enumerable:!0});return $}},PW,_W,Xq=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?PW??=new WeakMap:_W??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?IW(AW(J)):{};let X=Q||!J||!J.__esModule?Y8($,"default",{value:J,enumerable:!0}):$;for(let Y of i6(J))if(!d7.call(X,Y))Y8(X,Y,{get:u7.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},Yq=(J)=>{var Q=(XZ??=new WeakMap).get(J),$;if(Q)return Q;if(Q=Y8({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of i6(J))if(!d7.call(Q,Z))Y8(Q,Z,{get:u7.bind(J,Z),enumerable:!($=CW(J,Z))||$.enumerable})}return XZ.set(J,Q),Q},XZ,Uq=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var wW=(J)=>J;function TW(J,Q){this[J]=wW.bind(null,Q)}var Hq=(J,Q)=>{for(var $ in Q)Y8(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:TW.bind(Q,$)})};var qq=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var Gq=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var jZ="185";var fZ=0,VQ=1,vZ=2;var V7=1,yZ=2,n8=3,s8=0,lJ=1,I9=2,A9=0,B7=1,BQ=2,MQ=3,zQ=4,bZ=5;var i8=100,hZ=101,xZ=102,gZ=103,pZ=104,mZ=200,lZ=201,dZ=202,uZ=203,cZ=204,nZ=205,sZ=206,iZ=207,oZ=208,aZ=209,rZ=210,tZ=211,eZ=212,JK=213,QK=214,$K=0,ZK=1,KK=2,IQ=3,WK=4,XK=5,YK=6,UK=7,HK=0,qK=1,GK=2,E9=0,AQ=1,CQ=2,PQ=3,M7=4,_Q=5,wQ=6,TQ=7;var o8=301,F8=302,E6=303,D6=304,z7=306,R6=1000,k6=1001,NK=1002,e9=1003,FK=1004;var I7=1005;var BJ=1006,L6=1007;var O8=1008;var D9=1009,OK=1010,EK=1011,A7=1012,SQ=1013,J8=1014,h9=1015,x9=1016,jQ=1017,fQ=1018,a8=1020,DK=35902,RK=35899,kK=1021,LK=1022,C9=1023,E8=1026,D8=1027,VK=1028,vQ=1029,R8=1030,yQ=1031;var bQ=1033,V6=33776,B6=33777,M6=33778,z6=33779,hQ=35840,xQ=35841,gQ=35842,pQ=35843,mQ=36196,lQ=37492,dQ=37496,uQ=37488,cQ=37489,I6=37490,nQ=37491,sQ=37808,iQ=37809,oQ=37810,aQ=37811,rQ=37812,tQ=37813,eQ=37814,J$=37815,Q$=37816,$$=37817,Z$=37818,K$=37819,W$=37820,X$=37821,Y$=36492,U$=36494,H$=36495,q$=36283,G$=36284,A6=36285,N$=36286;var F$=0,BK=1,k8="",R9="srgb",O$="srgb-linear",E$="linear",GJ="srgb";var MK=512,zK=513,IK=514,C6=515,AK=516,CK=517,P6=518,PK=519;var D$="300 es",R$=2000;function SW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function jW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function u8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function _K(){let J=u8("canvas");return J.style.display="block",J}var YZ={},c8=null;function k$(...J){let Q="THREE."+J.shift();if(c8)c8("log",Q,...J);else console.log(Q,...J)}function wK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function v0(...J){J=wK(J);let Q="THREE."+J.shift();if(c8)c8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=wK(J);let Q="THREE."+J.shift();if(c8)c8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function N8(...J){let Q=J.join(" ");if(Q in YZ)return;YZ[Q]=!0,v0(...J)}function TK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var SK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class g9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var xJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var o6=Math.PI/180,F6=180/Math.PI;function C7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(xJ[J&255]+xJ[J>>8&255]+xJ[J>>16&255]+xJ[J>>24&255]+"-"+xJ[Q&255]+xJ[Q>>8&255]+"-"+xJ[Q>>16&15|64]+xJ[Q>>24&255]+"-"+xJ[$&63|128]+xJ[$>>8&255]+"-"+xJ[$>>16&255]+xJ[$>>24&255]+xJ[Z&255]+xJ[Z>>8&255]+xJ[Z>>16&255]+xJ[Z>>24&255]).toLowerCase()}function r0(J,Q,$){return Math.max(Q,Math.min($,J))}function fW(J,Q){return(J%Q+Q)%Q}function a6(J,Q,$){return(1-$)*J+$*Q}function F7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function iJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class d0{static{d0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=r0(this.x,J.x,Q.x),this.y=r0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=r0(this.x,J,Q),this.y=r0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(r0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(r0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class p9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],G=$[Z+3],N=K[W+0],q=K[W+1],E=K[W+2],L=K[W+3];if(G!==L||Y!==N||U!==q||H!==E){let I=Y*N+U*q+H*E+G*L;if(I<0)N=-N,q=-q,E=-E,L=-L,I=-I;let O=1-X;if(I<0.9995){let F=Math.acos(I),w=Math.sin(F);O=Math.sin(O*F)/w,X=Math.sin(X*F)/w,Y=Y*O+N*X,U=U*O+q*X,H=H*O+E*X,G=G*O+L*X}else{Y=Y*O+N*X,U=U*O+q*X,H=H*O+E*X,G=G*O+L*X;let F=1/Math.sqrt(Y*Y+U*U+H*H+G*G);Y*=F,U*=F,H*=F,G*=F}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],G=K[W],N=K[W+1],q=K[W+2],E=K[W+3];return J[Q]=X*E+H*G+Y*q-U*N,J[Q+1]=Y*E+H*N+U*G-X*q,J[Q+2]=U*E+H*q+X*N-Y*G,J[Q+3]=H*E-X*G-Y*N-U*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),G=X(K/2),N=Y($/2),q=Y(Z/2),E=Y(K/2);switch(W){case"XYZ":this._x=N*H*G+U*q*E,this._y=U*q*G-N*H*E,this._z=U*H*E+N*q*G,this._w=U*H*G-N*q*E;break;case"YXZ":this._x=N*H*G+U*q*E,this._y=U*q*G-N*H*E,this._z=U*H*E-N*q*G,this._w=U*H*G+N*q*E;break;case"ZXY":this._x=N*H*G-U*q*E,this._y=U*q*G+N*H*E,this._z=U*H*E+N*q*G,this._w=U*H*G-N*q*E;break;case"ZYX":this._x=N*H*G-U*q*E,this._y=U*q*G+N*H*E,this._z=U*H*E-N*q*G,this._w=U*H*G+N*q*E;break;case"YZX":this._x=N*H*G+U*q*E,this._y=U*q*G+N*H*E,this._z=U*H*E-N*q*G,this._w=U*H*G-N*q*E;break;case"XZY":this._x=N*H*G-U*q*E,this._y=U*q*G-N*H*E,this._z=U*H*E+N*q*G,this._w=U*H*G+N*q*E;break;default:v0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],G=Q[10],N=$+X+G;if(N>0){let q=0.5/Math.sqrt(N+1);this._w=0.25/q,this._x=(H-Y)*q,this._y=(K-U)*q,this._z=(W-Z)*q}else if($>X&&$>G){let q=2*Math.sqrt(1+$-X-G);this._w=(H-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+U)/q}else if(X>G){let q=2*Math.sqrt(1+X-$-G);this._w=(K-U)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+H)/q}else{let q=2*Math.sqrt(1+G-$-X);this._w=(W-Z)/q,this._x=(K+U)/q,this._y=(Y+H)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(r0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(UZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(UZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+Y*U+W*G-X*H,this.y=$+Y*H+X*U-K*G,this.z=Z+Y*G+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=r0(this.x,J.x,Q.x),this.y=r0(this.y,J.y,Q.y),this.z=r0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=r0(this.x,J,Q),this.y=r0(this.y,J,Q),this.z=r0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(r0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return r6.copy(this).projectOnVector(J),this.sub(r6)}reflect(J){return this.sub(r6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(r0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var r6=new v,UZ=new p9;class h0{static{h0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],G=$[7],N=$[2],q=$[5],E=$[8],L=Z[0],I=Z[3],O=Z[6],F=Z[1],w=Z[4],P=Z[7],M=Z[2],A=Z[5],C=Z[8];return K[0]=W*L+X*F+Y*M,K[3]=W*I+X*w+Y*A,K[6]=W*O+X*P+Y*C,K[1]=U*L+H*F+G*M,K[4]=U*I+H*w+G*A,K[7]=U*O+H*P+G*C,K[2]=N*L+q*F+E*M,K[5]=N*I+q*w+E*A,K[8]=N*O+q*P+E*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],G=H*W-X*U,N=X*Y-H*K,q=U*K-W*Y,E=Q*G+$*N+Z*q;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/E;return J[0]=G*L,J[1]=(Z*U-H*$)*L,J[2]=(X*$-Z*W)*L,J[3]=N*L,J[4]=(H*Q-Z*Y)*L,J[5]=(Z*K-X*Q)*L,J[6]=q*L,J[7]=($*Y-U*Q)*L,J[8]=(W*Q-$*K)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return N8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(t6.makeScale(J,Q)),this}rotate(J){return N8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(t6.makeRotation(-J)),this}translate(J,Q){return N8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(t6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var t6=new h0,HZ=new h0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),qZ=new h0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function vW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=b9(K.r),K.g=b9(K.g),K.b=b9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=d8(K.r),K.g=d8(K.g),K.b=d8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return N8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return N8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:HZ,fromXYZ:qZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:HZ,fromXYZ:qZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=vW();function b9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function d8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var w8;class L${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(w8===void 0)w8=u8("canvas");w8.width=J.width,w8.height=J.height;let Z=w8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=w8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=u8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=b9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(b9(Q[$]/255)*255);else Q[$]=b9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return v0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var yW=0;class P7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yW++}),this.uuid=C7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(e6(Z[W].image));else K.push(e6(Z[W]))}else K=e6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function e6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return L$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return v0("Texture: Unable to serialize Texture."),{}}var bW=0,JQ=new v;class TJ extends g9{constructor(J=TJ.DEFAULT_IMAGE,Q=TJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=TJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:bW++}),this.uuid=C7(),this.name="",this.source=new P7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new d0(0,0),this.repeat=new d0(1,1),this.center=new d0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new h0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(JQ).x}get height(){return this.source.getSize(JQ).y}get depth(){return this.source.getSize(JQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){v0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){v0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}TJ.DEFAULT_IMAGE=null;TJ.DEFAULT_MAPPING=300;TJ.DEFAULT_ANISOTROPY=1;class DJ{static{DJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],G=Y[8],N=Y[1],q=Y[5],E=Y[9],L=Y[2],I=Y[6],O=Y[10];if(Math.abs(H-N)<0.01&&Math.abs(G-L)<0.01&&Math.abs(E-I)<0.01){if(Math.abs(H+N)<0.1&&Math.abs(G+L)<0.1&&Math.abs(E+I)<0.1&&Math.abs(U+q+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let w=(U+1)/2,P=(q+1)/2,M=(O+1)/2,A=(H+N)/4,C=(G+L)/4,_=(E+I)/4;if(w>P&&w>M)if(w<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(w),Z=A/$,K=C/$;else if(P>M)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=A/Z,K=_/Z;else if(M<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(M),$=C/K,Z=_/K;return this.set($,Z,K,Q),this}let F=Math.sqrt((I-E)*(I-E)+(G-L)*(G-L)+(N-H)*(N-H));if(Math.abs(F)<0.001)F=1;return this.x=(I-E)/F,this.y=(G-L)/F,this.z=(N-H)/F,this.w=Math.acos((U+q+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=r0(this.x,J.x,Q.x),this.y=r0(this.y,J.y,Q.y),this.z=r0(this.z,J.z,Q.z),this.w=r0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=r0(this.x,J,Q),this.y=r0(this.y,J,Q),this.z=r0(this.z,J,Q),this.w=r0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(r0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V$ extends g9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new DJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new DJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new TJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new P7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z9 extends V${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class _6 extends TJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class B$ extends TJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HJ{static{HJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,G,N,q,E,L,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,G,N,q,E,L,I)}set(J,Q,$,Z,K,W,X,Y,U,H,G,N,q,E,L,I){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=K,O[5]=W,O[9]=X,O[13]=Y,O[2]=U,O[6]=H,O[10]=G,O[14]=N,O[3]=q,O[7]=E,O[11]=L,O[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new HJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/T8.setFromMatrixColumn(J,0).length(),K=1/T8.setFromMatrixColumn(J,1).length(),W=1/T8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let N=W*H,q=W*G,E=X*H,L=X*G;Q[0]=Y*H,Q[4]=-Y*G,Q[8]=U,Q[1]=q+E*U,Q[5]=N-L*U,Q[9]=-X*Y,Q[2]=L-N*U,Q[6]=E+q*U,Q[10]=W*Y}else if(J.order==="YXZ"){let N=Y*H,q=Y*G,E=U*H,L=U*G;Q[0]=N+L*X,Q[4]=E*X-q,Q[8]=W*U,Q[1]=W*G,Q[5]=W*H,Q[9]=-X,Q[2]=q*X-E,Q[6]=L+N*X,Q[10]=W*Y}else if(J.order==="ZXY"){let N=Y*H,q=Y*G,E=U*H,L=U*G;Q[0]=N-L*X,Q[4]=-W*G,Q[8]=E+q*X,Q[1]=q+E*X,Q[5]=W*H,Q[9]=L-N*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let N=W*H,q=W*G,E=X*H,L=X*G;Q[0]=Y*H,Q[4]=E*U-q,Q[8]=N*U+L,Q[1]=Y*G,Q[5]=L*U+N,Q[9]=q*U-E,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let N=W*Y,q=W*U,E=X*Y,L=X*U;Q[0]=Y*H,Q[4]=L-N*G,Q[8]=E*G+q,Q[1]=G,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=q*G+E,Q[10]=N-L*G}else if(J.order==="XZY"){let N=W*Y,q=W*U,E=X*Y,L=X*U;Q[0]=Y*H,Q[4]=-G,Q[8]=U*H,Q[1]=N*G+L,Q[5]=W*H,Q[9]=q*G-E,Q[2]=E*G-q,Q[6]=X*H,Q[10]=L*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(hW,J,xW)}lookAt(J,Q,$){let Z=this.elements;if(rJ.subVectors(J,Q),rJ.lengthSq()===0)rJ.z=1;if(rJ.normalize(),s9.crossVectors($,rJ),s9.lengthSq()===0){if(Math.abs($.z)===1)rJ.x+=0.0001;else rJ.z+=0.0001;rJ.normalize(),s9.crossVectors($,rJ)}return s9.normalize(),c7.crossVectors(rJ,s9),Z[0]=s9.x,Z[4]=c7.x,Z[8]=rJ.x,Z[1]=s9.y,Z[5]=c7.y,Z[9]=rJ.y,Z[2]=s9.z,Z[6]=c7.z,Z[10]=rJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],G=$[5],N=$[9],q=$[13],E=$[2],L=$[6],I=$[10],O=$[14],F=$[3],w=$[7],P=$[11],M=$[15],A=Z[0],C=Z[4],_=Z[8],R=Z[12],z=Z[1],d=Z[5],V=Z[9],g=Z[13],r=Z[2],p=Z[6],u=Z[10],i=Z[14],h=Z[3],J0=Z[7],Q0=Z[11],H0=Z[15];return K[0]=W*A+X*z+Y*r+U*h,K[4]=W*C+X*d+Y*p+U*J0,K[8]=W*_+X*V+Y*u+U*Q0,K[12]=W*R+X*g+Y*i+U*H0,K[1]=H*A+G*z+N*r+q*h,K[5]=H*C+G*d+N*p+q*J0,K[9]=H*_+G*V+N*u+q*Q0,K[13]=H*R+G*g+N*i+q*H0,K[2]=E*A+L*z+I*r+O*h,K[6]=E*C+L*d+I*p+O*J0,K[10]=E*_+L*V+I*u+O*Q0,K[14]=E*R+L*g+I*i+O*H0,K[3]=F*A+w*z+P*r+M*h,K[7]=F*C+w*d+P*p+M*J0,K[11]=F*_+w*V+P*u+M*Q0,K[15]=F*R+w*g+P*i+M*H0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],G=J[6],N=J[10],q=J[14],E=J[3],L=J[7],I=J[11],O=J[15],F=Y*q-U*N,w=X*q-U*G,P=X*N-Y*G,M=W*q-U*H,A=W*N-Y*H,C=W*G-X*H;return Q*(L*F-I*w+O*P)-$*(E*F-I*M+O*A)+Z*(E*w-L*M+O*C)-K*(E*P-L*A+I*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],G=J[9],N=J[10],q=J[11],E=J[12],L=J[13],I=J[14],O=J[15],F=Q*X-$*W,w=Q*Y-Z*W,P=Q*U-K*W,M=$*Y-Z*X,A=$*U-K*X,C=Z*U-K*Y,_=H*L-G*E,R=H*I-N*E,z=H*O-q*E,d=G*I-N*L,V=G*O-q*L,g=N*O-q*I,r=F*g-w*V+P*d+M*z-A*R+C*_;if(r===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let p=1/r;return J[0]=(X*g-Y*V+U*d)*p,J[1]=(Z*V-$*g-K*d)*p,J[2]=(L*C-I*A+O*M)*p,J[3]=(N*A-G*C-q*M)*p,J[4]=(Y*z-W*g-U*R)*p,J[5]=(Q*g-Z*z+K*R)*p,J[6]=(I*P-E*C-O*w)*p,J[7]=(H*C-N*P+q*w)*p,J[8]=(W*V-X*z+U*_)*p,J[9]=($*z-Q*V-K*_)*p,J[10]=(E*A-L*P+O*F)*p,J[11]=(G*P-H*A-q*F)*p,J[12]=(X*R-W*d-Y*_)*p,J[13]=(Q*d-$*R+Z*_)*p,J[14]=(L*w-E*M-I*F)*p,J[15]=(H*M-G*w+N*F)*p,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,G=X+X,N=K*U,q=K*H,E=K*G,L=W*H,I=W*G,O=X*G,F=Y*U,w=Y*H,P=Y*G,M=$.x,A=$.y,C=$.z;return Z[0]=(1-(L+O))*M,Z[1]=(q+P)*M,Z[2]=(E-w)*M,Z[3]=0,Z[4]=(q-P)*A,Z[5]=(1-(N+O))*A,Z[6]=(I+F)*A,Z[7]=0,Z[8]=(E+w)*C,Z[9]=(I-F)*C,Z[10]=(1-(N+L))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=T8.set(Z[0],Z[1],Z[2]).length(),X=T8.set(Z[4],Z[5],Z[6]).length(),Y=T8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;N9.copy(this);let U=1/W,H=1/X,G=1/Y;return N9.elements[0]*=U,N9.elements[1]*=U,N9.elements[2]*=U,N9.elements[4]*=H,N9.elements[5]*=H,N9.elements[6]*=H,N9.elements[8]*=G,N9.elements[9]*=G,N9.elements[10]*=G,Q.setFromRotationMatrix(N9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),G=2*K/($-Z),N=(Q+J)/(Q-J),q=($+Z)/($-Z),E,L;if(Y)E=K/(W-K),L=W*K/(W-K);else if(X===2000)E=-(W+K)/(W-K),L=-2*W*K/(W-K);else if(X===2001)E=-W/(W-K),L=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=N,U[12]=0,U[1]=0,U[5]=G,U[9]=q,U[13]=0,U[2]=0,U[6]=0,U[10]=E,U[14]=L,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),G=2/($-Z),N=-(Q+J)/(Q-J),q=-($+Z)/($-Z),E,L;if(Y)E=1/(W-K),L=W/(W-K);else if(X===2000)E=-2/(W-K),L=-(W+K)/(W-K);else if(X===2001)E=-1/(W-K),L=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=N,U[1]=0,U[5]=G,U[9]=0,U[13]=q,U[2]=0,U[6]=0,U[10]=E,U[14]=L,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var T8=new v,N9=new HJ,hW=new v(0,0,0),xW=new v(1,1,1),s9=new v,c7=new v,rJ=new v,GZ=new HJ,NZ=new p9;class z9{constructor(J=0,Q=0,$=0,Z=z9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],G=Z[2],N=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(r0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(N,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-r0(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(r0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-r0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(r0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-r0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(N,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,q),this._y=0;break;default:v0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return GZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(GZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return NZ.setFromEuler(this),this.setFromQuaternion(NZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}z9.DEFAULT_ORDER="XYZ";class _7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var gW=0,FZ=new v,S8=new p9,T9=new HJ,n7=new v,O7=new v,pW=new v,mW=new p9,OZ=new v(1,0,0),EZ=new v(0,1,0),DZ=new v(0,0,1),RZ={type:"added"},lW={type:"removed"},j8={type:"childadded",child:null},QQ={type:"childremoved",child:null};class VJ extends g9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:gW++}),this.uuid=C7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=VJ.DEFAULT_UP.clone();let J=new v,Q=new z9,$=new p9,Z=new v(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new HJ},normalMatrix:{value:new h0}}),this.matrix=new HJ,this.matrixWorld=new HJ,this.matrixAutoUpdate=VJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=VJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return S8.setFromAxisAngle(J,Q),this.quaternion.multiply(S8),this}rotateOnWorldAxis(J,Q){return S8.setFromAxisAngle(J,Q),this.quaternion.premultiply(S8),this}rotateX(J){return this.rotateOnAxis(OZ,J)}rotateY(J){return this.rotateOnAxis(EZ,J)}rotateZ(J){return this.rotateOnAxis(DZ,J)}translateOnAxis(J,Q){return FZ.copy(J).applyQuaternion(this.quaternion),this.position.add(FZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(OZ,J)}translateY(J){return this.translateOnAxis(EZ,J)}translateZ(J){return this.translateOnAxis(DZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(T9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)n7.copy(J);else n7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),O7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)T9.lookAt(O7,n7,this.up);else T9.lookAt(n7,O7,this.up);if(this.quaternion.setFromRotationMatrix(T9),Z)T9.extractRotation(Z.matrixWorld),S8.setFromRotationMatrix(T9),this.quaternion.premultiply(S8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(RZ),j8.child=J,this.dispatchEvent(j8),j8.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(lW),QQ.child=J,this.dispatchEvent(QQ),QQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),T9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),T9.multiply(J.parent.matrixWorld);return J.applyMatrix4(T9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(RZ),j8.child=J,this.dispatchEvent(j8),j8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(O7,J,pW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(O7,mW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let G=Y[U];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),G=W(J.shapes),N=W(J.skeletons),q=W(J.animations),E=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(q.length>0)$.animations=q;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}VJ.DEFAULT_UP=new v(0,1,0);VJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;VJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mJ extends VJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var dW={type:"move"};class w7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new mJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new mJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new mJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let L of J.hand.values()){let I=Q.getJointPose(L,$),O=this._getHandJoint(U,L);if(I!==null)O.matrix.fromArray(I.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=I.radius;O.visible=I!==null}let H=U.joints["index-finger-tip"],G=U.joints["thumb-tip"],N=H.position.distanceTo(G.position),q=0.02,E=0.005;if(U.inputState.pinching&&N>q+E)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&N<=q-E)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(dW)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new mJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var jK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},i9={h:0,s:0,l:0},s7={h:0,s:0,l:0};function $Q(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class u0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=i0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,i0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=i0.workingColorSpace){if(J=fW(J,1),Q=r0(Q,0,1),$=r0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=$Q(W,K,J+0.3333333333333333),this.g=$Q(W,K,J),this.b=$Q(W,K,J-0.3333333333333333)}return i0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)v0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:v0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else v0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=jK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else v0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=b9(J.r),this.g=b9(J.g),this.b=b9(J.b),this}copyLinearToSRGB(J){return this.r=d8(J.r),this.g=d8(J.g),this.b=d8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.workingToColorSpace(gJ.copy(this),J),Math.round(r0(gJ.r*255,0,255))*65536+Math.round(r0(gJ.g*255,0,255))*256+Math.round(r0(gJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=i0.workingColorSpace){i0.workingToColorSpace(gJ.copy(this),Q);let{r:$,g:Z,b:K}=gJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let G=W-X;switch(U=H<=0.5?G/(W+X):G/(2-W-X),W){case $:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-$)/G+2;break;case K:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=i0.workingColorSpace){return i0.workingToColorSpace(gJ.copy(this),Q),J.r=gJ.r,J.g=gJ.g,J.b=gJ.b,J}getStyle(J="srgb"){i0.workingToColorSpace(gJ.copy(this),J);let{r:Q,g:$,b:Z}=gJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(i9),this.setHSL(i9.h+J,i9.s+Q,i9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(i9),J.getHSL(s7);let $=a6(i9.h,s7.h,Q),Z=a6(i9.s,s7.s,Q),K=a6(i9.l,s7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var gJ=new u0;u0.NAMES=jK;class r8 extends VJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new z9,this.environmentIntensity=1,this.environmentRotation=new z9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var F9=new v,S9=new v,ZQ=new v,j9=new v,f8=new v,v8=new v,kZ=new v,KQ=new v,WQ=new v,XQ=new v,YQ=new DJ,UQ=new DJ,HQ=new DJ;class $9{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),F9.subVectors(J,Q),Z.cross(F9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){F9.subVectors(Z,Q),S9.subVectors($,Q),ZQ.subVectors(J,Q);let W=F9.dot(F9),X=F9.dot(S9),Y=F9.dot(ZQ),U=S9.dot(S9),H=S9.dot(ZQ),G=W*U-X*X;if(G===0)return K.set(0,0,0),null;let N=1/G,q=(U*Y-X*H)*N,E=(W*H-X*Y)*N;return K.set(1-q-E,E,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,j9)===null)return!1;return j9.x>=0&&j9.y>=0&&j9.x+j9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,j9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,j9.x),Y.addScaledVector(W,j9.y),Y.addScaledVector(X,j9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return YQ.setScalar(0),UQ.setScalar(0),HQ.setScalar(0),YQ.fromBufferAttribute(J,Q),UQ.fromBufferAttribute(J,$),HQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(YQ,K.x),W.addScaledVector(UQ,K.y),W.addScaledVector(HQ,K.z),W}static isFrontFacing(J,Q,$,Z){return F9.subVectors($,Q),S9.subVectors(J,Q),F9.cross(S9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return F9.subVectors(this.c,this.b),S9.subVectors(this.a,this.b),F9.cross(S9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return $9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return $9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return $9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return $9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return $9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;f8.subVectors(Z,$),v8.subVectors(K,$),KQ.subVectors(J,$);let Y=f8.dot(KQ),U=v8.dot(KQ);if(Y<=0&&U<=0)return Q.copy($);WQ.subVectors(J,Z);let H=f8.dot(WQ),G=v8.dot(WQ);if(H>=0&&G<=H)return Q.copy(Z);let N=Y*G-H*U;if(N<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(f8,W);XQ.subVectors(J,K);let q=f8.dot(XQ),E=v8.dot(XQ);if(E>=0&&q<=E)return Q.copy(K);let L=q*U-Y*E;if(L<=0&&U>=0&&E<=0)return X=U/(U-E),Q.copy($).addScaledVector(v8,X);let I=H*E-q*G;if(I<=0&&G-H>=0&&q-E>=0)return kZ.subVectors(K,Z),X=(G-H)/(G-H+(q-E)),Q.copy(Z).addScaledVector(kZ,X);let O=1/(I+L+N);return W=L*O,X=N*O,Q.copy($).addScaledVector(f8,W).addScaledVector(v8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class m9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(O9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(O9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=O9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,O9);else O9.fromBufferAttribute(K,W);O9.applyMatrix4(J.matrixWorld),this.expandByPoint(O9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();i7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();i7.copy($.boundingBox)}i7.applyMatrix4(J.matrixWorld),this.union(i7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,O9),O9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(E7),o7.subVectors(this.max,E7),y8.subVectors(J.a,E7),b8.subVectors(J.b,E7),h8.subVectors(J.c,E7),o9.subVectors(b8,y8),a9.subVectors(h8,b8),U8.subVectors(y8,h8);let Q=[0,-o9.z,o9.y,0,-a9.z,a9.y,0,-U8.z,U8.y,o9.z,0,-o9.x,a9.z,0,-a9.x,U8.z,0,-U8.x,-o9.y,o9.x,0,-a9.y,a9.x,0,-U8.y,U8.x,0];if(!qQ(Q,y8,b8,h8,o7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!qQ(Q,y8,b8,h8,o7))return!1;return a7.crossVectors(o9,a9),Q=[a7.x,a7.y,a7.z],qQ(Q,y8,b8,h8,o7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,O9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(O9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return f9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),f9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),f9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),f9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),f9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),f9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),f9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),f9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(f9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var f9=[new v,new v,new v,new v,new v,new v,new v,new v],O9=new v,i7=new m9,y8=new v,b8=new v,h8=new v,o9=new v,a9=new v,U8=new v,E7=new v,o7=new v,a7=new v,H8=new v;function qQ(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){H8.fromArray(J,W);let Y=K.x*Math.abs(H8.x)+K.y*Math.abs(H8.y)+K.z*Math.abs(H8.z),U=Q.dot(H8),H=$.dot(H8),G=Z.dot(H8);if(Math.max(-Math.max(U,H,G),Math.min(U,H,G))>Y)return!1}return!0}var AJ=new v,r7=new d0,uW=0;class eJ extends g9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)r7.fromBufferAttribute(this,Q),r7.applyMatrix3(J),this.setXY(Q,r7.x,r7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)AJ.fromBufferAttribute(this,Q),AJ.applyMatrix3(J),this.setXYZ(Q,AJ.x,AJ.y,AJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)AJ.fromBufferAttribute(this,Q),AJ.applyMatrix4(J),this.setXYZ(Q,AJ.x,AJ.y,AJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)AJ.fromBufferAttribute(this,Q),AJ.applyNormalMatrix(J),this.setXYZ(Q,AJ.x,AJ.y,AJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)AJ.fromBufferAttribute(this,Q),AJ.transformDirection(J),this.setXYZ(Q,AJ.x,AJ.y,AJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=F7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=iJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=F7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=F7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=F7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=F7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=iJ(Q,this.array),$=iJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=iJ(Q,this.array),$=iJ($,this.array),Z=iJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=iJ(Q,this.array),$=iJ($,this.array),Z=iJ(Z,this.array),K=iJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class w6 extends eJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class T6 extends eJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class oJ extends eJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var cW=new m9,D7=new v,GQ=new v;class L8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else cW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;D7.subVectors(J,this.center);let Q=D7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(D7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else GQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(D7.copy(J.center).add(GQ)),this.expandByPoint(D7.copy(J.center).sub(GQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var nW=0,Q9=new HJ,NQ=new VJ,x8=new v,tJ=new m9,R7=new m9,wJ=new v;class k9 extends g9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nW++}),this.uuid=C7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((SW(J))?T6:w6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new h0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return Q9.makeRotationFromQuaternion(J),this.applyMatrix4(Q9),this}rotateX(J){return Q9.makeRotationX(J),this.applyMatrix4(Q9),this}rotateY(J){return Q9.makeRotationY(J),this.applyMatrix4(Q9),this}rotateZ(J){return Q9.makeRotationZ(J),this.applyMatrix4(Q9),this}translate(J,Q,$){return Q9.makeTranslation(J,Q,$),this.applyMatrix4(Q9),this}scale(J,Q,$){return Q9.makeScale(J,Q,$),this.applyMatrix4(Q9),this}lookAt(J){return NQ.lookAt(J),NQ.updateMatrix(),this.applyMatrix4(NQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(x8).negate(),this.translate(x8.x,x8.y,x8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new oJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)v0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new m9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(tJ.setFromBufferAttribute(K),this.morphTargetsRelative)wJ.addVectors(this.boundingBox.min,tJ.min),this.boundingBox.expandByPoint(wJ),wJ.addVectors(this.boundingBox.max,tJ.max),this.boundingBox.expandByPoint(wJ);else this.boundingBox.expandByPoint(tJ.min),this.boundingBox.expandByPoint(tJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new L8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(tJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(R7.setFromBufferAttribute(X),this.morphTargetsRelative)wJ.addVectors(tJ.min,R7.min),tJ.expandByPoint(wJ),wJ.addVectors(tJ.max,R7.max),tJ.expandByPoint(wJ);else tJ.expandByPoint(R7.min),tJ.expandByPoint(R7.max)}tJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)wJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(wJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(wJ.fromBufferAttribute(X,U),Y)x8.fromBufferAttribute(J,U),wJ.add(x8);Z=Math.max(Z,$.distanceToSquared(wJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new eJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<$.count;_++)X[_]=new v,Y[_]=new v;let U=new v,H=new v,G=new v,N=new d0,q=new d0,E=new d0,L=new v,I=new v;function O(_,R,z){U.fromBufferAttribute($,_),H.fromBufferAttribute($,R),G.fromBufferAttribute($,z),N.fromBufferAttribute(K,_),q.fromBufferAttribute(K,R),E.fromBufferAttribute(K,z),H.sub(U),G.sub(U),q.sub(N),E.sub(N);let d=1/(q.x*E.y-E.x*q.y);if(!isFinite(d))return;L.copy(H).multiplyScalar(E.y).addScaledVector(G,-q.y).multiplyScalar(d),I.copy(G).multiplyScalar(q.x).addScaledVector(H,-E.x).multiplyScalar(d),X[_].add(L),X[R].add(L),X[z].add(L),Y[_].add(I),Y[R].add(I),Y[z].add(I)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let _=0,R=F.length;_<R;++_){let z=F[_],d=z.start,V=z.count;for(let g=d,r=d+V;g<r;g+=3)O(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let w=new v,P=new v,M=new v,A=new v;function C(_){M.fromBufferAttribute(Z,_),A.copy(M);let R=X[_];w.copy(R),w.sub(M.multiplyScalar(M.dot(R))).normalize(),P.crossVectors(A,R);let d=P.dot(Y[_])<0?-1:1;W.setXYZW(_,w.x,w.y,w.z,d)}for(let _=0,R=F.length;_<R;++_){let z=F[_],d=z.start,V=z.count;for(let g=d,r=d+V;g<r;g+=3)C(J.getX(g+0)),C(J.getX(g+1)),C(J.getX(g+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new eJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,q=$.count;N<q;N++)$.setXYZ(N,0,0,0);let Z=new v,K=new v,W=new v,X=new v,Y=new v,U=new v,H=new v,G=new v;if(J)for(let N=0,q=J.count;N<q;N+=3){let E=J.getX(N+0),L=J.getX(N+1),I=J.getX(N+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,L),W.fromBufferAttribute(Q,I),H.subVectors(W,K),G.subVectors(Z,K),H.cross(G),X.fromBufferAttribute($,E),Y.fromBufferAttribute($,L),U.fromBufferAttribute($,I),X.add(H),Y.add(H),U.add(H),$.setXYZ(E,X.x,X.y,X.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(I,U.x,U.y,U.z)}else for(let N=0,q=Q.count;N<q;N+=3)Z.fromBufferAttribute(Q,N+0),K.fromBufferAttribute(Q,N+1),W.fromBufferAttribute(Q,N+2),H.subVectors(W,K),G.subVectors(Z,K),H.cross(G),$.setXYZ(N+0,H.x,H.y,H.z),$.setXYZ(N+1,H.x,H.y,H.z),$.setXYZ(N+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)wJ.fromBufferAttribute(J,Q),wJ.normalize(),J.setXYZ(Q,wJ.x,wJ.y,wJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:G}=X,N=new U.constructor(Y.length*H),q=0,E=0;for(let L=0,I=Y.length;L<I;L++){if(X.isInterleavedBufferAttribute)q=Y[L]*X.data.stride+X.offset;else q=Y[L]*H;for(let O=0;O<H;O++)N[E++]=U[q++]}return new eJ(N,H,G)}if(this.index===null)return v0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new k9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,G=U.length;H<G;H++){let N=U[H],q=J(N,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let G=0,N=U.length;G<N;G++){let q=U[G];H.push(q.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],G=K[U];for(let N=0,q=G.length;N<q;N++)H.push(G[N].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let G=W[U];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var sW=0;class Q8 extends g9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:sW++}),this.uuid=C7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new u0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){v0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){v0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new u0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new d0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new d0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var v9=new v,FQ=new v,t7=new v,r9=new v,OQ=new v,e7=new v,EQ=new v;class S6{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,v9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=v9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return v9.copy(this.origin).addScaledVector(this.direction,Q),v9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){FQ.copy(J).add(Q).multiplyScalar(0.5),t7.copy(Q).sub(J).normalize(),r9.copy(this.origin).sub(FQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(t7),X=r9.dot(this.direction),Y=-r9.dot(t7),U=r9.lengthSq(),H=Math.abs(1-W*W),G,N,q,E;if(H>0)if(G=W*Y-X,N=W*X-Y,E=K*H,G>=0)if(N>=-E)if(N<=E){let L=1/H;G*=L,N*=L,q=G*(G+W*N+2*X)+N*(W*G+N+2*Y)+U}else N=K,G=Math.max(0,-(W*N+X)),q=-G*G+N*(N+2*Y)+U;else N=-K,G=Math.max(0,-(W*N+X)),q=-G*G+N*(N+2*Y)+U;else if(N<=-E)G=Math.max(0,-(-W*K+X)),N=G>0?-K:Math.min(Math.max(-K,-Y),K),q=-G*G+N*(N+2*Y)+U;else if(N<=E)G=0,N=Math.min(Math.max(-K,-Y),K),q=N*(N+2*Y)+U;else G=Math.max(0,-(W*K+X)),N=G>0?K:Math.min(Math.max(-K,-Y),K),q=-G*G+N*(N+2*Y)+U;else N=W>0?-K:K,G=Math.max(0,-(W*N+X)),q=-G*G+N*(N+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(FQ).addScaledVector(t7,N);return q}intersectSphere(J,Q){v9.subVectors(J.center,this.origin);let $=v9.dot(this.direction),Z=v9.dot(v9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(U>=0)$=(J.min.x-N.x)*U,Z=(J.max.x-N.x)*U;else $=(J.max.x-N.x)*U,Z=(J.min.x-N.x)*U;if(H>=0)K=(J.min.y-N.y)*H,W=(J.max.y-N.y)*H;else K=(J.max.y-N.y)*H,W=(J.min.y-N.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)X=(J.min.z-N.z)*G,Y=(J.max.z-N.z)*G;else X=(J.max.z-N.z)*G,Y=(J.min.z-N.z)*G;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,v9)!==null}intersectTriangle(J,Q,$,Z,K){OQ.subVectors(Q,J),e7.subVectors($,J),EQ.crossVectors(OQ,e7);let W=this.direction.dot(EQ),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;r9.subVectors(this.origin,J);let Y=X*this.direction.dot(e7.crossVectors(r9,e7));if(Y<0)return null;let U=X*this.direction.dot(OQ.cross(r9));if(U<0)return null;if(Y+U>W)return null;let H=-X*r9.dot(EQ);if(H<0)return null;return this.at(H/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dJ extends Q8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new u0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new z9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var LZ=new HJ,q8=new S6,J6=new L8,VZ=new v,Q6=new v,$6=new v,Z6=new v,DQ=new v,K6=new v,BZ=new v,W6=new v;class S0 extends VJ{constructor(J=new k9,Q=new dJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){K6.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],G=K[Y];if(H===0)continue;if(DQ.fromBufferAttribute(G,J),W)K6.addScaledVector(DQ,H);else K6.addScaledVector(DQ.sub(Q),H)}Q.add(K6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(J6.copy($.boundingSphere),J6.applyMatrix4(K),q8.copy(J.ray).recast(J.near),J6.containsPoint(q8.origin)===!1){if(q8.intersectSphere(J6,VZ)===null)return;if(q8.origin.distanceToSquared(VZ)>(J.far-J.near)**2)return}if(LZ.copy(K).invert(),q8.copy(J.ray).applyMatrix4(LZ),$.boundingBox!==null){if(q8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,q8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,G=K.attributes.normal,N=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let E=0,L=N.length;E<L;E++){let I=N[E],O=W[I.materialIndex],F=Math.max(I.start,q.start),w=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let P=F,M=w;P<M;P+=3){let A=X.getX(P),C=X.getX(P+1),_=X.getX(P+2);if(Z=X6(this,O,J,$,U,H,G,A,C,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let E=Math.max(0,q.start),L=Math.min(X.count,q.start+q.count);for(let I=E,O=L;I<O;I+=3){let F=X.getX(I),w=X.getX(I+1),P=X.getX(I+2);if(Z=X6(this,W,J,$,U,H,G,F,w,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,L=N.length;E<L;E++){let I=N[E],O=W[I.materialIndex],F=Math.max(I.start,q.start),w=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let P=F,M=w;P<M;P+=3){let A=P,C=P+1,_=P+2;if(Z=X6(this,O,J,$,U,H,G,A,C,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let E=Math.max(0,q.start),L=Math.min(Y.count,q.start+q.count);for(let I=E,O=L;I<O;I+=3){let F=I,w=I+1,P=I+2;if(Z=X6(this,W,J,$,U,H,G,F,w,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function iW(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;W6.copy(Y),W6.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(W6);if(H<$.near||H>$.far)return null;return{distance:H,point:W6.clone(),object:J}}function X6(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,Q6),J.getVertexPosition(U,$6),J.getVertexPosition(H,Z6);let G=iW(J,Q,$,Z,Q6,$6,Z6,BZ);if(G){let N=new v;if($9.getBarycoord(BZ,Q6,$6,Z6,N),K)G.uv=$9.getInterpolatedAttribute(K,Y,U,H,N,new d0);if(W)G.uv1=$9.getInterpolatedAttribute(W,Y,U,H,N,new d0);if(X){if(G.normal=$9.getInterpolatedAttribute(X,Y,U,H,N,new v),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:Y,b:U,c:H,normal:new v,materialIndex:0};$9.getNormal(Q6,$6,Z6,q.normal),G.face=q,G.barycoord=N}return G}class j6 extends TJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,G,N){super(null,W,X,Y,U,H,Z,K,G,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O6 extends eJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var g8=new HJ,MZ=new HJ,Y6=[],zZ=new m9,oW=new HJ,k7=new S0,L7=new L8;class t8 extends S0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new O6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,oW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new m9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,g8),zZ.copy(J.boundingBox).applyMatrix4(g8),this.boundingBox.union(zZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new L8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,g8),L7.copy(J.boundingSphere).applyMatrix4(g8),this.boundingSphere.union(L7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(k7.geometry=this.geometry,k7.material=this.material,k7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(L7.copy(this.boundingSphere),L7.applyMatrix4($),J.ray.intersectsSphere(L7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,g8),MZ.multiplyMatrices($,g8),k7.matrixWorld=MZ,k7.raycast(J,Y6);for(let W=0,X=Y6.length;W<X;W++){let Y=Y6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}Y6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new O6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new j6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let U=0;U<$.length;U++)W+=$[U];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var RQ=new v,aW=new v,rW=new h0;class y9{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=RQ.subVectors($,Q).cross(aW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(RQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||rW.getNormalMatrix(J),Z=this.coplanarPoint(RQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var G8=new L8,tW=new d0(0.5,0.5),U6=new v;class T7{constructor(J=new y9,Q=new y9,$=new y9,Z=new y9,K=new y9,W=new y9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],G=K[5],N=K[6],q=K[7],E=K[8],L=K[9],I=K[10],O=K[11],F=K[12],w=K[13],P=K[14],M=K[15];if(Z[0].setComponents(U-W,q-H,O-E,M-F).normalize(),Z[1].setComponents(U+W,q+H,O+E,M+F).normalize(),Z[2].setComponents(U+X,q+G,O+L,M+w).normalize(),Z[3].setComponents(U-X,q-G,O-L,M-w).normalize(),$)Z[4].setComponents(Y,N,I,P).normalize(),Z[5].setComponents(U-Y,q-N,O-I,M-P).normalize();else if(Z[4].setComponents(U-Y,q-N,O-I,M-P).normalize(),Q===2000)Z[5].setComponents(U+Y,q+N,O+I,M+P).normalize();else if(Q===2001)Z[5].setComponents(Y,N,I,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();G8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();G8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(G8)}intersectsSprite(J){G8.center.set(0,0,0);let Q=tW.distanceTo(J.center);return G8.radius=0.7071067811865476+Q,G8.applyMatrix4(J.matrixWorld),this.intersectsSphere(G8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(U6.x=Z.normal.x>0?J.max.x:J.min.x,U6.y=Z.normal.y>0?J.max.y:J.min.y,U6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(U6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f6 extends TJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class P9 extends TJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class $8 extends TJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,G=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new P7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class M$ extends $8{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},G=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class v6 extends TJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class MJ extends k9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],G=[],N=0,q=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new oJ(U,3)),this.setAttribute("normal",new oJ(H,3)),this.setAttribute("uv",new oJ(G,2));function E(L,I,O,F,w,P,M,A,C,_,R){let z=P/C,d=M/_,V=P/2,g=M/2,r=A/2,p=C+1,u=_+1,i=0,h=0,J0=new v;for(let Q0=0;Q0<u;Q0++){let H0=Q0*d-g;for(let z0=0;z0<p;z0++){let k0=z0*z-V;J0[L]=k0*F,J0[I]=H0*w,J0[O]=r,U.push(J0.x,J0.y,J0.z),J0[L]=0,J0[I]=0,J0[O]=A>0?1:-1,H.push(J0.x,J0.y,J0.z),G.push(z0/C),G.push(1-Q0/_),i+=1}}for(let Q0=0;Q0<_;Q0++)for(let H0=0;H0<C;H0++){let z0=N+H0+p*Q0,k0=N+H0+p*(Q0+1),YJ=N+(H0+1)+p*(Q0+1),JJ=N+(H0+1)+p*Q0;Y.push(z0,k0,JJ),Y.push(k0,YJ,JJ),h+=6}X.addGroup(q,h,R),q+=h,N+=i}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new MJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class L9 extends k9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],G=[],N=[],q=[],E=0,L=[],I=$/2,O=0;if(F(),W===!1){if(J>0)w(!0);if(Q>0)w(!1)}this.setIndex(H),this.setAttribute("position",new oJ(G,3)),this.setAttribute("normal",new oJ(N,3)),this.setAttribute("uv",new oJ(q,2));function F(){let P=new v,M=new v,A=0,C=(Q-J)/$;for(let _=0;_<=K;_++){let R=[],z=_/K,d=z*(Q-J)+J;for(let V=0;V<=Z;V++){let g=V/Z,r=g*Y+X,p=Math.sin(r),u=Math.cos(r);M.x=d*p,M.y=-z*$+I,M.z=d*u,G.push(M.x,M.y,M.z),P.set(p,C,u).normalize(),N.push(P.x,P.y,P.z),q.push(g,1-z),R.push(E++)}L.push(R)}for(let _=0;_<Z;_++)for(let R=0;R<K;R++){let z=L[R][_],d=L[R+1][_],V=L[R+1][_+1],g=L[R][_+1];if(J>0||R!==0)H.push(z,d,g),A+=3;if(Q>0||R!==K-1)H.push(d,V,g),A+=3}U.addGroup(O,A,0),O+=A}function w(P){let M=E,A=new d0,C=new v,_=0,R=P===!0?J:Q,z=P===!0?1:-1;for(let V=1;V<=Z;V++)G.push(0,I*z,0),N.push(0,z,0),q.push(0.5,0.5),E++;let d=E;for(let V=0;V<=Z;V++){let r=V/Z*Y+X,p=Math.cos(r),u=Math.sin(r);C.x=R*u,C.y=I*z,C.z=R*p,G.push(C.x,C.y,C.z),N.push(0,z,0),A.x=p*0.5+0.5,A.y=u*0.5*z+0.5,q.push(A.x,A.y),E++}for(let V=0;V<Z;V++){let g=M+V,r=d+V;if(P===!0)H.push(r,r+1,g);else H.push(r+1,r,g);_+=3}U.addGroup(O,_,P===!0?1:2),O+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class aJ extends k9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,G=J/X,N=Q/Y,q=[],E=[],L=[],I=[];for(let O=0;O<H;O++){let F=O*N-W;for(let w=0;w<U;w++){let P=w*G-K;E.push(P,-F,0),L.push(0,0,1),I.push(w/X),I.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let F=0;F<X;F++){let w=F+U*O,P=F+U*(O+1),M=F+1+U*(O+1),A=F+1+U*O;q.push(w,P,A),q.push(P,M,A)}this.setIndex(q),this.setAttribute("position",new oJ(E,3)),this.setAttribute("normal",new oJ(L,3)),this.setAttribute("uv",new oJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new aJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function V8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(IZ(K))if(K.isRenderTargetTexture)v0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(IZ(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function uJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=V8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function IZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function eW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function z$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return i0.workingColorSpace}var fK={clone:V8,merge:uJ},JX=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QX=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class K9 extends Q8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JX,this.fragmentShader=QX,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=V8(J.uniforms),this.uniformsGroups=eW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new u0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new d0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new v().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new DJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new h0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new HJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class I$ extends K9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fJ extends Q8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new u0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new u0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new d0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new z9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class y6 extends Q8{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new u0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new u0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new d0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new z9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class A$ extends Q8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class C$ extends Q8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function H6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class B8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class P$ extends B8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,q=this._weightNext,E=($-Q)/(Z-Q),L=E*E,I=L*E,O=-N*I+2*N*L-N*E,F=(1+N)*I+(-1.5-2*N)*L+(-0.5+N)*E+1,w=(-1-q)*I+(1.5+q)*L+0.5*E,P=q*I-q*L;for(let M=0;M!==X;++M)K[M]=O*W[H+M]+F*W[U+M]+w*W[Y+M]+P*W[G+M];return K}}class _$ extends B8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),G=1-H;for(let N=0;N!==X;++N)K[N]=W[U+N]*G+W[Y+N]*H;return K}}class w$ extends B8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class T$ extends B8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,G=this.outTangents;if(!H||!G){let E=($-Q)/(Z-Q),L=1-E;for(let I=0;I!==X;++I)K[I]=W[U+I]*L+W[Y+I]*E;return K}let N=X*2,q=J-1;for(let E=0;E!==X;++E){let L=W[U+E],I=W[Y+E],O=q*N+E*2,F=G[O],w=G[O+1],P=J*N+E*2,M=H[P],A=H[P+1],C=($-Q)/(Z-Q),_,R,z,d,V;for(let g=0;g<8;g++){_=C*C,R=_*C,z=1-C,d=z*z,V=d*z;let p=V*Q+3*d*C*F+3*z*_*M+R*Z-$;if(Math.abs(p)<0.0000000001)break;let u=3*d*(F-Q)+6*z*C*(M-F)+3*_*(Z-M);if(Math.abs(u)<0.0000000001)break;C=C-p/u,C=Math.max(0,Math.min(1,C))}K[E]=V*L+3*d*C*w+3*z*_*A+R*I}return K}}class W9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=H6(Q,this.TimeBufferType),this.values=H6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:H6(J.times,Array),values:H6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new w$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new _$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new P$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new T$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return v0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){f0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(jW(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){f0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let G=X*$,N=G-$,q=G+$;for(let E=0;E!==$;++E){let L=Q[G+E];if(L!==Q[N+E]||L!==Q[q+E]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let G=X*$,N=W*$;for(let q=0;q!==$;++q)Q[N+q]=Q[G+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}W9.prototype.ValueTypeName="";W9.prototype.TimeBufferType=Float32Array;W9.prototype.ValueBufferType=Float32Array;W9.prototype.DefaultInterpolation=2301;class M8 extends W9{constructor(J,Q,$){super(J,Q,$)}}M8.prototype.ValueTypeName="bool";M8.prototype.ValueBufferType=Array;M8.prototype.DefaultInterpolation=2300;M8.prototype.InterpolantFactoryMethodLinear=void 0;M8.prototype.InterpolantFactoryMethodSmooth=void 0;class S$ extends W9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}S$.prototype.ValueTypeName="color";class j$ extends W9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}j$.prototype.ValueTypeName="number";class f$ extends B8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)p9.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class b6 extends W9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new f$(this.times,this.values,this.getValueSize(),J)}}b6.prototype.ValueTypeName="quaternion";b6.prototype.InterpolantFactoryMethodSmooth=void 0;class z8 extends W9{constructor(J,Q,$){super(J,Q,$)}}z8.prototype.ValueTypeName="string";z8.prototype.ValueBufferType=Array;z8.prototype.DefaultInterpolation=2300;z8.prototype.InterpolantFactoryMethodLinear=void 0;z8.prototype.InterpolantFactoryMethodSmooth=void 0;class v$ extends W9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}v$.prototype.ValueTypeName="vector";var N6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(AZ(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(AZ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function AZ(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class y${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,G){return U.push(H,G),this},this.removeHandler=function(H){let G=U.indexOf(H);if(G!==-1)U.splice(G,2);return this},this.getHandler=function(H){for(let G=0,N=U.length;G<N;G+=2){let q=U[G],E=U[G+1];if(q.global)q.lastIndex=0;if(q.test(H))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var vK=new y$;class S7{constructor(J){if(this.manager=J!==void 0?J:vK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}S7.DEFAULT_MATERIAL_NAME="__DEFAULT";var p8=new WeakMap;class b$ extends S7{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=N6.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let G=p8.get(W);if(G===void 0)G=[],p8.set(W,G);G.push({onLoad:Q,onError:Z})}return W}let X=u8("img");function Y(){if(H(),Q)Q(this);let G=p8.get(this)||[];for(let N=0;N<G.length;N++){let q=G[N];if(q.onLoad)q.onLoad(this)}p8.delete(this),K.manager.itemEnd(J)}function U(G){if(H(),Z)Z(G);N6.remove(`image:${J}`);let N=p8.get(this)||[];for(let q=0;q<N.length;q++){let E=N[q];if(E.onError)E.onError(G)}p8.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function H(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",U,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",U,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return N6.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class h6 extends S7{constructor(J){super(J)}load(J,Q,$,Z){let K=new TJ,W=new b$(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class x6 extends VJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new u0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var kQ=new HJ,CZ=new v,PZ=new v;class h${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new d0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new HJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new T7,this._frameExtents=new d0(1,1),this._viewportCount=1,this._viewports=[new DJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(CZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(CZ),PZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(PZ),Q.updateMatrixWorld(),kQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(kQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var q6=new v,G6=new p9,M9=new v;class g6 extends VJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new HJ,this.projectionMatrix=new HJ,this.projectionMatrixInverse=new HJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(q6,G6,M9),M9.x===1&&M9.y===1&&M9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(q6,G6,M9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(q6,G6,M9),M9.x===1&&M9.y===1&&M9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(q6,G6,M9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var t9=new v,_Z=new d0,wZ=new d0;class pJ extends g6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=F6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(o6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return F6*2*Math.atan(Math.tan(o6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){t9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(t9.x,t9.y).multiplyScalar(-J/t9.z),t9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(t9.x,t9.y).multiplyScalar(-J/t9.z)}getViewSize(J,Q){return this.getViewBounds(J,_Z,wZ),Q.subVectors(wZ,_Z)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(o6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class yK extends h${constructor(){super(new pJ(90,1,0.5,500));this.isPointLightShadow=!0}}class p6 extends x6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new yK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class j7 extends g6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class bK extends h${constructor(){super(new j7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class e8 extends x6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(VJ.DEFAULT_UP),this.updateMatrix(),this.target=new VJ,this.shadow=new bK}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var m8=-90,l8=1;class x$ extends VJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new pJ(m8,l8,J,Q);Z.layers=this.layers,this.add(Z);let K=new pJ(m8,l8,J,Q);K.layers=this.layers,this.add(K);let W=new pJ(m8,l8,J,Q);W.layers=this.layers,this.add(W);let X=new pJ(m8,l8,J,Q);X.layers=this.layers,this.add(X);let Y=new pJ(m8,l8,J,Q);Y.layers=this.layers,this.add(Y);let U=new pJ(m8,l8,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=L,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(G,N,q),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class g$ extends pJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var p$="\\[\\]\\.:\\/",$X=new RegExp("["+p$+"]","g"),m$="[^"+p$+"]",ZX="[^"+p$.replace("\\.","")+"]",KX=/((?:WC+[\/:])*)/.source.replace("WC",m$),WX=/(WCOD+)?/.source.replace("WCOD",ZX),XX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",m$),YX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",m$),UX=new RegExp("^"+KX+WX+XX+YX+"$"),HX=["material","materials","bones","map"];class hK{constructor(J,Q,$){let Z=$||WJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class WJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||WJ.parseTrackName(Q),this.node=WJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new WJ(J,Q,$);else return new WJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace($X,"")}static parseTrackName(J){let Q=UX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(HX.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=WJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){v0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}WJ.Composite=hK;WJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};WJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};WJ.prototype.GetterByBindingType=[WJ.prototype._getValue_direct,WJ.prototype._getValue_array,WJ.prototype._getValue_arrayElement,WJ.prototype._getValue_toArray];WJ.prototype.SetterByBindingTypeAndVersioning=[[WJ.prototype._setValue_direct,WJ.prototype._setValue_direct_setNeedsUpdate,WJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[WJ.prototype._setValue_array,WJ.prototype._setValue_array_setNeedsUpdate,WJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[WJ.prototype._setValue_arrayElement,WJ.prototype._setValue_arrayElement_setNeedsUpdate,WJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[WJ.prototype._setValue_fromArray,WJ.prototype._setValue_fromArray_setNeedsUpdate,WJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fq=new Float32Array(1);var TZ=new HJ;class m6{constructor(J,Q,$=0,Z=1/0){this.ray=new S6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new _7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else f0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return TZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(TZ),this}intersectObject(J,Q=!0,$=[]){return LQ(J,this,$,Q),$.sort(SZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)LQ(J[Z],this,$,Q);return $.sort(SZ),$}}function SZ(J,Q){return J.distance-Q.distance}function LQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)LQ(W[X],Q,$,!0)}}class l${static{l$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function d$(J,Q,$,Z){let K=qX(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function qX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)v0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function XW(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function GX(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:G}=Y,N=H.byteLength,q=J.createBuffer();J.bindBuffer(U,q),J.bufferData(U,H,G),Y.onUploadCallback();let E;if(H instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)E=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)E=J.SHORT;else if(H instanceof Uint32Array)E=J.UNSIGNED_INT;else if(H instanceof Int32Array)E=J.INT;else if(H instanceof Int8Array)E=J.BYTE;else if(H instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:q,type:E,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:N}}function Z(Y,U,H){let{array:G,updateRanges:N}=U;if(J.bindBuffer(H,Y),N.length===0)J.bufferSubData(H,0,G);else{N.sort((E,L)=>E.start-L.start);let q=0;for(let E=1;E<N.length;E++){let L=N[q],I=N[E];if(I.start<=L.start+L.count+1)L.count=Math.max(L.count,I.start+I.count-L.start);else++q,N[q]=I}N.length=q+1;for(let E=0,L=N.length;E<L;E++){let I=N[E];J.bufferSubData(H,I.start*G.BYTES_PER_ELEMENT,G,I.start,I.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var NX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FX=`#ifdef USE_ALPHAHASH
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
#endif`,OX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kX=`#ifdef USE_AOMAP
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
#endif`,LX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VX=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,BX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AX=`#ifdef USE_IRIDESCENCE
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
#endif`,CX=`#ifdef USE_BUMPMAP
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
#endif`,PX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_X=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yX=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,bX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hX=`vec3 transformedNormal = objectNormal;
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
#endif`,xX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lX="gl_FragColor = linearToOutputTexel( gl_FragColor );",dX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nX=`#ifdef USE_ENVMAP
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
#endif`,sX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eX=`#ifdef USE_GRADIENTMAP
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
}`,JY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$Y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZY=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,KY=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,WY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HY=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,qY=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GY=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NY=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,FY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OY=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MY=`#if defined( USE_POINTS_UV )
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
#endif`,zY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_Y=`#ifdef USE_MORPHTARGETS
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
#endif`,wY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yY=`#ifdef USE_NORMALMAP
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
#endif`,bY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iY=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,rY=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,tY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eY=`#ifdef USE_SKINNING
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
#endif`,JU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QU=`#ifdef USE_SKINNING
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
#endif`,$U=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XU=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YU=`#ifdef USE_TRANSMISSION
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
#endif`,UU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FU=`uniform sampler2D t2D;
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
}`,OU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kU=`#include <common>
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
}`,LU=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VU=`#define DISTANCE
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
}`,BU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IU=`uniform float scale;
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
}`,AU=`uniform vec3 diffuse;
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
}`,CU=`#include <common>
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
}`,PU=`uniform vec3 diffuse;
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
}`,_U=`#define LAMBERT
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
}`,wU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,TU=`#define MATCAP
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
}`,SU=`#define MATCAP
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
}`,jU=`#define NORMAL
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
}`,fU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vU=`#define PHONG
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
}`,yU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,bU=`#define STANDARD
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
}`,hU=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,xU=`#define TOON
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
}`,gU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,pU=`uniform float size;
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
}`,mU=`uniform vec3 diffuse;
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
}`,lU=`#include <common>
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
}`,dU=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,uU=`uniform float rotation;
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
}`,cU=`uniform vec3 diffuse;
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
}`,m0={alphahash_fragment:NX,alphahash_pars_fragment:FX,alphamap_fragment:OX,alphamap_pars_fragment:EX,alphatest_fragment:DX,alphatest_pars_fragment:RX,aomap_fragment:kX,aomap_pars_fragment:LX,batching_pars_vertex:VX,batching_vertex:BX,begin_vertex:MX,beginnormal_vertex:zX,bsdfs:IX,iridescence_fragment:AX,bumpmap_pars_fragment:CX,clipping_planes_fragment:PX,clipping_planes_pars_fragment:_X,clipping_planes_pars_vertex:wX,clipping_planes_vertex:TX,color_fragment:SX,color_pars_fragment:jX,color_pars_vertex:fX,color_vertex:vX,common:yX,cube_uv_reflection_fragment:bX,defaultnormal_vertex:hX,displacementmap_pars_vertex:xX,displacementmap_vertex:gX,emissivemap_fragment:pX,emissivemap_pars_fragment:mX,colorspace_fragment:lX,colorspace_pars_fragment:dX,envmap_fragment:uX,envmap_common_pars_fragment:cX,envmap_pars_fragment:nX,envmap_pars_vertex:sX,envmap_physical_pars_fragment:KY,envmap_vertex:iX,fog_vertex:oX,fog_pars_vertex:aX,fog_fragment:rX,fog_pars_fragment:tX,gradientmap_pars_fragment:eX,lightmap_pars_fragment:JY,lights_lambert_fragment:QY,lights_lambert_pars_fragment:$Y,lights_pars_begin:ZY,lights_toon_fragment:WY,lights_toon_pars_fragment:XY,lights_phong_fragment:YY,lights_phong_pars_fragment:UY,lights_physical_fragment:HY,lights_physical_pars_fragment:qY,lights_fragment_begin:GY,lights_fragment_maps:NY,lights_fragment_end:FY,lightprobes_pars_fragment:OY,logdepthbuf_fragment:EY,logdepthbuf_pars_fragment:DY,logdepthbuf_pars_vertex:RY,logdepthbuf_vertex:kY,map_fragment:LY,map_pars_fragment:VY,map_particle_fragment:BY,map_particle_pars_fragment:MY,metalnessmap_fragment:zY,metalnessmap_pars_fragment:IY,morphinstance_vertex:AY,morphcolor_vertex:CY,morphnormal_vertex:PY,morphtarget_pars_vertex:_Y,morphtarget_vertex:wY,normal_fragment_begin:TY,normal_fragment_maps:SY,normal_pars_fragment:jY,normal_pars_vertex:fY,normal_vertex:vY,normalmap_pars_fragment:yY,clearcoat_normal_fragment_begin:bY,clearcoat_normal_fragment_maps:hY,clearcoat_pars_fragment:xY,iridescence_pars_fragment:gY,opaque_fragment:pY,packing:mY,premultiplied_alpha_fragment:lY,project_vertex:dY,dithering_fragment:uY,dithering_pars_fragment:cY,roughnessmap_fragment:nY,roughnessmap_pars_fragment:sY,shadowmap_pars_fragment:iY,shadowmap_pars_vertex:oY,shadowmap_vertex:aY,shadowmask_pars_fragment:rY,skinbase_vertex:tY,skinning_pars_vertex:eY,skinning_vertex:JU,skinnormal_vertex:QU,specularmap_fragment:$U,specularmap_pars_fragment:ZU,tonemapping_fragment:KU,tonemapping_pars_fragment:WU,transmission_fragment:XU,transmission_pars_fragment:YU,uv_pars_fragment:UU,uv_pars_vertex:HU,uv_vertex:qU,worldpos_vertex:GU,background_vert:NU,background_frag:FU,backgroundCube_vert:OU,backgroundCube_frag:EU,cube_vert:DU,cube_frag:RU,depth_vert:kU,depth_frag:LU,distance_vert:VU,distance_frag:BU,equirect_vert:MU,equirect_frag:zU,linedashed_vert:IU,linedashed_frag:AU,meshbasic_vert:CU,meshbasic_frag:PU,meshlambert_vert:_U,meshlambert_frag:wU,meshmatcap_vert:TU,meshmatcap_frag:SU,meshnormal_vert:jU,meshnormal_frag:fU,meshphong_vert:vU,meshphong_frag:yU,meshphysical_vert:bU,meshphysical_frag:hU,meshtoon_vert:xU,meshtoon_frag:gU,points_vert:pU,points_frag:mU,shadow_vert:lU,shadow_frag:dU,sprite_vert:uU,sprite_frag:cU},O0={common:{diffuse:{value:new u0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new h0}},envmap:{envMap:{value:null},envMapRotation:{value:new h0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new h0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new h0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new h0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new h0},normalScale:{value:new d0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new h0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new h0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new h0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new h0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new u0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new u0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0},uvTransform:{value:new h0}},sprite:{diffuse:{value:new u0(16777215)},opacity:{value:1},center:{value:new d0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}}},w9={basic:{uniforms:uJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.fog]),vertexShader:m0.meshbasic_vert,fragmentShader:m0.meshbasic_frag},lambert:{uniforms:uJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new u0(0)},envMapIntensity:{value:1}}]),vertexShader:m0.meshlambert_vert,fragmentShader:m0.meshlambert_frag},phong:{uniforms:uJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new u0(0)},specular:{value:new u0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:m0.meshphong_vert,fragmentShader:m0.meshphong_frag},standard:{uniforms:uJ([O0.common,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.roughnessmap,O0.metalnessmap,O0.fog,O0.lights,{emissive:{value:new u0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag},toon:{uniforms:uJ([O0.common,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.gradientmap,O0.fog,O0.lights,{emissive:{value:new u0(0)}}]),vertexShader:m0.meshtoon_vert,fragmentShader:m0.meshtoon_frag},matcap:{uniforms:uJ([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,{matcap:{value:null}}]),vertexShader:m0.meshmatcap_vert,fragmentShader:m0.meshmatcap_frag},points:{uniforms:uJ([O0.points,O0.fog]),vertexShader:m0.points_vert,fragmentShader:m0.points_frag},dashed:{uniforms:uJ([O0.common,O0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:m0.linedashed_vert,fragmentShader:m0.linedashed_frag},depth:{uniforms:uJ([O0.common,O0.displacementmap]),vertexShader:m0.depth_vert,fragmentShader:m0.depth_frag},normal:{uniforms:uJ([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,{opacity:{value:1}}]),vertexShader:m0.meshnormal_vert,fragmentShader:m0.meshnormal_frag},sprite:{uniforms:uJ([O0.sprite,O0.fog]),vertexShader:m0.sprite_vert,fragmentShader:m0.sprite_frag},background:{uniforms:{uvTransform:{value:new h0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:m0.background_vert,fragmentShader:m0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new h0}},vertexShader:m0.backgroundCube_vert,fragmentShader:m0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:m0.cube_vert,fragmentShader:m0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:m0.equirect_vert,fragmentShader:m0.equirect_frag},distance:{uniforms:uJ([O0.common,O0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:m0.distance_vert,fragmentShader:m0.distance_frag},shadow:{uniforms:uJ([O0.lights,O0.fog,{color:{value:new u0(0)},opacity:{value:1}}]),vertexShader:m0.shadow_vert,fragmentShader:m0.shadow_frag}};w9.physical={uniforms:uJ([w9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new h0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new h0},clearcoatNormalScale:{value:new d0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new h0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new h0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new h0},sheen:{value:0},sheenColor:{value:new u0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new h0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new h0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new h0},transmissionSamplerSize:{value:new d0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new h0},attenuationDistance:{value:0},attenuationColor:{value:new u0(0)},specularColor:{value:new u0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new h0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new h0},anisotropyVector:{value:new d0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new h0}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag};var l6={r:0,b:0,g:0},nU=new HJ,YW=new h0;YW.set(-1,0,0,0,1,0,0,0,1);function sU(J,Q,$,Z,K,W){let X=new u0(0),Y=K===!0?0:1,U,H,G=null,N=0,q=null;function E(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){let M=w.backgroundBlurriness>0;P=Q.get(P,M)}return P}function L(w){let P=!1,M=E(w);if(M===null)O(X,Y);else if(M&&M.isColor)O(M,1),P=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(w,P){let M=E(P);if(M&&(M.isCubeTexture||M.mapping===z7)){if(H===void 0)H=new S0(new MJ(1,1,1),new K9({name:"BackgroundCubeMaterial",uniforms:V8(w9.backgroundCube.uniforms),vertexShader:w9.backgroundCube.vertexShader,fragmentShader:w9.backgroundCube.fragmentShader,side:lJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(A,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=M,H.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(nU.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(YW);if(H.material.toneMapped=i0.getTransfer(M.colorSpace)!==GJ,G!==M||N!==M.version||q!==J.toneMapping)H.material.needsUpdate=!0,G=M,N=M.version,q=J.toneMapping;H.layers.enableAll(),w.unshift(H,H.geometry,H.material,0,0,null)}else if(M&&M.isTexture){if(U===void 0)U=new S0(new aJ(2,2),new K9({name:"BackgroundMaterial",uniforms:V8(w9.background.uniforms),vertexShader:w9.background.vertexShader,fragmentShader:w9.background.fragmentShader,side:s8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=M,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.toneMapped=i0.getTransfer(M.colorSpace)!==GJ,M.matrixAutoUpdate===!0)M.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(M.matrix),G!==M||N!==M.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=M,N=M.version,q=J.toneMapping;U.layers.enableAll(),w.unshift(U,U.geometry,U.material,0,0,null)}}function O(w,P){w.getRGB(l6,z$(J)),$.buffers.color.setClear(l6.r,l6.g,l6.b,P,W)}function F(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(w,P=1){X.set(w),Y=P,O(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(w){Y=w,O(X,Y)},render:L,addToRenderList:I,dispose:F}}function iU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(V,g,r,p,u){let i=!1,h=N(V,p,r,g);if(W!==h)W=h,H(W.object);if(i=E(V,p,r,u),i)L(V,p,r,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(i||X){if(X=!1,M(V,g,r,p),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function H(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function N(V,g,r,p){let u=p.wireframe===!0,i=Z[g.id];if(i===void 0)i={},Z[g.id]=i;let h=V.isInstancedMesh===!0?V.id:0,J0=i[h];if(J0===void 0)J0={},i[h]=J0;let Q0=J0[r.id];if(Q0===void 0)Q0={},J0[r.id]=Q0;let H0=Q0[u];if(H0===void 0)H0=q(U()),Q0[u]=H0;return H0}function q(V){let g=[],r=[],p=[];for(let u=0;u<$;u++)g[u]=0,r[u]=0,p[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:r,attributeDivisors:p,object:V,attributes:{},index:null}}function E(V,g,r,p){let u=W.attributes,i=g.attributes,h=0,J0=r.getAttributes();for(let Q0 in J0)if(J0[Q0].location>=0){let z0=u[Q0],k0=i[Q0];if(k0===void 0){if(Q0==="instanceMatrix"&&V.instanceMatrix)k0=V.instanceMatrix;if(Q0==="instanceColor"&&V.instanceColor)k0=V.instanceColor}if(z0===void 0)return!0;if(z0.attribute!==k0)return!0;if(k0&&z0.data!==k0.data)return!0;h++}if(W.attributesNum!==h)return!0;if(W.index!==p)return!0;return!1}function L(V,g,r,p){let u={},i=g.attributes,h=0,J0=r.getAttributes();for(let Q0 in J0)if(J0[Q0].location>=0){let z0=i[Q0];if(z0===void 0){if(Q0==="instanceMatrix"&&V.instanceMatrix)z0=V.instanceMatrix;if(Q0==="instanceColor"&&V.instanceColor)z0=V.instanceColor}let k0={};if(k0.attribute=z0,z0&&z0.data)k0.data=z0.data;u[Q0]=k0,h++}W.attributes=u,W.attributesNum=h,W.index=p}function I(){let V=W.newAttributes;for(let g=0,r=V.length;g<r;g++)V[g]=0}function O(V){F(V,0)}function F(V,g){let{newAttributes:r,enabledAttributes:p,attributeDivisors:u}=W;if(r[V]=1,p[V]===0)J.enableVertexAttribArray(V),p[V]=1;if(u[V]!==g)J.vertexAttribDivisor(V,g),u[V]=g}function w(){let{newAttributes:V,enabledAttributes:g}=W;for(let r=0,p=g.length;r<p;r++)if(g[r]!==V[r])J.disableVertexAttribArray(r),g[r]=0}function P(V,g,r,p,u,i,h){if(h===!0)J.vertexAttribIPointer(V,g,r,u,i);else J.vertexAttribPointer(V,g,r,p,u,i)}function M(V,g,r,p){I();let u=p.attributes,i=r.getAttributes(),h=g.defaultAttributeValues;for(let J0 in i){let Q0=i[J0];if(Q0.location>=0){let H0=u[J0];if(H0===void 0){if(J0==="instanceMatrix"&&V.instanceMatrix)H0=V.instanceMatrix;if(J0==="instanceColor"&&V.instanceColor)H0=V.instanceColor}if(H0!==void 0){let{normalized:z0,itemSize:k0}=H0,YJ=Q.get(H0);if(YJ===void 0)continue;let{buffer:JJ,type:o,bytesPerElement:W0}=YJ,D0=o===J.INT||o===J.UNSIGNED_INT||H0.gpuType===SQ;if(H0.isInterleavedBufferAttribute){let R0=H0.data,w0=R0.stride,n0=H0.offset;if(R0.isInstancedInterleavedBuffer){for(let p0=0;p0<Q0.locationSize;p0++)F(Q0.location+p0,R0.meshPerAttribute);if(V.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=R0.meshPerAttribute*R0.count}else for(let p0=0;p0<Q0.locationSize;p0++)O(Q0.location+p0);J.bindBuffer(J.ARRAY_BUFFER,JJ);for(let p0=0;p0<Q0.locationSize;p0++)P(Q0.location+p0,k0/Q0.locationSize,o,z0,w0*W0,(n0+k0/Q0.locationSize*p0)*W0,D0)}else{if(H0.isInstancedBufferAttribute){for(let R0=0;R0<Q0.locationSize;R0++)F(Q0.location+R0,H0.meshPerAttribute);if(V.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let R0=0;R0<Q0.locationSize;R0++)O(Q0.location+R0);J.bindBuffer(J.ARRAY_BUFFER,JJ);for(let R0=0;R0<Q0.locationSize;R0++)P(Q0.location+R0,k0/Q0.locationSize,o,z0,k0*W0,k0/Q0.locationSize*R0*W0,D0)}}else if(h!==void 0){let z0=h[J0];if(z0!==void 0)switch(z0.length){case 2:J.vertexAttrib2fv(Q0.location,z0);break;case 3:J.vertexAttrib3fv(Q0.location,z0);break;case 4:J.vertexAttrib4fv(Q0.location,z0);break;default:J.vertexAttrib1fv(Q0.location,z0)}}}}w()}function A(){z();for(let V in Z){let g=Z[V];for(let r in g){let p=g[r];for(let u in p){let i=p[u];for(let h in i)G(i[h].object),delete i[h];delete p[u]}}delete Z[V]}}function C(V){if(Z[V.id]===void 0)return;let g=Z[V.id];for(let r in g){let p=g[r];for(let u in p){let i=p[u];for(let h in i)G(i[h].object),delete i[h];delete p[u]}}delete Z[V.id]}function _(V){for(let g in Z){let r=Z[g];for(let p in r){let u=r[p];if(u[V.id]===void 0)continue;let i=u[V.id];for(let h in i)G(i[h].object),delete i[h];delete u[V.id]}}}function R(V){for(let g in Z){let r=Z[g],p=V.isInstancedMesh===!0?V.id:0,u=r[p];if(u===void 0)continue;for(let i in u){let h=u[i];for(let J0 in h)G(h[J0].object),delete h[J0];delete u[i]}if(delete r[p],Object.keys(r).length===0)delete Z[g]}}function z(){if(d(),X=!0,W===K)return;W=K,H(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:z,resetDefaultState:d,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:R,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:O,disableUnusedAttributes:w}}function oU(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,G){if(G===0)return;J.drawArraysInstanced(Z,U,H,G),$.update(H,Z,G)}function Y(U,H,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,G);let q=0;for(let E=0;E<G;E++)q+=H[E];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function aU(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(_){if(_!==C9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let R=_===x9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==D9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==h9&&!R)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",G=U(H);if(G!==H)v0("WebGLRenderer:",H,"not supported, using",G,"instead."),H=G;let N=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)v0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),M=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:N,reversedDepthBuffer:q,maxTextures:E,maxVertexTextures:L,maxTextureSize:I,maxCubemapSize:O,maxAttributes:F,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:M,maxSamples:A,samples:C}}function rU(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new y9,Y=new h0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(N,q){let E=N.length!==0||q||Z!==0||K;return K=q,Z=N.length,E},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(N,q){$=G(N,q,0)},this.setState=function(N,q,E){let{clippingPlanes:L,clipIntersection:I,clipShadows:O}=N,F=J.get(N);if(!K||L===null||L.length===0||W&&!O)if(W)G(null);else H();else{let w=W?0:Z,P=w*4,M=F.clippingState||null;U.value=M,M=G(L,q,P,E);for(let A=0;A!==P;++A)M[A]=$[A];F.clippingState=M,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=w}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(N,q,E,L){let I=N!==null?N.length:0,O=null;if(I!==0){if(O=U.value,L!==!0||O===null){let F=E+I*4,w=q.matrixWorldInverse;if(Y.getNormalMatrix(w),O===null||O.length<F)O=new Float32Array(F);for(let P=0,M=E;P!==I;++P,M+=4)X.copy(N[P]).applyMatrix4(w,Y),X.normal.toArray(O,M),O[M+3]=X.constant}U.value=O,U.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,O}}var Z8=4,xK=[0.125,0.215,0.35,0.446,0.526,0.582],I8=20,tU=256,f7=new j7,gK=new u0,u$=null,c$=0,n$=0,s$=!1,eU=new v;class h7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=eU}=K;u$=this._renderer.getRenderTarget(),c$=this._renderer.getActiveCubeFace(),n$=this._renderer.getActiveMipmapLevel(),s$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=lK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=mK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(u$,c$,n$),this._renderer.xr.enabled=s$,J.scissorTest=!1,J7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===o8||J.mapping===F8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);u$=this._renderer.getRenderTarget(),c$=this._renderer.getActiveCubeFace(),n$=this._renderer.getActiveMipmapLevel(),s$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:BJ,minFilter:BJ,generateMipmaps:!1,type:x9,format:C9,colorSpace:O$,depthBuffer:!1},Z=pK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=pK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JH(K)),this._blurMaterial=$H(K,J,Q),this._ggxMaterial=QH(K,J,Q)}return Z}_compileMaterial(J){let Q=new S0(new k9,J);this._renderer.compile(Q,f7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new pJ(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],G=this._renderer,N=G.autoClear,q=G.toneMapping;if(G.getClearColor(gK),G.toneMapping=E9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new S0(new MJ,new dJ({name:"PMREM.Background",side:lJ,depthWrite:!1,depthTest:!1}));let L=this._backgroundBox,I=L.material,O=!1,F=J.background;if(F){if(F.isColor)I.color.copy(F),J.background=null,O=!0}else I.color.copy(gK),O=!0;for(let w=0;w<6;w++){let P=w%3;if(P===0)Y.up.set(0,U[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[w],K.y,K.z);else if(P===1)Y.up.set(0,0,U[w]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[w],K.z);else Y.up.set(0,U[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[w]);let M=this._cubeSize;if(J7(Z,P*M,w>2?M:0,M,M),G.setRenderTarget(Z),O)G.render(L,Y);G.render(J,Y)}G.toneMapping=q,G.autoClear=N,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===o8||J.mapping===F8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=lK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=mK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;J7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,f7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),G=Math.sqrt(U*U-H*H),N=0+U*1.25,q=G*N,{_lodMax:E}=this,L=this._sizeLods[$],I=3*L*($>E-Z8?$-E+Z8:0),O=4*(this._cubeSize-L);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=E-Q,J7(K,I,O,3*L,2*L),Z.setRenderTarget(K),Z.render(X,f7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=E-$,J7(J,I,O,3*L,2*L),Z.setRenderTarget(J),Z.render(X,f7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,U=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")f0("blur direction must be either latitudinal or longitudinal!");let H=3,G=this._lodMeshes[Z];G.material=U;let N=U.uniforms,q=this._sizeLods[$]-1,E=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*I8-1),L=K/E,I=isFinite(K)?1+Math.floor(H*L):I8;if(I>I8)v0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${I8}`);let O=[],F=0;for(let C=0;C<I8;++C){let _=C/L,R=Math.exp(-_*_/2);if(O.push(R),C===0)F+=R;else if(C<I)F+=2*R}for(let C=0;C<O.length;C++)O[C]=O[C]/F;if(N.envMap.value=J.texture,N.samples.value=I,N.weights.value=O,N.latitudinal.value=W==="latitudinal",X)N.poleAxis.value=X;let{_lodMax:w}=this;N.dTheta.value=E,N.mipInt.value=w-$;let P=this._sizeLods[Z],M=3*P*(Z>w-Z8?Z-w+Z8:0),A=4*(this._cubeSize-P);J7(Q,M,A,3*P,2*P),Y.setRenderTarget(Q),Y.render(G,f7)}}function JH(J){let Q=[],$=[],Z=[],K=J,W=J-Z8+1+xK.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let U=1/Y;if(X>J-Z8)U=xK[X-J+Z8-1];else if(X===0)U=0;$.push(U);let H=1/(Y-2),G=-H,N=1+H,q=[G,G,N,G,N,N,G,G,N,N,G,N],E=6,L=6,I=3,O=2,F=1,w=new Float32Array(I*L*E),P=new Float32Array(O*L*E),M=new Float32Array(F*L*E);for(let C=0;C<E;C++){let _=C%3*2/3-1,R=C>2?0:-1,z=[_,R,0,_+0.6666666666666666,R,0,_+0.6666666666666666,R+1,0,_,R,0,_+0.6666666666666666,R+1,0,_,R+1,0];w.set(z,I*L*C),P.set(q,O*L*C);let d=[C,C,C,C,C,C];M.set(d,F*L*C)}let A=new k9;if(A.setAttribute("position",new eJ(w,I)),A.setAttribute("uv",new eJ(P,O)),A.setAttribute("faceIndex",new eJ(M,F)),Z.push(new S0(A,null)),K>Z8)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function pK(J,Q,$){let Z=new Z9(J,Q,$);return Z.texture.mapping=z7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function J7(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function QH(J,Q,$){return new K9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:u6(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:A9,depthTest:!1,depthWrite:!1})}function $H(J,Q,$){let Z=new Float32Array(I8),K=new v(0,1,0);return new K9({name:"SphericalGaussianBlur",defines:{n:I8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:u6(),fragmentShader:`

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
		`,blending:A9,depthTest:!1,depthWrite:!1})}function mK(){return new K9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:u6(),fragmentShader:`

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
		`,blending:A9,depthTest:!1,depthWrite:!1})}function lK(){return new K9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:u6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:A9,depthTest:!1,depthWrite:!1})}function u6(){return`

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
	`}class t$ extends Z9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new f6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new MJ(5,5,5),K=new K9({name:"CubemapFromEquirect",uniforms:V8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:lJ,blending:A9});K.uniforms.tEquirect.value=Q;let W=new S0(Z,K),X=Q.minFilter;if(Q.minFilter===O8)Q.minFilter=BJ;return new x$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function ZH(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,E=!1){if(q===null||q===void 0)return null;if(E)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let E=q.mapping;if(E===E6||E===D6)if(Q.has(q)){let L=Q.get(q).texture;return Y(L,q.mapping)}else{let L=q.image;if(L&&L.height>0){let I=new t$(L.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",H),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let E=q.mapping,L=E===E6||E===D6,I=E===o8||E===F8;if(L||I){let O=$.get(q),F=O!==void 0?O.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==F){if(Z===null)Z=new h7(J);return O=L?Z.fromEquirectangular(q,O):Z.fromCubemap(q,O),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),O.texture}else if(O!==void 0)return O.texture;else{let w=q.image;if(L&&w&&w.height>0||I&&w&&U(w)){if(Z===null)Z=new h7(J);return O=L?Z.fromEquirectangular(q):Z.fromCubemap(q),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),q.addEventListener("dispose",G),O.texture}else return null}}}return q}function Y(q,E){if(E===E6)q.mapping=o8;else if(E===D6)q.mapping=F8;return q}function U(q){let E=0,L=6;for(let I=0;I<L;I++)if(q[I]!==void 0)E++;return E===L}function H(q){let E=q.target;E.removeEventListener("dispose",H);let L=Q.get(E);if(L!==void 0)Q.delete(E),L.dispose()}function G(q){let E=q.target;E.removeEventListener("dispose",G);let L=$.get(E);if(L!==void 0)$.delete(E),L.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:N}}function KH(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)N8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function WH(J,Q,$,Z){let K={},W=new WeakMap;function X(N){let q=N.target;if(q.index!==null)Q.remove(q.index);for(let L in q.attributes)Q.remove(q.attributes[L]);q.removeEventListener("dispose",X),delete K[q.id];let E=W.get(q);if(E)Q.remove(E),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(N,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function U(N){let q=N.attributes;for(let E in q)Q.update(q[E],J.ARRAY_BUFFER)}function H(N){let q=[],E=N.index,L=N.attributes.position,I=0;if(L===void 0)return;if(E!==null){let w=E.array;I=E.version;for(let P=0,M=w.length;P<M;P+=3){let A=w[P+0],C=w[P+1],_=w[P+2];q.push(A,C,C,_,_,A)}}else{let w=L.array;I=L.version;for(let P=0,M=w.length/3-1;P<M;P+=3){let A=P+0,C=P+1,_=P+2;q.push(A,C,C,_,_,A)}}let O=new(L.count>=65535?T6:w6)(q,1);O.version=I;let F=W.get(N);if(F)Q.remove(F);W.set(N,O)}function G(N){let q=W.get(N);if(q){let E=N.index;if(E!==null){if(q.version<E.version)H(N)}}else H(N);return W.get(N)}return{get:Y,update:U,getWireframeAttribute:G}}function XH(J,Q,$){let Z;function K(N){Z=N}let W,X;function Y(N){W=N.type,X=N.bytesPerElement}function U(N,q){J.drawElements(Z,q,W,N*X),$.update(q,Z,1)}function H(N,q,E){if(E===0)return;J.drawElementsInstanced(Z,q,W,N*X,E),$.update(q,Z,E)}function G(N,q,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,N,0,E);let I=0;for(let O=0;O<E;O++)I+=q[O];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=G}function YH(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:f0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function UH(J,Q,$){let Z=new WeakMap,K=new DJ;function W(X,Y,U){let H=X.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0,q=Z.get(Y);if(q===void 0||q.count!==N){let z=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let E=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],w=Y.morphAttributes.color||[],P=0;if(E===!0)P=1;if(L===!0)P=2;if(I===!0)P=3;let M=Y.attributes.position.count*P,A=1;if(M>Q.maxTextureSize)A=Math.ceil(M/Q.maxTextureSize),M=Q.maxTextureSize;let C=new Float32Array(M*A*4*N),_=new _6(C,M,A,N);_.type=h9,_.needsUpdate=!0;let R=P*4;for(let d=0;d<N;d++){let V=O[d],g=F[d],r=w[d],p=M*A*4*d;for(let u=0;u<V.count;u++){let i=u*R;if(E===!0)K.fromBufferAttribute(V,u),C[p+i+0]=K.x,C[p+i+1]=K.y,C[p+i+2]=K.z,C[p+i+3]=0;if(L===!0)K.fromBufferAttribute(g,u),C[p+i+4]=K.x,C[p+i+5]=K.y,C[p+i+6]=K.z,C[p+i+7]=0;if(I===!0)K.fromBufferAttribute(r,u),C[p+i+8]=K.x,C[p+i+9]=K.y,C[p+i+10]=K.z,C[p+i+11]=r.itemSize===4?K.w:1}}q={count:N,texture:_,size:new d0(M,A)},Z.set(Y,q),Y.addEventListener("dispose",z)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let E=0;for(let I=0;I<H.length;I++)E+=H[I];let L=Y.morphTargetsRelative?1:1-E;U.getUniforms().setValue(J,"morphTargetBaseInfluence",L),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function HH(J,Q,$,Z,K){let W=new WeakMap;function X(H){let G=K.render.frame,N=H.geometry,q=Q.get(H,N);if(W.get(q)!==G)Q.update(q),W.set(q,G);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==G){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,G)}}if(H.isSkinnedMesh){let E=H.skeleton;if(W.get(E)!==G)E.update(),W.set(E,G)}return q}function Y(){W=new WeakMap}function U(H){let G=H.target;if(G.removeEventListener("dispose",U),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:X,dispose:Y}}var qH={[AQ]:"LINEAR_TONE_MAPPING",[CQ]:"REINHARD_TONE_MAPPING",[PQ]:"CINEON_TONE_MAPPING",[M7]:"ACES_FILMIC_TONE_MAPPING",[wQ]:"AGX_TONE_MAPPING",[TQ]:"NEUTRAL_TONE_MAPPING",[_Q]:"CUSTOM_TONE_MAPPING"};function GH(J,Q,$,Z,K,W){let X=new Z9(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new $8(Q,$):void 0}),Y=new Z9(Q,$,{type:x9,depthBuffer:!1,stencilBuffer:!1}),U=new k9;U.setAttribute("position",new oJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new oJ([0,2,0,0,2,0],2));let H=new I$({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),G=new S0(U,H),N=new j7(-1,1,1,-1,0,1),q=null,E=null,L=!1,I,O=null,F=[],w=!1;this.setSize=function(P,M){X.setSize(P,M),Y.setSize(P,M);for(let A=0;A<F.length;A++){let C=F[A];if(C.setSize)C.setSize(P,M)}},this.setEffects=function(P){F=P,w=F.length>0&&F[0].isRenderPass===!0;let{width:M,height:A}=X;for(let C=0;C<F.length;C++){let _=F[C];if(_.setSize)_.setSize(M,A)}},this.begin=function(P,M){if(L)return!1;if(P.toneMapping===E9&&F.length===0)return!1;if(O=M,M!==null){let{width:A,height:C}=M;if(X.width!==A||X.height!==C)this.setSize(A,C)}if(w===!1)P.setRenderTarget(X);return I=P.toneMapping,P.toneMapping=E9,!0},this.hasRenderPass=function(){return w},this.end=function(P,M){P.toneMapping=I,L=!0;let A=X,C=Y;for(let _=0;_<F.length;_++){let R=F[_];if(R.enabled===!1)continue;if(R.render(P,C,A,M),R.needsSwap!==!1){let z=A;A=C,C=z}}if(q!==P.outputColorSpace||E!==P.toneMapping){if(q=P.outputColorSpace,E=P.toneMapping,H.defines={},i0.getTransfer(q)===GJ)H.defines.SRGB_TRANSFER="";let _=qH[E];if(_)H.defines[_]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=A.texture,P.setRenderTarget(O),P.render(G,N),O=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),U.dispose(),H.dispose()}}var UW=new TJ,a$=new $8(1,1),HW=new _6,qW=new B$,GW=new f6,dK=[],uK=[],cK=new Float32Array(16),nK=new Float32Array(9),sK=new Float32Array(4);function Q7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=dK[K];if(W===void 0)W=new Float32Array(K),dK[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function CJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function PJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function c6(J,Q){let $=uK[Q];if($===void 0)$=new Int32Array(Q),uK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function NH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function FH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(CJ($,Q))return;J.uniform2fv(this.addr,Q),PJ($,Q)}}function OH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(CJ($,Q))return;J.uniform3fv(this.addr,Q),PJ($,Q)}}function EH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(CJ($,Q))return;J.uniform4fv(this.addr,Q),PJ($,Q)}}function DH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(CJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),PJ($,Q)}else{if(CJ($,Z))return;sK.set(Z),J.uniformMatrix2fv(this.addr,!1,sK),PJ($,Z)}}function RH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(CJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),PJ($,Q)}else{if(CJ($,Z))return;nK.set(Z),J.uniformMatrix3fv(this.addr,!1,nK),PJ($,Z)}}function kH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(CJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),PJ($,Q)}else{if(CJ($,Z))return;cK.set(Z),J.uniformMatrix4fv(this.addr,!1,cK),PJ($,Z)}}function LH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function VH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(CJ($,Q))return;J.uniform2iv(this.addr,Q),PJ($,Q)}}function BH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(CJ($,Q))return;J.uniform3iv(this.addr,Q),PJ($,Q)}}function MH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(CJ($,Q))return;J.uniform4iv(this.addr,Q),PJ($,Q)}}function zH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function IH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(CJ($,Q))return;J.uniform2uiv(this.addr,Q),PJ($,Q)}}function AH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(CJ($,Q))return;J.uniform3uiv(this.addr,Q),PJ($,Q)}}function CH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(CJ($,Q))return;J.uniform4uiv(this.addr,Q),PJ($,Q)}}function PH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)a$.compareFunction=$.isReversedDepthBuffer()?P6:C6,W=a$;else W=UW;$.setTexture2D(Q||W,K)}function _H(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||qW,K)}function wH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||GW,K)}function TH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||HW,K)}function SH(J){switch(J){case 5126:return NH;case 35664:return FH;case 35665:return OH;case 35666:return EH;case 35674:return DH;case 35675:return RH;case 35676:return kH;case 5124:case 35670:return LH;case 35667:case 35671:return VH;case 35668:case 35672:return BH;case 35669:case 35673:return MH;case 5125:return zH;case 36294:return IH;case 36295:return AH;case 36296:return CH;case 35678:case 36198:case 36298:case 36306:case 35682:return PH;case 35679:case 36299:case 36307:return _H;case 35680:case 36300:case 36308:case 36293:return wH;case 36289:case 36303:case 36311:case 36292:return TH}}function jH(J,Q){J.uniform1fv(this.addr,Q)}function fH(J,Q){let $=Q7(Q,this.size,2);J.uniform2fv(this.addr,$)}function vH(J,Q){let $=Q7(Q,this.size,3);J.uniform3fv(this.addr,$)}function yH(J,Q){let $=Q7(Q,this.size,4);J.uniform4fv(this.addr,$)}function bH(J,Q){let $=Q7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function hH(J,Q){let $=Q7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function xH(J,Q){let $=Q7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function gH(J,Q){J.uniform1iv(this.addr,Q)}function pH(J,Q){J.uniform2iv(this.addr,Q)}function mH(J,Q){J.uniform3iv(this.addr,Q)}function lH(J,Q){J.uniform4iv(this.addr,Q)}function dH(J,Q){J.uniform1uiv(this.addr,Q)}function uH(J,Q){J.uniform2uiv(this.addr,Q)}function cH(J,Q){J.uniform3uiv(this.addr,Q)}function nH(J,Q){J.uniform4uiv(this.addr,Q)}function sH(J,Q,$){let Z=this.cache,K=Q.length,W=c6($,K);if(!CJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=a$;else X=UW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function iH(J,Q,$){let Z=this.cache,K=Q.length,W=c6($,K);if(!CJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||qW,W[X])}function oH(J,Q,$){let Z=this.cache,K=Q.length,W=c6($,K);if(!CJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||GW,W[X])}function aH(J,Q,$){let Z=this.cache,K=Q.length,W=c6($,K);if(!CJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||HW,W[X])}function rH(J){switch(J){case 5126:return jH;case 35664:return fH;case 35665:return vH;case 35666:return yH;case 35674:return bH;case 35675:return hH;case 35676:return xH;case 5124:case 35670:return gH;case 35667:case 35671:return pH;case 35668:case 35672:return mH;case 35669:case 35673:return lH;case 5125:return dH;case 36294:return uH;case 36295:return cH;case 36296:return nH;case 35678:case 36198:case 36298:case 36306:case 35682:return sH;case 35679:case 36299:case 36307:return iH;case 35680:case 36300:case 36308:case 36293:return oH;case 36289:case 36303:case 36311:case 36292:return aH}}class NW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=SH(Q.type)}}class FW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=rH(Q.type)}}class OW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var i$=/(\w+)(\])?(\[|\.)?/g;function iK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function tH(J,Q,$){let Z=J.name,K=Z.length;i$.lastIndex=0;while(!0){let W=i$.exec(Z),X=i$.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){iK($,H===void 0?new NW(Y,J,Q):new FW(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new OW(Y),iK($,N);$=N}}}class b7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);tH(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function oK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var eH=37297,J5=0;function Q5(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var aK=new h0;function $5(J){i0._getMatrix(aK,i0.workingColorSpace,J);let Q=`mat3( ${aK.elements.map(($)=>$.toFixed(4))} )`;switch(i0.getTransfer(J)){case E$:return[Q,"LinearTransferOETF"];case GJ:return[Q,"sRGBTransferOETF"];default:return v0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function rK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+Q5(J.getShaderSource(Q),Y)}else return W}function Z5(J,Q){let $=$5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var K5={[AQ]:"Linear",[CQ]:"Reinhard",[PQ]:"Cineon",[M7]:"ACESFilmic",[wQ]:"AgX",[TQ]:"Neutral",[_Q]:"Custom"};function W5(J,Q){let $=K5[Q];if($===void 0)return v0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var d6=new v;function X5(){i0.getLuminanceCoefficients(d6);let J=d6.x.toFixed(4),Q=d6.y.toFixed(4),$=d6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Y5(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(y7).join(`
`)}function U5(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function H5(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function y7(J){return J!==""}function tK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function eK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var q5=/^[ \t]*#include +<([\w\d./]+)>/gm;function r$(J){return J.replace(q5,N5)}var G5=new Map;function N5(J,Q){let $=m0[Q];if($===void 0){let Z=G5.get(Q);if(Z!==void 0)$=m0[Z],v0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return r$($)}var F5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function JW(J){return J.replace(F5,O5)}function O5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function QW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var E5={[V7]:"SHADOWMAP_TYPE_PCF",[n8]:"SHADOWMAP_TYPE_VSM"};function D5(J){return E5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R5={[o8]:"ENVMAP_TYPE_CUBE",[F8]:"ENVMAP_TYPE_CUBE",[z7]:"ENVMAP_TYPE_CUBE_UV"};function k5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return R5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var L5={[F8]:"ENVMAP_MODE_REFRACTION"};function V5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return L5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B5={[HK]:"ENVMAP_BLENDING_MULTIPLY",[qK]:"ENVMAP_BLENDING_MIX",[GK]:"ENVMAP_BLENDING_ADD"};function M5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return B5[J.combine]||"ENVMAP_BLENDING_NONE"}function z5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function I5(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=D5($),H=k5($),G=V5($),N=M5($),q=z5($),E=Y5($),L=U5(W),I=K.createProgram(),O,F,w=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(y7).join(`
`),O.length>0)O+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(y7).join(`
`),F.length>0)F+=`
`}else O=[QW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(y7).join(`
`),F=[QW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==E9?"#define TONE_MAPPING":"",$.toneMapping!==E9?m0.tonemapping_pars_fragment:"",$.toneMapping!==E9?W5("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",m0.colorspace_pars_fragment,Z5("linearToOutputTexel",$.outputColorSpace),X5(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(y7).join(`
`);if(X=r$(X),X=tK(X,$),X=eK(X,$),Y=r$(Y),Y=tK(Y,$),Y=eK(Y,$),X=JW(X),Y=JW(Y),$.isRawShaderMaterial!==!0)w=`#version 300 es
`,O=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,F=["#define varying in",$.glslVersion===D$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===D$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let P=w+O+X,M=w+F+Y,A=oK(K,K.VERTEX_SHADER,P),C=oK(K,K.FRAGMENT_SHADER,M);if(K.attachShader(I,A),K.attachShader(I,C),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function _(V){if(J.debug.checkShaderErrors){let g=K.getProgramInfoLog(I)||"",r=K.getShaderInfoLog(A)||"",p=K.getShaderInfoLog(C)||"",u=g.trim(),i=r.trim(),h=p.trim(),J0=!0,Q0=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(J0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,A,C);else{let H0=rK(K,A,"vertex"),z0=rK(K,C,"fragment");f0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+u+`
`+H0+`
`+z0)}else if(u!=="")v0("WebGLProgram: Program Info Log:",u);else if(i===""||h==="")Q0=!1;if(Q0)V.diagnostics={runnable:J0,programLog:u,vertexShader:{log:i,prefix:O},fragmentShader:{log:h,prefix:F}}}K.deleteShader(A),K.deleteShader(C),R=new b7(K,I),z=H5(K,I)}let R;this.getUniforms=function(){if(R===void 0)_(this);return R};let z;this.getAttributes=function(){if(z===void 0)_(this);return z};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(I,eH);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=J5++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=A,this.fragmentShader=C,this}var A5=0;class EW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new DW(J),Q.set(J,$);return $}}class DW{constructor(J){this.id=A5++,this.code=J,this.usedTimes=0}}function C5(J){return J===R8||J===I6||J===A6}function P5(J,Q,$,Z,K,W){let X=new _7,Y=new EW,U=new Set,H=[],G=new Map,N=Z.logarithmicDepthBuffer,q=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(R){if(U.add(R),R===0)return"uv";return`uv${R}`}function I(R,z,d,V,g,r){let p=V.fog,u=g.geometry,i=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,h=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,J0=Q.get(R.envMap||i,h),Q0=!!J0&&J0.mapping===z7?J0.image.height:null,H0=E[R.type];if(R.precision!==null){if(q=Z.getMaxPrecision(R.precision),q!==R.precision)v0("WebGLProgram.getParameters:",R.precision,"not supported, using",q,"instead.")}let z0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,k0=z0!==void 0?z0.length:0,YJ=0;if(u.morphAttributes.position!==void 0)YJ=1;if(u.morphAttributes.normal!==void 0)YJ=2;if(u.morphAttributes.color!==void 0)YJ=3;let JJ,o,W0,D0;if(H0){let y0=w9[H0];JJ=y0.vertexShader,o=y0.fragmentShader}else{JJ=R.vertexShader,o=R.fragmentShader;let y0=Y.getVertexShaderStage(R),QJ=Y.getFragmentShaderStage(R);Y.update(R,y0,QJ),W0=y0.id,D0=QJ.id}let R0=J.getRenderTarget(),w0=J.state.buffers.depth.getReversed(),n0=g.isInstancedMesh===!0,p0=g.isBatchedMesh===!0,l0=!!R.map,t0=!!R.matcap,o0=!!J0,x0=!!R.aoMap,kJ=!!R.lightMap,cJ=!!R.bumpMap&&R.wireframe===!1,UJ=!!R.normalMap,zJ=!!R.displacementMap,LJ=!!R.emissiveMap,NJ=!!R.metalnessMap,S=!!R.roughnessMap,jJ=R.anisotropy>0,a0=R.clearcoat>0,KJ=R.dispersion>0,B=R.iridescence>0,D=R.sheen>0,T=R.transmission>0,m=jJ&&!!R.anisotropyMap,e=a0&&!!R.clearcoatMap,Z0=a0&&!!R.clearcoatNormalMap,q0=a0&&!!R.clearcoatRoughnessMap,c=B&&!!R.iridescenceMap,a=B&&!!R.iridescenceThicknessMap,E0=D&&!!R.sheenColorMap,I0=D&&!!R.sheenRoughnessMap,G0=!!R.specularMap,K0=!!R.specularColorMap,_0=!!R.specularIntensityMap,T0=T&&!!R.transmissionMap,s0=T&&!!R.thicknessMap,j=!!R.gradientMap,X0=!!R.alphaMap,s=R.alphaTest>0,Y0=!!R.alphaHash,L0=!!R.extensions,t=E9;if(R.toneMapped){if(R0===null||R0.isXRRenderTarget===!0)t=J.toneMapping}let U0={shaderID:H0,shaderType:R.type,shaderName:R.name,vertexShader:JJ,fragmentShader:o,defines:R.defines,customVertexShaderID:W0,customFragmentShaderID:D0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:q,batching:p0,batchingColor:p0&&g._colorsTexture!==null,instancing:n0,instancingColor:n0&&g.instanceColor!==null,instancingMorph:n0&&g.morphTexture!==null,outputColorSpace:R0===null?J.outputColorSpace:R0.isXRRenderTarget===!0?R0.texture.colorSpace:i0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:l0,matcap:t0,envMap:o0,envMapMode:o0&&J0.mapping,envMapCubeUVHeight:Q0,aoMap:x0,lightMap:kJ,bumpMap:cJ,normalMap:UJ,displacementMap:zJ,emissiveMap:LJ,normalMapObjectSpace:UJ&&R.normalMapType===BK,normalMapTangentSpace:UJ&&R.normalMapType===F$,packedNormalMap:UJ&&R.normalMapType===F$&&C5(R.normalMap.format),metalnessMap:NJ,roughnessMap:S,anisotropy:jJ,anisotropyMap:m,clearcoat:a0,clearcoatMap:e,clearcoatNormalMap:Z0,clearcoatRoughnessMap:q0,dispersion:KJ,iridescence:B,iridescenceMap:c,iridescenceThicknessMap:a,sheen:D,sheenColorMap:E0,sheenRoughnessMap:I0,specularMap:G0,specularColorMap:K0,specularIntensityMap:_0,transmission:T,transmissionMap:T0,thicknessMap:s0,gradientMap:j,opaque:R.transparent===!1&&R.blending===B7&&R.alphaToCoverage===!1,alphaMap:X0,alphaTest:s,alphaHash:Y0,combine:R.combine,mapUv:l0&&L(R.map.channel),aoMapUv:x0&&L(R.aoMap.channel),lightMapUv:kJ&&L(R.lightMap.channel),bumpMapUv:cJ&&L(R.bumpMap.channel),normalMapUv:UJ&&L(R.normalMap.channel),displacementMapUv:zJ&&L(R.displacementMap.channel),emissiveMapUv:LJ&&L(R.emissiveMap.channel),metalnessMapUv:NJ&&L(R.metalnessMap.channel),roughnessMapUv:S&&L(R.roughnessMap.channel),anisotropyMapUv:m&&L(R.anisotropyMap.channel),clearcoatMapUv:e&&L(R.clearcoatMap.channel),clearcoatNormalMapUv:Z0&&L(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q0&&L(R.clearcoatRoughnessMap.channel),iridescenceMapUv:c&&L(R.iridescenceMap.channel),iridescenceThicknessMapUv:a&&L(R.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&L(R.sheenColorMap.channel),sheenRoughnessMapUv:I0&&L(R.sheenRoughnessMap.channel),specularMapUv:G0&&L(R.specularMap.channel),specularColorMapUv:K0&&L(R.specularColorMap.channel),specularIntensityMapUv:_0&&L(R.specularIntensityMap.channel),transmissionMapUv:T0&&L(R.transmissionMap.channel),thicknessMapUv:s0&&L(R.thicknessMap.channel),alphaMapUv:X0&&L(R.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(UJ||jJ),vertexNormals:!!u.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!u.attributes.uv&&(l0||X0),fog:!!p,useFog:R.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||u.attributes.normal===void 0&&UJ===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:w0,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:YJ,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:r.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:t,decodeVideoTexture:l0&&R.map.isVideoTexture===!0&&i0.getTransfer(R.map.colorSpace)===GJ,decodeVideoTextureEmissive:LJ&&R.emissiveMap.isVideoTexture===!0&&i0.getTransfer(R.emissiveMap.colorSpace)===GJ,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===I9,flipSided:R.side===lJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:L0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(L0&&R.extensions.multiDraw===!0||p0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return U0.vertexUv1s=U.has(1),U0.vertexUv2s=U.has(2),U0.vertexUv3s=U.has(3),U.clear(),U0}function O(R){let z=[];if(R.shaderID)z.push(R.shaderID);else z.push(R.customVertexShaderID),z.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let d in R.defines)z.push(d),z.push(R.defines[d]);if(R.isRawShaderMaterial===!1)F(z,R),w(z,R),z.push(J.outputColorSpace);return z.push(R.customProgramCacheKey),z.join()}function F(R,z){R.push(z.precision),R.push(z.outputColorSpace),R.push(z.envMapMode),R.push(z.envMapCubeUVHeight),R.push(z.mapUv),R.push(z.alphaMapUv),R.push(z.lightMapUv),R.push(z.aoMapUv),R.push(z.bumpMapUv),R.push(z.normalMapUv),R.push(z.displacementMapUv),R.push(z.emissiveMapUv),R.push(z.metalnessMapUv),R.push(z.roughnessMapUv),R.push(z.anisotropyMapUv),R.push(z.clearcoatMapUv),R.push(z.clearcoatNormalMapUv),R.push(z.clearcoatRoughnessMapUv),R.push(z.iridescenceMapUv),R.push(z.iridescenceThicknessMapUv),R.push(z.sheenColorMapUv),R.push(z.sheenRoughnessMapUv),R.push(z.specularMapUv),R.push(z.specularColorMapUv),R.push(z.specularIntensityMapUv),R.push(z.transmissionMapUv),R.push(z.thicknessMapUv),R.push(z.combine),R.push(z.fogExp2),R.push(z.sizeAttenuation),R.push(z.morphTargetsCount),R.push(z.morphAttributeCount),R.push(z.numDirLights),R.push(z.numPointLights),R.push(z.numSpotLights),R.push(z.numSpotLightMaps),R.push(z.numHemiLights),R.push(z.numRectAreaLights),R.push(z.numDirLightShadows),R.push(z.numPointLightShadows),R.push(z.numSpotLightShadows),R.push(z.numSpotLightShadowsWithMaps),R.push(z.numLightProbes),R.push(z.shadowMapType),R.push(z.toneMapping),R.push(z.numClippingPlanes),R.push(z.numClipIntersection),R.push(z.depthPacking)}function w(R,z){if(X.disableAll(),z.instancing)X.enable(0);if(z.instancingColor)X.enable(1);if(z.instancingMorph)X.enable(2);if(z.matcap)X.enable(3);if(z.envMap)X.enable(4);if(z.normalMapObjectSpace)X.enable(5);if(z.normalMapTangentSpace)X.enable(6);if(z.clearcoat)X.enable(7);if(z.iridescence)X.enable(8);if(z.alphaTest)X.enable(9);if(z.vertexColors)X.enable(10);if(z.vertexAlphas)X.enable(11);if(z.vertexUv1s)X.enable(12);if(z.vertexUv2s)X.enable(13);if(z.vertexUv3s)X.enable(14);if(z.vertexTangents)X.enable(15);if(z.anisotropy)X.enable(16);if(z.alphaHash)X.enable(17);if(z.batching)X.enable(18);if(z.dispersion)X.enable(19);if(z.batchingColor)X.enable(20);if(z.gradientMap)X.enable(21);if(z.packedNormalMap)X.enable(22);if(z.vertexNormals)X.enable(23);if(R.push(X.mask),X.disableAll(),z.fog)X.enable(0);if(z.useFog)X.enable(1);if(z.flatShading)X.enable(2);if(z.logarithmicDepthBuffer)X.enable(3);if(z.reversedDepthBuffer)X.enable(4);if(z.skinning)X.enable(5);if(z.morphTargets)X.enable(6);if(z.morphNormals)X.enable(7);if(z.morphColors)X.enable(8);if(z.premultipliedAlpha)X.enable(9);if(z.shadowMapEnabled)X.enable(10);if(z.doubleSided)X.enable(11);if(z.flipSided)X.enable(12);if(z.useDepthPacking)X.enable(13);if(z.dithering)X.enable(14);if(z.transmission)X.enable(15);if(z.sheen)X.enable(16);if(z.opaque)X.enable(17);if(z.pointsUvs)X.enable(18);if(z.decodeVideoTexture)X.enable(19);if(z.decodeVideoTextureEmissive)X.enable(20);if(z.alphaToCoverage)X.enable(21);if(z.numLightProbeGrids>0)X.enable(22);if(z.hasPositionAttribute)X.enable(23);R.push(X.mask)}function P(R){let z=E[R.type],d;if(z){let V=w9[z];d=fK.clone(V.uniforms)}else d=R.uniforms;return d}function M(R,z){let d=G.get(z);if(d!==void 0)++d.usedTimes;else d=new I5(J,z,R,K),H.push(d),G.set(z,d);return d}function A(R){if(--R.usedTimes===0){let z=H.indexOf(R);H[z]=H[H.length-1],H.pop(),G.delete(R.cacheKey),R.destroy()}}function C(R){Y.remove(R)}function _(){Y.dispose()}return{getParameters:I,getProgramCacheKey:O,getUniforms:P,acquireProgram:M,releaseProgram:A,releaseShaderCache:C,programs:H,dispose:_}}function _5(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function w5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function $W(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function ZW(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let E=0;if(q.isInstancedMesh)E+=2;if(q.isSkinnedMesh)E+=1;return E}function Y(q,E,L,I,O,F){let w=J[Q];if(w===void 0)w={id:q.id,object:q,geometry:E,material:L,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:O,group:F},J[Q]=w;else w.id=q.id,w.object=q,w.geometry=E,w.material=L,w.materialVariant=X(q),w.groupOrder=I,w.renderOrder=q.renderOrder,w.z=O,w.group=F;return Q++,w}function U(q,E,L,I,O,F){let w=Y(q,E,L,I,O,F);if(L.transmission>0)Z.push(w);else if(L.transparent===!0)K.push(w);else $.push(w)}function H(q,E,L,I,O,F){let w=Y(q,E,L,I,O,F);if(L.transmission>0)Z.unshift(w);else if(L.transparent===!0)K.unshift(w);else $.unshift(w)}function G(q,E,L){if($.length>1)$.sort(q||w5);if(Z.length>1)Z.sort(E||$W);if(K.length>1)K.sort(E||$W);if(L)$.reverse(),Z.reverse(),K.reverse()}function N(){for(let q=Q,E=J.length;q<E;q++){let L=J[q];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:N,sort:G}}function T5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new ZW,J.set(Z,[X]);else if(K>=W.length)X=new ZW,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function S5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new u0};break;case"SpotLight":$={position:new v,direction:new v,color:new u0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new u0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new u0,groundColor:new u0};break;case"RectAreaLight":$={color:new u0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function j5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var f5=0;function v5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function y5(J){let Q=new S5,$=j5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new v);let K=new v,W=new HJ,X=new HJ;function Y(H){let G=0,N=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let E=0,L=0,I=0,O=0,F=0,w=0,P=0,M=0,A=0,C=0,_=0;H.sort(v5);for(let z=0,d=H.length;z<d;z++){let V=H[z],g=V.color,r=V.intensity,p=V.distance,u=null;if(V.shadow&&V.shadow.map)if(V.shadow.map.texture.format===R8)u=V.shadow.map.texture;else u=V.shadow.map.depthTexture||V.shadow.map.texture;if(V.isAmbientLight)G+=g.r*r,N+=g.g*r,q+=g.b*r;else if(V.isLightProbe){for(let i=0;i<9;i++)Z.probe[i].addScaledVector(V.sh.coefficients[i],r);_++}else if(V.isDirectionalLight){let i=Q.get(V);if(i.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let h=V.shadow,J0=$.get(V);J0.shadowIntensity=h.intensity,J0.shadowBias=h.bias,J0.shadowNormalBias=h.normalBias,J0.shadowRadius=h.radius,J0.shadowMapSize=h.mapSize,Z.directionalShadow[E]=J0,Z.directionalShadowMap[E]=u,Z.directionalShadowMatrix[E]=V.shadow.matrix,w++}Z.directional[E]=i,E++}else if(V.isSpotLight){let i=Q.get(V);i.position.setFromMatrixPosition(V.matrixWorld),i.color.copy(g).multiplyScalar(r),i.distance=p,i.coneCos=Math.cos(V.angle),i.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),i.decay=V.decay,Z.spot[I]=i;let h=V.shadow;if(V.map){if(Z.spotLightMap[A]=V.map,A++,h.updateMatrices(V),V.castShadow)C++}if(Z.spotLightMatrix[I]=h.matrix,V.castShadow){let J0=$.get(V);J0.shadowIntensity=h.intensity,J0.shadowBias=h.bias,J0.shadowNormalBias=h.normalBias,J0.shadowRadius=h.radius,J0.shadowMapSize=h.mapSize,Z.spotShadow[I]=J0,Z.spotShadowMap[I]=u,M++}I++}else if(V.isRectAreaLight){let i=Q.get(V);i.color.copy(g).multiplyScalar(r),i.halfWidth.set(V.width*0.5,0,0),i.halfHeight.set(0,V.height*0.5,0),Z.rectArea[O]=i,O++}else if(V.isPointLight){let i=Q.get(V);if(i.color.copy(V.color).multiplyScalar(V.intensity),i.distance=V.distance,i.decay=V.decay,V.castShadow){let h=V.shadow,J0=$.get(V);J0.shadowIntensity=h.intensity,J0.shadowBias=h.bias,J0.shadowNormalBias=h.normalBias,J0.shadowRadius=h.radius,J0.shadowMapSize=h.mapSize,J0.shadowCameraNear=h.camera.near,J0.shadowCameraFar=h.camera.far,Z.pointShadow[L]=J0,Z.pointShadowMap[L]=u,Z.pointShadowMatrix[L]=V.shadow.matrix,P++}Z.point[L]=i,L++}else if(V.isHemisphereLight){let i=Q.get(V);i.skyColor.copy(V.color).multiplyScalar(r),i.groundColor.copy(V.groundColor).multiplyScalar(r),Z.hemi[F]=i,F++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=O0.LTC_FLOAT_1,Z.rectAreaLTC2=O0.LTC_FLOAT_2;else Z.rectAreaLTC1=O0.LTC_HALF_1,Z.rectAreaLTC2=O0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=N,Z.ambient[2]=q;let R=Z.hash;if(R.directionalLength!==E||R.pointLength!==L||R.spotLength!==I||R.rectAreaLength!==O||R.hemiLength!==F||R.numDirectionalShadows!==w||R.numPointShadows!==P||R.numSpotShadows!==M||R.numSpotMaps!==A||R.numLightProbes!==_)Z.directional.length=E,Z.spot.length=I,Z.rectArea.length=O,Z.point.length=L,Z.hemi.length=F,Z.directionalShadow.length=w,Z.directionalShadowMap.length=w,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.spotShadow.length=M,Z.spotShadowMap.length=M,Z.directionalShadowMatrix.length=w,Z.pointShadowMatrix.length=P,Z.spotLightMatrix.length=M+A-C,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=_,R.directionalLength=E,R.pointLength=L,R.spotLength=I,R.rectAreaLength=O,R.hemiLength=F,R.numDirectionalShadows=w,R.numPointShadows=P,R.numSpotShadows=M,R.numSpotMaps=A,R.numLightProbes=_,Z.version=f5++}function U(H,G){let N=0,q=0,E=0,L=0,I=0,O=G.matrixWorldInverse;for(let F=0,w=H.length;F<w;F++){let P=H[F];if(P.isDirectionalLight){let M=Z.directional[N];M.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(K),M.direction.transformDirection(O),N++}else if(P.isSpotLight){let M=Z.spot[E];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(O),M.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(K),M.direction.transformDirection(O),E++}else if(P.isRectAreaLight){let M=Z.rectArea[L];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(O),X.identity(),W.copy(P.matrixWorld),W.premultiply(O),X.extractRotation(W),M.halfWidth.set(P.width*0.5,0,0),M.halfHeight.set(0,P.height*0.5,0),M.halfWidth.applyMatrix4(X),M.halfHeight.applyMatrix4(X),L++}else if(P.isPointLight){let M=Z.point[q];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(O),q++}else if(P.isHemisphereLight){let M=Z.hemi[I];M.direction.setFromMatrixPosition(P.matrixWorld),M.direction.transformDirection(O),I++}}}return{setup:Y,setupView:U,state:Z}}function KW(J){let Q=new y5(J),$=[],Z=[],K=[];function W(q){N.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function U(q){K.push(q)}function H(){Q.setup($)}function G(q){Q.setupView($,q)}let N={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:N,setupLights:H,setupLightsView:G,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function b5(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new KW(J),Q.set(K,[Y]);else if(W>=X.length)Y=new KW(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var h5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g5=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],p5=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],WW=new HJ,v7=new v,o$=new v;function m5(J,Q,$){let Z=new T7,K=new d0,W=new d0,X=new DJ,Y=new A$,U=new C$,H={},G=$.maxTextureSize,N={[s8]:lJ,[lJ]:s8,[I9]:I9},q=new K9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new d0},radius:{value:4}},vertexShader:h5,fragmentShader:x5}),E=q.clone();E.defines.HORIZONTAL_PASS=1;let L=new k9;L.setAttribute("position",new eJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new S0(L,q),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=V7;let F=this.type;this.render=function(C,_,R){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(C.length===0)return;if(this.type===yZ)v0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=V7;let z=J.getRenderTarget(),d=J.getActiveCubeFace(),V=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(A9),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let r=F!==this.type;if(r)_.traverse(function(p){if(p.material)if(Array.isArray(p.material))p.material.forEach((u)=>u.needsUpdate=!0);else p.material.needsUpdate=!0});for(let p=0,u=C.length;p<u;p++){let i=C[p],h=i.shadow;if(h===void 0){v0("WebGLShadowMap:",i,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;K.copy(h.mapSize);let J0=h.getFrameExtents();if(K.multiply(J0),W.copy(h.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/J0.x),K.x=W.x*J0.x,h.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/J0.y),K.y=W.y*J0.y,h.mapSize.y=W.y}let Q0=J.state.buffers.depth.getReversed();if(h.camera._reversedDepth=Q0,h.map===null||r===!0){if(h.map!==null){if(h.map.depthTexture!==null)h.map.depthTexture.dispose(),h.map.depthTexture=null;h.map.dispose()}if(this.type===n8){if(i.isPointLight){v0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}h.map=new Z9(K.x,K.y,{format:R8,type:x9,minFilter:BJ,magFilter:BJ,generateMipmaps:!1}),h.map.texture.name=i.name+".shadowMap",h.map.depthTexture=new $8(K.x,K.y,h9),h.map.depthTexture.name=i.name+".shadowMapDepth",h.map.depthTexture.format=E8,h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=e9,h.map.depthTexture.magFilter=e9}else{if(i.isPointLight)h.map=new t$(K.x),h.map.depthTexture=new M$(K.x,J8);else h.map=new Z9(K.x,K.y),h.map.depthTexture=new $8(K.x,K.y,J8);if(h.map.depthTexture.name=i.name+".shadowMap",h.map.depthTexture.format=E8,this.type===V7)h.map.depthTexture.compareFunction=Q0?P6:C6,h.map.depthTexture.minFilter=BJ,h.map.depthTexture.magFilter=BJ;else h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=e9,h.map.depthTexture.magFilter=e9}h.camera.updateProjectionMatrix()}let H0=h.map.isWebGLCubeRenderTarget?6:1;for(let z0=0;z0<H0;z0++){if(h.map.isWebGLCubeRenderTarget)J.setRenderTarget(h.map,z0),J.clear();else{if(z0===0)J.setRenderTarget(h.map),J.clear();let k0=h.getViewport(z0);X.set(W.x*k0.x,W.y*k0.y,W.x*k0.z,W.y*k0.w),g.viewport(X)}if(i.isPointLight){let{camera:k0,matrix:YJ}=h,JJ=i.distance||k0.far;if(JJ!==k0.far)k0.far=JJ,k0.updateProjectionMatrix();v7.setFromMatrixPosition(i.matrixWorld),k0.position.copy(v7),o$.copy(k0.position),o$.add(g5[z0]),k0.up.copy(p5[z0]),k0.lookAt(o$),k0.updateMatrixWorld(),YJ.makeTranslation(-v7.x,-v7.y,-v7.z),WW.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),h._frustum.setFromProjectionMatrix(WW,k0.coordinateSystem,k0.reversedDepth)}else h.updateMatrices(i);Z=h.getFrustum(),M(_,R,h.camera,i,this.type)}if(h.isPointLightShadow!==!0&&this.type===n8)w(h,R);h.needsUpdate=!1}F=this.type,O.needsUpdate=!1,J.setRenderTarget(z,d,V)};function w(C,_){let R=Q.update(I);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,E.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,E.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new Z9(K.x,K.y,{format:R8,type:x9});q.uniforms.shadow_pass.value=C.map.depthTexture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(_,null,R,q,I,null),E.uniforms.shadow_pass.value=C.mapPass.texture,E.uniforms.resolution.value=C.mapSize,E.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(_,null,R,E,I,null)}function P(C,_,R,z){let d=null,V=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)d=V;else if(d=R.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let g=d.uuid,r=_.uuid,p=H[g];if(p===void 0)p={},H[g]=p;let u=p[r];if(u===void 0)u=d.clone(),p[r]=u,_.addEventListener("dispose",A);d=u}if(d.visible=_.visible,d.wireframe=_.wireframe,z===n8)d.side=_.shadowSide!==null?_.shadowSide:_.side;else d.side=_.shadowSide!==null?_.shadowSide:N[_.side];if(d.alphaMap=_.alphaMap,d.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,d.map=_.map,d.clipShadows=_.clipShadows,d.clippingPlanes=_.clippingPlanes,d.clipIntersection=_.clipIntersection,d.displacementMap=_.displacementMap,d.displacementScale=_.displacementScale,d.displacementBias=_.displacementBias,d.wireframeLinewidth=_.wireframeLinewidth,d.linewidth=_.linewidth,R.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let g=J.properties.get(d);g.light=R}return d}function M(C,_,R,z,d){if(C.visible===!1)return;if(C.layers.test(_.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&d===n8)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);let r=Q.update(C),p=C.material;if(Array.isArray(p)){let u=r.groups;for(let i=0,h=u.length;i<h;i++){let J0=u[i],Q0=p[J0.materialIndex];if(Q0&&Q0.visible){let H0=P(C,Q0,z,d);C.onBeforeShadow(J,C,_,R,r,H0,J0),J.renderBufferDirect(R,null,r,H0,C,J0),C.onAfterShadow(J,C,_,R,r,H0,J0)}}}else if(p.visible){let u=P(C,p,z,d);C.onBeforeShadow(J,C,_,R,r,u,null),J.renderBufferDirect(R,null,r,u,C,null),C.onAfterShadow(J,C,_,R,r,u,null)}}}let g=C.children;for(let r=0,p=g.length;r<p;r++)M(g[r],_,R,z,d)}function A(C){C.target.removeEventListener("dispose",A);for(let R in H){let z=H[R],d=C.target.uuid;if(d in z)z[d].dispose(),delete z[d]}}}function l5(J,Q){function $(){let j=!1,X0=new DJ,s=null,Y0=new DJ(0,0,0,0);return{setMask:function(L0){if(s!==L0&&!j)J.colorMask(L0,L0,L0,L0),s=L0},setLocked:function(L0){j=L0},setClear:function(L0,t,U0,y0,QJ){if(QJ===!0)L0*=y0,t*=y0,U0*=y0;if(X0.set(L0,t,U0,y0),Y0.equals(X0)===!1)J.clearColor(L0,t,U0,y0),Y0.copy(X0)},reset:function(){j=!1,s=null,Y0.set(-1,0,0,0)}}}function Z(){let j=!1,X0=!1,s=null,Y0=null,L0=null;return{setReversed:function(t){if(X0!==t){let U0=Q.get("EXT_clip_control");if(t)U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.ZERO_TO_ONE_EXT);else U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.NEGATIVE_ONE_TO_ONE_EXT);X0=t;let y0=L0;L0=null,this.setClear(y0)}},getReversed:function(){return X0},setTest:function(t){if(t)R0(J.DEPTH_TEST);else w0(J.DEPTH_TEST)},setMask:function(t){if(s!==t&&!j)J.depthMask(t),s=t},setFunc:function(t){if(X0)t=SK[t];if(Y0!==t){switch(t){case $K:J.depthFunc(J.NEVER);break;case ZK:J.depthFunc(J.ALWAYS);break;case KK:J.depthFunc(J.LESS);break;case IQ:J.depthFunc(J.LEQUAL);break;case WK:J.depthFunc(J.EQUAL);break;case XK:J.depthFunc(J.GEQUAL);break;case YK:J.depthFunc(J.GREATER);break;case UK:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}Y0=t}},setLocked:function(t){j=t},setClear:function(t){if(L0!==t){if(L0=t,X0)t=1-t;J.clearDepth(t)}},reset:function(){j=!1,s=null,Y0=null,L0=null,X0=!1}}}function K(){let j=!1,X0=null,s=null,Y0=null,L0=null,t=null,U0=null,y0=null,QJ=null;return{setTest:function(e0){if(!j)if(e0)R0(J.STENCIL_TEST);else w0(J.STENCIL_TEST)},setMask:function(e0){if(X0!==e0&&!j)J.stencilMask(e0),X0=e0},setFunc:function(e0,vJ,H9){if(s!==e0||Y0!==vJ||L0!==H9)J.stencilFunc(e0,vJ,H9),s=e0,Y0=vJ,L0=H9},setOp:function(e0,vJ,H9){if(t!==e0||U0!==vJ||y0!==H9)J.stencilOp(e0,vJ,H9),t=e0,U0=vJ,y0=H9},setLocked:function(e0){j=e0},setClear:function(e0){if(QJ!==e0)J.clearStencil(e0),QJ=e0},reset:function(){j=!1,X0=null,s=null,Y0=null,L0=null,t=null,U0=null,y0=null,QJ=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,G={},N={},q={},E=new WeakMap,L=[],I=null,O=!1,F=null,w=null,P=null,M=null,A=null,C=null,_=null,R=new u0(0,0,0),z=0,d=!1,V=null,g=null,r=null,p=null,u=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),h=!1,J0=0,Q0=J.getParameter(J.VERSION);if(Q0.indexOf("WebGL")!==-1)J0=parseFloat(/^WebGL (\d)/.exec(Q0)[1]),h=J0>=1;else if(Q0.indexOf("OpenGL ES")!==-1)J0=parseFloat(/^OpenGL ES (\d)/.exec(Q0)[1]),h=J0>=2;let H0=null,z0={},k0=J.getParameter(J.SCISSOR_BOX),YJ=J.getParameter(J.VIEWPORT),JJ=new DJ().fromArray(k0),o=new DJ().fromArray(YJ);function W0(j,X0,s,Y0){let L0=new Uint8Array(4),t=J.createTexture();J.bindTexture(j,t),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let U0=0;U0<s;U0++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D(X0,0,J.RGBA,1,1,Y0,0,J.RGBA,J.UNSIGNED_BYTE,L0);else J.texImage2D(X0+U0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,L0);return t}let D0={};D0[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),D0[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),D0[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),D0[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),R0(J.DEPTH_TEST),X.setFunc(IQ),cJ(!1),UJ(VQ),R0(J.CULL_FACE),x0(A9);function R0(j){if(G[j]!==!0)J.enable(j),G[j]=!0}function w0(j){if(G[j]!==!1)J.disable(j),G[j]=!1}function n0(j,X0){if(q[j]!==X0){if(J.bindFramebuffer(j,X0),q[j]=X0,j===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=X0;if(j===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=X0;return!0}return!1}function p0(j,X0){let s=L,Y0=!1;if(j){if(s=E.get(X0),s===void 0)s=[],E.set(X0,s);let L0=j.textures;if(s.length!==L0.length||s[0]!==J.COLOR_ATTACHMENT0){for(let t=0,U0=L0.length;t<U0;t++)s[t]=J.COLOR_ATTACHMENT0+t;s.length=L0.length,Y0=!0}}else if(s[0]!==J.BACK)s[0]=J.BACK,Y0=!0;if(Y0)J.drawBuffers(s)}function l0(j){if(I!==j)return J.useProgram(j),I=j,!0;return!1}let t0={[i8]:J.FUNC_ADD,[hZ]:J.FUNC_SUBTRACT,[xZ]:J.FUNC_REVERSE_SUBTRACT};t0[gZ]=J.MIN,t0[pZ]=J.MAX;let o0={[mZ]:J.ZERO,[lZ]:J.ONE,[dZ]:J.SRC_COLOR,[cZ]:J.SRC_ALPHA,[rZ]:J.SRC_ALPHA_SATURATE,[oZ]:J.DST_COLOR,[sZ]:J.DST_ALPHA,[uZ]:J.ONE_MINUS_SRC_COLOR,[nZ]:J.ONE_MINUS_SRC_ALPHA,[aZ]:J.ONE_MINUS_DST_COLOR,[iZ]:J.ONE_MINUS_DST_ALPHA,[tZ]:J.CONSTANT_COLOR,[eZ]:J.ONE_MINUS_CONSTANT_COLOR,[JK]:J.CONSTANT_ALPHA,[QK]:J.ONE_MINUS_CONSTANT_ALPHA};function x0(j,X0,s,Y0,L0,t,U0,y0,QJ,e0){if(j===A9){if(O===!0)w0(J.BLEND),O=!1;return}if(O===!1)R0(J.BLEND),O=!0;if(j!==bZ){if(j!==F||e0!==d){if(w!==i8||A!==i8)J.blendEquation(J.FUNC_ADD),w=i8,A=i8;if(e0)switch(j){case B7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case BQ:J.blendFunc(J.ONE,J.ONE);break;case MQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case zQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",j);break}else switch(j){case B7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case BQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case MQ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zQ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",j);break}P=null,M=null,C=null,_=null,R.set(0,0,0),z=0,F=j,d=e0}return}if(L0=L0||X0,t=t||s,U0=U0||Y0,X0!==w||L0!==A)J.blendEquationSeparate(t0[X0],t0[L0]),w=X0,A=L0;if(s!==P||Y0!==M||t!==C||U0!==_)J.blendFuncSeparate(o0[s],o0[Y0],o0[t],o0[U0]),P=s,M=Y0,C=t,_=U0;if(y0.equals(R)===!1||QJ!==z)J.blendColor(y0.r,y0.g,y0.b,QJ),R.copy(y0),z=QJ;F=j,d=!1}function kJ(j,X0){j.side===I9?w0(J.CULL_FACE):R0(J.CULL_FACE);let s=j.side===lJ;if(X0)s=!s;cJ(s),j.blending===B7&&j.transparent===!1?x0(A9):x0(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),X.setFunc(j.depthFunc),X.setTest(j.depthTest),X.setMask(j.depthWrite),W.setMask(j.colorWrite);let Y0=j.stencilWrite;if(Y.setTest(Y0),Y0)Y.setMask(j.stencilWriteMask),Y.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),Y.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);LJ(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?R0(J.SAMPLE_ALPHA_TO_COVERAGE):w0(J.SAMPLE_ALPHA_TO_COVERAGE)}function cJ(j){if(V!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);V=j}}function UJ(j){if(j!==fZ){if(R0(J.CULL_FACE),j!==g)if(j===VQ)J.cullFace(J.BACK);else if(j===vZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else w0(J.CULL_FACE);g=j}function zJ(j){if(j!==r){if(h)J.lineWidth(j);r=j}}function LJ(j,X0,s){if(j){if(R0(J.POLYGON_OFFSET_FILL),p!==X0||u!==s){if(p=X0,u=s,X.getReversed())X0=-X0;J.polygonOffset(X0,s)}}else w0(J.POLYGON_OFFSET_FILL)}function NJ(j){if(j)R0(J.SCISSOR_TEST);else w0(J.SCISSOR_TEST)}function S(j){if(j===void 0)j=J.TEXTURE0+i-1;if(H0!==j)J.activeTexture(j),H0=j}function jJ(j,X0,s){if(s===void 0)if(H0===null)s=J.TEXTURE0+i-1;else s=H0;let Y0=z0[s];if(Y0===void 0)Y0={type:void 0,texture:void 0},z0[s]=Y0;if(Y0.type!==j||Y0.texture!==X0){if(H0!==s)J.activeTexture(s),H0=s;J.bindTexture(j,X0||D0[j]),Y0.type=j,Y0.texture=X0}}function a0(){let j=z0[H0];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function KJ(){try{J.compressedTexImage2D(...arguments)}catch(j){f0("WebGLState:",j)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(j){f0("WebGLState:",j)}}function D(){try{J.texSubImage2D(...arguments)}catch(j){f0("WebGLState:",j)}}function T(){try{J.texSubImage3D(...arguments)}catch(j){f0("WebGLState:",j)}}function m(){try{J.compressedTexSubImage2D(...arguments)}catch(j){f0("WebGLState:",j)}}function e(){try{J.compressedTexSubImage3D(...arguments)}catch(j){f0("WebGLState:",j)}}function Z0(){try{J.texStorage2D(...arguments)}catch(j){f0("WebGLState:",j)}}function q0(){try{J.texStorage3D(...arguments)}catch(j){f0("WebGLState:",j)}}function c(){try{J.texImage2D(...arguments)}catch(j){f0("WebGLState:",j)}}function a(){try{J.texImage3D(...arguments)}catch(j){f0("WebGLState:",j)}}function E0(j){if(N[j]!==void 0)return N[j];else return J.getParameter(j)}function I0(j,X0){if(N[j]!==X0)J.pixelStorei(j,X0),N[j]=X0}function G0(j){if(JJ.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),JJ.copy(j)}function K0(j){if(o.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),o.copy(j)}function _0(j,X0){let s=H.get(X0);if(s===void 0)s=new WeakMap,H.set(X0,s);let Y0=s.get(j);if(Y0===void 0)Y0=J.getUniformBlockIndex(X0,j.name),s.set(j,Y0)}function T0(j,X0){let Y0=H.get(X0).get(j);if(U.get(X0)!==Y0)J.uniformBlockBinding(X0,Y0,j.__bindingPointIndex),U.set(X0,Y0)}function s0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},N={},H0=null,z0={},q={},E=new WeakMap,L=[],I=null,O=!1,F=null,w=null,P=null,M=null,A=null,C=null,_=null,R=new u0(0,0,0),z=0,d=!1,V=null,g=null,r=null,p=null,u=null,JJ.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:R0,disable:w0,bindFramebuffer:n0,drawBuffers:p0,useProgram:l0,setBlending:x0,setMaterial:kJ,setFlipSided:cJ,setCullFace:UJ,setLineWidth:zJ,setPolygonOffset:LJ,setScissorTest:NJ,activeTexture:S,bindTexture:jJ,unbindTexture:a0,compressedTexImage2D:KJ,compressedTexImage3D:B,texImage2D:c,texImage3D:a,pixelStorei:I0,getParameter:E0,updateUBOMapping:_0,uniformBlockBinding:T0,texStorage2D:Z0,texStorage3D:q0,texSubImage2D:D,texSubImage3D:T,compressedTexSubImage2D:m,compressedTexSubImage3D:e,scissor:G0,viewport:K0,reset:s0}}function d5(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new d0,G=new WeakMap,N=new Set,q,E=new WeakMap,L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function I(B,D){return L?new OffscreenCanvas(B,D):u8("canvas")}function O(B,D,T){let m=1,e=KJ(B);if(e.width>T||e.height>T)m=T/Math.max(e.width,e.height);if(m<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Z0=Math.floor(m*e.width),q0=Math.floor(m*e.height);if(q===void 0)q=I(Z0,q0);let c=D?I(Z0,q0):q;return c.width=Z0,c.height=q0,c.getContext("2d").drawImage(B,0,0,Z0,q0),v0("WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+Z0+"x"+q0+")."),c}else{if("data"in B)v0("WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return B}return B}function F(B){return B.generateMipmaps}function w(B){J.generateMipmap(B)}function P(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(B,D,T,m,e,Z0=!1){if(B!==null){if(J[B]!==void 0)return J[B];v0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let q0;if(m){if(q0=Q.get("EXT_texture_norm16"),!q0)v0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=D;if(D===J.RED){if(T===J.FLOAT)c=J.R32F;if(T===J.HALF_FLOAT)c=J.R16F;if(T===J.UNSIGNED_BYTE)c=J.R8;if(T===J.UNSIGNED_SHORT&&q0)c=q0.R16_EXT;if(T===J.SHORT&&q0)c=q0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.R8UI;if(T===J.UNSIGNED_SHORT)c=J.R16UI;if(T===J.UNSIGNED_INT)c=J.R32UI;if(T===J.BYTE)c=J.R8I;if(T===J.SHORT)c=J.R16I;if(T===J.INT)c=J.R32I}if(D===J.RG){if(T===J.FLOAT)c=J.RG32F;if(T===J.HALF_FLOAT)c=J.RG16F;if(T===J.UNSIGNED_BYTE)c=J.RG8;if(T===J.UNSIGNED_SHORT&&q0)c=q0.RG16_EXT;if(T===J.SHORT&&q0)c=q0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RG8UI;if(T===J.UNSIGNED_SHORT)c=J.RG16UI;if(T===J.UNSIGNED_INT)c=J.RG32UI;if(T===J.BYTE)c=J.RG8I;if(T===J.SHORT)c=J.RG16I;if(T===J.INT)c=J.RG32I}if(D===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RGB8UI;if(T===J.UNSIGNED_SHORT)c=J.RGB16UI;if(T===J.UNSIGNED_INT)c=J.RGB32UI;if(T===J.BYTE)c=J.RGB8I;if(T===J.SHORT)c=J.RGB16I;if(T===J.INT)c=J.RGB32I}if(D===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(T===J.UNSIGNED_INT)c=J.RGBA32UI;if(T===J.BYTE)c=J.RGBA8I;if(T===J.SHORT)c=J.RGBA16I;if(T===J.INT)c=J.RGBA32I}if(D===J.RGB){if(T===J.UNSIGNED_SHORT&&q0)c=q0.RGB16_EXT;if(T===J.SHORT&&q0)c=q0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(D===J.RGBA){let a=Z0?E$:i0.getTransfer(e);if(T===J.FLOAT)c=J.RGBA32F;if(T===J.HALF_FLOAT)c=J.RGBA16F;if(T===J.UNSIGNED_BYTE)c=a===GJ?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&q0)c=q0.RGBA16_EXT;if(T===J.SHORT&&q0)c=q0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function A(B,D){let T;if(B){if(D===null||D===J8||D===a8)T=J.DEPTH24_STENCIL8;else if(D===h9)T=J.DEPTH32F_STENCIL8;else if(D===A7)T=J.DEPTH24_STENCIL8,v0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===J8||D===a8)T=J.DEPTH_COMPONENT24;else if(D===h9)T=J.DEPTH_COMPONENT32F;else if(D===A7)T=J.DEPTH_COMPONENT16;return T}function C(B,D){if(F(B)===!0||B.isFramebufferTexture&&B.minFilter!==e9&&B.minFilter!==BJ)return Math.log2(Math.max(D.width,D.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return D.mipmaps.length;else return 1}function _(B){let D=B.target;if(D.removeEventListener("dispose",_),z(D),D.isVideoTexture)G.delete(D);if(D.isHTMLTexture)N.delete(D)}function R(B){let D=B.target;D.removeEventListener("dispose",R),V(D)}function z(B){let D=Z.get(B);if(D.__webglInit===void 0)return;let T=B.source,m=E.get(T);if(m){let e=m[D.__cacheKey];if(e.usedTimes--,e.usedTimes===0)d(B);if(Object.keys(m).length===0)E.delete(T)}Z.remove(B)}function d(B){let D=Z.get(B);J.deleteTexture(D.__webglTexture);let T=B.source,m=E.get(T);delete m[D.__cacheKey],X.memory.textures--}function V(B){let D=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(D.__webglFramebuffer[m]))for(let e=0;e<D.__webglFramebuffer[m].length;e++)J.deleteFramebuffer(D.__webglFramebuffer[m][e]);else J.deleteFramebuffer(D.__webglFramebuffer[m]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[m])}else{if(Array.isArray(D.__webglFramebuffer))for(let m=0;m<D.__webglFramebuffer.length;m++)J.deleteFramebuffer(D.__webglFramebuffer[m]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let m=0;m<D.__webglColorRenderbuffer.length;m++)if(D.__webglColorRenderbuffer[m])J.deleteRenderbuffer(D.__webglColorRenderbuffer[m])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let T=B.textures;for(let m=0,e=T.length;m<e;m++){let Z0=Z.get(T[m]);if(Z0.__webglTexture)J.deleteTexture(Z0.__webglTexture),X.memory.textures--;Z.remove(T[m])}Z.remove(B)}let g=0;function r(){g=0}function p(){return g}function u(B){g=B}function i(){let B=g;if(B>=K.maxTextures)v0("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+K.maxTextures);return g+=1,B}function h(B){let D=[];return D.push(B.wrapS),D.push(B.wrapT),D.push(B.wrapR||0),D.push(B.magFilter),D.push(B.minFilter),D.push(B.anisotropy),D.push(B.internalFormat),D.push(B.format),D.push(B.type),D.push(B.generateMipmaps),D.push(B.premultiplyAlpha),D.push(B.flipY),D.push(B.unpackAlignment),D.push(B.colorSpace),D.join()}function J0(B,D){let T=Z.get(B);if(B.isVideoTexture)jJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&T.__version!==B.version){let m=B.image;if(m===null)v0("WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)v0("WebGLRenderer: Texture marked for update but image is incomplete");else{w0(T,B,D);return}}else if(B.isExternalTexture)T.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+D)}function Q0(B,D){let T=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&T.__version!==B.version){w0(T,B,D);return}else if(B.isExternalTexture)T.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+D)}function H0(B,D){let T=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&T.__version!==B.version){w0(T,B,D);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+D)}function z0(B,D){let T=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&T.__version!==B.version){n0(T,B,D);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+D)}let k0={[R6]:J.REPEAT,[k6]:J.CLAMP_TO_EDGE,[NK]:J.MIRRORED_REPEAT},YJ={[e9]:J.NEAREST,[FK]:J.NEAREST_MIPMAP_NEAREST,[I7]:J.NEAREST_MIPMAP_LINEAR,[BJ]:J.LINEAR,[L6]:J.LINEAR_MIPMAP_NEAREST,[O8]:J.LINEAR_MIPMAP_LINEAR},JJ={[MK]:J.NEVER,[PK]:J.ALWAYS,[zK]:J.LESS,[C6]:J.LEQUAL,[IK]:J.EQUAL,[P6]:J.GEQUAL,[AK]:J.GREATER,[CK]:J.NOTEQUAL};function o(B,D){if(D.type===h9&&Q.has("OES_texture_float_linear")===!1&&(D.magFilter===BJ||D.magFilter===L6||D.magFilter===I7||D.magFilter===O8||D.minFilter===BJ||D.minFilter===L6||D.minFilter===I7||D.minFilter===O8))v0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,k0[D.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,k0[D.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,k0[D.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,YJ[D.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,YJ[D.minFilter]),D.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,JJ[D.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===e9)return;if(D.minFilter!==I7&&D.minFilter!==O8)return;if(D.type===h9&&Q.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,K.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function W0(B,D){let T=!1;if(B.__webglInit===void 0)B.__webglInit=!0,D.addEventListener("dispose",_);let m=D.source,e=E.get(m);if(e===void 0)e={},E.set(m,e);let Z0=h(D);if(Z0!==B.__cacheKey){if(e[Z0]===void 0)e[Z0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,T=!0;e[Z0].usedTimes++;let q0=e[B.__cacheKey];if(q0!==void 0){if(e[B.__cacheKey].usedTimes--,q0.usedTimes===0)d(D)}B.__cacheKey=Z0,B.__webglTexture=e[Z0].texture}return T}function D0(B,D,T){return Math.floor(Math.floor(B/T)/D)}function R0(B,D,T,m){let Z0=B.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,T,m,D.data);else{Z0.sort((I0,G0)=>I0.start-G0.start);let q0=0;for(let I0=1;I0<Z0.length;I0++){let G0=Z0[q0],K0=Z0[I0],_0=G0.start+G0.count,T0=D0(K0.start,D.width,4),s0=D0(G0.start,D.width,4);if(K0.start<=_0+1&&T0===s0&&D0(K0.start+K0.count-1,D.width,4)===T0)G0.count=Math.max(G0.count,K0.start+K0.count-G0.start);else++q0,Z0[q0]=K0}Z0.length=q0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),E0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let I0=0,G0=Z0.length;I0<G0;I0++){let K0=Z0[I0],_0=Math.floor(K0.start/4),T0=Math.ceil(K0.count/4),s0=_0%D.width,j=Math.floor(_0/D.width),X0=T0,s=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,s0),$.pixelStorei(J.UNPACK_SKIP_ROWS,j),$.texSubImage2D(J.TEXTURE_2D,0,s0,j,X0,1,T,m,D.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,E0)}}function w0(B,D,T){let m=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)m=J.TEXTURE_3D;let e=W0(B,D),Z0=D.source;$.bindTexture(m,B.__webglTexture,J.TEXTURE0+T);let q0=Z.get(Z0);if(Z0.version!==q0.__version||e===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let s=i0.getPrimaries(i0.workingColorSpace),Y0=D.colorSpace===k8?null:i0.getPrimaries(D.colorSpace),L0=D.colorSpace===k8||s===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,L0)}$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let a=O(D.image,!1,K.maxTextureSize);a=a0(D,a);let E0=W.convert(D.format,D.colorSpace),I0=W.convert(D.type),G0=M(D.internalFormat,E0,I0,D.normalized,D.colorSpace,D.isVideoTexture);o(m,D);let K0,_0=D.mipmaps,T0=D.isVideoTexture!==!0,s0=q0.__version===void 0||e===!0,j=Z0.dataReady,X0=C(D,a);if(D.isDepthTexture){if(G0=A(D.format===D8,D.type),s0)if(T0)$.texStorage2D(J.TEXTURE_2D,1,G0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,G0,a.width,a.height,0,E0,I0,null)}else if(D.isDataTexture)if(_0.length>0){if(T0&&s0)$.texStorage2D(J.TEXTURE_2D,X0,G0,_0[0].width,_0[0].height);for(let s=0,Y0=_0.length;s<Y0;s++)if(K0=_0[s],T0){if(j)$.texSubImage2D(J.TEXTURE_2D,s,0,0,K0.width,K0.height,E0,I0,K0.data)}else $.texImage2D(J.TEXTURE_2D,s,G0,K0.width,K0.height,0,E0,I0,K0.data);D.generateMipmaps=!1}else if(T0){if(s0)$.texStorage2D(J.TEXTURE_2D,X0,G0,a.width,a.height);if(j)R0(D,a,E0,I0)}else $.texImage2D(J.TEXTURE_2D,0,G0,a.width,a.height,0,E0,I0,a.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(T0&&s0)$.texStorage3D(J.TEXTURE_2D_ARRAY,X0,G0,_0[0].width,_0[0].height,a.depth);for(let s=0,Y0=_0.length;s<Y0;s++)if(K0=_0[s],D.format!==C9)if(E0!==null)if(T0){if(j)if(D.layerUpdates.size>0){let L0=d$(K0.width,K0.height,D.format,D.type);for(let t of D.layerUpdates){let U0=K0.data.subarray(t*L0/K0.data.BYTES_PER_ELEMENT,(t+1)*L0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,t,K0.width,K0.height,1,E0,U0)}D.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,K0.width,K0.height,a.depth,E0,K0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,s,G0,K0.width,K0.height,a.depth,0,K0.data,0,0);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(T0){if(j)$.texSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,K0.width,K0.height,a.depth,E0,I0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,s,G0,K0.width,K0.height,a.depth,0,E0,I0,K0.data)}else{if(T0&&s0)$.texStorage2D(J.TEXTURE_2D,X0,G0,_0[0].width,_0[0].height);for(let s=0,Y0=_0.length;s<Y0;s++)if(K0=_0[s],D.format!==C9)if(E0!==null)if(T0){if(j)$.compressedTexSubImage2D(J.TEXTURE_2D,s,0,0,K0.width,K0.height,E0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,s,G0,K0.width,K0.height,0,K0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(T0){if(j)$.texSubImage2D(J.TEXTURE_2D,s,0,0,K0.width,K0.height,E0,I0,K0.data)}else $.texImage2D(J.TEXTURE_2D,s,G0,K0.width,K0.height,0,E0,I0,K0.data)}else if(D.isDataArrayTexture)if(T0){if(s0)$.texStorage3D(J.TEXTURE_2D_ARRAY,X0,G0,a.width,a.height,a.depth);if(j)if(D.layerUpdates.size>0){let s=d$(a.width,a.height,D.format,D.type);for(let Y0 of D.layerUpdates){let L0=a.data.subarray(Y0*s/a.data.BYTES_PER_ELEMENT,(Y0+1)*s/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,Y0,a.width,a.height,1,E0,I0,L0)}D.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,E0,I0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,G0,a.width,a.height,a.depth,0,E0,I0,a.data);else if(D.isData3DTexture)if(T0){if(s0)$.texStorage3D(J.TEXTURE_3D,X0,G0,a.width,a.height,a.depth);if(j)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,E0,I0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,G0,a.width,a.height,a.depth,0,E0,I0,a.data);else if(D.isFramebufferTexture){if(s0)if(T0)$.texStorage2D(J.TEXTURE_2D,X0,G0,a.width,a.height);else{let{width:s,height:Y0}=a;for(let L0=0;L0<X0;L0++)$.texImage2D(J.TEXTURE_2D,L0,G0,s,Y0,0,E0,I0,null),s>>=1,Y0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let s=J.canvas;if(!s.hasAttribute("layoutsubtree"))s.setAttribute("layoutsubtree","true");if(a.parentNode!==s){s.appendChild(a),N.add(D),s.onpaint=(Y0)=>{let L0=Y0.changedElements;for(let t of N)if(L0.includes(t.image))t.needsUpdate=!0},s.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:L0,RGBA:t,UNSIGNED_BYTE:U0}=J;J.texElementImage2D(J.TEXTURE_2D,0,L0,t,U0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(_0.length>0){if(T0&&s0){let s=KJ(_0[0]);$.texStorage2D(J.TEXTURE_2D,X0,G0,s.width,s.height)}for(let s=0,Y0=_0.length;s<Y0;s++)if(K0=_0[s],T0){if(j)$.texSubImage2D(J.TEXTURE_2D,s,0,0,E0,I0,K0)}else $.texImage2D(J.TEXTURE_2D,s,G0,E0,I0,K0);D.generateMipmaps=!1}else if(T0){if(s0){let s=KJ(a);$.texStorage2D(J.TEXTURE_2D,X0,G0,s.width,s.height)}if(j)$.texSubImage2D(J.TEXTURE_2D,0,0,0,E0,I0,a)}else $.texImage2D(J.TEXTURE_2D,0,G0,E0,I0,a);if(F(D))w(m);if(q0.__version=Z0.version,D.onUpdate)D.onUpdate(D)}B.__version=D.version}function n0(B,D,T){if(D.image.length!==6)return;let m=W0(B,D),e=D.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+T);let Z0=Z.get(e);if(e.version!==Z0.__version||m===!0){$.activeTexture(J.TEXTURE0+T);let q0=i0.getPrimaries(i0.workingColorSpace),c=D.colorSpace===k8?null:i0.getPrimaries(D.colorSpace),a=D.colorSpace===k8||q0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let E0=D.isCompressedTexture||D.image[0].isCompressedTexture,I0=D.image[0]&&D.image[0].isDataTexture,G0=[];for(let t=0;t<6;t++){if(!E0&&!I0)G0[t]=O(D.image[t],!0,K.maxCubemapSize);else G0[t]=I0?D.image[t].image:D.image[t];G0[t]=a0(D,G0[t])}let K0=G0[0],_0=W.convert(D.format,D.colorSpace),T0=W.convert(D.type),s0=M(D.internalFormat,_0,T0,D.normalized,D.colorSpace),j=D.isVideoTexture!==!0,X0=Z0.__version===void 0||m===!0,s=e.dataReady,Y0=C(D,K0);o(J.TEXTURE_CUBE_MAP,D);let L0;if(E0){if(j&&X0)$.texStorage2D(J.TEXTURE_CUBE_MAP,Y0,s0,K0.width,K0.height);for(let t=0;t<6;t++){L0=G0[t].mipmaps;for(let U0=0;U0<L0.length;U0++){let y0=L0[U0];if(D.format!==C9)if(_0!==null)if(j){if(s)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0,0,0,y0.width,y0.height,_0,y0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0,s0,y0.width,y0.height,0,y0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0,0,0,y0.width,y0.height,_0,T0,y0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0,s0,y0.width,y0.height,0,_0,T0,y0.data)}}}else{if(L0=D.mipmaps,j&&X0){if(L0.length>0)Y0++;let t=KJ(G0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,Y0,s0,t.width,t.height)}for(let t=0;t<6;t++)if(I0){if(j){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,G0[t].width,G0[t].height,_0,T0,G0[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,s0,G0[t].width,G0[t].height,0,_0,T0,G0[t].data);for(let U0=0;U0<L0.length;U0++){let QJ=L0[U0].image[t].image;if(j){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0+1,0,0,QJ.width,QJ.height,_0,T0,QJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0+1,s0,QJ.width,QJ.height,0,_0,T0,QJ.data)}}else{if(j){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_0,T0,G0[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,s0,_0,T0,G0[t]);for(let U0=0;U0<L0.length;U0++){let y0=L0[U0];if(j){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0+1,0,0,_0,T0,y0.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,U0+1,s0,_0,T0,y0.image[t])}}}if(F(D))w(J.TEXTURE_CUBE_MAP);if(Z0.__version=e.version,D.onUpdate)D.onUpdate(D)}B.__version=D.version}function p0(B,D,T,m,e,Z0){let q0=W.convert(T.format,T.colorSpace),c=W.convert(T.type),a=M(T.internalFormat,q0,c,T.normalized,T.colorSpace),E0=Z.get(D),I0=Z.get(T);if(I0.__renderTarget=D,!E0.__hasExternalTextures){let G0=Math.max(1,D.width>>Z0),K0=Math.max(1,D.height>>Z0);if(e===J.TEXTURE_3D||e===J.TEXTURE_2D_ARRAY)$.texImage3D(e,Z0,a,G0,K0,D.depth,0,q0,c,null);else $.texImage2D(e,Z0,a,G0,K0,0,q0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),S(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,e,I0.__webglTexture,0,NJ(D));else if(e===J.TEXTURE_2D||e>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,e,I0.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function l0(B,D,T){if(J.bindRenderbuffer(J.RENDERBUFFER,B),D.depthBuffer){let m=D.depthTexture,e=m&&m.isDepthTexture?m.type:null,Z0=A(D.stencilBuffer,e),q0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(S(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,NJ(D),Z0,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,NJ(D),Z0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B)}else{let m=D.textures;for(let e=0;e<m.length;e++){let Z0=m[e],q0=W.convert(Z0.format,Z0.colorSpace),c=W.convert(Z0.type),a=M(Z0.internalFormat,q0,c,Z0.normalized,Z0.colorSpace);if(S(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,NJ(D),a,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,NJ(D),a,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,a,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t0(B,D,T){let m=D.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e=Z.get(D.depthTexture);if(e.__renderTarget=D,!e.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;if(m){if(e.__webglInit===void 0)e.__webglInit=!0,D.depthTexture.addEventListener("dispose",_);if(e.__webglTexture===void 0){e.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),o(J.TEXTURE_CUBE_MAP,D.depthTexture);let E0=W.convert(D.depthTexture.format),I0=W.convert(D.depthTexture.type),G0;if(D.depthTexture.format===E8)G0=J.DEPTH_COMPONENT24;else if(D.depthTexture.format===D8)G0=J.DEPTH24_STENCIL8;for(let K0=0;K0<6;K0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0,G0,D.width,D.height,0,E0,I0,null)}}else J0(D.depthTexture,0);let Z0=e.__webglTexture,q0=NJ(D),c=m?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,a=D.depthTexture.format===D8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===E8)if(S(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,Z0,0,q0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,Z0,0);else if(D.depthTexture.format===D8)if(S(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,Z0,0,q0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,Z0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function o0(B){let D=Z.get(B),T=B.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==B.depthTexture){let m=B.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(m){let e=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,m.removeEventListener("dispose",e)};m.addEventListener("dispose",e),D.__depthDisposeCallback=e}D.__boundDepthTexture=m}if(B.depthTexture&&!D.__autoAllocateDepthBuffer)if(T)for(let m=0;m<6;m++)t0(D.__webglFramebuffer[m],B,m);else{let m=B.texture.mipmaps;if(m&&m.length>0)t0(D.__webglFramebuffer[0],B,0);else t0(D.__webglFramebuffer,B,0)}else if(T){D.__webglDepthbuffer=[];for(let m=0;m<6;m++)if($.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[m]),D.__webglDepthbuffer[m]===void 0)D.__webglDepthbuffer[m]=J.createRenderbuffer(),l0(D.__webglDepthbuffer[m],B,!1);else{let e=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=D.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Z0)}}else{let m=B.texture.mipmaps;if(m&&m.length>0)$.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),l0(D.__webglDepthbuffer,B,!1);else{let e=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function x0(B,D,T){let m=Z.get(B);if(D!==void 0)p0(m.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)o0(B)}function kJ(B){let D=B.texture,T=Z.get(B),m=Z.get(D);B.addEventListener("dispose",R);let e=B.textures,Z0=B.isWebGLCubeRenderTarget===!0,q0=e.length>1;if(!q0){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=D.version,X.memory.textures++}if(Z0){T.__webglFramebuffer=[];for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer[c]=[];for(let a=0;a<D.mipmaps.length;a++)T.__webglFramebuffer[c][a]=J.createFramebuffer()}else T.__webglFramebuffer[c]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer=[];for(let c=0;c<D.mipmaps.length;c++)T.__webglFramebuffer[c]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(q0)for(let c=0,a=e.length;c<a;c++){let E0=Z.get(e[c]);if(E0.__webglTexture===void 0)E0.__webglTexture=J.createTexture(),X.memory.textures++}if(B.samples>0&&S(B)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let c=0;c<e.length;c++){let a=e[c];T.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[c]);let E0=W.convert(a.format,a.colorSpace),I0=W.convert(a.type),G0=M(a.internalFormat,E0,I0,a.normalized,a.colorSpace,B.isXRRenderTarget===!0),K0=NJ(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,K0,G0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,T.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),l0(T.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),o(J.TEXTURE_CUBE_MAP,D);for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0)for(let a=0;a<D.mipmaps.length;a++)p0(T.__webglFramebuffer[c][a],B,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,a);else p0(T.__webglFramebuffer[c],B,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(F(D))w(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(q0){for(let c=0,a=e.length;c<a;c++){let E0=e[c],I0=Z.get(E0),G0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)G0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(G0,I0.__webglTexture),o(G0,E0),p0(T.__webglFramebuffer,B,E0,J.COLOR_ATTACHMENT0+c,G0,0),F(E0))w(G0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)c=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,m.__webglTexture),o(c,D),D.mipmaps&&D.mipmaps.length>0)for(let a=0;a<D.mipmaps.length;a++)p0(T.__webglFramebuffer[a],B,D,J.COLOR_ATTACHMENT0,c,a);else p0(T.__webglFramebuffer,B,D,J.COLOR_ATTACHMENT0,c,0);if(F(D))w(c);$.unbindTexture()}if(B.depthBuffer)o0(B)}function cJ(B){let D=B.textures;for(let T=0,m=D.length;T<m;T++){let e=D[T];if(F(e)){let Z0=P(B),q0=Z.get(e).__webglTexture;$.bindTexture(Z0,q0),w(Z0),$.unbindTexture()}}}let UJ=[],zJ=[];function LJ(B){if(B.samples>0){if(S(B)===!1){let{textures:D,width:T,height:m}=B,e=J.COLOR_BUFFER_BIT,Z0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,q0=Z.get(B),c=D.length>1;if(c)for(let E0=0;E0<D.length;E0++)$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,q0.__webglMultisampledFramebuffer);let a=B.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer);for(let E0=0;E0<D.length;E0++){if(B.resolveDepthBuffer){if(B.depthBuffer)e|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)e|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[E0]);let I0=Z.get(D[E0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,I0,0)}if(J.blitFramebuffer(0,0,T,m,0,0,T,m,e,J.NEAREST),U===!0){if(UJ.length=0,zJ.length=0,UJ.push(J.COLOR_ATTACHMENT0+E0),B.depthBuffer&&B.resolveDepthBuffer===!1)UJ.push(Z0),zJ.push(Z0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,zJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,UJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let E0=0;E0<D.length;E0++){$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[E0]);let I0=Z.get(D[E0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,I0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&U){let D=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function NJ(B){return Math.min(K.maxSamples,B.samples)}function S(B){let D=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function jJ(B){let D=X.render.frame;if(G.get(B)!==D)G.set(B,D),B.update()}function a0(B,D){let{colorSpace:T,format:m,type:e}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return D;if(T!==O$&&T!==k8)if(i0.getTransfer(T)===GJ){if(m!==C9||e!==D9)v0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",T);return D}function KJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)H.width=B.naturalWidth||B.width,H.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)H.width=B.displayWidth,H.height=B.displayHeight;else H.width=B.width,H.height=B.height;return H}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=p,this.setTextureUnits=u,this.setTexture2D=J0,this.setTexture2DArray=Q0,this.setTexture3D=H0,this.setTextureCube=z0,this.rebindTextures=x0,this.setupRenderTarget=kJ,this.updateRenderTargetMipmap=cJ,this.updateMultisampleRenderTarget=LJ,this.setupDepthRenderbuffer=o0,this.setupFrameBufferTexture=p0,this.useMultisampledRTT=S,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function u5(J,Q){function $(Z,K=k8){let W,X=i0.getTransfer(K);if(Z===D9)return J.UNSIGNED_BYTE;if(Z===jQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===fQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===DK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===RK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===OK)return J.BYTE;if(Z===EK)return J.SHORT;if(Z===A7)return J.UNSIGNED_SHORT;if(Z===SQ)return J.INT;if(Z===J8)return J.UNSIGNED_INT;if(Z===h9)return J.FLOAT;if(Z===x9)return J.HALF_FLOAT;if(Z===kK)return J.ALPHA;if(Z===LK)return J.RGB;if(Z===C9)return J.RGBA;if(Z===E8)return J.DEPTH_COMPONENT;if(Z===D8)return J.DEPTH_STENCIL;if(Z===VK)return J.RED;if(Z===vQ)return J.RED_INTEGER;if(Z===R8)return J.RG;if(Z===yQ)return J.RG_INTEGER;if(Z===bQ)return J.RGBA_INTEGER;if(Z===V6||Z===B6||Z===M6||Z===z6)if(X===GJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===V6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===B6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===M6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===z6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===V6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===B6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===M6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===z6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===hQ||Z===xQ||Z===gQ||Z===pQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===hQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===xQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===gQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===pQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===mQ||Z===lQ||Z===dQ||Z===uQ||Z===cQ||Z===I6||Z===nQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===mQ||Z===lQ)return X===GJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===dQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===uQ)return W.COMPRESSED_R11_EAC;if(Z===cQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===I6)return W.COMPRESSED_RG11_EAC;if(Z===nQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ||Z===eQ||Z===J$||Z===Q$||Z===$$||Z===Z$||Z===K$||Z===W$||Z===X$)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===sQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===iQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===oQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===aQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===rQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===tQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===eQ)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===J$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===Q$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===$$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===Z$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===K$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===W$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===X$)return X===GJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===Y$||Z===U$||Z===H$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===Y$)return X===GJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===U$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===H$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===q$||Z===G$||Z===A6||Z===N$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===q$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===G$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===A6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===N$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===a8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var c5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n5=`
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

}`;class RW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new v6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new K9({vertexShader:c5,fragmentShader:n5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new S0(new aJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kW extends g9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,G=null,N=null,q=null,E=null,L=typeof XRWebGLBinding<"u",I=new RW,O={},F=Q.getContextAttributes(),w=null,P=null,M=[],A=[],C=new d0,_=null,R=new pJ;R.viewport=new DJ;let z=new pJ;z.viewport=new DJ;let d=[R,z],V=new g$,g=null,r=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let W0=M[o];if(W0===void 0)W0=new w7,M[o]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(o){let W0=M[o];if(W0===void 0)W0=new w7,M[o]=W0;return W0.getGripSpace()},this.getHand=function(o){let W0=M[o];if(W0===void 0)W0=new w7,M[o]=W0;return W0.getHandSpace()};function p(o){let W0=A.indexOf(o.inputSource);if(W0===-1)return;let D0=M[W0];if(D0!==void 0)D0.update(o.inputSource,o.frame,U||W),D0.dispatchEvent({type:o.type,data:o.inputSource})}function u(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",i);for(let o=0;o<M.length;o++){let W0=A[o];if(W0===null)continue;A[o]=null,M[o].disconnect(W0)}g=null,r=null,I.reset();for(let o in O)delete O[o];J.setRenderTarget(w),q=null,N=null,G=null,Z=null,P=null,JJ.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(K=o,$.isPresenting===!0)v0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(X=o,$.isPresenting===!0)v0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(o){U=o},this.getBaseLayer=function(){return N!==null?N:q},this.getBinding=function(){if(G===null&&L)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(w=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",i),F.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(C),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let D0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,D0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new Z9(q.framebufferWidth,q.framebufferHeight,{format:C9,type:D9,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let D0=null,R0=null,w0=null;if(F.depth)w0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,D0=F.stencil?D8:E8,R0=F.stencil?a8:J8;let n0={colorFormat:Q.RGBA8,depthFormat:w0,scaleFactor:K};G=this.getBinding(),N=G.createProjectionLayer(n0),Z.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),P=new Z9(N.textureWidth,N.textureHeight,{format:C9,type:D9,depthTexture:new $8(N.textureWidth,N.textureHeight,R0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),JJ.setContext(Z),JJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function i(o){for(let W0=0;W0<o.removed.length;W0++){let D0=o.removed[W0],R0=A.indexOf(D0);if(R0>=0)A[R0]=null,M[R0].disconnect(D0)}for(let W0=0;W0<o.added.length;W0++){let D0=o.added[W0],R0=A.indexOf(D0);if(R0===-1){for(let n0=0;n0<M.length;n0++)if(n0>=A.length){A.push(D0),R0=n0;break}else if(A[n0]===null){A[n0]=D0,R0=n0;break}if(R0===-1)break}let w0=M[R0];if(w0)w0.connect(D0)}}let h=new v,J0=new v;function Q0(o,W0,D0){h.setFromMatrixPosition(W0.matrixWorld),J0.setFromMatrixPosition(D0.matrixWorld);let R0=h.distanceTo(J0),w0=W0.projectionMatrix.elements,n0=D0.projectionMatrix.elements,p0=w0[14]/(w0[10]-1),l0=w0[14]/(w0[10]+1),t0=(w0[9]+1)/w0[5],o0=(w0[9]-1)/w0[5],x0=(w0[8]-1)/w0[0],kJ=(n0[8]+1)/n0[0],cJ=p0*x0,UJ=p0*kJ,zJ=R0/(-x0+kJ),LJ=zJ*-x0;if(W0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(LJ),o.translateZ(zJ),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),w0[10]===-1)o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let NJ=p0+zJ,S=l0+zJ,jJ=cJ-LJ,a0=UJ+(R0-LJ),KJ=t0*l0/S*NJ,B=o0*l0/S*NJ;o.projectionMatrix.makePerspective(jJ,a0,KJ,B,NJ,S),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function H0(o,W0){if(W0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(W0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:W0,far:D0}=o;if(I.texture!==null){if(I.depthNear>0)W0=I.depthNear;if(I.depthFar>0)D0=I.depthFar}if(V.near=z.near=R.near=W0,V.far=z.far=R.far=D0,g!==V.near||r!==V.far)Z.updateRenderState({depthNear:V.near,depthFar:V.far}),g=V.near,r=V.far;V.layers.mask=o.layers.mask|6,R.layers.mask=V.layers.mask&-5,z.layers.mask=V.layers.mask&-3;let R0=o.parent,w0=V.cameras;H0(V,R0);for(let n0=0;n0<w0.length;n0++)H0(w0[n0],R0);if(w0.length===2)Q0(V,R,z);else V.projectionMatrix.copy(R.projectionMatrix);z0(o,V,R0)};function z0(o,W0,D0){if(D0===null)o.matrix.copy(W0.matrixWorld);else o.matrix.copy(D0.matrixWorld),o.matrix.invert(),o.matrix.multiply(W0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=F6*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(N===null&&q===null)return;return Y},this.setFoveation=function(o){if(Y=o,N!==null)N.fixedFoveation=o;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=o},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(V)},this.getCameraTexture=function(o){return O[o]};let k0=null;function YJ(o,W0){if(H=W0.getViewerPose(U||W),E=W0,H!==null){let D0=H.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let R0=!1;if(D0.length!==V.cameras.length)V.cameras.length=0,R0=!0;for(let l0=0;l0<D0.length;l0++){let t0=D0[l0],o0=null;if(q!==null)o0=q.getViewport(t0);else{let kJ=G.getViewSubImage(N,t0);if(o0=kJ.viewport,l0===0)J.setRenderTargetTextures(P,kJ.colorTexture,kJ.depthStencilTexture),J.setRenderTarget(P)}let x0=d[l0];if(x0===void 0)x0=new pJ,x0.layers.enable(l0),x0.viewport=new DJ,d[l0]=x0;if(x0.matrix.fromArray(t0.transform.matrix),x0.matrix.decompose(x0.position,x0.quaternion,x0.scale),x0.projectionMatrix.fromArray(t0.projectionMatrix),x0.projectionMatrixInverse.copy(x0.projectionMatrix).invert(),x0.viewport.set(o0.x,o0.y,o0.width,o0.height),l0===0)V.matrix.copy(x0.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(R0===!0)V.cameras.push(x0)}let w0=Z.enabledFeatures;if(w0&&w0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){G=$.getBinding();let l0=G.getDepthInformation(D0[0]);if(l0&&l0.isValid&&l0.texture)I.init(l0,Z.renderState)}if(w0&&w0.includes("camera-access")&&L){J.state.unbindTexture(),G=$.getBinding();for(let l0=0;l0<D0.length;l0++){let t0=D0[l0].camera;if(t0){let o0=O[t0];if(!o0)o0=new v6,O[t0]=o0;let x0=G.getCameraImage(t0);o0.sourceTexture=x0}}}}for(let D0=0;D0<M.length;D0++){let R0=A[D0],w0=M[D0];if(R0!==null&&w0!==void 0)w0.update(R0,W0,U||W)}if(k0)k0(o,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});E=null}let JJ=new XW;JJ.setAnimationLoop(YJ),this.setAnimationLoop=function(o){k0=o},this.dispose=function(){}}}var s5=new HJ,LW=new h0;LW.set(-1,0,0,0,1,0,0,0,1);function i5(J,Q){function $(O,F){if(O.matrixAutoUpdate===!0)O.updateMatrix();F.value.copy(O.matrix)}function Z(O,F){if(F.color.getRGB(O.fogColor.value,z$(J)),F.isFog)O.fogNear.value=F.near,O.fogFar.value=F.far;else if(F.isFogExp2)O.fogDensity.value=F.density}function K(O,F,w,P,M){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)W(O,F);else if(F.isMeshLambertMaterial){if(W(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)W(O,F),N(O,F);else if(F.isMeshPhongMaterial){if(W(O,F),G(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(W(O,F),q(O,F),F.isMeshPhysicalMaterial)E(O,F,M)}else if(F.isMeshMatcapMaterial)W(O,F),L(O,F);else if(F.isMeshDepthMaterial)W(O,F);else if(F.isMeshDistanceMaterial)W(O,F),I(O,F);else if(F.isMeshNormalMaterial)W(O,F);else if(F.isLineBasicMaterial){if(X(O,F),F.isLineDashedMaterial)Y(O,F)}else if(F.isPointsMaterial)U(O,F,w,P);else if(F.isSpriteMaterial)H(O,F);else if(F.isShadowMaterial)O.color.value.copy(F.color),O.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function W(O,F){if(O.opacity.value=F.opacity,F.color)O.diffuse.value.copy(F.color);if(F.emissive)O.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.bumpMap){if(O.bumpMap.value=F.bumpMap,$(F.bumpMap,O.bumpMapTransform),O.bumpScale.value=F.bumpScale,F.side===lJ)O.bumpScale.value*=-1}if(F.normalMap){if(O.normalMap.value=F.normalMap,$(F.normalMap,O.normalMapTransform),O.normalScale.value.copy(F.normalScale),F.side===lJ)O.normalScale.value.negate()}if(F.displacementMap)O.displacementMap.value=F.displacementMap,$(F.displacementMap,O.displacementMapTransform),O.displacementScale.value=F.displacementScale,O.displacementBias.value=F.displacementBias;if(F.emissiveMap)O.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,O.emissiveMapTransform);if(F.specularMap)O.specularMap.value=F.specularMap,$(F.specularMap,O.specularMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest;let w=Q.get(F),P=w.envMap,M=w.envMapRotation;if(P){if(O.envMap.value=P,O.envMapRotation.value.setFromMatrix4(s5.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(LW);O.reflectivity.value=F.reflectivity,O.ior.value=F.ior,O.refractionRatio.value=F.refractionRatio}if(F.lightMap)O.lightMap.value=F.lightMap,O.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,O.lightMapTransform);if(F.aoMap)O.aoMap.value=F.aoMap,O.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,O.aoMapTransform)}function X(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,F.map)O.map.value=F.map,$(F.map,O.mapTransform)}function Y(O,F){O.dashSize.value=F.dashSize,O.totalSize.value=F.dashSize+F.gapSize,O.scale.value=F.scale}function U(O,F,w,P){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.size.value=F.size*w,O.scale.value=P*0.5,F.map)O.map.value=F.map,$(F.map,O.uvTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function H(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.rotation.value=F.rotation,F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function G(O,F){O.specular.value.copy(F.specular),O.shininess.value=Math.max(F.shininess,0.0001)}function N(O,F){if(F.gradientMap)O.gradientMap.value=F.gradientMap}function q(O,F){if(O.metalness.value=F.metalness,F.metalnessMap)O.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=F.roughness,F.roughnessMap)O.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,O.roughnessMapTransform);if(F.envMap)O.envMapIntensity.value=F.envMapIntensity}function E(O,F,w){if(O.ior.value=F.ior,F.sheen>0){if(O.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),O.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)O.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,O.sheenColorMapTransform);if(F.sheenRoughnessMap)O.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(O.clearcoat.value=F.clearcoat,O.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)O.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,O.clearcoatMapTransform);if(F.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(O.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===lJ)O.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)O.dispersion.value=F.dispersion;if(F.iridescence>0){if(O.iridescence.value=F.iridescence,O.iridescenceIOR.value=F.iridescenceIOR,O.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)O.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,O.iridescenceMapTransform);if(F.iridescenceThicknessMap)O.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(F.transmission>0){if(O.transmission.value=F.transmission,O.transmissionSamplerMap.value=w.texture,O.transmissionSamplerSize.value.set(w.width,w.height),F.transmissionMap)O.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=F.thickness,F.thicknessMap)O.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=F.attenuationDistance,O.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(O.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)O.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=F.specularIntensity,O.specularColor.value.copy(F.specularColor),F.specularColorMap)O.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,O.specularColorMapTransform);if(F.specularIntensityMap)O.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,O.specularIntensityMapTransform)}function L(O,F){if(F.matcap)O.matcap.value=F.matcap}function I(O,F){let w=Q.get(F).light;O.referencePosition.value.setFromMatrixPosition(w.matrixWorld),O.nearDistance.value=w.shadow.camera.near,O.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function o5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(M,A){let C=A.program;Z.uniformBlockBinding(M,C)}function H(M,A){let C=K[M.id];if(C===void 0)O(M),C=G(M),K[M.id]=C,M.addEventListener("dispose",w);let _=A.program;Z.updateUBOMapping(M,_);let R=Q.render.frame;if(W[M.id]!==R)q(M),W[M.id]=R}function G(M){let A=N();M.__bindingPointIndex=A;let C=J.createBuffer(),_=M.__size,R=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,_,R),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,C),C}function N(){for(let M=0;M<Y;M++)if(X.indexOf(M)===-1)return X.push(M),M;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(M){let A=K[M.id],C=M.uniforms,_=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let R=0,z=C.length;R<z;R++){let d=C[R];if(Array.isArray(d))for(let V=0,g=d.length;V<g;V++)E(d[V],R,V,_);else E(d,R,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(M,A,C,_){if(I(M,A,C,_)===!0){let{__offset:R,value:z}=M;if(Array.isArray(z)){let d=0;for(let V=0;V<z.length;V++){let g=z[V],r=F(g);if(L(g,M.__data,d),typeof g!=="number"&&typeof g!=="boolean"&&!g.isMatrix3&&!ArrayBuffer.isView(g))d+=r.storage/Float32Array.BYTES_PER_ELEMENT}}else L(z,M.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,R,M.__data)}}function L(M,A,C){if(typeof M==="number"||typeof M==="boolean")A[0]=M;else if(M.isMatrix3)A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0;else if(ArrayBuffer.isView(M))A.set(new M.constructor(M.buffer,M.byteOffset,A.length));else M.toArray(A,C)}function I(M,A,C,_){let R=M.value,z=A+"_"+C;if(_[z]===void 0){if(typeof R==="number"||typeof R==="boolean")_[z]=R;else if(ArrayBuffer.isView(R))_[z]=R.slice();else _[z]=R.clone();return!0}else{let d=_[z];if(typeof R==="number"||typeof R==="boolean"){if(d!==R)return _[z]=R,!0}else if(ArrayBuffer.isView(R))return!0;else if(d.equals(R)===!1)return d.copy(R),!0}return!1}function O(M){let A=M.uniforms,C=0,_=16;for(let z=0,d=A.length;z<d;z++){let V=Array.isArray(A[z])?A[z]:[A[z]];for(let g=0,r=V.length;g<r;g++){let p=V[g],u=Array.isArray(p.value)?p.value:[p.value];for(let i=0,h=u.length;i<h;i++){let J0=u[i],Q0=F(J0),H0=C%_,z0=H0%Q0.boundary,k0=H0+z0;if(C+=z0,k0!==0&&_-k0<Q0.storage)C+=_-k0;p.__data=new Float32Array(Q0.storage/Float32Array.BYTES_PER_ELEMENT),p.__offset=C,C+=Q0.storage}}}let R=C%_;if(R>0)C+=_-R;return M.__size=C,M.__cache={},this}function F(M){let A={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")A.boundary=4,A.storage=4;else if(M.isVector2)A.boundary=8,A.storage=8;else if(M.isVector3||M.isColor)A.boundary=16,A.storage=12;else if(M.isVector4)A.boundary=16,A.storage=16;else if(M.isMatrix3)A.boundary=48,A.storage=48;else if(M.isMatrix4)A.boundary=64,A.storage=64;else if(M.isTexture)v0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))A.boundary=16,A.storage=M.byteLength;else v0("WebGLRenderer: Unsupported uniform value type.",M);return A}function w(M){let A=M.target;A.removeEventListener("dispose",w);let C=X.indexOf(A.__bindingPointIndex);X.splice(C,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function P(){for(let M in K)J.deleteBuffer(K[M]);X=[],K={},W={}}return{bind:U,update:H,dispose:P}}var a5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_9=null;function r5(){if(_9===null)_9=new j6(a5,16,16,R8,x9),_9.name="DFG_LUT",_9.minFilter=BJ,_9.magFilter=BJ,_9.wrapS=k6,_9.wrapT=k6,_9.generateMipmaps=!1,_9.needsUpdate=!0;return _9}class e${constructor(J={}){let{canvas:Q=_K(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1,outputBufferType:q=D9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let L=q,I=new Set([bQ,yQ,vQ]),O=new Set([D9,J8,A7,a8,jQ,fQ]),F=new Uint32Array(4),w=new Int32Array(4),P=new v,M=null,A=null,C=[],_=[],R=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=E9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,d=!1,V=null,g=null,r=null,p=null;this._outputColorSpace=R9;let u=0,i=0,h=null,J0=-1,Q0=null,H0=new DJ,z0=new DJ,k0=null,YJ=new u0(0),JJ=0,o=Q.width,W0=Q.height,D0=1,R0=null,w0=null,n0=new DJ(0,0,o,W0),p0=new DJ(0,0,o,W0),l0=!1,t0=new T7,o0=!1,x0=!1,kJ=new HJ,cJ=new v,UJ=new DJ,zJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},LJ=!1;function NJ(){return h===null?D0:1}let S=$;function jJ(k,f){return Q.getContext(k,f)}try{let k={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${jZ}`);if(Q.addEventListener("webglcontextlost",y0,!1),Q.addEventListener("webglcontextrestored",QJ,!1),Q.addEventListener("webglcontextcreationerror",e0,!1),S===null){if(S=jJ("webgl2",k),S===null)if(jJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(k){throw f0("WebGLRenderer: "+k.message),k}let a0,KJ,B,D,T,m,e,Z0,q0,c,a,E0,I0,G0,K0,_0,T0,s0,j,X0,s,Y0,L0;function t(){if(a0=new KH(S),a0.init(),s=new u5(S,a0),KJ=new aU(S,a0,J,s),B=new l5(S,a0),KJ.reversedDepthBuffer&&N)B.buffers.depth.setReversed(!0);g=S.createFramebuffer(),r=S.createFramebuffer(),p=S.createFramebuffer(),D=new YH(S),T=new _5,m=new d5(S,a0,B,T,KJ,s,D),e=new ZH(z),Z0=new GX(S),Y0=new iU(S,Z0),q0=new WH(S,Z0,D,Y0),c=new HH(S,q0,Z0,Y0,D),s0=new UH(S,KJ,m),K0=new rU(T),a=new P5(z,e,a0,KJ,Y0,K0),E0=new i5(z,T),I0=new T5,G0=new b5(a0),T0=new sU(z,e,B,c,E,Y),_0=new m5(z,c,KJ),L0=new o5(S,D,KJ,B),j=new oU(S,a0,D),X0=new XH(S,a0,D),D.programs=a.programs,z.capabilities=KJ,z.extensions=a0,z.properties=T,z.renderLists=I0,z.shadowMap=_0,z.state=B,z.info=D}if(t(),L!==D9)R=new GH(L,Q.width,Q.height,X,Z,K);let U0=new kW(z,S);this.xr=U0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let k=a0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=a0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return D0},this.setPixelRatio=function(k){if(k===void 0)return;D0=k,this.setSize(o,W0,!1)},this.getSize=function(k){return k.set(o,W0)},this.setSize=function(k,f,x=!0){if(U0.isPresenting){v0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=k,W0=f,Q.width=Math.floor(k*D0),Q.height=Math.floor(f*D0),x===!0)Q.style.width=k+"px",Q.style.height=f+"px";if(R!==null)R.setSize(Q.width,Q.height);this.setViewport(0,0,k,f)},this.getDrawingBufferSize=function(k){return k.set(o*D0,W0*D0).floor()},this.setDrawingBufferSize=function(k,f,x){o=k,W0=f,D0=x,Q.width=Math.floor(k*x),Q.height=Math.floor(f*x),this.setViewport(0,0,k,f)},this.setEffects=function(k){if(L===D9){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let f=0;f<k.length;f++)if(k[f].isOutputPass===!0){v0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(H0)},this.getViewport=function(k){return k.copy(n0)},this.setViewport=function(k,f,x,b){if(k.isVector4)n0.set(k.x,k.y,k.z,k.w);else n0.set(k,f,x,b);B.viewport(H0.copy(n0).multiplyScalar(D0).round())},this.getScissor=function(k){return k.copy(p0)},this.setScissor=function(k,f,x,b){if(k.isVector4)p0.set(k.x,k.y,k.z,k.w);else p0.set(k,f,x,b);B.scissor(z0.copy(p0).multiplyScalar(D0).round())},this.getScissorTest=function(){return l0},this.setScissorTest=function(k){B.setScissorTest(l0=k)},this.setOpaqueSort=function(k){R0=k},this.setTransparentSort=function(k){w0=k},this.getClearColor=function(k){return k.copy(T0.getClearColor())},this.setClearColor=function(){T0.setClearColor(...arguments)},this.getClearAlpha=function(){return T0.getClearAlpha()},this.setClearAlpha=function(){T0.setClearAlpha(...arguments)},this.clear=function(k=!0,f=!0,x=!0){let b=0;if(k){let y=!1;if(h!==null){let F0=h.texture.format;y=I.has(F0)}if(y){let F0=h.texture.type,V0=O.has(F0),N0=T0.getClearColor(),C0=T0.getClearAlpha(),P0=N0.r,b0=N0.g,g0=N0.b;if(V0)F[0]=P0,F[1]=b0,F[2]=g0,F[3]=C0,S.clearBufferuiv(S.COLOR,0,F);else w[0]=P0,w[1]=b0,w[2]=g0,w[3]=C0,S.clearBufferiv(S.COLOR,0,w)}else b|=S.COLOR_BUFFER_BIT}if(f)b|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(x)b|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)S.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),V=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",y0,!1),Q.removeEventListener("webglcontextrestored",QJ,!1),Q.removeEventListener("webglcontextcreationerror",e0,!1),T0.dispose(),I0.dispose(),G0.dispose(),T.dispose(),e.dispose(),c.dispose(),Y0.dispose(),L0.dispose(),a.dispose(),U0.dispose(),U0.removeEventListener("sessionstart",u9),U0.removeEventListener("sessionend",W7),yJ.stop()};function y0(k){k.preventDefault(),k$("WebGLRenderer: Context Lost."),d=!0}function QJ(){k$("WebGLRenderer: Context Restored."),d=!1;let k=D.autoReset,f=_0.enabled,x=_0.autoUpdate,b=_0.needsUpdate,y=_0.type;t(),D.autoReset=k,_0.enabled=f,_0.autoUpdate=x,_0.needsUpdate=b,_0.type=y}function e0(k){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function vJ(k){let f=k.target;f.removeEventListener("dispose",vJ),H9(f)}function H9(k){B9(k),T.remove(k)}function B9(k){let f=T.get(k).programs;if(f!==void 0){if(f.forEach(function(x){a.releaseProgram(x)}),k.isShaderMaterial)a.releaseShaderCache(k)}}this.renderBufferDirect=function(k,f,x,b,y,F0){if(f===null)f=zJ;let V0=y.isMesh&&y.matrixWorld.determinantAffine()<0,N0=m7(k,f,x,b,y);B.setMaterial(b,V0);let C0=x.index,P0=1;if(b.wireframe===!0){if(C0=q0.getWireframeAttribute(x),C0===void 0)return;P0=2}let b0=x.drawRange,g0=x.attributes.position,A0=b0.start*P0,$J=(b0.start+b0.count)*P0;if(F0!==null)A0=Math.max(A0,F0.start*P0),$J=Math.min($J,(F0.start+F0.count)*P0);if(C0!==null)A0=Math.max(A0,0),$J=Math.min($J,C0.count);else if(g0!==void 0&&g0!==null)A0=Math.max(A0,0),$J=Math.min($J,g0.count);let FJ=$J-A0;if(FJ<0||FJ===1/0)return;Y0.setup(y,b,N0,x,C0);let OJ,ZJ=j;if(C0!==null)OJ=Z0.get(C0),ZJ=X0,ZJ.setIndex(OJ);if(y.isMesh)if(b.wireframe===!0)B.setLineWidth(b.wireframeLinewidth*NJ()),ZJ.setMode(S.LINES);else ZJ.setMode(S.TRIANGLES);else if(y.isLine){let IJ=b.linewidth;if(IJ===void 0)IJ=1;if(B.setLineWidth(IJ*NJ()),y.isLineSegments)ZJ.setMode(S.LINES);else if(y.isLineLoop)ZJ.setMode(S.LINE_LOOP);else ZJ.setMode(S.LINE_STRIP)}else if(y.isPoints)ZJ.setMode(S.POINTS);else if(y.isSprite)ZJ.setMode(S.TRIANGLES);if(y.isBatchedMesh)if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:IJ,_multiDrawCounts:M0,_multiDrawCount:bJ}=y,c0=C0?Z0.get(C0).bytesPerElement:1,sJ=T.get(b).currentProgram.getUniforms();for(let J9=0;J9<bJ;J9++)sJ.setValue(S,"_gl_DrawID",J9),ZJ.render(IJ[J9]/c0,M0[J9])}else ZJ.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)ZJ.renderInstances(A0,FJ,y.count);else if(x.isInstancedBufferGeometry){let IJ=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,M0=Math.min(x.instanceCount,IJ);ZJ.renderInstances(A0,FJ,M0)}else ZJ.render(A0,FJ)};function Z7(k,f,x){if(k.transparent===!0&&k.side===I9&&k.forceSinglePass===!1)k.side=lJ,k.needsUpdate=!0,n9(k,f,x),k.side=s8,k.needsUpdate=!0,n9(k,f,x),k.side=I9;else n9(k,f,x)}this.compile=function(k,f,x=null){if(x===null)x=k;if(A=G0.get(x),A.init(f),_.push(A),x.traverseVisible(function(y){if(y.isLight&&y.layers.test(f.layers)){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}}),k!==x)k.traverseVisible(function(y){if(y.isLight&&y.layers.test(f.layers)){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}});A.setupLights();let b=new Set;return k.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let F0=y.material;if(F0)if(Array.isArray(F0))for(let V0=0;V0<F0.length;V0++){let N0=F0[V0];Z7(N0,x,y),b.add(N0)}else Z7(F0,x,y),b.add(F0)}),A=_.pop(),b},this.compileAsync=function(k,f,x=null){let b=this.compile(k,f,x);return new Promise((y)=>{function F0(){if(b.forEach(function(V0){if(T.get(V0).currentProgram.isReady())b.delete(V0)}),b.size===0){y(k);return}setTimeout(F0,10)}if(a0.get("KHR_parallel_shader_compile")!==null)F0();else setTimeout(F0,10)})};let q9=null;function K7(k){if(q9)q9(k)}function u9(){yJ.stop()}function W7(){yJ.start()}let yJ=new XW;if(yJ.setAnimationLoop(K7),typeof self<"u")yJ.setContext(self);this.setAnimationLoop=function(k){q9=k,U0.setAnimationLoop(k),k===null?yJ.stop():yJ.start()},U0.addEventListener("sessionstart",u9),U0.addEventListener("sessionend",W7),this.render=function(k,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(V!==null)V.renderStart(k,f);let x=U0.enabled===!0&&U0.isPresenting===!0,b=R!==null&&(h===null||x)&&R.begin(z,h);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(U0.enabled===!0&&U0.isPresenting===!0&&(R===null||R.isCompositing()===!1)){if(U0.cameraAutoUpdate===!0)U0.updateCamera(f);f=U0.getCamera()}if(k.isScene===!0)k.onBeforeRender(z,k,f,h);if(A=G0.get(k,_.length),A.init(f),A.state.textureUnits=m.getTextureUnits(),_.push(A),kJ.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),t0.setFromProjectionMatrix(kJ,R$,f.reversedDepth),x0=this.localClippingEnabled,o0=K0.init(this.clippingPlanes,x0),M=I0.get(k,C.length),M.init(),C.push(M),U0.enabled===!0&&U0.isPresenting===!0){let V0=z.xr.getDepthSensingMesh();if(V0!==null)X8(V0,f,-1/0,z.sortObjects)}if(X8(k,f,0,z.sortObjects),M.finish(),z.sortObjects===!0)M.sort(R0,w0,f.reversedDepth);if(LJ=U0.enabled===!1||U0.isPresenting===!1||U0.hasDepthSensing()===!1,LJ)T0.addToRenderList(M,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(o0===!0)K0.beginShadows();let y=A.state.shadowsArray;if(_0.render(y,k,f),o0===!0)K0.endShadows();if((b&&R.hasRenderPass())===!1){let{opaque:V0,transmissive:N0}=M;if(A.setupLights(),f.isArrayCamera){let C0=f.cameras;if(N0.length>0)for(let P0=0,b0=C0.length;P0<b0;P0++){let g0=C0[P0];p7(V0,N0,k,g0)}if(LJ)T0.render(k);for(let P0=0,b0=C0.length;P0<b0;P0++){let g0=C0[P0];X7(M,k,g0,g0.viewport)}}else{if(N0.length>0)p7(V0,N0,k,f);if(LJ)T0.render(k);X7(M,k,f)}}if(h!==null&&i===0)m.updateMultisampleRenderTarget(h),m.updateRenderTargetMipmap(h);if(b)R.end(z);if(k.isScene===!0)k.onAfterRender(z,k,f);if(Y0.resetDefaultState(),J0=-1,Q0=null,_.pop(),_.length>0){if(A=_[_.length-1],m.setTextureUnits(A.state.textureUnits),o0===!0)K0.setGlobalState(z.clippingPlanes,A.state.camera)}else A=null;if(C.pop(),C.length>0)M=C[C.length-1];else M=null;if(V!==null)V.renderEnd()};function X8(k,f,x,b){if(k.visible===!1)return;if(k.layers.test(f.layers)){if(k.isGroup)x=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(f)}else if(k.isLightProbeGrid)A.pushLightProbeGrid(k);else if(k.isLight){if(A.pushLight(k),k.castShadow)A.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||t0.intersectsSprite(k)){if(b)UJ.setFromMatrixPosition(k.matrixWorld).applyMatrix4(kJ);let V0=c.update(k),N0=k.material;if(N0.visible)M.push(k,V0,N0,x,UJ.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||t0.intersectsObject(k)){let V0=c.update(k),N0=k.material;if(b){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();UJ.copy(k.boundingSphere.center)}else{if(V0.boundingSphere===null)V0.computeBoundingSphere();UJ.copy(V0.boundingSphere.center)}UJ.applyMatrix4(k.matrixWorld).applyMatrix4(kJ)}if(Array.isArray(N0)){let C0=V0.groups;for(let P0=0,b0=C0.length;P0<b0;P0++){let g0=C0[P0],A0=N0[g0.materialIndex];if(A0&&A0.visible)M.push(k,V0,A0,x,UJ.z,g0)}}else if(N0.visible)M.push(k,V0,N0,x,UJ.z,null)}}}let F0=k.children;for(let V0=0,N0=F0.length;V0<N0;V0++)X8(F0[V0],f,x,b)}function X7(k,f,x,b){let{opaque:y,transmissive:F0,transparent:V0}=k;if(A.setupLightsView(x),o0===!0)K0.setGlobalState(z.clippingPlanes,x);if(b)B.viewport(H0.copy(b));if(y.length>0)c9(y,f,x);if(F0.length>0)c9(F0,f,x);if(V0.length>0)c9(V0,f,x);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function p7(k,f,x,b){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[b.id]===void 0){let A0=a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[b.id]=new Z9(1,1,{generateMipmaps:!0,type:A0?x9:D9,minFilter:O8,samples:Math.max(4,KJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i0.workingColorSpace})}let F0=A.state.transmissionRenderTarget[b.id],V0=b.viewport||H0;F0.setSize(V0.z*z.transmissionResolutionScale,V0.w*z.transmissionResolutionScale);let N0=z.getRenderTarget(),C0=z.getActiveCubeFace(),P0=z.getActiveMipmapLevel();if(z.setRenderTarget(F0),z.getClearColor(YJ),JJ=z.getClearAlpha(),JJ<1)z.setClearColor(16777215,0.5);if(z.clear(),LJ)T0.render(x);let b0=z.toneMapping;z.toneMapping=E9;let g0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(A.setupLightsView(b),o0===!0)K0.setGlobalState(z.clippingPlanes,b);if(c9(k,x,b),m.updateMultisampleRenderTarget(F0),m.updateRenderTargetMipmap(F0),a0.has("WEBGL_multisampled_render_to_texture")===!1){let A0=!1;for(let $J=0,FJ=f.length;$J<FJ;$J++){let OJ=f[$J],{object:ZJ,geometry:IJ,material:M0,group:bJ}=OJ;if(M0.side===I9&&ZJ.layers.test(b.layers)){let c0=M0.side;M0.side=lJ,M0.needsUpdate=!0,Y7(ZJ,x,b,IJ,M0,bJ),M0.side=c0,M0.needsUpdate=!0,A0=!0}}if(A0===!0)m.updateMultisampleRenderTarget(F0),m.updateRenderTargetMipmap(F0)}if(z.setRenderTarget(N0,C0,P0),z.setClearColor(YJ,JJ),g0!==void 0)b.viewport=g0;z.toneMapping=b0}function c9(k,f,x){let b=f.isScene===!0?f.overrideMaterial:null;for(let y=0,F0=k.length;y<F0;y++){let V0=k[y],{object:N0,geometry:C0,group:P0}=V0,b0=V0.material;if(b0.allowOverride===!0&&b!==null)b0=b;if(N0.layers.test(x.layers))Y7(N0,f,x,C0,b0,P0)}}function Y7(k,f,x,b,y,F0){if(k.onBeforeRender(z,f,x,b,y,F0),k.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),y.onBeforeRender(z,f,x,b,k,F0),y.transparent===!0&&y.side===I9&&y.forceSinglePass===!1)y.side=lJ,y.needsUpdate=!0,z.renderBufferDirect(x,f,b,y,k,F0),y.side=s8,y.needsUpdate=!0,z.renderBufferDirect(x,f,b,y,k,F0),y.side=I9;else z.renderBufferDirect(x,f,b,y,k,F0);k.onAfterRender(z,f,x,b,y,F0)}function n9(k,f,x){if(f.isScene!==!0)f=zJ;let b=T.get(k),y=A.state.lights,F0=A.state.shadowsArray,V0=y.state.version,N0=a.getParameters(k,y.state,F0,f,x,A.state.lightProbeGridArray),C0=a.getProgramCacheKey(N0),P0=b.programs;b.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?f.environment:null,b.fog=f.fog;let b0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(b.envMap=e.get(k.envMap||b.environment,b0),b.envMapRotation=b.environment!==null&&k.envMap===null?f.environmentRotation:k.envMapRotation,P0===void 0)k.addEventListener("dispose",vJ),P0=new Map,b.programs=P0;let g0=P0.get(C0);if(g0!==void 0){if(b.currentProgram===g0&&b.lightsStateVersion===V0)return H7(k,N0),g0}else{if(N0.uniforms=a.getUniforms(k),V!==null&&k.isNodeMaterial)V.build(k,x,N0);k.onBeforeCompile(N0,z),g0=a.acquireProgram(N0,C0),P0.set(C0,g0),b.uniforms=N0.uniforms}let A0=b.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)A0.clippingPlanes=K0.uniform;if(H7(k,N0),b.needsLights=N7(k),b.lightsStateVersion=V0,b.needsLights)A0.ambientLightColor.value=y.state.ambient,A0.lightProbe.value=y.state.probe,A0.directionalLights.value=y.state.directional,A0.directionalLightShadows.value=y.state.directionalShadow,A0.spotLights.value=y.state.spot,A0.spotLightShadows.value=y.state.spotShadow,A0.rectAreaLights.value=y.state.rectArea,A0.ltc_1.value=y.state.rectAreaLTC1,A0.ltc_2.value=y.state.rectAreaLTC2,A0.pointLights.value=y.state.point,A0.pointLightShadows.value=y.state.pointShadow,A0.hemisphereLights.value=y.state.hemi,A0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,A0.spotLightMatrix.value=y.state.spotLightMatrix,A0.spotLightMap.value=y.state.spotLightMap,A0.pointShadowMatrix.value=y.state.pointShadowMatrix;return b.lightProbeGrid=A.state.lightProbeGridArray.length>0,b.currentProgram=g0,b.uniformsList=null,g0}function U7(k){if(k.uniformsList===null){let f=k.currentProgram.getUniforms();k.uniformsList=b7.seqWithValue(f.seq,k.uniforms)}return k.uniformsList}function H7(k,f){let x=T.get(k);x.outputColorSpace=f.outputColorSpace,x.batching=f.batching,x.batchingColor=f.batchingColor,x.instancing=f.instancing,x.instancingColor=f.instancingColor,x.instancingMorph=f.instancingMorph,x.skinning=f.skinning,x.morphTargets=f.morphTargets,x.morphNormals=f.morphNormals,x.morphColors=f.morphColors,x.morphTargetsCount=f.morphTargetsCount,x.numClippingPlanes=f.numClippingPlanes,x.numIntersection=f.numClipIntersection,x.vertexAlphas=f.vertexAlphas,x.vertexTangents=f.vertexTangents,x.toneMapping=f.toneMapping}function q7(k,f){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;P.setFromMatrixPosition(f.matrixWorld);for(let x=0,b=k.length;x<b;x++){let y=k[x];if(y.texture!==null&&y.boundingBox.containsPoint(P))return y}return null}function m7(k,f,x,b,y){if(f.isScene!==!0)f=zJ;m.resetTextureUnits();let F0=f.fog,V0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?f.environment:null,N0=h===null?z.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:i0.workingColorSpace,C0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,P0=e.get(b.envMap||V0,C0),b0=b.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,g0=!!x.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),A0=!!x.morphAttributes.position,$J=!!x.morphAttributes.normal,FJ=!!x.morphAttributes.color,OJ=E9;if(b.toneMapped){if(h===null||h.isXRRenderTarget===!0)OJ=z.toneMapping}let ZJ=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,IJ=ZJ!==void 0?ZJ.length:0,M0=T.get(b),bJ=A.state.lights;if(o0===!0){if(x0===!0||k!==Q0){let B0=k===Q0&&b.id===J0;K0.setState(b,k,B0)}}let c0=!1;if(b.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==bJ.state.version)c0=!0;else if(M0.outputColorSpace!==N0)c0=!0;else if(y.isBatchedMesh&&M0.batching===!1)c0=!0;else if(!y.isBatchedMesh&&M0.batching===!0)c0=!0;else if(y.isBatchedMesh&&M0.batchingColor===!0&&y.colorTexture===null)c0=!0;else if(y.isBatchedMesh&&M0.batchingColor===!1&&y.colorTexture!==null)c0=!0;else if(y.isInstancedMesh&&M0.instancing===!1)c0=!0;else if(!y.isInstancedMesh&&M0.instancing===!0)c0=!0;else if(y.isSkinnedMesh&&M0.skinning===!1)c0=!0;else if(!y.isSkinnedMesh&&M0.skinning===!0)c0=!0;else if(y.isInstancedMesh&&M0.instancingColor===!0&&y.instanceColor===null)c0=!0;else if(y.isInstancedMesh&&M0.instancingColor===!1&&y.instanceColor!==null)c0=!0;else if(y.isInstancedMesh&&M0.instancingMorph===!0&&y.morphTexture===null)c0=!0;else if(y.isInstancedMesh&&M0.instancingMorph===!1&&y.morphTexture!==null)c0=!0;else if(M0.envMap!==P0)c0=!0;else if(b.fog===!0&&M0.fog!==F0)c0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==K0.numPlanes||M0.numIntersection!==K0.numIntersection))c0=!0;else if(M0.vertexAlphas!==b0)c0=!0;else if(M0.vertexTangents!==g0)c0=!0;else if(M0.morphTargets!==A0)c0=!0;else if(M0.morphNormals!==$J)c0=!0;else if(M0.morphColors!==FJ)c0=!0;else if(M0.toneMapping!==OJ)c0=!0;else if(M0.morphTargetsCount!==IJ)c0=!0;else if(!!M0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)c0=!0}else c0=!0,M0.__version=b.version;let sJ=M0.currentProgram;if(c0===!0){if(sJ=n9(b,f,y),V&&b.isNodeMaterial)V.onUpdateProgram(b,sJ,M0)}let J9=!1,G9=!1,l=!1,n=sJ.getUniforms(),$0=M0.uniforms;if(B.useProgram(sJ.program))J9=!0,G9=!0,l=!0;if(b.id!==J0)J0=b.id,G9=!0;if(M0.needsLights){let B0=q7(A.state.lightProbeGridArray,y);if(M0.lightProbeGrid!==B0)M0.lightProbeGrid=B0,G9=!0}if(J9||Q0!==k){if(B.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();n.setValue(S,"projectionMatrix",k.projectionMatrix),n.setValue(S,"viewMatrix",k.matrixWorldInverse);let EJ=n.map.cameraPosition;if(EJ!==void 0)EJ.setValue(S,cJ.setFromMatrixPosition(k.matrixWorld));if(KJ.logarithmicDepthBuffer)n.setValue(S,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)n.setValue(S,"isOrthographic",k.isOrthographicCamera===!0);if(Q0!==k)Q0=k,G9=!0,l=!0}if(M0.needsLights){if(bJ.state.directionalShadowMap.length>0)n.setValue(S,"directionalShadowMap",bJ.state.directionalShadowMap,m);if(bJ.state.spotShadowMap.length>0)n.setValue(S,"spotShadowMap",bJ.state.spotShadowMap,m);if(bJ.state.pointShadowMap.length>0)n.setValue(S,"pointShadowMap",bJ.state.pointShadowMap,m)}if(y.isSkinnedMesh){n.setOptional(S,y,"bindMatrix"),n.setOptional(S,y,"bindMatrixInverse");let B0=y.skeleton;if(B0){if(B0.boneTexture===null)B0.computeBoneTexture();n.setValue(S,"boneTexture",B0.boneTexture,m)}}if(y.isBatchedMesh){if(n.setOptional(S,y,"batchingTexture"),n.setValue(S,"batchingTexture",y._matricesTexture,m),n.setOptional(S,y,"batchingIdTexture"),n.setValue(S,"batchingIdTexture",y._indirectTexture,m),n.setOptional(S,y,"batchingColorTexture"),y._colorsTexture!==null)n.setValue(S,"batchingColorTexture",y._colorsTexture,m)}let j0=x.morphAttributes;if(j0.position!==void 0||j0.normal!==void 0||j0.color!==void 0)s0.update(y,x,sJ);if(G9||M0.receiveShadow!==y.receiveShadow)M0.receiveShadow=y.receiveShadow,n.setValue(S,"receiveShadow",y.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&f.environment!==null)$0.envMapIntensity.value=f.environmentIntensity;if($0.dfgLUT!==void 0)$0.dfgLUT.value=r5();if(G9){if(n.setValue(S,"toneMappingExposure",z.toneMappingExposure),M0.needsLights)G7($0,l);if(F0&&b.fog===!0)E0.refreshFogUniforms($0,F0);if(E0.refreshMaterialUniforms($0,b,D0,W0,A.state.transmissionRenderTarget[k.id]),M0.needsLights&&M0.lightProbeGrid){let B0=M0.lightProbeGrid;$0.probesSH.value=B0.texture,$0.probesMin.value.copy(B0.boundingBox.min),$0.probesMax.value.copy(B0.boundingBox.max),$0.probesResolution.value.copy(B0.resolution)}b7.upload(S,U7(M0),$0,m)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)b7.upload(S,U7(M0),$0,m),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)n.setValue(S,"center",y.center);if(n.setValue(S,"modelViewMatrix",y.modelViewMatrix),n.setValue(S,"normalMatrix",y.normalMatrix),n.setValue(S,"modelMatrix",y.matrixWorld),b.uniformsGroups!==void 0){let B0=b.uniformsGroups;for(let EJ=0,qJ=B0.length;EJ<qJ;EJ++){let hJ=B0[EJ];L0.update(hJ,sJ),L0.bind(hJ,sJ)}}return sJ}function G7(k,f){k.ambientLightColor.needsUpdate=f,k.lightProbe.needsUpdate=f,k.directionalLights.needsUpdate=f,k.directionalLightShadows.needsUpdate=f,k.pointLights.needsUpdate=f,k.pointLightShadows.needsUpdate=f,k.spotLights.needsUpdate=f,k.spotLightShadows.needsUpdate=f,k.rectAreaLights.needsUpdate=f,k.hemisphereLights.needsUpdate=f}function N7(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return h},this.setRenderTargetTextures=function(k,f,x){let b=T.get(k);if(b.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;T.get(k.texture).__webglTexture=f,T.get(k.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:x,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,f){let x=T.get(k);x.__webglFramebuffer=f,x.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(k,f=0,x=0){h=k,u=f,i=x;let b=null,y=!1,F0=!1;if(k){let N0=T.get(k);if(N0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(S.FRAMEBUFFER,N0.__webglFramebuffer),H0.copy(k.viewport),z0.copy(k.scissor),k0=k.scissorTest,B.viewport(H0),B.scissor(z0),B.setScissorTest(k0),J0=-1;return}else if(N0.__webglFramebuffer===void 0)m.setupRenderTarget(k);else if(N0.__hasExternalTextures)m.rebindTextures(k,T.get(k.texture).__webglTexture,T.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let b0=k.depthTexture;if(N0.__boundDepthTexture!==b0){if(b0!==null&&T.has(b0)&&(k.width!==b0.image.width||k.height!==b0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(k)}}let C0=k.texture;if(C0.isData3DTexture||C0.isDataArrayTexture||C0.isCompressedArrayTexture)F0=!0;let P0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(P0[f]))b=P0[f][x];else b=P0[f];y=!0}else if(k.samples>0&&m.useMultisampledRTT(k)===!1)b=T.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(P0))b=P0[x];else b=P0;H0.copy(k.viewport),z0.copy(k.scissor),k0=k.scissorTest}else H0.copy(n0).multiplyScalar(D0).floor(),z0.copy(p0).multiplyScalar(D0).floor(),k0=l0;if(x!==0)b=g;if(B.bindFramebuffer(S.FRAMEBUFFER,b))B.drawBuffers(k,b);if(B.viewport(H0),B.scissor(z0),B.setScissorTest(k0),y){let N0=T.get(k.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+f,N0.__webglTexture,x)}else if(F0){let N0=f;for(let C0=0;C0<k.textures.length;C0++){let P0=T.get(k.textures[C0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+C0,P0.__webglTexture,x,N0)}}else if(k!==null&&x!==0){let N0=T.get(k.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,N0.__webglTexture,x)}J0=-1},this.readRenderTargetPixels=function(k,f,x,b,y,F0,V0,N0=0){if(!(k&&k.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let C0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&V0!==void 0)C0=C0[V0];if(C0){B.bindFramebuffer(S.FRAMEBUFFER,C0);try{let P0=k.textures[N0],b0=P0.format,g0=P0.type;if(k.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+N0);if(!KJ.textureFormatReadable(b0)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!KJ.textureTypeReadable(g0)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=k.width-b&&(x>=0&&x<=k.height-y))S.readPixels(f,x,b,y,s.convert(b0),s.convert(g0),F0)}finally{let P0=h!==null?T.get(h).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(k,f,x,b,y,F0,V0,N0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let C0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&V0!==void 0)C0=C0[V0];if(C0)if(f>=0&&f<=k.width-b&&(x>=0&&x<=k.height-y)){B.bindFramebuffer(S.FRAMEBUFFER,C0);let P0=k.textures[N0],b0=P0.format,g0=P0.type;if(k.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+N0);if(!KJ.textureFormatReadable(b0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!KJ.textureTypeReadable(g0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let A0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,A0),S.bufferData(S.PIXEL_PACK_BUFFER,F0.byteLength,S.STREAM_READ),S.readPixels(f,x,b,y,s.convert(b0),s.convert(g0),0);let $J=h!==null?T.get(h).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,$J);let FJ=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await TK(S,FJ,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,A0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,F0),S.deleteBuffer(A0),S.deleteSync(FJ),F0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,f=null,x=0){let b=Math.pow(2,-x),y=Math.floor(k.image.width*b),F0=Math.floor(k.image.height*b),V0=f!==null?f.x:0,N0=f!==null?f.y:0;m.setTexture2D(k,0),S.copyTexSubImage2D(S.TEXTURE_2D,x,0,0,V0,N0,y,F0),B.unbindTexture()},this.copyTextureToTexture=function(k,f,x=null,b=null,y=0,F0=0){let V0,N0,C0,P0,b0,g0,A0,$J,FJ,OJ=k.isCompressedTexture?k.mipmaps[F0]:k.image;if(x!==null)V0=x.max.x-x.min.x,N0=x.max.y-x.min.y,C0=x.isBox3?x.max.z-x.min.z:1,P0=x.min.x,b0=x.min.y,g0=x.isBox3?x.min.z:0;else{let $0=Math.pow(2,-y);if(V0=Math.floor(OJ.width*$0),N0=Math.floor(OJ.height*$0),k.isDataArrayTexture)C0=OJ.depth;else if(k.isData3DTexture)C0=Math.floor(OJ.depth*$0);else C0=1;P0=0,b0=0,g0=0}if(b!==null)A0=b.x,$J=b.y,FJ=b.z;else A0=0,$J=0,FJ=0;let ZJ=s.convert(f.format),IJ=s.convert(f.type),M0;if(f.isData3DTexture)m.setTexture3D(f,0),M0=S.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)m.setTexture2DArray(f,0),M0=S.TEXTURE_2D_ARRAY;else m.setTexture2D(f,0),M0=S.TEXTURE_2D;B.activeTexture(S.TEXTURE0),B.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,f.flipY),B.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),B.pixelStorei(S.UNPACK_ALIGNMENT,f.unpackAlignment);let bJ=B.getParameter(S.UNPACK_ROW_LENGTH),c0=B.getParameter(S.UNPACK_IMAGE_HEIGHT),sJ=B.getParameter(S.UNPACK_SKIP_PIXELS),J9=B.getParameter(S.UNPACK_SKIP_ROWS),G9=B.getParameter(S.UNPACK_SKIP_IMAGES);B.pixelStorei(S.UNPACK_ROW_LENGTH,OJ.width),B.pixelStorei(S.UNPACK_IMAGE_HEIGHT,OJ.height),B.pixelStorei(S.UNPACK_SKIP_PIXELS,P0),B.pixelStorei(S.UNPACK_SKIP_ROWS,b0),B.pixelStorei(S.UNPACK_SKIP_IMAGES,g0);let l=k.isDataArrayTexture||k.isData3DTexture,n=f.isDataArrayTexture||f.isData3DTexture;if(k.isDepthTexture){let $0=T.get(k),j0=T.get(f),B0=T.get($0.__renderTarget),EJ=T.get(j0.__renderTarget);B.bindFramebuffer(S.READ_FRAMEBUFFER,B0.__webglFramebuffer),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,EJ.__webglFramebuffer);for(let qJ=0;qJ<C0;qJ++){if(l)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.get(k).__webglTexture,y,g0+qJ),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.get(f).__webglTexture,F0,FJ+qJ);S.blitFramebuffer(P0,b0,V0,N0,A0,$J,V0,N0,S.DEPTH_BUFFER_BIT,S.NEAREST)}B.bindFramebuffer(S.READ_FRAMEBUFFER,null),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(y!==0||k.isRenderTargetTexture||T.has(k)){let $0=T.get(k),j0=T.get(f);B.bindFramebuffer(S.READ_FRAMEBUFFER,r),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,p);for(let B0=0;B0<C0;B0++){if(l)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,$0.__webglTexture,y,g0+B0);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,$0.__webglTexture,y);if(n)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j0.__webglTexture,F0,FJ+B0);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,j0.__webglTexture,F0);if(y!==0)S.blitFramebuffer(P0,b0,V0,N0,A0,$J,V0,N0,S.COLOR_BUFFER_BIT,S.NEAREST);else if(n)S.copyTexSubImage3D(M0,F0,A0,$J,FJ+B0,P0,b0,V0,N0);else S.copyTexSubImage2D(M0,F0,A0,$J,P0,b0,V0,N0)}B.bindFramebuffer(S.READ_FRAMEBUFFER,null),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(n)if(k.isDataTexture||k.isData3DTexture)S.texSubImage3D(M0,F0,A0,$J,FJ,V0,N0,C0,ZJ,IJ,OJ.data);else if(f.isCompressedArrayTexture)S.compressedTexSubImage3D(M0,F0,A0,$J,FJ,V0,N0,C0,ZJ,OJ.data);else S.texSubImage3D(M0,F0,A0,$J,FJ,V0,N0,C0,ZJ,IJ,OJ);else if(k.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,F0,A0,$J,V0,N0,ZJ,IJ,OJ.data);else if(k.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,F0,A0,$J,OJ.width,OJ.height,ZJ,OJ.data);else S.texSubImage2D(S.TEXTURE_2D,F0,A0,$J,V0,N0,ZJ,IJ,OJ);if(B.pixelStorei(S.UNPACK_ROW_LENGTH,bJ),B.pixelStorei(S.UNPACK_IMAGE_HEIGHT,c0),B.pixelStorei(S.UNPACK_SKIP_PIXELS,sJ),B.pixelStorei(S.UNPACK_SKIP_ROWS,J9),B.pixelStorei(S.UNPACK_SKIP_IMAGES,G9),F0===0&&f.generateMipmaps)S.generateMipmap(M0);B.unbindTexture()},this.initRenderTarget=function(k){if(T.get(k).__webglFramebuffer===void 0)m.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)m.setTextureCube(k,0);else if(k.isData3DTexture)m.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)m.setTexture2DArray(k,0);else m.setTexture2D(k,0);B.unbindTexture()},this.resetState=function(){u=0,i=0,h=null,B.reset(),Y0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return R$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=i0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=i0._getUnpackColorSpace()}}var x7=new v;function X9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),U=Math.PI/4;x7.copy(Q),x7[Z]=0,x7.normalize();let H=0.5*X/(X+Y),G=1-x7.angleTo(J)/U;if(Math.sign(x7[$])===1)return G*H;else return Y/(X+Y)+H+H*(1-G)}class l9 extends MJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new v,U=new v,H=new v(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,N=this.attributes.normal.array,q=this.attributes.uv.array,E=G.length/6,L=new v,I=0.5/W;for(let O=0,F=0;O<G.length;O+=3,F+=2)switch(Y.fromArray(G,O),U.copy(Y),U.x-=Math.sign(U.x)*I,U.y-=Math.sign(U.y)*I,U.z-=Math.sign(U.z)*I,U.normalize(),G[O+0]=H.x*Math.sign(Y.x)+U.x*K,G[O+1]=H.y*Math.sign(Y.y)+U.y*K,G[O+2]=H.z*Math.sign(Y.z)+U.z*K,N[O+0]=U.x,N[O+1]=U.y,N[O+2]=U.z,Math.floor(O/E)){case 0:L.set(1,0,0),q[F+0]=X9(L,U,"z","y",K,$),q[F+1]=1-X9(L,U,"y","z",K,Q);break;case 1:L.set(-1,0,0),q[F+0]=1-X9(L,U,"z","y",K,$),q[F+1]=1-X9(L,U,"y","z",K,Q);break;case 2:L.set(0,1,0),q[F+0]=1-X9(L,U,"x","z",K,J),q[F+1]=X9(L,U,"z","x",K,$);break;case 3:L.set(0,-1,0),q[F+0]=1-X9(L,U,"x","z",K,J),q[F+1]=1-X9(L,U,"z","x",K,$);break;case 4:L.set(0,0,1),q[F+0]=1-X9(L,U,"x","y",K,J),q[F+1]=1-X9(L,U,"y","x",K,Q);break;case 5:L.set(0,0,-1),q[F+0]=X9(L,U,"x","y",K,J),q[F+1]=1-X9(L,U,"y","x",K,Q);break}}static fromJSON(J){return new l9(J.width,J.height,J.depth,J.segments,J.radius)}}class JZ extends r8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new MJ;J.deleteAttribute("uv");let Q=new fJ({side:lJ}),$=new fJ,Z=new p6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new S0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new t8(J,$,6),X=new VJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new S0(J,$7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let U=new S0(J,$7(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let H=new S0(J,$7(17));H.position.set(14.904,12.198,-1.832),H.scale.set(0.15,4.265,6.331),this.add(H);let G=new S0(J,$7(43));G.position.set(-0.462,8.89,14.52),G.scale.set(4.38,5.441,0.088),this.add(G);let N=new S0(J,$7(20));N.position.set(3.235,11.486,-12.541),N.scale.set(2.5,2,0.1),this.add(N);let q=new S0(J,$7(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function $7(J){return new y6({color:0,emissive:16777215,emissiveIntensity:J})}var A8=653429,RJ="#09F875",XJ="rgba(9,248,117,0.55)",QZ="rgba(9,248,117,0.28)",t5="#0A0A0A",KZ="#070808";var _J="#CFFFE2",_8="'SF Mono', ui-monospace, Menlo, Consolas, monospace",C8="'Space Grotesk', -apple-system, sans-serif",W8=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],U9=matchMedia("(prefers-reduced-motion: reduce)").matches,VW=null,P8=()=>VW=VW||new(window.AudioContext||window.webkitAudioContext);function V9(J,Q,$,Z=0.045,K="triangle"){let W=P8(),X=W.createOscillator(),Y=W.createGain();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var SJ={detent(J=0){try{let Q=P8();if(Q.state==="suspended")Q.resume();V9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=P8();V9(420,J.currentTime+0.01,0.04,0.05),V9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=P8();V9(120,J.currentTime+0.01,0.09,0.08,"sine"),V9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=P8();V9(660,J.currentTime+0.02,0.05),V9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=P8();V9(220,J.currentTime+0.02,0.05,0.07),V9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=P8();V9(240,J.currentTime+0.01,0.05,0.05,"sine"),V9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class K8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var e5=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],n6={w:240,h:254};function s6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/n6.w,Z/n6.w),J.fillStyle=K;for(let X of e5)J.fill(X);J.restore()}var Jq=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],Qq=[[18,5,3,2]],$Z=[[6,4,8,4]],$q=[[6,9,8,4]],ZZ=[[7,12,7,3]],g7=[15.2,4.6,1.6,1.6];class MW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?$Z:ZZ}if(this.state==="happy")return Math.floor(J*8)%2?$Z:ZZ;if(this.state==="droop")return ZZ;return Math.floor(J)%7===6?$Z:$q}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),U=18*Z;if(X>0.01){let H=1+Math.sin(W*1.1)*0.012,G=15*Z*H;s6(J,Q+(24*Z-G)/2,$+U-G*(n6.h/n6.w),G,RJ,X)}if(Y>0.01){let H=this.state==="droop",G=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=RJ;let N=(q,E,L,I,O=0)=>{let F=Q+q*Z,w=$+(E+G-this.hopY/24)*Z;if(O>0)J.beginPath(),J.roundRect(F,w,L*Z,I*Z,O*Z),J.fill();else J.fillRect(F,w,L*Z,I*Z)};for(let[q,E,L,I]of Jq){let O=H&&q>=12&&E<=4?E+2:E;N(q,O,L,I,Math.min(L,I)*0.42)}for(let[q,E,L,I]of Qq)N(q,H?E+2:E,L,I,0.6);for(let[q,E,L,I]of this.wingCells(W))N(q,H?E+2:E,L,I,1.1);if(!this.blinking()){J.fillStyle=KZ;let q=H?g7[1]+2:g7[1];J.fillRect(Q+g7[0]*Z,$+(q+G-this.hopY/24)*Z,g7[2]*Z,g7[3]*Z)}J.restore()}}}var Y9=1024,d9=768;class zW{canvas=document.createElement("canvas");ctx;tex;vireo=new MW;mode=0;lane="inference";meta=null;history=[];booted=U9;bootT=0;powered=U9;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;tabRects=[];lastDrawAt=-1e9;crt=null;crtOverlay(){if(this.crt)return this.crt;let J=document.createElement("canvas");J.width=Y9*1.5,J.height=d9*1.5;let Q=J.getContext("2d");Q.fillStyle="rgba(0,0,0,0.16)";for(let Z=0;Z<J.height;Z+=5)Q.fillRect(0,Z,J.width,2);let $=Q.createRadialGradient(J.width/2,J.height/2,J.height*0.34,J.width/2,J.height/2,J.height*0.92);return $.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,6,3,0.42)"),Q.fillStyle=$,Q.fillRect(0,0,J.width,J.height),this.crt=J,J}dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=Y9*1.5,this.canvas.height=d9*1.5,this.ctx=this.canvas.getContext("2d"),this.ctx.setTransform(1.5,0,0,1.5,0,0),this.tex=new P9(this.canvas),this.tex.colorSpace=R9,this.tex.generateMipmaps=!1,this.tex.minFilter=BJ}modeName(){return W8[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.powered&&!this.booted){if(this.bootT+=J,this.bootT>2.1)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=U9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=RJ,W=_8,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=KZ,Q.fillRect(0,0,Y9,d9),!this.powered){if(Math.floor(J*2)%2===0)Q.fillStyle=RJ,Q.fillRect(Y9/2-14,d9/2-24,28,7);this.text("READING CARD",Y9/2-84,d9/2+12,21,XJ),this.compositeCrt();return}if(!this.booted){let Y=this.bootT,H=["VANTIS UNIFIED OPERATING SYSTEM","COPYRIGHT 2026 VANTIS.SH","WLT-01 WALLET TERMINAL","","MEMORY CHECK ............... OK","RAIL LINK .................. OK",`CARD ....................... ${this.meta?.handle?"@"+String(this.meta.handle).replace(/^@+/,"").toUpperCase():"…"}`,"LANES ...................... INF · DEV","","BOOT COMPLETE"],G=340,N=Math.floor(Y*340),q=96;this.ctx.shadowColor=RJ,this.ctx.shadowBlur=7;for(let E of H){if(N<=0)break;let L=E.slice(0,N);N-=E.length+6,this.text(L,72,q,24,RJ),q+=40}if(this.ctx.shadowBlur=0,Math.floor(J*3)%2===0)this.ctx.fillStyle=RJ,this.ctx.fillRect(72,q+4,15,26);this.compositeCrt();return}this.tabRects=[];let $=44;for(let Y=0;Y<W8.length;Y++){let U=Y===this.mode;Q.font=`600 22px ${_8}`;let H=Q.measureText(W8[Y]).width;if(U)Q.fillStyle=RJ,Q.beginPath(),Q.roundRect($-14,24,H+28,40,8),Q.fill();this.text(W8[Y],$,33,22,U?KZ:XJ),this.tabRects.push({x:$-14,y:16,w:H+28,h:56,mode:Y}),$+=H+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${_8}`,this.text(`MAIN ${Z}`,Y9-44-Q.measureText(`MAIN ${Z}`).width,33,22,_J),Q.fillStyle=QZ,Q.fillRect(44,80,Y9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,XJ),this.wrap(this.err,52).slice(0,4).forEach((Y,U)=>this.text(Y,64,K+46+U*34,24,_J));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=QZ,Q.fillRect(44,d9-140,Y9-88,2),this.vireo.draw(Q,52,d9-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${_8}`,this.text(X,Y9-44-Q.measureText(X).width,d9-72,21,this.busy?RJ:XJ),this.compositeCrt()}compositeCrt(){let J=this.ctx;J.save(),J.setTransform(1,0,0,1,0,0),J.drawImage(this.crtOverlay(),0,0),J.restore()}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,XJ),this.ctx.shadowColor=RJ,this.ctx.shadowBlur=10,this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,_J,C8,"700"),this.ctx.shadowBlur=0,this.text("MAIN BALANCE",46,J+156,20,XJ),Q?.tier){let X=this.ctx;X.font=`600 20px ${_8}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,U=X.measureText(Y).width;X.strokeStyle=XJ,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,U+28,38,19),X.stroke(),this.text(Y,58,J+207,20,RJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+U,J+207,20,XJ)}let K=(X,Y,U,H)=>{let G=this.ctx;this.text(X,560,U,22,H?RJ:XJ);let N=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";G.font=`700 30px ${C8}`,this.text(N,Y9-44-G.measureText(N).width,U-6,30,_J,C8,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),E=Math.max(6,(Y?.balance_usd||0)/q*420);G.fillStyle="rgba(9,248,117,0.16)",G.fillRect(560,U+44,420,10),G.fillStyle=H?RJ:XJ,G.fillRect(560,U+44,E,10),this.text(H?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,U+68,18,XJ)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,XJ),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,_J)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,XJ),this.text(this.armed.quote,64,J+44,25,_J),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,RJ,C8,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,XJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,_J),this.text("billed to your Inference lane.",64,J+80,26,_J),this.text("Type below, then press the green key.",64,J+138,24,XJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,XJ);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,X)=>this.text(W,64,J+42+X*34,24,_J)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,RJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,XJ),this.text("One real query against the open web.",64,J+44,26,_J);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,XJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,XJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,_J),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,XJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,RJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,XJ),this.text("Public metrics for any handle —",64,J+44,26,_J),this.text("the same read the scoring agent makes.",64,J+80,26,_J);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,XJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,_J,C8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,XJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,RJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,XJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,_J))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,XJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,_J);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?RJ:XJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,_J)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,U,H,G)=>{let N=this.ctx;N.strokeStyle=U?RJ:QZ,N.lineWidth=U?3:2,N.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,U?RJ:XJ),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,_J,C8,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,XJ),this.wrap(G,30).slice(0,3).forEach((q,E)=>this.text(q,Y+28,J+196+E*28,19,H?_J:XJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function Zq(J,Q){let $=document.createElement("canvas");$.width=512,$.height=684;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:RJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:RJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,X=Z.createLinearGradient(0,0,512,684);X.addColorStop(0,W.top),X.addColorStop(1,W.bottom),Z.fillStyle=X,Z.fillRect(0,0,512,684);let Y=(J||"").replace(/^@+/,"");s6(Z,40,36,88,W.accent),Z.font=`700 44px ${C8}`,Z.fillStyle=W.fg,Z.fillText(Y?`@${Y}`:"VANTIS",152,96),Z.font=`600 20px ${_8}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",154,134),Z.fillStyle=W.accent,Z.globalAlpha=0.28,Z.fillRect(0,176,512,3),Z.globalAlpha=1;let U=new P9($);return U.colorSpace=R9,U.generateMipmaps=!1,U.minFilter=BJ,U}function Kq(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new P9(J);return Z.colorSpace=R9,Z}function BW(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(2,devicePixelRatio||1),$;try{$=new e$({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=R9,$.toneMapping=M7,$.toneMappingExposure=1,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new r8,K=new h7($);Z.environment=K.fromScene(new JZ,0.04).texture;let W=new e8(16777215,1.15);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new e8(14680046,0.16);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new e8(10485709,0.4);Y.position.set(2.2,1.4,-2),Z.add(Y);let U=new pJ(28,1,0.1,20),H=new v(0.1,0.7,4.3),G=new v(0,0.44,0);U.position.copy(H),U.lookAt(G);function N(l,n,$0="rgba(9,248,117,0.65)"){let j0=document.createElement("canvas"),B0=Math.max(64,l.length*n*0.75),EJ=n*2;j0.width=B0*2,j0.height=EJ*2;let qJ=j0.getContext("2d");qJ.scale(2,2),qJ.font=`600 ${n}px ${_8}`,qJ.fillStyle=$0,qJ.textBaseline="middle",qJ.textAlign="center",qJ.fillText(l,B0/2,EJ/2);let hJ=new P9(j0);hJ.colorSpace=R9,hJ.generateMipmaps=!1,hJ.minFilter=BJ;let nJ=new S0(new aJ(B0/640,EJ/640),new dJ({map:hJ,transparent:!0}));return nJ.material.toneMapped=!1,nJ}let q=new fJ({color:724236,roughness:0.64,metalness:0.2,envMapIntensity:0.3}),E=new fJ({color:658186,roughness:0.75,metalness:0.25}),L=new fJ({color:790029,roughness:0.92,metalness:0.05}),I=new fJ({color:A8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:A8,emissiveIntensity:0.42});I.toneMapped=!1;let O=new dJ({color:A8});O.toneMapped=!1;let F=new u0(1327146),w=new h6,P=(l,n)=>w.load(l,($0)=>{$0.wrapS=$0.wrapT=R6,$0.anisotropy=4,n($0)});P("/tex/metal030-normal-v1.jpg",(l)=>{l.repeat.set(2,1.4),q.normalMap=l,q.normalScale.set(0.65,0.65),q.needsUpdate=!0}),P("/tex/metal030-rough-v1.jpg",(l)=>{l.repeat.set(2,1.4),q.roughnessMap=l,q.roughness=0.9,q.needsUpdate=!0});let M=new mJ;Z.add(M);let A=new mJ,C=new S0(new l9(1.9,1.25,0.34,4,0.07),q);A.add(C),A.position.set(0,0.62,0),A.rotation.x=-0.06,M.add(A);let _=A,R=1.15,z=0.8625,d=new S0(new MJ(1.23,0.94,0.02),E);d.position.set(-0.26,0.02,0.164),A.add(d);let V=new zW,g=new S0(new aJ(R,z),new dJ({map:V.tex}));g.position.set(-0.26,0.02,0.178),A.add(g);let r=new S0(new aJ(1.21,0.92),new fJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));r.position.set(-0.26,0.02,0.184),A.add(r);let p=new S0(new MJ(0.01,1.08,0.012),O);p.position.set(0.4,0,0.172),A.add(p);let u=new mJ,i=new S0(new L9(0.155,0.155,0.075,48),new fJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));i.rotation.x=Math.PI/2,u.add(i);let h=new S0(new L9(0.135,0.135,0.014,40),new fJ({color:790029,roughness:0.42,metalness:0.4,envMapIntensity:0.45}));h.rotation.x=Math.PI/2,h.position.z=0.042,u.add(h);let J0=new t8(new MJ(0.016,0.032,0.062),new fJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),Q0=new VJ;for(let l=0;l<28;l++){let n=l/28*Math.PI*2;Q0.position.set(Math.cos(n)*0.157,Math.sin(n)*0.157,0),Q0.rotation.z=n,Q0.updateMatrix(),J0.setMatrixAt(l,Q0.matrix)}u.add(J0);let H0=new S0(new MJ(0.014,0.072,0.012),O);H0.position.set(0,0.1,0.046),u.add(H0),u.position.set(0.67,0.3,0.17),A.add(u);let z0=document.createElement("canvas");z0.width=z0.height=256;let k0=z0.getContext("2d");k0.translate(128,128),k0.strokeStyle="rgba(9,248,117,0.4)",k0.lineWidth=3;for(let l=0;l<24;l++)k0.beginPath(),k0.moveTo(0,-104),k0.lineTo(0,l%6===0?-88:-96),k0.stroke(),k0.rotate(Math.PI/12);let YJ=new P9(z0);YJ.colorSpace=R9,YJ.generateMipmaps=!1,YJ.minFilter=BJ;let JJ=new S0(new aJ(0.43,0.43),new dJ({map:YJ,transparent:!0}));JJ.material.toneMapped=!1,JJ.position.set(0.67,0.3,0.165),A.add(JJ);let o=N("DIAL",12);o.position.set(0.67,0.06,0.168),A.add(o);let W0=new mJ,D0=new S0(new l9(0.24,0.24,0.07,3,0.024),I);W0.add(D0);let R0=document.createElement("canvas");R0.width=R0.height=128,s6(R0.getContext("2d"),28,24,72,t5);let w0=new P9(R0);w0.colorSpace=R9,w0.generateMipmaps=!1,w0.minFilter=BJ;let n0=new S0(new aJ(0.11,0.11),new dJ({map:w0,transparent:!0}));n0.material.toneMapped=!1,n0.position.z=0.037,D0.add(n0);let p0=new S0(new MJ(0.3,0.3,0.02),E);p0.position.z=-0.028,W0.add(p0),W0.position.set(0.67,-0.14,0.17),A.add(W0);let l0=N("FIRE",12);l0.position.set(0.67,-0.32,0.168),A.add(l0);let t0=new mJ,o0=new S0(new l9(0.24,0.09,0.03,2,0.012),E);t0.add(o0);let x0=new mJ,kJ=new S0(new MJ(0.04,0.085,0.04),new fJ({color:1316373,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));kJ.position.y=0.042,x0.add(kJ);let cJ=new S0(new l9(0.06,0.048,0.048,2,0.014),I);cJ.position.y=0.095,x0.add(cJ),x0.position.z=0.03,t0.add(x0),t0.position.set(0.67,-0.52,0.17),A.add(t0);let UJ=N("INF",11);UJ.position.set(0.51,-0.42,0.168),A.add(UJ);let zJ=N("DEV",11);zJ.position.set(0.83,-0.42,0.168),A.add(zJ);let LJ=new L9(0.012,0.012,0.014,12),NJ=new S0(LJ,new dJ({color:A8}));NJ.material.toneMapped=!1,NJ.rotation.x=Math.PI/2,NJ.position.set(0.51,-0.48,0.17),A.add(NJ);let S=new S0(LJ,new dJ({color:F}));S.material.toneMapped=!1,S.rotation.x=Math.PI/2,S.position.set(0.83,-0.48,0.17),A.add(S);let jJ=document.createElement("canvas");jJ.width=240,jJ.height=254,s6(jJ.getContext("2d"),0,0,240,RJ);let a0=new P9(jJ);a0.colorSpace=R9,a0.generateMipmaps=!1,a0.minFilter=BJ;let KJ=new S0(new aJ(0.07,0.074),new dJ({map:a0,transparent:!0}));KJ.material.toneMapped=!1,KJ.position.set(-0.82,-0.55,0.172),A.add(KJ);let B=N("WLT-01",11,"rgba(9,248,117,0.5)");B.position.set(-0.62,-0.56,0.168),A.add(B);for(let l=0;l<5;l++){let n=new S0(new MJ(0.14,0.008,0.006),E);n.position.set(0.06+l%2*0,-0.5-Math.floor(l)*0.022,0.17),n.position.x=-0.2,n.position.y=-0.5-l*0.024,A.add(n)}let D=new fJ({color:2764075,roughness:0.42,metalness:0.75,envMapIntensity:0.9}),T=new L9(0.016,0.016,0.01,12);for(let[l,n]of[[-0.88,0.56],[0.88,0.56],[-0.88,-0.56],[0.88,-0.56]]){let $0=new S0(T,D);$0.rotation.x=Math.PI/2,$0.position.set(l,n,0.172),A.add($0);let j0=new S0(new MJ(0.02,0.003,0.004),E);j0.position.set(l,n,0.178),j0.rotation.z=l*n>0?0.6:-0.5,A.add(j0)}let m=new mJ,e=new S0(new L9(0.4,0.4,1.5,36),L);e.rotation.z=Math.PI/2,m.add(e);for(let l of[-0.56,-0.2,0.16,0.52]){let n=new S0(new L9(0.412,0.412,0.05,36),E);n.rotation.z=Math.PI/2,n.position.x=l,m.add(n)}let Z0=new S0(new L9(0.425,0.425,0.06,36),L);Z0.rotation.z=Math.PI/2,Z0.position.x=-0.76,m.add(Z0);let q0=Z0.clone();q0.position.x=0.76,m.add(q0),m.position.set(0,0.12,-0.62),M.add(m);let c=new mJ;c.position.set(-0.26,0.645,0.06),A.add(c);let a=new S0(new l9(0.56,0.07,0.11,2,0.02),E);c.add(a);let E0=new S0(new MJ(0.5,0.005,0.004),O);E0.position.set(0,0.037,0.056),c.add(E0);let I0=new mJ,G0=new S0(new l9(0.48,0.5,0.02,2,0.01),new fJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}));I0.add(G0);let K0=new dJ;K0.toneMapped=!1;let _0=new S0(new aJ(0.46,0.48),K0);_0.position.z=0.0115,I0.add(_0),I0.position.y=-0.06,c.add(I0);let T0=new S0(new aJ(3,1.8),new dJ({map:Kq(),transparent:!0,depthWrite:!1}));T0.rotation.x=-Math.PI/2,T0.position.y=-0.2,Z.add(T0),M.position.y=0.02;let s0=new K8(0,60,14),j=new K8(0,60,14),X0=new K8(0,70,15),s=!1,Y0=new v,L0=new v,t=new v;function U0(l){s=l??!s,X0.target=s?1:0,SJ.lever(),yJ(s?"Screen raised":"Screen lowered")}let y0=new K8(0,170,20),QJ=new K8(0,400,24),e0=new K8(-0.22,240,20),vJ=new K8(U9?-0.06:0.62,70,13),H9={t:0},B9=(l,n=!1)=>{let $0=(l%W8.length+W8.length)%W8.length;if($0===V.mode)return;if(V.mode=$0,V.err=null,V.armed=null,V.dirty=!0,y0.target=-$0*(Math.PI*2/8),!n)SJ.detent($0);V.vireo.poke(),X7(),yJ(`Mode: ${W8[$0]}`)},Z7=document.getElementById("dv-input-row"),q9=document.getElementById("dv-input"),K7=document.getElementById("dv-go"),u9=document.getElementById("dv-alt"),W7=document.getElementById("dv-live"),yJ=(l)=>{if(W7)W7.textContent=l},X8={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function X7(){let l=V.modeName(),n=X8[l];if(Z7)Z7.style.display=n?"flex":"none";if(n&&q9)q9.placeholder=n.ph;if(n&&K7)K7.textContent=n.go;if(u9)if(l==="HOME"||l==="LANES")u9.style.display="",u9.textContent=l==="LANES"?"Sweep lane":"Fund lane";else u9.style.display="none"}async function p7(){try{let l=await fetch("/api/playground/meta");if(!l.ok)return;if(V.meta=await l.json(),V.meta?.handle){if(K0.map=Zq(V.meta.handle,V.meta.variant),K0.needsUpdate=!0,vJ.target>0){if(vJ.target=-0.06,!U9)setTimeout(()=>SJ.dock(),420);setTimeout(()=>{V.powered=!0},U9?0:750)}}V.dirty=!0}catch{}}async function c9(){try{let l=await fetch("/api/credits/history");if(!l.ok)return;let n=await l.json();V.history=n.entries||[],V.dirty=!0}catch{}}addEventListener("vc-balances",(l)=>{let n=l.detail||{};if(!V.meta)return;let $0=V.meta.main_balance_usd;V.meta.main_balance_usd=n.main??V.meta.main_balance_usd;for(let j0 of n.wallets||[]){let B0=j0.purpose==="inference"?V.meta.lanes?.inference:V.meta.lanes?.devtools;if(B0)B0.balance_usd=j0.balance_usd,B0.consumed_usd=j0.consumed_usd}if(typeof n.main==="number"&&n.main!==$0)V.vireo.set("happy");V.dirty=!0,c9()});function Y7(l){let n=V.meta?.lanes?.[l];return n?{id:n.id,name:l==="inference"?"Inference":"Developer tools"}:null}function n9(l){let n=Y7(l);if(!n)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:n}))}async function U7(l){let n=Y7(l);if(!n)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:n}))}let H7=null,q7=!1;function m7(){if(V.busy)return!1;if(X8[V.modeName()]&&!(q9?.value||"").trim())return q9?.focus(),V.vireo.set("alert"),V.dirty=!0,SJ.err(),!1;return!0}async function G7(){if(V.busy)return;let l=V.modeName();if(V.err=null,l==="HOME"){n9("inference");return}if(l==="LANES"){n9(V.lane);return}if(l==="LEDGER"){c9();return}let n=X8[l],$0=(q9?.value||"").trim();if(n&&!$0){q9?.focus(),V.vireo.set("alert"),SJ.err();return}if(l==="CHAT"&&!V.armed){let B0=(Math.ceil(($0.length+180)/4)*0.14+112.00000000000001)/1e6,EJ=V.meta?.vantis_price_usd?B0/V.meta.vantis_price_usd:null;V.armed={until:performance.now()+3000,quote:`UP TO $${B0.toFixed(6)}${EJ?` · ~${EJ.toFixed(4)} VANTIS`:""} AT LIST`},V.dirty=!0,yJ("Armed. Press again to fire.");return}V.armed=null,V.busy=!0,V.vireo.set("work"),V.vireo.flapRate=3,V.dirty=!0;try{if(l==="CHAT"){V.chat={prompt:$0,text:"",shown:0,line:""};let j0=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:$0})}),B0=await j0.json();if(!j0.ok){if(V.chat=null,B0.error==="lane_empty")V.err=`Inference lane is empty — it needs about $${(B0.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,V.vireo.set("droop");else if(B0.error==="rate_limited")V.err="Easy — a few seconds between fires.",V.vireo.set("alert");else V.err="The rail refused that one. Try again.",V.vireo.set("alert");SJ.err()}else{if(V.chat.text=B0.text||"",V.chat.line=`${(B0.latency_ms/1000).toFixed(1)}s · ${B0.tokens_out} TOK OUT · $${(B0.cost_usd||0).toFixed(6)} → ${(B0.vantis_burned||0).toFixed(4)} VANTIS BURNED`,V.meta?.lanes?.inference)V.meta.lanes.inference.balance_usd=B0.lane_balance_usd;SJ.ok(),yJ(`Answer: ${B0.text}`)}}else if(l==="SEARCH"){let j0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:$0})}),B0=await j0.json();if(!j0.ok){if(B0.error==="demo_exhausted")V.err="Today's free searches are spent — more tomorrow.";else V.err="Search did not go through.";V.vireo.set("alert"),SJ.err()}else V.search={query:$0,results:B0.results,left:B0.left_today},V.vireo.set("happy"),SJ.ok(),yJ(`${B0.results.length} results`)}else if(l==="X LOOKUP"){let j0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:$0})}),B0=await j0.json();if(!j0.ok)V.err=B0.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":B0.error==="handle_not_found"?"No such handle — check the spelling.":B0.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",V.vireo.set("alert"),SJ.err();else V.xprof={profile:B0.profile,left:B0.left_today},V.vireo.set("happy"),SJ.ok(),yJ(`@${B0.profile.handle}: ${B0.profile.followers} followers`)}}catch{V.err="Network hiccup — try again.",V.vireo.set("alert"),SJ.err()}finally{if(V.busy=!1,V.vireo.state==="work")V.vireo.set("idle");V.dirty=!0}}let N7=-1e9,k=new m6,f=new d0,x=null,b=new dJ({visible:!1}),y=(l,n,$0,j0,B0,EJ=0,qJ=0,hJ=0)=>{let nJ=new S0(new MJ(n,$0,j0),b);return nJ.position.set(EJ,qJ,hJ),nJ.userData.hit=l,B0.add(nJ),nJ},F0=[y("knob",0.42,0.42,0.22,u),y("key",0.34,0.34,0.2,W0),y("lever",0.3,0.26,0.18,t0,0,0.05,0.03),y("card",0.6,0.3,0.24,c,0,0.1,0.02),y("screen",1.17,0.88,0.06,_,-0.26,0.02,0.19)];function V0(l){let n=$.domElement.getBoundingClientRect();f.x=(l.clientX-n.left)/n.width*2-1,f.y=-((l.clientY-n.top)/n.height)*2+1,k.setFromCamera(f,U);let $0=k.intersectObjects(F0,!1);return $0.length?$0[0].object.userData.hit:null}function N0(l){let n=$.domElement.getBoundingClientRect();f.x=(l.clientX-n.left)/n.width*2-1,f.y=-((l.clientY-n.top)/n.height)*2+1,k.setFromCamera(f,U);let $0=k.intersectObject(g,!1)[0];if(!$0?.uv)return null;return{cx:$0.uv.x*Y9,cy:(1-$0.uv.y)*d9}}function C0(l){let n=N0(l);if(!n)return;for(let $0 of V.tabRects)if(n.cx>=$0.x&&n.cx<=$0.x+$0.w&&n.cy>=$0.y&&n.cy<=$0.y+$0.h){B9($0.mode);return}if(V.modeName()==="LANES"&&n.cy>100&&n.cy<460){let $0=n.cx<Y9/2?"inference":"devtools";if($0!==V.lane){V.lane=$0,e0.target=$0==="inference"?-0.22:0.22,SJ.lever(),V.dirty=!0,yJ(`Lane: ${V.lane}`);return}}U0()}$.domElement.addEventListener("pointerdown",(l)=>{N7=performance.now();let n=V0(l);if(!n)return;if(V.vireo.poke(),n==="knob")x={x:l.clientX,base:V.mode,acc:0},$.domElement.setPointerCapture(l.pointerId);else if(n==="key"){if(!m7())return;QJ.target=-0.032,SJ.press(),q7=!1,H7=setTimeout(()=>{if(q7=!0,V.modeName()==="LANES")U7(V.lane)},650)}else if(n==="lever"){if(V.lane=V.lane==="inference"?"devtools":"inference",e0.target=V.lane==="inference"?-0.22:0.22,SJ.lever(),V.dirty=!0,V.modeName()!=="LANES")B9(5,!0);yJ(`Lane: ${V.lane}`)}else if(n==="screen")C0(l);else if(n==="card")B9(0)});let P0=0,b0=null;$.domElement.addEventListener("pointermove",(l)=>{N7=performance.now();let n=$.domElement.getBoundingClientRect(),$0=(l.clientX-n.left)/n.width*2-1,j0=(l.clientY-n.top)/n.height*2-1;if(!U9)j.target=$0*0.1,s0.target=j0*0.055;if(x){let EJ=l.clientX-x.x,qJ=Math.round(EJ/52);if(qJ!==x.acc)B9(x.base+qJ),x.acc=qJ;$.domElement.style.cursor="grabbing";return}let B0=performance.now();if(B0-P0>80)P0=B0,b0=V0(l),$.domElement.style.cursor=b0?"pointer":"default"});let g0=(l)=>{if(x){x=null;try{$.domElement.releasePointerCapture(l.pointerId)}catch{}}if(QJ.target!==0){if(QJ.target=0,clearTimeout(H7),!q7)G7()}};$.domElement.addEventListener("pointerup",g0),$.domElement.addEventListener("pointerleave",(l)=>{if(!x)s0.target=0,j.target=0;g0(l)});let A0=0,$J=null;$.domElement.addEventListener("wheel",(l)=>{if(b0!=="knob"&&!x)return;l.preventDefault(),A0+=l.deltaY,clearTimeout($J),$J=setTimeout(()=>A0=0,200);while(Math.abs(A0)>=100)B9(V.mode+(A0>0?1:-1)),A0-=Math.sign(A0)*100},{passive:!1});let FJ=()=>{if(!m7())return;QJ.target=-0.032,setTimeout(()=>QJ.target=0,130),SJ.press(),G7()};addEventListener("keydown",(l)=>{if(l.target===q9){if(l.key==="Enter")l.preventDefault(),FJ();return}if(l.target?.tagName==="INPUT"||l.target?.tagName==="TEXTAREA")return;if(l.key==="ArrowRight")B9(V.mode+1);else if(l.key==="ArrowLeft")B9(V.mode-1);else if(l.key==="Enter")FJ();else if(l.key==="Escape"){if(s)U0(!1)}else if(l.key.toLowerCase()==="z")U0();else if(l.key.toLowerCase()==="l")V.lane=V.lane==="inference"?"devtools":"inference",e0.target=V.lane==="inference"?-0.22:0.22,SJ.lever(),V.dirty=!0}),K7?.addEventListener("click",FJ),u9?.addEventListener("click",()=>{if(V.modeName()==="LANES")U7(V.lane);else n9("inference")});function OJ(){let l=J.clientWidth,n=Math.max(440,Math.min(700,Math.round(l*0.72)));$.setSize(l,n),U.aspect=l/n,H.z=l<560?6:l<760?4.9:4.3,U.updateProjectionMatrix(),V.dirty=!0}new ResizeObserver(OJ).observe(J),OJ();let ZJ=performance.now(),IJ=0,M0=[s0,j,y0,QJ,e0,vJ];function bJ(l){IJ=requestAnimationFrame(bJ);let n=Math.min(0.25,(l-ZJ)/1000),$0=Math.min(0.05,n);ZJ=l;let j0=l/1000;H9.t=j0;let B0=V.step(n,j0),EJ=l-N7<2500;if(!(!V.booted||V.busy||B0||EJ||!X0.settled()||M0.some((nJ)=>!nJ.settled())))if(Math.abs(M.position.y-0.02)>0.0004)M.position.y+=(0.02-M.position.y)*Math.min(1,$0*3);else return;else if(!U9&&EJ)M.position.y=0.02+Math.sin(j0*0.9)*0.012;if(!U9){let nJ=1-X0.v*0.75;M.rotation.x=s0.step($0)*nJ,M.rotation.y=j.step($0)*nJ}let hJ=X0.step($0);if(hJ>0.001)g.getWorldPosition(Y0),t.set(0,0,1),g.getWorldQuaternion(U.quaternion),t.applyQuaternion(U.quaternion),L0.lerpVectors(G,Y0,hJ),U.position.lerpVectors(H,Y0.clone().addScaledVector(t,1.92),hJ),U.lookAt(L0);else U.position.copy(H),U.lookAt(G);u.rotation.z=y0.step($0),D0.position.z=QJ.step($0),x0.rotation.z=e0.step($0),I0.position.y=vJ.step($0),S.material.color.set(V.lane==="devtools"?A8:1327146),NJ.material.color.set(V.lane==="inference"?A8:1327146),O.color.setHex(A8).multiplyScalar(V.busy?0.75+Math.sin(j0*9)*0.25:1),$.render(Z,U)}if(U9){let l=()=>{V.step(0.03333333333333333,performance.now()/1000),u.rotation.z=y0.target,D0.position.z=QJ.target,x0.rotation.z=e0.target,I0.position.y=vJ.target,$.render(Z,U)};setInterval(l,250),l()}else{let l=!0,n=!1,$0=()=>{let j0=l&&!document.hidden;if(j0&&!n)n=!0,ZJ=performance.now(),IJ=requestAnimationFrame(bJ);else if(!j0&&n)n=!1,cancelAnimationFrame(IJ)};new IntersectionObserver((j0)=>{l=j0[0]?.isIntersecting!==!1,$0()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",$0),$0()}let c0=new v;function sJ(l){return l.getWorldPosition(c0),c0.project(U),{x:(c0.x+1)/2*$.domElement.clientWidth,y:(1-c0.y)/2*$.domElement.clientHeight}}function J9(){let l=[{obj:g,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — and tap the screen itself to raise it closer."},{obj:W0,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:u,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:t0,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],n=document.createElement("div");n.className="dv-coach",n.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(n);let $0=n.querySelector(".dv-coach-ring"),j0=n.querySelector(".dv-coach-step"),B0=n.querySelector(".dv-coach-txt"),EJ=n.querySelector('[data-a="next"]'),qJ=0,hJ=()=>{let l7=l[qJ],WZ=sJ(l7.obj);$0.style.left=WZ.x+"px",$0.style.top=WZ.y+"px",$0.style.width=$0.style.height=l7.ring+"px",j0.textContent=`${qJ+1} / ${l.length} — ${l7.k}`,B0.textContent=l7.txt,EJ.textContent=qJ===l.length-1?"Start":"Next",SJ.detent(qJ)},nJ=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}n.remove()};n.querySelector('[data-a="skip"]').addEventListener("click",nJ),EJ.addEventListener("click",()=>{if(qJ++,qJ>=l.length)nJ();else hJ()}),hJ()}let G9=!1;try{G9=!!localStorage.getItem("vc-device-coach")}catch{}if(!G9&&!U9)setTimeout(J9,U9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),X7(),p7().then(c9),setTimeout(()=>{V.powered=!0},3200),window.__device={ready:!0,os:V,setMode:(l)=>B9(l),pickAt:(l,n)=>V0({clientX:l,clientY:n}),frames:()=>$.info.render.frame,screenClientPoint:(l,n)=>{let $0=new v((l-0.5)*1.15,(n-0.5)*0.8625,0);g.localToWorld($0),$0.project(U);let j0=$.domElement.getBoundingClientRect();return{x:j0.left+($0.x+1)/2*j0.width,y:j0.top+(1-$0.y)/2*j0.height}},fire:G7,snapshot:()=>{return $.render(Z,U),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",BW);else BW();
